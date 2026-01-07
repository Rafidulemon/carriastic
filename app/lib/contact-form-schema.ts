import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""));

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Full name is required"),
  email: z.string().trim().email("Enter a valid work email"),
  company: optionalText,
  phone: z.string().trim().min(6, "Phone number is required"),
  service: optionalText,
  budget: optionalText,
  timeline: optionalText,
  subject: optionalText,
  message: z.string().trim().min(10, "Please include a short message"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
