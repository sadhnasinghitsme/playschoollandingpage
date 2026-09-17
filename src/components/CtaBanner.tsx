"use client";

import { SESSION } from "@/lib/data";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function CtaBanner() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="relative overflow-hidden bg-brand-orange py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="text-xl font-extrabold text-white sm:text-2xl">
          Seats filling fast for {SESSION} &mdash; secure your child&apos;s spot today!
        </p>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-extrabold text-brand-orange shadow-soft transition hover:-translate-y-0.5"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
}
