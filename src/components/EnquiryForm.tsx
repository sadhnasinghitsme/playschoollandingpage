"use client";

import { useState, type FormEvent } from "react";
import { GRADE_OPTIONS } from "@/lib/data";

type FormState = {
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  parentName: "",
  phone: "",
  email: "",
  grade: "",
  message: "",
};

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.parentName.trim()) {
    errors.parentName = "Please enter the parent's name.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!INDIAN_MOBILE_REGEX.test(values.phone.replace(/\D/g, "").slice(-10))) {
    errors.phone = "Please enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.";
  }
  if (values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.grade) {
    errors.grade = "Please select the child's grade.";
  }

  return errors;
}

export default function EnquiryForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  const fieldBaseClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-ink/40 focus:outline-none";

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5" aria-describedby="enquiry-form-status">
      <div>
        <label htmlFor="parentName" className="mb-1.5 block text-sm font-bold text-brand-ink">
          Parent Name
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          autoComplete="name"
          value={values.parentName}
          onChange={(e) => handleChange("parentName", e.target.value)}
          aria-invalid={Boolean(errors.parentName)}
          aria-describedby={errors.parentName ? "parentName-error" : undefined}
          className={`${fieldBaseClass} ${errors.parentName ? "border-red-400" : "border-black/10"}`}
          placeholder="e.g. Priya Sharma"
        />
        {errors.parentName && (
          <p id="parentName-error" className="mt-1 text-sm font-semibold text-red-500">
            {errors.parentName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBaseClass} ${errors.phone ? "border-red-400" : "border-black/10"}`}
            placeholder="98765 43210"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm font-semibold text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-brand-ink">
            Email <span className="font-normal text-brand-ink/50">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBaseClass} ${errors.email ? "border-red-400" : "border-black/10"}`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm font-semibold text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="grade" className="mb-1.5 block text-sm font-bold text-brand-ink">
          Child&apos;s Grade
        </label>
        <select
          id="grade"
          name="grade"
          value={values.grade}
          onChange={(e) => handleChange("grade", e.target.value)}
          aria-invalid={Boolean(errors.grade)}
          aria-describedby={errors.grade ? "grade-error" : undefined}
          className={`${fieldBaseClass} ${errors.grade ? "border-red-400" : "border-black/10"}`}
        >
          <option value="">Select a grade&hellip;</option>
          {GRADE_OPTIONS.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        {errors.grade && (
          <p id="grade-error" className="mt-1 text-sm font-semibold text-red-500">
            {errors.grade}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-brand-ink">
          Message <span className="font-normal text-brand-ink/50">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`${fieldBaseClass} border-black/10`}
          placeholder="Tell us anything that would help us assist you better."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-orange px-8 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-orange/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Get Fee Structure & Call Back"}
      </button>

      <div id="enquiry-form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-xl bg-brand-teal/10 px-4 py-3 text-sm font-bold text-brand-teal">
            Thank you! Your enquiry has been received. Our admissions team will contact you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-500">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </div>
    </form>
  );
}
