import type { Metadata } from "next";
import { Baloo_2, Caveat, Nunito } from "next/font/google";
import { EnquiryModalProvider } from "@/components/EnquiryModalContext";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKS World School, Greater Noida West | Admissions Open 2026-27",
  description:
    "Admissions open for Playschool to Class 5 at SKS World School, Greater Noida West for session 2026-27. Experienced faculty, safe campus, activity-based learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} ${caveat.variable}`}>
      <body>
        <EnquiryModalProvider>{children}</EnquiryModalProvider>
      </body>
    </html>
  );
}
