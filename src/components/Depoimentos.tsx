"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const depoimentos = [
  {
    id: 1,
    nome: "·",
    relacao: "aluna · Vila das Artes",
    texto:
      "Este espaço está reservado para o depoimento de uma pessoa formada por Day na Vila das Artes. Em breve este registro será preenchido com as palavras de quem viveu a experiência da sua pedagogia.",
    placeholder: true,
  },
  {
    id: 2,
    nome: "·",
    relacao: "aluna · CCBJ",
    texto:
      "Este espaço está reservado para o depoimento de uma pessoa do Centro Cultural Bom Jardim. Um relato sobre como a dança mudou sua relação com o próprio corpo e com o seu território.",
    placeholder: true,
  },
  {
    id: 3,
    nome: "·",
    relacao: "parceira artística",
    texto:
      "Este espaço está reservado para o depoimento de uma parceira de criação. Sobre o processo de trabalhar com Day: a escuta, a generosidade, o rigor que não exclui o afeto.",
    placeholder: true,
  },
  {
    id: 4,
    nome: "·",
    relacao: "pesquisadora · UFC",
    texto:
      "Este espaço está reservado para o depoimento de alguém que compartilhou o campo da pesquisa com Day. Sobre a Capoeirança, sobre a videodança, sobre o que acontece quando a universidade encontra a rua.",
    placeholder: true,
  },
  {
    id: 5,
    nome: "·",
    relacao: "aluno(a) · Acasemia da Tia Day",
    texto:
      "Este espaço está reservado para quem viveu a Acasemia. O treino que virou dança. A dança que virou treino. E no meio disso, a descoberta de que o humor também é um método.",
    placeholder: true,
  },
];

function DepoimentoCard({
  dep,
  index,
}: {
  dep: (typeof depoimentos)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative p-8 border border-white/5 bg-[#080808] ${
        dep.placeholder ? "opacity-50" : ""
      }`}
    >
      {/* Opening quote mark */}
      <div
        className="absolute top-4 left-6 font-editorial text-6xl leading-none pointer-events-none select-none"
        style={{ color: "#8B3E2F", opacity: 0.15 }}
        aria-hidden
      >
        "
      </div>

      {/* Text */}
      <p
        className={`font-editorial italic text-lg leading-relaxed mb-8 pt-4 ${
          dep.placeholder
            ? "text-[#F5F0E8]/30"
            : "text-[#F5F0E8]/80"
        }`}
      >
        {dep.texto}
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-[#8B3E2F]/40" />
        <div>
          <p className="font-display text-sm text-[#C4A882]">{dep.nome}</p>
          <p className="tracking-ritual text-[9px] text-[#C4A882]/40 mt-0.5">
            {dep.relacao}
          </p>
        </div>
      </div>

      {dep.placeholder && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="tracking-ritual text-[9px] text-[#8B3E2F]/40 rotate-[-2deg]">
            em breve
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Depoimentos() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,62,47,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Decorative large quote */}
      <div
        className="absolute top-24 right-12 font-display text-[20rem] leading-none pointer-events-none select-none hidden lg:block"
        style={{ color: "#8B3E2F", opacity: 0.02 }}
        aria-hidden
      >
        "
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
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
              vozes que passaram por aqui
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-4">
            O que fica no corpo
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 max-w-xl">
            relatos de quem dançou, aprendeu, criou ao lado de Day Soufer
          </p>
        </motion.div>

        {/* Note for placeholder state */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 p-5 border border-[#8B3E2F]/15 bg-[#8B3E2F]/05"
        >
          <p className="text-sm text-[#C4A882]/50 leading-relaxed">
            <span className="font-display text-[#C4A882]/70">Espaço em construção.</span>{" "}
            Em breve estes registros serão preenchidos com depoimentos reais: vozes de alunas(os),
            parceiras(os) artísticas(os) e pesquisadoras(es) que viveram a pedagogia e a prática
            de Day. Se você é uma dessas pessoas,{" "}
            <a
              href="#contato"
              className="text-[#C4A882] hover:text-[#F5F0E8] transition-colors underline underline-offset-2"
            >
              entre em contato.
            </a>
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {depoimentos.map((dep, i) => (
            <DepoimentoCard key={dep.id} dep={dep} index={i} />
          ))}
        </div>

        {/* Decorative bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-16 h-px origin-left"
          style={{
            background: "linear-gradient(to right, #8B3E2F, #B8860B, transparent)",
          }}
        />
      </div>
    </section>
  );
}
