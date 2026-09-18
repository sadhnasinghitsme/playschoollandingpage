import Image from "next/image";
import Section from "./Section";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Life at SKS"
      title="Moments From Our Campus"
      subtitle="A glimpse of everyday learning, play, and joy at SKS World School."
      className="bg-brand-cream/75"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {GALLERY_IMAGES.map((image, i) => (
          <div
            key={image.alt}
            className="overflow-hidden rounded-2xl border-4 border-white shadow-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={450}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
