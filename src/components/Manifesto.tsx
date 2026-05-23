"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const manifestoParts = [
  {
    text: "O corpo não é um instrumento.",
    size: "large",
  },
  {
    text: "É território.",
    size: "xl",
    color: "terra",
  },
  {
    text: "Cada movimento carrega uma memória que não coube em nenhum livro. Que passou de pele em pele, de chão em chão, de ginga em ginga, antes mesmo de ter nome.",
    size: "normal",
  },
  {
    text: "Há uma dança que começa antes do palco.",
    size: "large",
    color: "dourado",
  },
  {
    text: "Ela começa no barro, no fio, na roda, no terreiro. Começa quando o corpo ainda não sabe que está dançando, mas já está.",
    size: "normal",
  },
  {
    text: "Eu sou artista das encruzas.",
    size: "xl",
    color: "terra",
  },
  {
    text: "Cruzo a capoeira com a dança. O improviso com o rigor. O popular com o contemporâneo. O treino com o rito. A musculação com o feitiço. A costura com o movimento.",
    size: "normal",
  },
  {
    text: "Ensinar é também uma forma de dançar.",
    size: "large",
    color: "dourado",
  },
  {
    text: "E o TSURU nasceu do que sobrou depois da aula: das linhas, dos tecidos, dos afetos que não cabiam em palavras, mas encontravam forma na matéria.",
    size: "normal",
  },
];

function ManifestoLine({
  text,
  size,
  color,
  delay,
}: {
  text: string;
  size: string;
  color?: string;
  delay: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textClass =
    size === "xl"
      ? "font-display text-[clamp(2rem,5vw,4rem)] leading-tight"
      : size === "large"
      ? "font-editorial italic text-[clamp(1.4rem,3vw,2.2rem)] leading-snug"
      : "text-base md:text-lg leading-relaxed max-w-2xl";

  const colorClass =
    color === "terra"
      ? "text-[#C4A882]"
      : color === "dourado"
      ? "text-[#B8860B]"
      : "text-[#F5F0E8]/75";

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${textClass} ${colorClass} ${size !== "normal" ? "font-display" : ""}`}
    >
      {text}
    </motion.p>
  );
}

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background ornament */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="600" height="600" viewBox="0 0 600 600" aria-hidden="true">
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="#C4A882"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="#8B3E2F"
            strokeWidth="0.5"
            fill="none"
          />
          <line
            x1="20"
            y1="300"
            x2="580"
            y2="300"
            stroke="#C4A882"
            strokeWidth="0.5"
          />
          <line
            x1="300"
            y1="20"
            x2="300"
            y2="580"
            stroke="#C4A882"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-10 h-px bg-[#8B3E2F]" />
          <span className="tracking-ritual text-xs text-[#8B3E2F]">
            manifesto
          </span>
        </motion.div>

        {/* Manifesto text */}
        <div className="space-y-10">
          {manifestoParts.map((part, i) => (
            <ManifestoLine
              key={i}
              text={part.text}
              size={part.size}
              color={part.color}
              delay={i * 0.05}
            />
          ))}
        </div>

        {/* Signature line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-[#8B3E2F]/20 flex items-center gap-6"
        >
          {/* Portrait */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#8B3E2F]/40">
            <Image
              src="/images/retrato-principal.png"
              alt="Retrato circular de Day Soufer, assinatura do manifesto: artista da dança, Fortaleza, Ceará"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-display text-xl text-[#F5F0E8]">Day Soufer</p>
            <p className="font-editorial italic text-sm text-[#C4A882]/60 mt-1">
              artista da dança e das encruzas · Fortaleza, Ceará
            </p>
            <p className="tracking-ritual text-[10px] text-[#8B3E2F]/50 mt-1">
              Irìn Omu · Filha de Ogun · Candomblé
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
