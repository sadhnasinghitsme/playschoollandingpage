import Section from "./Section";
import FeatureCard, { type FeatureColor } from "./FeatureCard";
import Blob from "./Blob";
import { USP_ITEMS } from "@/lib/data";

const COLOR_ROTATION: FeatureColor[] = ["pink", "lavender", "blue"];

export default function UspGrid() {
  return (
    <Section
      id="why-us"
      eyebrow="Why Parents Choose Us"
      title="Why Parents Choose SKS World School in Greater Noida West"
      subtitle="A CBSE school in Sector 16 where every classroom, playground and routine is designed around happy, confident, well-rounded children."
      className="bg-white/80"
    >
      <Blob className="-right-20 top-0 h-64 w-64" color="bg-brand-blue/20" />
      <ul className="relative z-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {USP_ITEMS.map((item, index) => (
          <li key={item.title}>
            <FeatureCard
              title={item.title}
              text={item.text}
              image={item.image}
              color={COLOR_ROTATION[index % COLOR_ROTATION.length]}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
