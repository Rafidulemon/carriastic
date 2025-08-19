"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/TextInput";
import TextArea from "../inputs/TextArea";
import Button from "../button/Button";

// ✅ Validation schema
const professionalSchema = z.object({
  experiences: z.array(
    z.object({
      company: z.string().min(2, "Company name is required"),
      jobTitle: z.string().min(2, "Job title is required"),
      startDate: z.string().min(1, "Start date is required"),
      endDate: z.string().optional(),
      responsibilities: z.string().optional(),
    })
  ),
  skills: z.string().min(2, "Please enter at least one skill"),
  currentCompany: z.string().optional(),
});

type ProfessionalFormData = z.infer<typeof professionalSchema>;

type ProfessionalInformationProps = {
  onNext: (data: ProfessionalFormData) => void;
};

const ProfessionalInformation = ({ onNext }: ProfessionalInformationProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      experiences: [
        { company: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "" },
      ],
      skills: "",
      currentCompany: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (data: ProfessionalFormData) => {
    console.log("💼 Professional Info Submitted:", data);
    onNext(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Professional Information</h2>

      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-lg space-y-4">
          <TextInput
            label="Company"
            name={`experiences.${index}.company`}
            placeholder="Enter company name"
            register={register}
            error={errors.experiences?.[index]?.company}
            isRequired
          />

          <TextInput
            label="Job Title"
            name={`experiences.${index}.jobTitle`}
            placeholder="Enter your job title"
            register={register}
            error={errors.experiences?.[index]?.jobTitle}
            isRequired
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Start Date"
              name={`experiences.${index}.startDate`}
              placeholder="YYYY-MM-DD"
              register={register}
              error={errors.experiences?.[index]?.startDate}
              isRequired
            />
            <TextInput
              label="End Date"
              name={`experiences.${index}.endDate`}
              placeholder="YYYY-MM-DD or Present"
              register={register}
              error={errors.experiences?.[index]?.endDate}
            />
          </div>

          <TextArea
            label="Responsibilities / Achievements"
            name={`experiences.${index}.responsibilities`}
            placeholder="Describe your role and achievements"
            register={register}
          />

          {fields.length > 1 && (
            <Button type="button" theme="cancel" onClick={() => remove(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}

      {/* Add another experience */}
      <Button
        type="button"
        theme="secondary"
        className="w-full"
        onClick={() =>
          append({ company: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "" })
        }
      >
        + Add Another Experience
      </Button>

      {/* Skills and current company */}
      <TextInput
        label="Skills"
        name="skills"
        placeholder="E.g., JavaScript, React, Node.js"
        register={register}
        error={errors.skills}
        isRequired
      />

      <TextInput
        label="Current Company"
        name="currentCompany"
        placeholder="Optional"
        register={register}
      />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Save & Continue
      </Button>
    </form>
  );
};

export default ProfessionalInformation;
