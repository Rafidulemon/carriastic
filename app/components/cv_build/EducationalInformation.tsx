"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/TextInput";
import TextArea from "../inputs/TextArea";
import Button from "../button/Button";

const educationSchema = z.object({
  education: z.array(
    z.object({
      school: z.string().min(2, "School/University name is required"),
      degree: z.string().min(2, "Degree is required"),
      field: z.string().min(2, "Field of study is required"),
      startDate: z.string().min(1, "Start date is required"),
      endDate: z.string().min(1, "End date is required"),
      description: z.string().optional(),
    })
  ),
});

type EducationFormData = z.infer<typeof educationSchema>;

type EducationalInformationProps = {
  onNext: (data: EducationFormData) => void; // pass data to parent
};

const EducationalInformation = ({ onNext }: EducationalInformationProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        {
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data: EducationFormData) => {
    console.log("🎓 Education Info Submitted:", data);
    onNext(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Educational Information</h2>

      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-lg space-y-4">
          <TextInput
            label="School / University"
            name={`education.${index}.school`}
            placeholder="Enter school/university name"
            register={register}
            error={errors.education?.[index]?.school}
            isRequired
          />

          <TextInput
            label="Degree"
            name={`education.${index}.degree`}
            placeholder="Enter degree (e.g. BSc, MSc)"
            register={register}
            error={errors.education?.[index]?.degree}
            isRequired
          />

          <TextInput
            label="Field of Study"
            name={`education.${index}.field`}
            placeholder="Enter field (e.g. Computer Science)"
            register={register}
            error={errors.education?.[index]?.field}
            isRequired
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Start Date"
              name={`education.${index}.startDate`}
              placeholder="YYYY-MM-DD"
              register={register}
              error={errors.education?.[index]?.startDate}
              isRequired
            />
            <TextInput
              label="End Date"
              name={`education.${index}.endDate`}
              placeholder="YYYY-MM-DD"
              register={register}
              error={errors.education?.[index]?.endDate}
              isRequired
            />
          </div>

          <TextArea
            label="Description"
            name={`education.${index}.description`}
            placeholder="Add description, achievements, GPA, etc."
            register={register}
          />

          {fields.length > 1 && (
            <Button
              type="button"
              theme="cancel"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          )}
        </div>
      ))}

      <Button
        type="button"
        theme="secondary"
        className="w-full"
        onClick={() =>
          append({
            school: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      >
        + Add Another Education
      </Button>

      <Button type="submit" className="w-full">
        Save & Continue
      </Button>
    </form>
  );
};

export default EducationalInformation;
