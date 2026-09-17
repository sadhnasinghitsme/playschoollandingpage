export type HighlightColor = "blue" | "lavender" | "pink";

const COLOR_CLASSES: Record<HighlightColor, string> = {
  blue: "bg-sky-100",
  lavender: "bg-violet-100",
  pink: "bg-rose-100",
};

type HighlightCardProps = {
  title: string;
  body: string;
  color: HighlightColor;
};

export default function HighlightCard({ title, body, color }: HighlightCardProps) {
  return (
    <article className={`flex h-full flex-col rounded-3xl p-8 sm:p-9 ${COLOR_CLASSES[color]}`}>
      <h3 className="text-xl font-extrabold text-brand-pink sm:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-gray-700">{body}</p>
    </article>
  );
}
