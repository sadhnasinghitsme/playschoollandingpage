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

const SHOWN_KEY = "enquiryShown";

function hasBeenShown(): boolean {
  try { return sessionStorage.getItem(SHOWN_KEY) === "true"; } catch { return false; }
}

function markShown() {
  try { sessionStorage.setItem(SHOWN_KEY, "true"); } catch { /* private browsing */ }
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Manual open — always works regardless of session flag.
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const markSubmitted = useCallback(() => markShown(), []);

  useEffect(() => {
    // Already shown this session — skip attaching any listeners.
    if (hasBeenShown()) return;

    // Cache scrollHeight so we're not hitting the DOM on every event.
    // Refresh it on resize because mobile address-bar changes shift it.
    let totalHeight = document.documentElement.scrollHeight;

    function getProgress(): number {
      // scrollY + innerHeight gives the bottom edge of the visible viewport.
      // Dividing by scrollHeight gives 0→1 progress through the document.
      return (window.scrollY + window.innerHeight) / totalHeight;
    }

    function tryFire() {
      if (hasBeenShown()) return; // double-guard against race

      const progress = getProgress();

      // Primary threshold: past 50%.
      // Fallback: within 120px of the bottom (handles short mobile pages
      // where 50% is reached before meaningful content is seen).
      const nearBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 120;

      if (progress > 0.5 || nearBottom) {
        cleanup();
        markShown();       // set flag BEFORE state update — race-safe
        setIsOpen(true);
      }
    }

    function onResize() {
      // Re-cache after orientation change / address-bar collapse.
      totalHeight = document.documentElement.scrollHeight;
      tryFire(); // also check immediately in case resize pushed us past threshold
    }

    function cleanup() {
      window.removeEventListener("scroll",    tryFire);
      window.removeEventListener("touchend",  tryFire);   // iOS: position committed on lift
      window.removeEventListener("touchmove", tryFire);   // Android: position updates during drag
      window.removeEventListener("resize",    onResize);
    }

    // passive:true — never blocks scrolling on mobile.
    window.addEventListener("scroll",    tryFire,  { passive: true });
    window.addEventListener("touchend",  tryFire,  { passive: true });
    window.addEventListener("touchmove", tryFire,  { passive: true });
    window.addEventListener("resize",    onResize, { passive: true });

    return cleanup;
  }, []); // runs once on mount

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
