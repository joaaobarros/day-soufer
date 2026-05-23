"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const spaces = [
  {
    name: "Vila das Artes",
    role: "Professora — Escola Pública de Dança",
    focus: "Dança Clássica · Abordagens Técnicas",
    desc: "Ensino público e gratuito, formação de corpos que não teriam acesso de outra forma. A Vila das Artes como território de pertencimento artístico.",
    color: "#8B3E2F",
  },
  {
    name: "CCBJ",
    role: "Centro Cultural Bom Jardim",
    focus: "Curso Básico de Longa Duração · Técnica",
    desc: "Dança na periferia. O Bom Jardim como território legítimo de criação artística. Cada aula é uma afirmação de que a arte não tem endereço.",
    color: "#7C3D1E",
  },
  {
    name: "UFC",
    role: "Universidade Federal do Ceará",
    focus: "Bacharelado em Dança · Pesquisa · Midiadança",
    desc: "A academia como arena de pesquisa e não como fim em si mesma. Colaboração com o Lab de Dança e Multimídia da UFC.",
    color: "#B8860B",
  },
  {
    name: "NODO_COLETIVO",
    role: "Plataforma artística latino-americana",
    focus: "Criação coletiva · Colaboração internacional",
    desc: "Arte que atravessa fronteiras. O coletivo como modelo de produção horizontal e solidária.",
    color: "#8B3E2F",
  },
];

const approaches = [
  {
    label: "Corpo popular",
    text: "O corpo periférico como sede de conhecimento. A ginga de rua como técnica legítima.",
  },
  {
    label: "Pedagogia da escuta",
    text: "O professor que aprende. O aluno que ensina. A sala de aula como roda.",
  },
  {
    label: "Arte como direito",
    text: "Dança não é luxo. Formação artística pública é acesso e democracia.",
  },
  {
    label: "Pesquisa encarnada",
    text: "A teoria que nasce do corpo. A prática que gera conceito. Não há separação.",
  },
  {
    label: "Videodança",
    text: "Co-coordenação do Festival Vai Dar Videodança. O corpo que entra na câmera e sai transformado.",
  },
  {
    label: "Virtual como campo",
    text: "Pesquisa 'Sensibilizar e Acompanhar': pedagogia da dança em contexto virtual — presença mesmo à distância.",
  },
];

function RadialChart() {
  const qualities = [
    { label: "escuta", angle: 0, radius: 85 },
    { label: "improviso", angle: 60, radius: 75 },
    { label: "coletividade", angle: 120, radius: 90 },
    { label: "pertencimento", angle: 180, radius: 70 },
    { label: "autonomia", angle: 240, radius: 80 },
    { label: "memória corporal", angle: 300, radius: 85 },
  ];

  const cx = 160;
  const cy = 160;
  const maxR = 100;

  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle - 90) * (Math.PI / 180)),
    y: cy + r * Math.sin((angle - 90) * (Math.PI / 180)),
  });

  const points = qualities
    .map((q) => {
      const pt = toXY(q.angle, (q.radius / 100) * maxR);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto">
      {/* Background rings */}
      {[25, 50, 75, 100].map((r) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={(r / 100) * maxR}
          stroke="#8B3E2F"
          strokeWidth="0.3"
          fill="none"
          opacity={0.2}
        />
      ))}

      {/* Axis lines */}
      {qualities.map((q) => {
        const end = toXY(q.angle, maxR);
        return (
          <line
            key={q.label}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="#8B3E2F"
            strokeWidth="0.3"
            opacity={0.3}
          />
        );
      })}

      {/* Data polygon */}
      <motion.polygon
        points={points}
        fill="rgba(139,62,47,0.12)"
        stroke="#8B3E2F"
        strokeWidth="0.8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Data points */}
      {qualities.map((q) => {
        const pt = toXY(q.angle, (q.radius / 100) * maxR);
        return (
          <motion.circle
            key={q.label}
            cx={pt.x}
            cy={pt.y}
            r="3"
            fill="#C4A882"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        );
      })}

      {/* Labels */}
      {qualities.map((q) => {
        const labelR = maxR + 28;
        const pt = toXY(q.angle, labelR);
        return (
          <text
            key={q.label}
            x={pt.x}
            y={pt.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fill="#C4A882"
            opacity="0.6"
            fontFamily="var(--font-inter, sans-serif)"
            letterSpacing="0.08em"
          >
            {q.label}
          </text>
        );
      })}

      {/* Center text */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7"
        fill="#F5F0E8"
        opacity="0.4"
        fontFamily="var(--font-inter, sans-serif)"
        letterSpacing="0.15em"
      >
        PEDAGOGIA
      </text>
    </svg>
  );
}

export default function Pedagogia() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="pedagogia"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="diag"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="#C4A882"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
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
              formação e pedagogia
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-4">
            Corpos que ensinam.
            <br />
            <span className="text-gradient-terra">Corpos que aprendem.</span>
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 max-w-xl mt-4">
            "o chão também ensina — há movimentos que começam antes do corpo"
          </p>
        </motion.div>

        {/* Spaces */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {spaces.map((space, i) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 border border-white/5 hover:border-[#8B3E2F]/30 transition-all duration-500 bg-[#080808]"
              style={{ borderLeftColor: space.color, borderLeftWidth: "2px" }}
            >
              <p className="font-display text-xl text-[#F5F0E8] mb-1">
                {space.name}
              </p>
              <p className="tracking-ritual text-[10px] text-[#8B3E2F]/70 mb-1">
                {space.role}
              </p>
              <p className="font-editorial italic text-sm text-[#C4A882]/50 mb-4">
                {space.focus}
              </p>
              <p className="text-sm text-[#F5F0E8]/50 leading-relaxed">
                {space.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-2 mb-24 overflow-hidden">
          {[
            { src: "/images/criancas-estudio.png", label: "crianças em cena" },
            { src: "/images/ccbj-abraco.png", label: "CCBJ — encontro" },
            { src: "/images/turma-estudio-02.png", label: "residência coletiva" },
          ].map(({ src, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative h-52 overflow-hidden group"
            >
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 tracking-ritual text-[9px] text-[#C4A882]/60">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Radial chart + approaches */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <RadialChart />
            <p className="text-center text-xs text-[#C4A882]/30 mt-4 tracking-wider font-editorial italic">
              constelação pedagógica
            </p>
          </motion.div>

          <div className="space-y-6">
            {approaches.map((ap, i) => (
              <motion.div
                key={ap.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-b border-white/5 pb-5"
              >
                <p className="font-display text-sm text-[#C4A882] mb-1">
                  {ap.label}
                </p>
                <p className="text-xs text-[#F5F0E8]/45 leading-relaxed">
                  {ap.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
