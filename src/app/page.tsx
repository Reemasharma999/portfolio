import Navbar from "@/components/Navbar";
import FloatingStars from "@/components/FloatingStars";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloatingStars />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <WorkSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
