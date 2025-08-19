"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../inputs/TextInput";
import Button from "../button/Button";
import TextArea from "../inputs/TextArea";

const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  summary: z.string().min(1, "Summary is required"),
  phone: z
    .string()
    .min(6, "Phone number must be at least 6 digits")
    .max(15, "Phone number is too long"),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
type PersonalInformationProps = {
  onNext: (data: PersonalInfoFormData) => void;
};


const PersonalInformation = ({ onNext }: PersonalInformationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    console.log("✅ Personal Info Submitted:", data);
    onNext(data)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

      <TextInput
        label="First Name"
        name="firstName"
        placeholder="Enter first name"
        register={register}
        error={errors.firstName}
        isRequired
      />

      <TextInput
        label="Last Name"
        name="lastName"
        placeholder="Enter last name"
        register={register}
        error={errors.lastName}
        isRequired
      />

      <TextInput
        label="Email"
        name="email"
        placeholder="Enter email address"
        register={register}
        error={errors.email}
        isRequired
      />

      <TextInput
        label="Phone Number"
        name="phone"
        placeholder="Enter phone number"
        register={register}
        error={errors.phone}
        isRequired
      />
      <TextInput
        label="Portfolio Link"
        name="portfolio"
        placeholder="Enter portfolio link"
        register={register}
        
      />

      <TextInput
        label="Github Link"
        name="github"
        placeholder="Enter github link"
        register={register}
        
      />

      <TextInput
        label="Linkedin Link"
        name="linkedin"
        placeholder="Enter linkedin profile link"
        register={register}
       
      />

      <TextInput
        label="Facebook Link"
        name="facebook"
        placeholder="Enter facebook profile link"
        register={register}
        
      />

      <TextInput
        label="Other Profile Link"
        name="otherProfile"
        placeholder="Enter other profile link"
        register={register}
      
      />

      <TextArea
        label="Address"
        name="address"
        placeholder="Enter your address"
        register={register}
       
      />

      <TextArea
        label="Summary"
        name="summary"
        placeholder="Write a brief summary about yourself"
        register={register}
        error={errors.summary}
        isRequired
      />

      {/* Submit Button */}

      <Button type="submit" className="w-full">
        Save & Continue
      </Button>
    </form>
  );
};

export default PersonalInformation;
