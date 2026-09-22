import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Documents } from "@/components/Documents";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Groups } from "@/components/Groups";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoBlock } from "@/components/InfoBlock";
import { Nutrition } from "@/components/Nutrition";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Groups />
        <Nutrition />
        <Gallery />
        <Documents />
        <InfoBlock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
