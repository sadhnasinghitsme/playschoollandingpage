import Section from "./Section";
import HighlightCard, { type HighlightColor } from "./HighlightCard";
import { HIGHLIGHT_ITEMS } from "@/lib/data";

const COLOR_ROTATION: HighlightColor[] = ["blue", "lavender", "pink"];

export default function Highlights() {
  return (
    <Section
      eyebrow="Get To Know Us"
      title="What Sets SKS World School Apart"
      subtitle="Three pillars that shape every child's journey with us, from their first day of Playschool onward."
      className="bg-white/80"
    >
      <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHT_ITEMS.map((item, index) => (
          <li key={item.title}>
            <HighlightCard
              title={item.title}
              body={item.body}
              color={COLOR_ROTATION[index % COLOR_ROTATION.length]}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
