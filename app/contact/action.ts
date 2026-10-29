"use server";

import { Resend } from "resend";

import {
  contactSchema,
  type ContactActionState,
} from "@/lib/validations/contact";

export async function submitContact(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    matter: formData.get("matter"),
    message: formData.get("message"),
    consent: formData.get("consent") === "on",
    website: formData.get("website"),
  };

  // Silently discard basic bot submissions caught by the honeypot.
  if (typeof rawData.website === "string" && rawData.website.length > 0) {
    return {
      success: true,
      message: "Thank you. Your enquiry has been received.",
    };
  }

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      message: "Please review the highlighted fields and try again.",
      errors: fieldErrors,
    };
  }

  const recipient = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const sender =
    process.env.CONTACT_FROM_EMAIL ??
    "Mbote & Associates Website <onboarding@resend.dev>";

  if (!recipient || !apiKey) {
    return {
      success: false,
      message:
        "The enquiry service is temporarily unavailable. Please try again later.",
    };
  }

  const { name, email, phone, matter, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Website Enquiry — ${matter}`,
      text: [
        "New enquiry submitted through the Mbote & Associates Advocates website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Matter type: ${matter}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (result.error) {
      return {
        success: false,
        message:
          "We could not send your enquiry at this time. Please try again later.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for contacting Mbote & Associates Advocates. Your enquiry has been submitted successfully.",
    };
  } catch {
    return {
      success: false,
      message:
        "We could not send your enquiry at this time. Please try again later.",
    };
  }
}
