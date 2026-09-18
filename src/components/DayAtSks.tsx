import Image from "next/image";
import Section from "./Section";
import { DAILY_ROUTINE } from "@/lib/data";

export default function DayAtSks() {
  return (
    <Section
      eyebrow="A Day At SKS"
      title="A Peek Into Your Child's Day"
      subtitle="A balanced routine of learning, play, and rest designed for young minds."
      className="bg-white/80"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto order-2 w-full max-w-lg lg:order-1 lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-orange/15 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[2rem] border-8 border-brand-cream shadow-soft">
            <Image
              src="/C0364T01.JPG"
              alt="SKS World School students with folded hands during morning assembly"
              width={700}
              height={750}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <ol className="order-1 space-y-4 lg:order-2">
          {DAILY_ROUTINE.map((slot, index) => (
            <li
              key={slot.time}
              className="flex items-center gap-4 rounded-2xl border border-black/5 bg-brand-cream p-4 shadow-card"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-extrabold text-white"
              >
                {index + 1}
              </span>
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-extrabold text-brand-ink">{slot.activity}</span>
                <span className="text-sm font-bold text-brand-ink/60">{slot.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
