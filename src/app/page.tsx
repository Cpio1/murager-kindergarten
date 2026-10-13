import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Documents } from "@/components/Documents";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoBlock } from "@/components/InfoBlock";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <InfoBlock />
        <Gallery />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
