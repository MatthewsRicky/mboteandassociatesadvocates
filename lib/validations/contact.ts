import { z } from "zod";

export const matterTypes = [
  "General Enquiry",
  "Civil Litigation",
  "Commercial Law",
  "Corporate & Business Law",
  "Property & Conveyancing",
  "Employment & Labour Law",
  "Insurance Law",
  "Debt Recovery",
  "Family Law",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Your name must be 100 characters or fewer."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Please enter a shorter email address."),

  phone: z
    .string()
    .trim()
    .max(30, "Your phone number must be 30 characters or fewer.")
    .optional(),

  matter: z.enum(matterTypes, {
    error: "Please select a matter type.",
  }),

  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters of detail.")
    .max(5000, "Your description must be 5,000 characters or fewer."),

  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Please acknowledge the privacy notice before submitting.",
    ),

  website: z.string().max(0, "Invalid submission."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
};

export const initialContactState: ContactActionState = {
  success: false,
  message: "",
};
