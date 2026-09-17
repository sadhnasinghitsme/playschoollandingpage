import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  centerHeading?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
  centerHeading = true,
}: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-16 md:py-24 ${className}`}>
      <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(eyebrow || title || subtitle) && (
          <div className={`mb-10 md:mb-14 ${centerHeading ? "mx-auto max-w-2xl text-center" : ""}`}>
            {eyebrow && (
              <span className="mb-3 inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-sm font-bold uppercase tracking-wide text-brand-orange">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">{title}</h2>
            )}
            {subtitle && <p className="mt-4 text-lg text-brand-ink/70">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
