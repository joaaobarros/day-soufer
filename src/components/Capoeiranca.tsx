"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const principles = [
  {
    word: "Ginga",
    desc: "O desvio que não foge — é o corpo que pensa antes da mente.",
  },
  {
    word: "Vadiação",
    desc: "Jogo como método. O improviso não como ausência de rigor — mas como seu ápice.",
  },
  {
    word: "Circularidade",
    desc: "A roda não tem começo nem fim. O processo criativo também não.",
  },
  {
    word: "Encruza",
    desc: "Onde a dança contemporânea encontra a capoeira angola. Onde o chão fala.",
  },
  {
    word: "Resistência",
    desc: "O corpo que joga é o corpo que sobrevive. Estética e política na mesma ginga.",
  },
  {
    word: "Coletividade",
    desc: "Não se joga capoeira sozinho. Não se cria dança sozinho. A arte é relação.",
  },
];

function CircleAnimation() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 320 320" className="w-full h-full">
          <circle
            cx="160"
            cy="160"
            r="150"
            stroke="#8B3E2F"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="4 8"
          />
        </svg>
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4"
      >
        <svg viewBox="0 0 280 280" className="w-full h-full">
          <circle
            cx="140"
            cy="140"
            r="128"
            stroke="#C4A882"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray="2 12"
          />
        </svg>
      </motion.div>

      {/* Center pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full border border-[#8B3E2F]/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-[#C4A882]/30 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8"
              >
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path
                    d="M16 2 L30 28 L2 28 Z"
                    stroke="#B8860B"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ginga lines emanating */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={{ rotate: angle }}
        >
          <motion.div
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="w-px bg-gradient-to-t from-transparent via-[#8B3E2F]/30 to-transparent"
            style={{ height: "40%" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function Capoeiranca() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="capoeiranca"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Deep background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#120A06] to-[#0D0D0D]"
      />

      {/* Terracota accent */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(139,62,47,0.4) 0%, transparent 60%)",
        }}
      />

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
              pesquisa
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-4">
            Capoeirança
          </h2>
          <p className="font-editorial italic text-xl text-[#C4A882]/70 max-w-lg">
            Vadiação: Veículo de criação
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="font-editorial italic text-2xl text-[#F5F0E8]/80 leading-relaxed mb-8 border-l-2 border-[#8B3E2F] pl-6">
              "A Capoeirança não é uma mistura. É uma escuta. O lugar onde a
              dança contemporânea aprende a vadiar e a capoeira aprende a
              coreografar o improviso."
            </blockquote>

            <p className="text-[#F5F0E8]/60 leading-relaxed mb-6">
              A pesquisa <em>Vadiação: Veículo de criação da Capoeirança</em>{" "}
              investiga o trabalho cênico entre dançarinos e capoeiristas — um
              território limiar onde a ginga é dramaturgia e o jogo é partitura.
            </p>

            <p className="text-[#F5F0E8]/60 leading-relaxed">
              Não há palco que não possa ser uma roda. Não há roda que não seja
              uma cena. A Capoeirança vive nessa encruza.
            </p>
          </motion.div>

          {/* Right: circle animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
          >
            <CircleAnimation />
          </motion.div>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-5 border border-[#8B3E2F]/15 hover:border-[#8B3E2F]/40 transition-colors duration-500 bg-[#0D0D0D]/50"
            >
              <p className="font-display text-[#C4A882] text-lg mb-2 group-hover:text-[#F5F0E8] transition-colors duration-300">
                {p.word}
              </p>
              <p className="text-xs text-[#F5F0E8]/45 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="font-editorial italic text-xl text-[#C4A882]/50">
            "o chão também é palco — e o corpo, arquivo"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
