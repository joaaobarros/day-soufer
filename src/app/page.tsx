import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Timeline from "@/components/Timeline";
import Capoeiranca from "@/components/Capoeiranca";
import Tsuru from "@/components/Tsuru";
import Pedagogia from "@/components/Pedagogia";
import Impacto from "@/components/Impacto";
import Solar from "@/components/Solar";
import Galeria from "@/components/Galeria";
import Trabalhos from "@/components/Trabalhos";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Film-grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navigation />

      <main>
        <Hero />
        <Manifesto />
        <Timeline />
        <Capoeiranca />
        <Tsuru />
        <Pedagogia />
        <Impacto />
        <Solar />
        <Galeria />
        <Trabalhos />
        <Depoimentos />
        <Contato />
      </main>
    </SmoothScroll>
  );
}
