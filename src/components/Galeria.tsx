"use client";

import { useState, useRef } from "react";
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
    color: "#8B3E2F",
    pattern: "diagonal",
    aspect: "tall",
  },
  {
    id: 2,
    category: "capoeirança",
    title: "A roda começa",
    desc: "Capoeirança — laboratório de criação",
    color: "#7C3D1E",
    pattern: "circles",
    aspect: "wide",
  },
  {
    id: 3,
    category: "tsuru",
    title: "Linhas e nós",
    desc: "TSURU Ateliê — processo de criação têxtil",
    color: "#B8860B",
    pattern: "weave",
    aspect: "square",
  },
  {
    id: 4,
    category: "pedagogia",
    title: "Danças em Travessia",
    desc: "Theatro José de Alencar — Dia Internacional da Dança 2026",
    color: "#8B3E2F",
    pattern: "wave",
    aspect: "tall",
  },
  {
    id: 5,
    category: "dramaturgia",
    title: "YUGO",
    desc: "Dramaturgia — com Daniela Yara Cantillo Castrillón",
    color: "#6B2D1E",
    pattern: "radial",
    aspect: "wide",
  },
  {
    id: 6,
    category: "tsuru",
    title: "Dobra",
    desc: "O tsuru — gesto mínimo de criação",
    color: "#B8860B",
    pattern: "fold",
    aspect: "square",
  },
  {
    id: 7,
    category: "dança",
    title: "ACASEMIA DA TIA DAY",
    desc: "Musculação em Casa e Danças — o humor como prática",
    color: "#C4A882",
    pattern: "dots",
    aspect: "square",
  },
  {
    id: 8,
    category: "pedagogia",
    title: "Vila das Artes",
    desc: "Escola Pública de Dança — formação coletiva",
    color: "#8B3E2F",
    pattern: "grid",
    aspect: "wide",
  },
  {
    id: 9,
    category: "capoeirança",
    title: "Vadiação",
    desc: "Pesquisa — Vadiação como veículo de criação da Capoeirança",
    color: "#7C3D1E",
    pattern: "spiral",
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

  const renderPattern = () => {
    const p = item.pattern;
    const c = item.color;

    if (p === "diagonal") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 20 - 40} y1="0" x2={i * 20 + 40} y2="200" stroke={c} strokeWidth="0.4" opacity="0.4" />
          ))}
        </svg>
      );
    }
    if (p === "circles") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {[20, 40, 60, 80, 100].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} stroke={c} strokeWidth="0.4" fill="none" opacity="0.4" />
          ))}
        </svg>
      );
    }
    if (p === "weave") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 28} x2="200" y2={i * 28} stroke={c} strokeWidth="0.3" opacity="0.3" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2="200" stroke={c} strokeWidth="0.3" opacity="0.3" />
          ))}
        </svg>
      );
    }
    if (p === "wave") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {[0, 40, 80, 120, 160].map((y, i) => (
            <path key={i} d={`M 0 ${y} Q 50 ${y - 20} 100 ${y} Q 150 ${y + 20} 200 ${y}`}
              stroke={c} strokeWidth="0.4" fill="none" opacity="0.4" />
          ))}
        </svg>
      );
    }
    if (p === "radial") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line key={i} x1="100" y1="100"
                x2={100 + 90 * Math.cos(angle)} y2={100 + 90 * Math.sin(angle)}
                stroke={c} strokeWidth="0.4" opacity="0.4" />
            );
          })}
        </svg>
      );
    }
    if (p === "fold") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <polygon points="100,20 180,180 20,180" stroke={c} strokeWidth="0.5" fill="none" opacity="0.4" />
          <polygon points="100,60 160,160 40,160" stroke={c} strokeWidth="0.3" fill="none" opacity="0.3" />
          <line x1="100" y1="20" x2="100" y2="180" stroke={c} strokeWidth="0.3" opacity="0.2" />
        </svg>
      );
    }
    if (p === "dots") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 64 }).map((_, i) => (
            <circle key={i} cx={(i % 8) * 26 + 13} cy={Math.floor(i / 8) * 26 + 13} r="1.5" fill={c} opacity="0.3" />
          ))}
        </svg>
      );
    }
    if (p === "grid") {
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="200" y2={i * 40} stroke={c} strokeWidth="0.3" opacity="0.25" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="200" stroke={c} strokeWidth="0.3" opacity="0.25" />
          ))}
        </svg>
      );
    }
    // spiral
    return (
      <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <path d="M 100 100 m 0,-80 a 80,80 0 1,1 -0.1,0 M 100 100 m 0,-50 a 50,50 0 1,1 -0.1,0"
          stroke={c} strokeWidth="0.4" fill="none" opacity="0.4" />
      </svg>
    );
  };

  return (
    <motion.div
      ref={ref}
      className={`${aspectClass} relative overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[#0A0705]">
        {renderPattern()}
      </div>

      {/* Color overlay */}
      <motion.div
        animate={{ opacity: hovered ? 0.15 : 0.05 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
        style={{ backgroundColor: item.color }}
      />

      {/* Content overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[#0D0D0D]/90 to-transparent"
          >
            <span className="tracking-ritual text-[9px] text-[#8B3E2F] mb-1">
              {item.category}
            </span>
            <p className="font-display text-sm text-[#F5F0E8] mb-1">
              {item.title}
            </p>
            <p className="text-xs text-[#C4A882]/60 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner category badge */}
      {!hovered && (
        <div className="absolute top-3 left-3">
          <span className="text-[9px] tracking-wider text-[#C4A882]/30 font-sans">
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
          em breve — registros fotográficos e vídeos
        </motion.p>
      </div>
    </section>
  );
}
