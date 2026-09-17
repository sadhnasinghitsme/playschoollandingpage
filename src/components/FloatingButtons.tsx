import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-5 sm:right-5">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp about admissions"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft transition hover:-translate-y-0.5 sm:h-14 sm:w-14"
      >
        <span aria-hidden="true">💬</span>
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call SKS World School"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-2xl text-white shadow-soft transition hover:-translate-y-0.5 sm:h-14 sm:w-14"
      >
        <span aria-hidden="true">📞</span>
      </a>
    </div>
  );
}
