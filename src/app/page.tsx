import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UspGrid from "@/components/UspGrid";
import Highlights from "@/components/Highlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import Curriculum from "@/components/Curriculum";
import DayAtSks from "@/components/DayAtSks";
import EnquirySection from "@/components/EnquirySection";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UspGrid />
        <Highlights />
        <WhyChooseUs />
        <CtaBanner />
        <Curriculum />
        <DayAtSks />
        <EnquirySection />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
