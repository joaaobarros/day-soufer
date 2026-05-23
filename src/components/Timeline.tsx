"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const timelineNodes = [
  {
    year: "1999",
    title: "A primeira roda",
    subtitle: "EDISCA, Escola de Dança e Integração Social para Criança e Adolescente",
    body: "Aos 9 anos, o chão da EDISCA foi o primeiro mestre. Ali a dança não era performance. Era pertencimento, era direito.",
    tags: ["ballet clássico", "formação inicial", "periferia"],
    color: "#8B3E2F",
  },
  {
    year: "2000s",
    title: "Formação técnica",
    subtitle: "Instituto Dragão do Mar / SENAC, Curso Técnico em Dança",
    body: "A técnica entrou pelo corpo sem apagar a ginga. Clássico e popular coexistindo, como fios de cores diferentes no mesmo tecido.",
    tags: ["técnica", "ballet", "contemporâneo"],
    color: "#7C3D1E",
  },
  {
    year: "2010s",
    title: "A universidade do corpo",
    subtitle: "Bacharelado em Dança, Universidade Federal do Ceará",
    body: "A UFC abriu portas para a pesquisa. O corpo virou pergunta. A dança, método. A periferia, epistemologia.",
    tags: ["UFC", "pesquisa", "dramaturgia", "videodança"],
    color: "#B8860B",
  },
  {
    year: "2015+",
    title: "Capoeirança nasce",
    subtitle: "Pesquisa: Vadiação, Veículo de criação da Capoeirança",
    body: "A capoeira já morava no corpo antes de ter nome. A pesquisa da Capoeirança revelou que a ginga e a dança nunca foram mundos separados. Sempre foram uma só travessia.",
    tags: ["capoeira", "pesquisa cênica", "improviso", "jogo"],
    color: "#8B3E2F",
  },
  {
    year: "2018+",
    title: "Chão público",
    subtitle: "Vila das Artes · CCBJ, Centro Cultural Bom Jardim",
    body: "Ensinar em espaço público é ato político. Cada aula no CCBJ e na Vila das Artes é uma aposta: que a dança pertence a todos os corpos, de todos os territórios.",
    tags: ["pedagogia pública", "CCBJ", "Vila das Artes", "formação coletiva"],
    color: "#7C3D1E",
  },
  {
    year: "2020+",
    title: "TSURU nasce das sobras",
    subtitle: "TSURU Ateliê, transformando linha em coisa-afeto",
    body: "As dobras, os fios, os gestos que sobram depois da aula encontraram forma material no TSURU. Não é uma loja. É uma extensão da dança.",
    tags: ["artesanato", "figurino", "costura", "textura"],
    color: "#B8860B",
  },
  {
    year: "2022+",
    title: "Dramaturgias",
    subtitle: "YUGO, com Daniela Yara Cantillo Castrillón · NODO_COLETIVO",
    body: "Como dramaturgista do YUGO, Day teceu narrativas que exaltam identidade, subjetividade e os afetos de mulheres que resistem à misoginia e ao racismo. A dramaturgia como costura de corpos e histórias.",
    tags: ["YUGO", "dramaturgia", "NODO_COLETIVO", "afro-diaspórico"],
    color: "#8B3E2F",
  },
  {
    year: "2024+",
    title: "ACASEMIA DA TIA DAY",
    subtitle: "Musculação em Casa e Danças, humor como pedagogia",
    body: "Porque o corpo também ri. A Acasemia é o treino que acontece na vida real, com as limitações reais, o humor real e a força real de quem dança em qualquer espaço.",
    tags: ["humor", "cotidiano", "corpo", "musculação"],
    color: "#C4A882",
  },
];

function TimelineNode({
  node,
  index,
  isActive,
  onClick,
}: {
  node: (typeof timelineNodes)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 items-start`}
    >
      {/* Content side */}
      <div
        className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pb-2`}
      >
        <button
          onClick={onClick}
          className="group text-left md:text-inherit w-full"
        >
          <span className="tracking-ritual text-xs text-[#8B3E2F] block mb-2">
            {node.year}
          </span>
          <h3
            className={`font-display text-xl md:text-2xl text-[#F5F0E8] group-hover:text-[#C4A882] transition-colors duration-300 mb-1`}
          >
            {node.title}
          </h3>
          <p className="font-editorial italic text-sm text-[#C4A882]/60 mb-3">
            {node.subtitle}
          </p>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#F5F0E8]/65 leading-relaxed mb-4 md:text-inherit text-left">
                  {node.body}
                </p>
                <div
                  className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                >
                  {node.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-ritual px-2 py-0.5 border border-[#8B3E2F]/30 text-[#C4A882]/50 rounded-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Center dot and line */}
      <div className="relative flex flex-col items-center mt-6 mx-4 md:mx-0">
        <button onClick={onClick}>
          <motion.div
            animate={
              isActive
                ? { scale: 1.4, backgroundColor: node.color }
                : { scale: 1, backgroundColor: "#2A2318" }
            }
            className="w-3 h-3 rounded-full border border-[#8B3E2F] z-10 relative transition-all"
            style={{ borderColor: node.color }}
          />
        </button>
      </div>

      {/* Empty side on mobile */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  const toggle = (i: number) =>
    setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="trajetoria"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#C4A882"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#8B3E2F]" />
            <span className="tracking-ritual text-xs text-[#8B3E2F]">
              trajetória
            </span>
            <div className="w-8 h-px bg-[#8B3E2F]" />
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-[#F5F0E8] leading-tight">
            Um arquivo vivo
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 mt-4">
            não uma linha reta. uma constelação.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center font-editorial italic text-sm text-[#C4A882]/40 mt-20"
        >
          clique em cada ponto para abrir a memória
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8B3E2F]/30 to-transparent" />

          <div className="space-y-12 md:space-y-8">
            {timelineNodes.map((node, i) => (
              <TimelineNode
                key={i}
                node={node}
                index={i}
                isActive={activeIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
