"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const waveData = [
  { label: "presença", value: 92 },
  { label: "escuta", value: 88 },
  { label: "improviso", value: 95 },
  { label: "autonomia", value: 85 },
  { label: "memória corporal", value: 90 },
  { label: "pertencimento", value: 87 },
  { label: "força", value: 93 },
  { label: "coletividade", value: 89 },
];

const poeticNumbers = [
  {
    number: "1999",
    label: "o ano do primeiro chão",
    sub: "quando tudo começou na EDISCA",
  },
  {
    number: "25+",
    label: "anos de corpo em movimento",
    sub: "ininterruptos, em diferentes territórios",
  },
  {
    number: "∞",
    label: "corpos que passaram pelas aulas",
    sub: "a multiplicação que não tem fim",
  },
  {
    number: "6",
    label: "linguagens em diálogo",
    sub: "dança · capoeira · costura · pesquisa · pedagogia · dramaturgia",
  },
];

function WaveBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-xs text-[#C4A882]/60 tracking-wider">
          {label}
        </span>
        <span className="font-editorial italic text-xs text-[#8B3E2F]/60">
          {value}%
        </span>
      </div>
      <div className="h-px bg-[#2A2318] relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : { scaleX: 0 }}
          transition={{
            duration: 1.5,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-0 top-0 h-full origin-left"
          style={{
            background: `linear-gradient(to right, #8B3E2F, #B8860B)`,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

function OrganicBlob({ x, y, r, color, delay }: { x: number; y: number; r: number; color: string; delay: number }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      initial={{ r: 0, opacity: 0 }}
      whileInView={{ r, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function ConstellationViz() {
  const nodes = [
    { x: 200, y: 200, r: 60, label: "dança", color: "rgba(139,62,47,0.2)" },
    { x: 320, y: 140, r: 40, label: "capoeira", color: "rgba(124,61,30,0.2)" },
    { x: 100, y: 150, r: 35, label: "costura", color: "rgba(184,134,11,0.15)" },
    { x: 310, y: 280, r: 45, label: "pedagogia", color: "rgba(139,62,47,0.15)" },
    { x: 90, y: 270, r: 30, label: "pesquisa", color: "rgba(184,134,11,0.1)" },
    { x: 200, y: 320, r: 25, label: "dramaturgia", color: "rgba(124,61,30,0.15)" },
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
      {/* Connection lines */}
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => {
          const dist = Math.sqrt(
            Math.pow(n.x - m.x, 2) + Math.pow(n.y - m.y, 2)
          );
          if (dist < 180) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={n.x}
                y1={n.y}
                x2={m.x}
                y2={m.y}
                stroke="#8B3E2F"
                strokeWidth="0.3"
                opacity={0}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            );
          }
          return null;
        })
      )}

      {/* Blobs */}
      {nodes.map((n, i) => (
        <OrganicBlob
          key={n.label}
          x={n.x}
          y={n.y}
          r={n.r}
          color={n.color}
          delay={i * 0.15}
        />
      ))}

      {/* Circle outlines */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`outline-${n.label}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          stroke="#8B3E2F"
          strokeWidth="0.4"
          fill="none"
          opacity={0}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* Labels */}
      {nodes.map((n) => (
        <text
          key={`label-${n.label}`}
          x={n.x}
          y={n.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fill="#C4A882"
          opacity="0.7"
          fontFamily="var(--font-inter, sans-serif)"
          letterSpacing="0.1em"
        >
          {n.label}
        </text>
      ))}
    </svg>
  );
}

export default function Impacto() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="impacto"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#080808] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.5" fill="#C4A882" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#8B3E2F]" />
            <span className="tracking-ritual text-xs text-[#8B3E2F]">
              presença e impacto
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-tight mb-4">
            Corpos que aprendem<br />
            <span className="text-gradient-terra">a ocupar espaço</span>
          </h2>
        </motion.div>

        {/* Poetic numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {poeticNumbers.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="p-6 border border-[#8B3E2F]/10 bg-[#0D0D0D]"
            >
              <p className="font-display text-3xl md:text-4xl text-[#C4A882] mb-2">
                {item.number}
              </p>
              <p className="text-xs text-[#F5F0E8]/60 mb-1">{item.label}</p>
              <p className="font-editorial italic text-[10px] text-[#C4A882]/30 leading-relaxed">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Wave bars */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-editorial italic text-sm text-[#C4A882]/50 mb-8"
            >
              o que os corpos carregam depois da aula
            </motion.p>
            <div className="space-y-6">
              {waveData.map((item, i) => (
                <WaveBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  delay={i * 0.1}
                />
              ))}
            </div>

            <div className="mt-12 space-y-4">
              {[
                "corpos que aprendem a ocupar espaço",
                "o chão também ensina",
                "há movimentos que começam antes do corpo",
              ].map((quote, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="font-editorial italic text-sm text-[#C4A882]/40 pl-4 border-l border-[#8B3E2F]/20"
                >
                  "{quote}"
                </motion.p>
              ))}
            </div>
          </div>

          {/* Constellation */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-editorial italic text-sm text-[#C4A882]/50 mb-6 text-center"
            >
              constelação de linguagens
            </motion.p>
            <ConstellationViz />
          </div>
        </div>
      </div>
    </section>
  );
}
