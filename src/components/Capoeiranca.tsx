"use client";

import { useRef } from "react";
import Image from "next/image";
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

function CapoeirancaPhotos() {
  return (
    <div className="relative h-[480px] md:h-[560px]">
      {/* Main: handstand at sunset beach */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <Image
          src="/images/day-47.png"
          alt="Capoeirança — ao pôr do sol"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/40 via-transparent to-transparent" />
      </motion.div>

      {/* Inset: handstand VW Bug */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute bottom-6 right-6 w-40 h-48 overflow-hidden border border-[#8B3E2F]/40"
      >
        <Image
          src="/images/day-23.png"
          alt="Vadiação — capoeirança na rua"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#8B3E2F]/10" />
      </motion.div>

      {/* Decorative label */}
      <div className="absolute bottom-6 left-6">
        <span className="tracking-ritual text-[10px] text-[#8B3E2F]/70">corpo em jogo</span>
      </div>
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

          {/* Right: photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
          >
            <CapoeirancaPhotos />
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
