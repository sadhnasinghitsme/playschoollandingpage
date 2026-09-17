import type { Testimonial as TestimonialType } from "@/lib/data";

export default function Testimonial({ quote, name, relation }: TestimonialType) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
      <span aria-hidden="true" className="text-4xl text-brand-yellow">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-brand-ink/80">{quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/20 font-extrabold text-brand-orange"
        >
          {name.charAt(0)}
        </span>
        <div>
          <p className="font-extrabold text-brand-ink">{name}</p>
          <p className="text-sm text-brand-ink/60">{relation}</p>
        </div>
      </figcaption>
    </figure>
  );
}
