"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function SunGraphic() {
  const rays = Array.from({ length: 16 });

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      role="img"
      aria-label="Grafismo de sol radiante em movimento giratório, representando o lado solar e alegre de Day Soufer: círculo dourado central irradiando 16 raios de comprimentos alternados, com anel tracejado externo e 8 pontos orbitais"
    >
      {/* Outer slow-rotating ring of rays */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          {rays.map((_, i) => {
            const angle = (i * 360) / rays.length;
            const rad = (angle * Math.PI) / 180;
            const x1 = 200 + 90 * Math.cos(rad);
            const y1 = 200 + 90 * Math.sin(rad);
            const x2 = 200 + 175 * Math.cos(rad);
            const y2 = 200 + 175 * Math.sin(rad);
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B8860B"
                strokeWidth={i % 2 === 0 ? "1.2" : "0.5"}
                opacity={i % 2 === 0 ? 0.7 : 0.3}
                animate={{ opacity: i % 2 === 0 ? [0.5, 0.9, 0.5] : [0.2, 0.4, 0.2] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
          {/* Dashed outer ring */}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#B8860B"
            strokeWidth="0.3"
            strokeDasharray="3 9"
            fill="none"
            opacity="0.25"
          />
        </svg>
      </motion.div>

      {/* Inner counter-rotating details */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-3/4 h-3/4"
      >
        <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            const cx = 150 + 68 * Math.cos(a);
            const cy = 150 + 68 * Math.sin(a);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="3"
                fill="#F5C518"
                opacity="0.5"
              />
            );
          })}
          <circle
            cx="150"
            cy="150"
            r="65"
            stroke="#E8A020"
            strokeWidth="0.4"
            strokeDasharray="2 6"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Center sun circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-1/3 h-1/3 rounded-full flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle, #F5C518 0%, #E8A020 40%, #C47B0A 70%, transparent 100%)",
          boxShadow:
            "0 0 40px 10px rgba(245, 197, 24, 0.15), 0 0 80px 20px rgba(184,134,11,0.08)",
        }}
      >
        {/* Inner circle */}
        <div
          className="w-3/4 h-3/4 rounded-full"
          style={{
            background: "radial-gradient(circle, #FDE68A 0%, #F5C518 60%, #E8A020 100%)",
          }}
        />
      </motion.div>

      {/* Botanical: palm frond left */}
      <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 120 200" width="120" height="200" aria-hidden="true">
          <path
            d="M 60 200 C 40 160, 10 120, 5 80 C 15 90, 30 100, 60 200Z"
            fill="#B8860B"
          />
          <path
            d="M 60 200 C 70 150, 90 110, 110 70 C 100 80, 80 100, 60 200Z"
            fill="#C4A882"
          />
          <path
            d="M 60 200 C 55 160, 45 130, 20 100 C 30 110, 50 140, 60 200Z"
            fill="#8B3E2F"
          />
          <path
            d="M 60 200 C 65 170, 80 140, 100 110 C 90 120, 70 150, 60 200Z"
            fill="#B8860B"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Botanical: mandacaru right */}
      <div className="absolute right-0 top-4 opacity-15 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 80 180" width="80" height="180" aria-hidden="true">
          {/* Trunk */}
          <rect x="34" y="60" width="12" height="120" rx="6" fill="#8B6914" />
          {/* Left arm */}
          <rect x="10" y="80" width="10" height="60" rx="5" fill="#8B6914" />
          <rect x="10" y="80" width="35" height="10" rx="5" fill="#8B6914" />
          {/* Right arm */}
          <rect x="60" y="100" width="10" height="50" rx="5" fill="#8B6914" />
          <rect x="35" y="100" width="35" height="10" rx="5" fill="#8B6914" />
          {/* Spines */}
          {[70, 90, 110, 130, 150].map((y, i) => (
            <g key={i}>
              <line x1="34" y1={y} x2="26" y2={y - 4} stroke="#C4A882" strokeWidth="0.8" opacity="0.7" />
              <line x1="46" y1={y} x2="54" y2={y - 4} stroke="#C4A882" strokeWidth="0.8" opacity="0.7" />
            </g>
          ))}
          {/* Flower at top */}
          <circle cx="40" cy="62" r="8" fill="#FDE68A" opacity="0.8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={i}
                cx={40 + 12 * Math.cos(r)}
                cy={62 + 12 * Math.sin(r)}
                rx="4"
                ry="2"
                fill="#F5C518"
                transform={`rotate(${a} ${40 + 12 * Math.cos(r)} ${62 + 12 * Math.sin(r)})`}
                opacity="0.6"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

const joyPhotos = [
  {
    src: "/images/alegria-bicicletas.png",
    label: "alegria",
    alt: "Grupo de pessoas com fantasias coloridas posando com bicicletas em expressão de alegria e leveza coletiva",
    objectPosition: "center 70%",
  },
  {
    src: "/images/candomble-rua.png",
    label: "rua",
    alt: "Cena de candomblé na rua: espiritualidade e resistência cultural presentes no espaço público urbano",
    objectPosition: "center 65%",
  },
  {
    src: "/images/tutus-parede-vermelha.png",
    label: "bailarinas",
    alt: "Bailarinas com tutus brancos diante de parede vermelha vibrante, dança clássica em diálogo com cor e força",
    objectPosition: "center 50%",
  },
  {
    src: "/images/retrato-marielle.png",
    label: "Marielle",
    alt: "Homenagem a Marielle Franco: imagem de resistência, presença e memória de uma mulher que não será esquecida",
    objectPosition: "center 25%",
  },
  {
    src: "/images/tutus-por-do-sol.png",
    label: "pôr do sol",
    alt: "Silhuetas de bailarinas com tutus recortadas contra o céu em pôr do sol, beleza e poesia do corpo em dança",
    objectPosition: "center 55%",
  },
];

export default function Solar() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="solar"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #110C04 50%, #0D0D0D 100%)" }}
    >
      {/* Warm radial glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #F5C518 0%, #E8A020 30%, #B8860B 60%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-20">
          {/* Left: Sun graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-72 md:h-[420px]"
          >
            <SunGraphic />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-[#B8860B]" />
              <span className="tracking-ritual text-xs text-[#B8860B]">
                lado solar
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-[#F5F0E8] leading-tight mb-6">
              O corpo que ri<br />
              <span style={{ color: "#F5C518" }}>também é dança.</span>
            </h2>
            <p className="text-[#F5F0E8]/65 leading-relaxed mb-5">
              Há uma Day Soufer que dança nas ruas com tutu e tênis de corrida.
              Que inventa a Acasemia da Tia Day para provar que treino e alegria
              não são coisas separadas.
            </p>
            <p className="text-[#F5F0E8]/55 leading-relaxed mb-8">
              Que leva crianças e adultos ao Theatro José de Alencar em um dia
              comum de quarta-feira, às 16h30, só porque dançar é um direito.
            </p>
            <blockquote className="border-l-2 border-[#B8860B] pl-6 font-editorial italic text-lg text-[#F5C518]/80">
              "o humor também é político.<br />
              a alegria também é resistência."
            </blockquote>
          </motion.div>
        </div>

        {/* Joy photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
          {joyPhotos.map(({ src, label, alt, objectPosition }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition }}
              />
              {/* Warm tint overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(184,134,11,0.4) 0%, transparent 50%)",
                  opacity: 0.6,
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-end p-3"
              >
                <span className="tracking-ritual text-[9px] text-[#F5C518]/80">
                  {label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-16 h-px origin-left"
          style={{
            background: "linear-gradient(to right, #F5C518, #B8860B, transparent)",
          }}
        />
      </div>
    </section>
  );
}
