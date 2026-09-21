import Image from "next/image";

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
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
};

export default function HighlightCard({ title, body, color, image }: HighlightCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl p-8 sm:p-9 ${COLOR_CLASSES[color]}`}
    >
      {image && (
        <div
          className={`relative -mx-8 -mt-8 mb-6 aspect-[16/10] overflow-hidden sm:-mx-9 sm:-mt-9 ${
            image.fit === "contain" ? "bg-white" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={image.fit === "contain" ? "object-contain p-10" : "object-cover"}
          />
        </div>
      )}
      <h3 className="text-xl font-extrabold text-brand-pink sm:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-gray-700">{body}</p>
    </article>
  );
}
