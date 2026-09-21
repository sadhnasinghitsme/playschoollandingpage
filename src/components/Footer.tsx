import Image from "next/image";
import {
  FOOTER_QUICK_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="inline-flex items-center rounded-2xl bg-white px-4 py-2">
            <Image
              src="/sks-logo.png"
              alt="SKS World School logo"
              width={220}
              height={68}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            CBSE-affiliated, co-educational, English-medium school in Sector 16,
            Greater Noida West (Noida Extension), with admissions open for
            Playschool to Class 5.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm transition hover:text-brand-orange">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>{SCHOOL_ADDRESS}</li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="transition hover:text-brand-orange">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${SCHOOL_EMAIL}`} className="transition hover:text-brand-orange">
                {SCHOOL_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} SKS World School, Sector 16, Greater Noida West. All rights reserved.
      </div>
    </footer>
  );
}
