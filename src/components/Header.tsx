"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useEnquiryModal();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/sks-logo.png"
            alt="SKS World School logo"
            width={220}
            height={68}
            priority
            className="h-9 w-auto sm:h-11"
          />
          <span className="hidden text-xs font-semibold text-brand-ink/60 sm:block">
            Greater Noida West
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-brand-ink/80 transition hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 text-sm font-bold text-brand-ink/80 transition hover:text-brand-orange"
          >
            <span aria-hidden="true">📞</span>
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:bg-brand-orange/90"
          >
            Enquire Now
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-ink/10 text-brand-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-black/5 bg-brand-cream md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-bold text-brand-ink/80 hover:bg-brand-orange/10 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 rounded-lg px-3 py-2.5 text-base font-bold text-brand-ink/80 hover:bg-brand-orange/10 hover:text-brand-orange"
            >
              📞 {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="mt-2 rounded-full bg-brand-orange px-5 py-3 text-center text-base font-extrabold text-white shadow-soft"
            >
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
