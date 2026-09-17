"use client";

import { useState } from "react";
import Section from "./Section";
import Testimonial from "./Testimonial";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function goTo(newIndex: number) {
    setIndex((newIndex + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <Section
      eyebrow="Parent Voices"
      title="What SKS Parents Are Saying"
      className="bg-white/80"
    >
      {/* Grid layout for larger screens */}
      <div className="hidden gap-8 md:grid md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>

      {/* Carousel for small screens */}
      <div className="md:hidden">
        <div aria-live="polite">
          <Testimonial {...TESTIMONIALS[index]} />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink shadow-card"
          >
            &larr;
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-brand-orange" : "bg-brand-ink/20"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink shadow-card"
          >
            &rarr;
          </button>
        </div>
      </div>
    </Section>
  );
}
