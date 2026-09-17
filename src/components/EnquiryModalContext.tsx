"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import EnquiryModal from "./EnquiryModal";

type EnquiryModalContextValue = {
  openModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

const SHOWN_KEY = "sks_enquiry_modal_shown";
const SUBMITTED_KEY = "sks_enquiry_submitted";
const AUTO_OPEN_SCROLL_PERCENT = 50;

function readFlag(key: string): boolean {
  try {
    return sessionStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

function writeFlag(key: string) {
  try {
    sessionStorage.setItem(key, "true");
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — the popup will
    // simply be able to re-open on a hard refresh, which is an acceptable
    // fallback rather than a crash.
  }
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    writeFlag(SHOWN_KEY);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const markSubmitted = useCallback(() => {
    writeFlag(SUBMITTED_KEY);
  }, []);

  useEffect(() => {
    if (readFlag(SHOWN_KEY) || readFlag(SUBMITTED_KEY)) return;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrolledPercent = (scrollTop / maxScroll) * 100;
      if (scrolledPercent >= AUTO_OPEN_SCROLL_PERCENT) {
        window.removeEventListener("scroll", handleScroll);
        openModal();
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openModal]);

  return (
    <EnquiryModalContext.Provider value={{ openModal }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} onSubmitted={markSubmitted} />
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}
