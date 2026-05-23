"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const words = ["corpo", "travessia", "ancestralidade", "movimento", "rito"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Animated background layers */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        {/* Photo background */}
        <Image
          src="/images/day-37.png"
          alt=""
          fill
          className="object-cover object-[center_15%]"
          priority
        />
        {/* Dark overlay — preserves dark aesthetic */}
        <div className="absolute inset-0 bg-[#0D0D0D]/78" />
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e08]/50 via-transparent to-[#080808]/80" />

        {/* Radial glow terracota */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,62,47,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Radial glow dourado */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Geometric lines - threads */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <line
            x1="0"
            y1="200"
            x2="1440"
            y2="700"
            stroke="#C4A882"
            strokeWidth="0.5"
          />
          <line
            x1="200"
            y1="0"
            x2="800"
            y2="900"
            stroke="#8B3E2F"
            strokeWidth="0.5"
          />
          <line
            x1="1200"
            y1="0"
            x2="600"
            y2="900"
            stroke="#C4A882"
            strokeWidth="0.3"
          />
          <circle
            cx="720"
            cy="450"
            r="300"
            stroke="#8B3E2F"
            strokeWidth="0.3"
            fill="none"
          />
          <circle
            cx="720"
            cy="450"
            r="200"
            stroke="#C4A882"
            strokeWidth="0.2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Editorial portrait — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 bottom-0 top-0 w-[38vw] overflow-hidden hidden lg:block pointer-events-none"
        style={{ maskImage: "linear-gradient(to right, transparent, black 25%, black 80%, transparent)" }}
      >
        <Image
          src="/images/day-42.png"
          alt="Day Soufer"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0D0D0D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto lg:mr-[38vw] lg:ml-0 lg:text-left"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="tracking-ritual text-xs text-[#C4A882]/60 mb-12"
        >
          Fortaleza, Ceará — artista da dança e das encruzas
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(4rem,12vw,10rem)] leading-none text-[#F5F0E8] mb-6 tracking-tight"
        >
          Day Soufer
        </motion.h1>

        {/* Animated word */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="h-14 flex items-center lg:justify-start justify-center mb-12 overflow-hidden"
        >
          <span className="tracking-ritual text-xs text-[#C4A882]/50 mr-4">
            dança como
          </span>
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial italic text-2xl text-[#C4A882]"
            style={{ display: "inline-block" }}
          >
            {words[wordIndex]}
          </motion.span>
        </motion.div>

        {/* Sub description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-editorial text-lg text-[#F5F0E8]/50 max-w-lg mx-auto lg:mx-0 leading-relaxed italic"
        >
          capoeirista · candomblecista · artesã · professora · pesquisadora
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#8B3E2F] to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B3E2F]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative corner threads */}
      <div className="absolute top-8 left-8 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <line x1="0" y1="60" x2="60" y2="0" stroke="#C4A882" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="30" y2="0" stroke="#8B3E2F" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 rotate-180">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <line x1="0" y1="60" x2="60" y2="0" stroke="#C4A882" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="30" y2="0" stroke="#8B3E2F" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Botanical: palm frond bottom-left */}
      <div className="absolute bottom-0 left-0 opacity-[0.07] pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 340" width="200" height="340">
          <path d="M 100 340 C 60 270, 10 190, 5 100 C 30 130, 60 180, 100 340Z" fill="#C4A882" />
          <path d="M 100 340 C 130 260, 170 180, 190 90 C 165 120, 135 180, 100 340Z" fill="#8B3E2F" />
          <path d="M 100 340 C 80 280, 40 210, 20 130 C 50 155, 80 220, 100 340Z" fill="#B8860B" opacity="0.6" />
          <path d="M 100 340 C 120 280, 155 210, 175 130 C 150 155, 120 220, 100 340Z" fill="#C4A882" opacity="0.5" />
        </svg>
      </div>

      {/* Graphic: minimal sun top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 left-16 opacity-[0.08] pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={50 + 28 * Math.cos(angle)}
                y1={50 + 28 * Math.sin(angle)}
                x2={50 + 45 * Math.cos(angle)}
                y2={50 + 45 * Math.sin(angle)}
                stroke="#B8860B"
                strokeWidth={i % 3 === 0 ? "1.5" : "0.6"}
              />
            );
          })}
          <circle cx="50" cy="50" r="22" stroke="#B8860B" strokeWidth="0.5" fill="rgba(184,134,11,0.15)" />
        </svg>
      </motion.div>
    </section>
  );
}
