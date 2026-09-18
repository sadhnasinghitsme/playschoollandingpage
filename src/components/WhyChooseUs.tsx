"use client";

import Image from "next/image";
import Section from "./Section";
import BlobFrame from "./BlobFrame";
import Star from "./decor/Star";
import Sparkle from "./decor/Sparkle";
import Dot from "./decor/Dot";
import { useEnquiryModal } from "./EnquiryModalContext";
import { WHY_CHOOSE_POINTS } from "@/lib/data";

export default function WhyChooseUs() {
  const { openModal } = useEnquiryModal();

  return (
    <Section id="about" className="bg-brand-paleblue/85" centerHeading={false}>
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: campus photo in a layered blob frame */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Dot className="left-0 top-2" color="bg-brand-yellow" size={14} />
          <Dot className="left-10 top-0 sm:left-16" color="bg-brand-teal" size={10} />
          <Sparkle
            color="#FF7A33"
            className="absolute -right-2 top-6 h-12 w-12 sm:h-14 sm:w-14"
          />
          <Star
            color="#1FB6A6"
            className="absolute -left-4 bottom-8 h-10 w-10 sm:-left-8 sm:h-12 sm:w-12"
          />
          <Dot className="bottom-4 right-6" color="bg-brand-orange" size={12} />

          <BlobFrame className="aspect-[7/6] w-full">
            <Image
              src="/C0318T01.JPG"
              alt="Children and a teacher in the SKS World School indoor activity area"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </BlobFrame>
        </div>

        {/* Right: copy */}
        <div>
          <span className="mb-3 inline-block rounded-full bg-brand-teal/10 px-4 py-1 text-sm font-bold uppercase tracking-wide text-brand-teal">
            Why Choose SKS World School
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-brand-ink sm:text-4xl">
            A Second Home Where <span className="text-brand-teal">Children Thrive</span>
          </h2>

          <div className="mt-5 flex gap-4">
            <span aria-hidden="true" className="w-1 shrink-0 rounded-full bg-brand-teal" />
            <p className="text-lg text-brand-ink/70">
              {/* PLACEHOLDER copy — replace with school-specific messaging */}
              At SKS World School, Greater Noida West, we believe early years shape
              a lifetime of learning. Our nurturing educators, safe campus, and
              joyful curriculum help every child build strong foundations &mdash;
              academically, socially, and emotionally.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {WHY_CHOOSE_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white"
                >
                  ✓
                </span>
                <span className="text-brand-ink/80">{point}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={openModal}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-teal px-8 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-teal/90"
          >
            Book a Campus Visit
          </button>
        </div>
      </div>
    </Section>
  );
}
