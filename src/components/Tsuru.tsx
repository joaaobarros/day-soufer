"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const objects = [
  {
    name: "Fio que dobra",
    material: "linho · algodão cru",
    desc: "A linha que costurou o figurino de ensaio. Que segurou o hem do saiote. Que sobrou e virou objeto.",
    symbol: "—",
  },
  {
    name: "Pano da gira",
    material: "algodão · seda natural",
    desc: "O tecido que sabe girar. Que conhece o movimento antes do corpo chegar.",
    symbol: "○",
  },
  {
    name: "Terço do chão",
    material: "barro · linha de lã",
    desc: "Para pendurar. Para tocar. Para lembrar que há matérias que ensinam com a textura.",
    symbol: "×",
  },
  {
    name: "Dobraduras",
    material: "papel · tecido · tempo",
    desc: "O tsuru, o pássaro. A dobradura como gesto mínimo de criação — que todo corpo conhece.",
    symbol: "△",
  },
];

function TsuruVisual() {
  return (
    <div className="relative h-80 md:h-[500px] overflow-hidden">
      {/* Main: porta azul — espaço do ateliê */}
      <Image
        src="/images/porta-azul.png"
        alt="TSURU Ateliê — espaço"
        fill
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0705]/60 via-transparent to-[#0A0705]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0705]/40" />

      {/* Decorative thread SVG over photo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M 200 20 C 100 80, 300 160, 200 240 C 100 320, 300 400, 200 480"
            stroke="#C4A882"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.path
            d="M 150 40 C 280 100, 120 180, 250 260 C 130 340, 270 420, 160 480"
            stroke="#8B3E2F"
            strokeWidth="0.4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
          />
        </svg>
      </div>

      {/* Label */}
      <div className="absolute bottom-5 left-5">
        <span className="tracking-ritual text-[10px] text-[#B8860B]/70">linha · corpo · matéria</span>
      </div>
    </div>
  );
}

export default function Tsuru() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="tsuru"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0A0705] overflow-hidden"
    >
      {/* Background warmth */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(184,134,11,0.6) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#B8860B]" />
            <span className="tracking-ritual text-xs text-[#B8860B]">
              entre linhas e corpos
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-6">
            TSURU Ateliê
          </h2>
          <p className="font-editorial italic text-xl text-[#C4A882]/70 max-w-xl leading-relaxed">
            transformando linha em coisa-afeto
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-24">
          {/* Left: Tsuru visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-80 md:h-[500px] relative"
          >
            <TsuruVisual />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-[#F5F0E8]/70 leading-relaxed text-lg">
                Há movimentos que continuam depois da aula.
              </p>
              <p className="text-[#F5F0E8]/70 leading-relaxed">
                Alguns viram tecido. Outros viram objeto. Outros seguem no
                corpo, sem nome ainda — esperando a matéria certa para se
                manifestar.
              </p>
              <p className="text-[#F5F0E8]/60 leading-relaxed">
                O TSURU não é uma loja. É uma extensão da pesquisa, um espaço
                onde a manualidade e a dança se encontram sem hierarquia. Onde
                costurar é também uma forma de coreografar.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#B8860B] pl-6 space-y-2">
              <p className="font-editorial italic text-lg text-[#C4A882]">
                "O tsuru — o pássaro de papel dobrado — nasce de um único gesto
                simples, repetido com atenção. Como uma sequência de dança. Como
                uma reza."
              </p>
            </blockquote>

            <div className="pt-4">
              <p className="tracking-ritual text-xs text-[#B8860B]/60 mb-3">
                materialidades
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "tecido",
                  "linha",
                  "barro",
                  "costura",
                  "figurino",
                  "dobra",
                  "nó",
                  "trama",
                ].map((m) => (
                  <span
                    key={m}
                    className="text-xs px-3 py-1 border border-[#B8860B]/20 text-[#C4A882]/50 hover:border-[#B8860B]/50 hover:text-[#C4A882] transition-all duration-300"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objects grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {objects.map((obj, i) => (
            <motion.div
              key={obj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 border border-[#B8860B]/10 hover:border-[#B8860B]/30 transition-all duration-500 bg-gradient-to-b from-[#0D0D0D] to-[#0A0705]"
            >
              <div className="text-[#B8860B]/30 text-2xl font-editorial mb-4 group-hover:text-[#B8860B]/60 transition-colors duration-300">
                {obj.symbol}
              </div>
              <p className="font-display text-sm text-[#F5F0E8]/80 mb-1">
                {obj.name}
              </p>
              <p className="text-[10px] tracking-wider text-[#C4A882]/40 mb-3">
                {obj.material}
              </p>
              <p className="text-xs text-[#F5F0E8]/40 leading-relaxed">
                {obj.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://www.instagram.com/tsuru.atelie/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[#B8860B]/30 hover:border-[#B8860B] text-[#C4A882] hover:text-[#F5F0E8] transition-all duration-500"
          >
            <span className="tracking-ritual text-xs">visitar tsuru.atelie</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#B8860B]"
            >
              →
            </motion.span>
          </a>
          <p className="font-editorial italic text-sm text-[#C4A882]/40">
            @tsuru.atelie no Instagram
          </p>
        </motion.div>
      </div>
    </section>
  );
}
