"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  "tudo",
  "dança",
  "capoeirança",
  "tsuru",
  "pedagogia",
  "dramaturgia",
];

const items = [
  {
    id: 1,
    category: "dança",
    title: "Corpo em trânsito",
    desc: "Registro de ensaio — improvisação em solo",
    src: "/images/ensaio-saia-dourada.png",
    aspect: "tall",
  },
  {
    id: 2,
    category: "capoeirança",
    title: "A roda começa",
    desc: "Capoeirança — laboratório de criação",
    src: "/images/capoeiranca-praia.png",
    aspect: "wide",
  },
  {
    id: 3,
    category: "tsuru",
    title: "Linhas e nós",
    desc: "TSURU Ateliê — processo de criação têxtil",
    src: "/images/porta-azul.png",
    aspect: "square",
  },
  {
    id: 4,
    category: "pedagogia",
    title: "Danças em Travessia",
    desc: "Theatro José de Alencar — Dia Internacional da Dança 2026",
    src: "/images/criancas-estudio.png",
    aspect: "tall",
  },
  {
    id: 5,
    category: "dramaturgia",
    title: "YUGO",
    desc: "Dramaturgia — com Daniela Yara Cantillo Castrillón",
    src: "/images/viracao-ensemble.png",
    aspect: "wide",
  },
  {
    id: 6,
    category: "tsuru",
    title: "Dobra",
    desc: "O tsuru — gesto mínimo de criação",
    src: "/images/verde-sombras-01.png",
    aspect: "square",
  },
  {
    id: 7,
    category: "dança",
    title: "ACASEMIA DA TIA DAY",
    desc: "Musculação em Casa e Danças — o humor como prática",
    src: "/images/movimento-pb-corpo.png",
    aspect: "square",
  },
  {
    id: 8,
    category: "pedagogia",
    title: "Vila das Artes",
    desc: "Escola Pública de Dança — formação coletiva",
    src: "/images/turma-estudio.png",
    aspect: "wide",
  },
  {
    id: 9,
    category: "capoeirança",
    title: "Vadiação",
    desc: "Pesquisa — Vadiação como veículo de criação da Capoeirança",
    src: "/images/capoeiranca-fusca.png",
    aspect: "tall",
  },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const aspectClass =
    item.aspect === "tall"
      ? "row-span-2"
      : item.aspect === "wide"
      ? "col-span-2"
      : "";

  return (
    <motion.div
      ref={ref}
      className={`${aspectClass} relative overflow-hidden cursor-pointer group`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real photo */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />

      {/* Permanent subtle dark veil */}
      <div className="absolute inset-0 bg-[#0D0D0D]/25" />

      {/* Hover gradient from bottom */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/30 to-transparent"
      />

      {/* Content on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-end p-5"
          >
            <span className="tracking-ritual text-[9px] text-[#8B3E2F] mb-1">
              {item.category}
            </span>
            <p className="font-display text-sm text-[#F5F0E8] mb-1">
              {item.title}
            </p>
            <p className="text-xs text-[#C4A882]/70 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category badge at rest */}
      {!hovered && (
        <div className="absolute top-3 left-3">
          <span className="text-[9px] tracking-wider text-[#C4A882]/50 font-sans">
            {item.category}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState("tudo");
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  const filtered =
    activeCategory === "tudo"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#8B3E2F]" />
            <span className="tracking-ritual text-xs text-[#8B3E2F]">
              galeria viva
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none">
            Arquivo em aberto
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 mt-3">
            registros, processos, materialidades
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tracking-ritual text-[10px] px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-[#8B3E2F] text-[#C4A882] bg-[#8B3E2F]/10"
                  : "border-white/10 text-[#F5F0E8]/30 hover:border-[#8B3E2F]/30 hover:text-[#C4A882]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[160px] md:auto-rows-[200px] gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center font-editorial italic text-sm text-[#C4A882]/30 mt-12"
        >
          passe o cursor para revelar cada registro
        </motion.p>
      </div>
    </section>
  );
}
