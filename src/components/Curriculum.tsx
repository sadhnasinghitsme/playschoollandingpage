import Section from "./Section";
import Blob from "./Blob";
import {
  PRE_PRIMARY_CURRICULUM,
  PRIMARY_CURRICULUM,
  type CurriculumGroup,
} from "@/lib/data";

function CurriculumColumn({
  heading,
  accent,
  groups,
}: {
  heading: string;
  accent: string;
  groups: CurriculumGroup[];
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
      <h3 className={`text-xl font-extrabold ${accent}`}>{heading}</h3>
      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-base font-extrabold text-brand-ink">{group.title}</p>
            <ul className="mt-2 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-ink/70">
                  <span aria-hidden="true" className="mt-1 text-brand-orange">
                    &bull;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <Section
      id="curriculum"
      eyebrow="Our Curriculum"
      title="Age-Appropriate Learning, Every Step of the Way"
      subtitle="From first steps in Playschool to building strong fundamentals by Class 5."
      className="bg-brand-cream/75"
    >
      <Blob className="-left-24 bottom-0 h-64 w-64" color="bg-brand-purple/20" />
      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CurriculumColumn
          heading="Playschool &amp; Pre-Primary"
          accent="text-brand-pink"
          groups={PRE_PRIMARY_CURRICULUM}
        />
        <CurriculumColumn
          heading="Primary (Classes 1 - 5)"
          accent="text-brand-blue"
          groups={PRIMARY_CURRICULUM}
        />
      </div>
    </Section>
  );
}
