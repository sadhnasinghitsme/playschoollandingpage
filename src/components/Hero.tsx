"use client";

import Image from "next/image";
import ScallopFrame from "./ScallopFrame";
import Star from "./decor/Star";
import Sparkle from "./decor/Sparkle";
import Dot from "./decor/Dot";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function Hero() {
  const { openModal } = useEnquiryModal();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-paleblue/85 py-14 md:py-20"
    >
      {/* Decorative dots, scattered — purely visual */}
      <Dot className="left-[6%] top-[14%]" color="bg-brand-yellow" size={16} />
      <Dot className="left-[18%] top-[78%]" color="bg-brand-orange" size={12} />
      <Dot className="left-[45%] top-[8%]" color="bg-brand-teal" size={10} />
      <Dot className="right-[8%] top-[10%]" color="bg-brand-orange" size={14} />
      <Dot className="right-[32%] top-[85%]" color="bg-brand-yellow" size={12} />
      <Dot className="right-[4%] top-[55%]" color="bg-brand-teal" size={16} />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column: copy */}
        <div className="relative text-center lg:text-left">
          <div className="relative isolate mb-6 inline-flex items-center justify-center px-4 py-2">
            <Star
              color="#FFE3CC"
              className="absolute -z-10 h-24 w-40 sm:h-28 sm:w-48"
            />
            <span className="relative rotate-[-3deg] font-script text-2xl font-bold text-rose-600 sm:text-3xl">
              Admissions Are Open!
            </span>
          </div>

          <h1 className="text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-brand-ink sm:text-5xl">
            Building Bright Futures
            <br />
            Through Joyful
            <br />
            <span className="text-brand-pink">Learning</span>
          </h1>

          <p className="mt-4 font-script text-2xl font-semibold text-brand-pink sm:text-3xl">
            Where learning feels like play
          </p>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-500 lg:mx-0">
            {/* PLACEHOLDER copy — replace with real school messaging */}
            Welcome to SKS World School, Greater Noida West. We&apos;re opening
            our doors for session 2026-27, from Playschool to Class 5 &mdash;
            come see why parents trust us with their child&apos;s first steps
            in learning.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-full bg-brand-pink px-8 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-pink/90"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Right column: image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Sparkle
            color="#FF7A33"
            className="absolute -right-4 -top-6 h-16 w-16 sm:-right-8 sm:-top-8 sm:h-20 sm:w-20"
          />
          <Star
            color="#1FB6A6"
            className="absolute -left-6 bottom-10 h-10 w-10 sm:-left-10 sm:h-12 sm:w-12"
          />

          <ScallopFrame frameColor="bg-brand-teal" className="aspect-[4/5] w-full">
            <Image
              src="/C0328T01.JPG"
              alt="SKS World School students playing together in the ball pit"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </ScallopFrame>
        </div>
      </div>
    </section>
  );
}
