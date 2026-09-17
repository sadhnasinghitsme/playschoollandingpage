export type FeatureColor = "pink" | "lavender" | "blue";

const COLOR_CLASSES: Record<FeatureColor, string> = {
  pink: "bg-rose-100",
  lavender: "bg-violet-100",
  blue: "bg-sky-100",
};

type FeatureCardProps = {
  title: string;
  text: string;
  color: FeatureColor;
};

export default function FeatureCard({ title, text, color }: FeatureCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${COLOR_CLASSES[color]}`}
    >
      <h3 className="text-lg font-extrabold text-brand-pink sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">{text}</p>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 text-brand-ink/10"
      >
        <path d="M12 21s-6.72-4.35-9.33-8.1C.8 10.06 1.4 6.66 4.24 5.16c2.1-1.11 4.6-.4 5.82 1.4.31.46.98.46 1.29 0 1.21-1.8 3.71-2.51 5.82-1.4 2.83 1.5 3.43 4.9 1.56 7.74C18.72 16.65 12 21 12 21z" />
      </svg>
    </article>
  );
}
