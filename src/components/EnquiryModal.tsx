"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { GRADE_OPTIONS, SESSION } from "@/lib/data";

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.parentName.trim()) {
    errors.parentName = "Please enter the parent's name.";
  }

  const digitsOnly = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (digitsOnly.length !== 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.grade) {
    errors.grade = "Please select the child's grade.";
  }

  return errors;
}

const fieldBaseClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-teal/40";

function fieldClass(hasError: boolean) {
  return `${fieldBaseClass} ${hasError ? "border-red-400" : "border-black/10"}`;
}

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted: () => void;
};

export default function EnquiryModal({ isOpen, onClose, onSubmitted }: EnquiryModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Reset to a fresh form every time the modal is opened.
  useEffect(() => {
    if (isOpen) {
      setValues(initialState);
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  // Focus trap, Esc-to-close, body scroll lock, and focus restore.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();

    function getFocusable(): HTMLElement[] {
      if (!containerRef.current) return [];
      return Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleChange<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      onSubmitted();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      /* Backdrop — inline style ensures z-index and position are never
         stripped by Tailwind's purge or overridden by a parent transform */
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(42,36,56,0.7)",
        padding: "1rem",
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-heading"
        aria-describedby="enquiry-modal-subtext"
        /* Card — explicit width/max-width so it's never off-screen on mobile */
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "28rem",
          maxHeight: "90dvh",
          overflowY: "auto",
          borderRadius: "1.5rem",
          backgroundColor: "#ffffff",
          padding: "1.25rem",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-brand-ink/50 transition hover:bg-brand-ink/5 hover:text-brand-ink"
        >
          <span aria-hidden="true" className="text-xl">
            &#10005;
          </span>
        </button>

        <h2 id="enquiry-modal-heading" className="pr-8 text-xl font-extrabold text-brand-ink sm:text-2xl">
          Admissions Open {SESSION}
        </h2>
        <p id="enquiry-modal-subtext" className="mt-1 text-sm text-brand-ink/60">
          {/* PLACEHOLDER copy — adjust response-time messaging as needed */}
          Share a few details and our admissions team will get back to you within 24 hours.
        </p>

        {status === "success" ? (
          <div role="status" className="mt-6 rounded-2xl bg-brand-teal/10 p-5 text-center">
            <p className="text-lg font-extrabold text-brand-teal">Thank you!</p>
            <p className="mt-1 text-sm text-brand-ink/70">
              Your enquiry has been received. Our admissions team will contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-teal/90"
            >
              Close
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="modal-parentName" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Parent Name
              </label>
              <input
                ref={firstFieldRef}
                id="modal-parentName"
                name="parentName"
                type="text"
                autoComplete="name"
                required
                value={values.parentName}
                onChange={(e) => handleChange("parentName", e.target.value)}
                aria-invalid={Boolean(errors.parentName)}
                aria-describedby={errors.parentName ? "modal-parentName-error" : undefined}
                className={fieldClass(Boolean(errors.parentName))}
                placeholder="e.g. Priya Sharma"
              />
              {errors.parentName && (
                <p id="modal-parentName-error" role="alert" className="mt-1 text-sm font-semibold text-red-500">
                  {errors.parentName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-phone" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Phone Number
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                required
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "modal-phone-error" : undefined}
                className={fieldClass(Boolean(errors.phone))}
                placeholder="98765 43210"
              />
              {errors.phone && (
                <p id="modal-phone-error" role="alert" className="mt-1 text-sm font-semibold text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-email" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Email <span className="font-normal text-brand-ink/50">(optional)</span>
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "modal-email-error" : undefined}
                className={fieldClass(Boolean(errors.email))}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="modal-email-error" role="alert" className="mt-1 text-sm font-semibold text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-grade" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Child&apos;s Grade
              </label>
              <select
                id="modal-grade"
                name="grade"
                required
                value={values.grade}
                onChange={(e) => handleChange("grade", e.target.value)}
                aria-invalid={Boolean(errors.grade)}
                aria-describedby={errors.grade ? "modal-grade-error" : undefined}
                className={fieldClass(Boolean(errors.grade))}
              >
                <option value="">Select a grade&hellip;</option>
                {GRADE_OPTIONS.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.grade && (
                <p id="modal-grade-error" role="alert" className="mt-1 text-sm font-semibold text-red-500">
                  {errors.grade}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-message" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Message <span className="font-normal text-brand-ink/50">(optional)</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={fieldBaseClass}
                placeholder="Tell us anything that would help us assist you better."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-brand-pink px-8 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-pink/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>

            {status === "error" && (
              <p role="alert" className="text-sm font-semibold text-red-500">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
