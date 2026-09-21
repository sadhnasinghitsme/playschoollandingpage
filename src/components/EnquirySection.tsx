import Section from "./Section";
import Blob from "./Blob";
import EnquiryForm from "./EnquiryForm";
import { PHONE_DISPLAY, PHONE_TEL, SCHOOL_ADDRESS, SCHOOL_EMAIL } from "@/lib/data";

export default function EnquirySection() {
  return (
    <Section
      id="contact"
      eyebrow="Admissions 2026-27"
      title="Nursery, KG & Class 1-5 Admission Enquiry"
      subtitle="Get the fee structure, seat availability and campus visit slots. Our admissions team will call you back shortly."
      className="bg-brand-cream/80"
    >
      <Blob className="-right-16 -top-10 h-56 w-56" color="bg-brand-yellow/50" />
      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
            <EnquiryForm />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 lg:col-span-2">
          <div className="rounded-3xl bg-brand-teal p-6 text-white shadow-card sm:p-8">
            <h3 className="text-xl font-extrabold">Visit Our Campus</h3>
            <p className="mt-3 text-sm text-white/90">{SCHOOL_ADDRESS}</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-4 flex items-center gap-2 text-sm font-bold">
              <span aria-hidden="true">📞</span> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${SCHOOL_EMAIL}`} className="mt-2 flex items-center gap-2 text-sm font-bold">
              <span aria-hidden="true">✉️</span> {SCHOOL_EMAIL}
            </a>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
            <h3 className="text-lg font-extrabold text-brand-ink">Admissions Timeline</h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Applications for session 2026-27 are open for Playschool to Class 5.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
