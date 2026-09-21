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
  title: "Nursery Admission 2026-27 | CBSE School Greater Noida West",
  description:
    "SKS World School, Sector 16, Greater Noida West. CBSE co-ed English-medium school. Admissions open for Playschool to Class 5. Book a campus visit.",
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
