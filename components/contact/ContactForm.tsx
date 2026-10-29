"use client";

import { useActionState, useEffect, useRef } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { submitContact } from "@/app/contact/action";
import {
  initialContactState,
  matterTypes,
  type ContactFormData,
} from "@/lib/validations/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialContactState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  function fieldError(field: keyof ContactFormData) {
    return state.errors?.[field]?.[0];
  }

  const inputClassName =
    "mt-2 block min-h-12 w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60";

  const labelClassName =
    "block text-sm font-medium text-[var(--color-primary)]";

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-6">
      {state.message ? (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
            state.success
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          {state.success ? (
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          ) : (
            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          )}

          <p>{state.message}</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full Name <span aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            minLength={2}
            maxLength={100}
            disabled={isPending}
            aria-invalid={Boolean(fieldError("name"))}
            aria-describedby={fieldError("name") ? "name-error" : undefined}
            className={inputClassName}
          />

          {fieldError("name") ? (
            <p id="name-error" className="mt-2 text-xs text-red-700">
              {fieldError("name")}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email Address <span aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
            disabled={isPending}
            aria-invalid={Boolean(fieldError("email"))}
            aria-describedby={fieldError("email") ? "email-error" : undefined}
            className={inputClassName}
          />

          {fieldError("email") ? (
            <p id="email-error" className="mt-2 text-xs text-red-700">
              {fieldError("email")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone Number{" "}
            <span className="font-normal text-[var(--color-muted)]">
              (Optional)
            </span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 ..."
            maxLength={30}
            disabled={isPending}
            aria-invalid={Boolean(fieldError("phone"))}
            aria-describedby={fieldError("phone") ? "phone-error" : undefined}
            className={inputClassName}
          />

          {fieldError("phone") ? (
            <p id="phone-error" className="mt-2 text-xs text-red-700">
              {fieldError("phone")}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="matter" className={labelClassName}>
            Matter Type <span aria-hidden="true">*</span>
          </label>

          <select
            id="matter"
            name="matter"
            defaultValue=""
            required
            disabled={isPending}
            aria-invalid={Boolean(fieldError("matter"))}
            aria-describedby={fieldError("matter") ? "matter-error" : undefined}
            className={`${inputClassName} ${
              fieldError("matter") ? "" : "text-[var(--color-text)]"
            }`}
          >
            <option value="" disabled>
              Select a matter type
            </option>

            {matterTypes.map((matter) => (
              <option key={matter} value={matter}>
                {matter}
              </option>
            ))}
          </select>

          {fieldError("matter") ? (
            <p id="matter-error" className="mt-2 text-xs text-red-700">
              {fieldError("matter")}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Briefly Describe Your Matter <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          minLength={20}
          maxLength={5000}
          required
          disabled={isPending}
          placeholder="Please provide a brief overview of your enquiry and how you would like the firm to assist."
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={
            fieldError("message")
              ? "message-error message-help"
              : "message-help"
          }
          className={`${inputClassName} min-h-40 resize-y`}
        />

        <div className="mt-2 flex items-start justify-between gap-4">
          <p
            id="message-help"
            className="text-xs leading-5 text-[var(--color-muted)]"
          >
            Please avoid including highly confidential documents or unnecessary
            sensitive personal information in this initial enquiry.
          </p>

          <span className="shrink-0 text-xs text-[var(--color-muted)]">
            Max. 5,000 characters
          </span>
        </div>

        {fieldError("message") ? (
          <p id="message-error" className="mt-2 text-xs text-red-700">
            {fieldError("message")}
          </p>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]">
          <input
            name="consent"
            type="checkbox"
            required
            disabled={isPending}
            aria-invalid={Boolean(fieldError("consent"))}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
          />

          <span>
            I acknowledge that the information submitted will be used to respond
            to my enquiry and handled in accordance with the firm's applicable
            privacy practices. <span aria-hidden="true">*</span>
          </span>
        </label>

        {fieldError("consent") ? (
          <p className="mt-2 text-xs text-red-700">{fieldError("consent")}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isPending ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
              aria-hidden="true"
            />
            Submitting Enquiry...
          </>
        ) : (
          <>
            Submit Enquiry
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-xs leading-5 text-[var(--color-muted)]">
        Submitting this form does not by itself establish an advocate-client
        relationship.
      </p>
    </form>
  );
}
