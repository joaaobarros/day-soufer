"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function DayCrianca() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  return (
    <section
      id="day-crianca"
      ref={sectionRef}
      className="relative py-24 md:py-40 px-6 md:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#8B3E2F]" />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#8B3E2F]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              arquivo & presente
            </span>
            <div className="w-8 h-px bg-[#8B3E2F]" />
          </div>

          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] text-[#F5F0E8] leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            A menina que já sabia
          </h2>
          <p
            className="text-lg text-[#C4A882]/55 italic max-w-lg mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Dois tempos. Um só destino.
          </p>
        </motion.div>

        {/* Main visual: two panels + connecting arrow */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0">

          {/* ── LEFT: Video clip ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-[42%] flex-shrink-0"
          >
            {/* Archival frame border */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#8B3E2F]/40 via-transparent to-[#C4A882]/20 rounded-sm pointer-events-none z-10" />

              {/* Film-strip top */}
              <div className="flex gap-1 mb-1 px-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-full bg-[#1a1410] border border-[#2a2010]/60 rounded-[1px]"
                  />
                ))}
              </div>

              {/* Video container with sepia/grain treatment */}
              <div className="relative overflow-hidden rounded-sm bg-[#0a0805]"
                   style={{ aspectRatio: "16/9" }}>
                <video
                  ref={videoRef}
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/video/day_crianca_entrevista.mp4`}
                  poster={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/video/day_crianca_poster.jpg`}
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(30%) contrast(1.1) brightness(0.95)" }}
                  onEnded={() => setVideoPlaying(false)}
                  playsInline
                />

                {/* Vignette overlay */}
                <div className="absolute inset-0 pointer-events-none"
                     style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)" }} />

                {/* Play button, shown before playing */}
                {!videoPlaying && (
                  <motion.button
                    onClick={handlePlay}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/play"
                    aria-label="Reproduzir vídeo"
                  >
                    {/* Pulsing ring */}
                    <span className="relative flex items-center justify-center">
                      <span className="absolute inline-flex rounded-full h-16 w-16 bg-[#8B3E2F]/30 animate-ping" />
                      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#8B3E2F]/90 group-hover/play:bg-[#8B3E2F] backdrop-blur-sm transition-colors">
                        <svg
                          className="w-5 h-5 text-[#F5F0E8] ml-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                    <span
                      className="text-[10px] tracking-[0.2em] text-[#C4A882]/70 uppercase"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      reproduzir
                    </span>
                  </motion.button>
                )}

                {/* Year badge */}
                <div className="absolute top-3 left-3 bg-[#0a0805]/80 border border-[#8B3E2F]/50 px-2 py-0.5 backdrop-blur-sm">
                  <span
                    className="text-[10px] tracking-[0.2em] text-[#8B3E2F]"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    EDISCA · documentário
                  </span>
                </div>
              </div>

              {/* Film-strip bottom */}
              <div className="flex gap-1 mt-1 px-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-full bg-[#1a1410] border border-[#2a2010]/60 rounded-[1px]"
                  />
                ))}
              </div>
            </div>

            {/* Label below video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 text-center"
            >
              <span
                className="text-[11px] tracking-[0.18em] text-[#C4A882]/50 uppercase"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Day Soufer · documentário EDISCA, criança
              </span>
              {/* Pointer arrow down */}
              <div className="flex justify-center mt-2">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M8 0 L8 16 M2 10 L8 18 L14 10" stroke="#8B3E2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
              <p
                className="mt-1 text-xs text-[#F5F0E8]/30 italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ela
              </p>
            </motion.div>
          </motion.div>

          {/* ── CENTER: Grafismo conector ── */}
          <div className="hidden md:flex flex-col items-center justify-center flex-1 relative min-w-[120px]">
            <motion.svg
              width="100"
              height="200"
              viewBox="0 0 100 200"
              fill="none"
              className="overflow-visible"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {/* Top vertical line */}
              <motion.line
                x1="50" y1="0" x2="50" y2="62"
                stroke="#8B3E2F"
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={{ scaleY: 0, originY: "0%" }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
              />

              {/* Outer ring, pulsante */}
              <motion.circle
                cx="50" cy="100" r="28"
                stroke="#8B3E2F"
                strokeWidth="0.6"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.35 } : {}}
                transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "50px 100px" }}
              />

              {/* Inner ring */}
              <motion.circle
                cx="50" cy="100" r="18"
                stroke="#C4A882"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3 3"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.4 } : {}}
                transition={{ delay: 1.5, duration: 0.6 }}
                style={{ transformOrigin: "50px 100px" }}
              />

              {/* Solar rays, 8 pontos cardeais */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 21 * Math.cos(rad);
                const y1 = 100 + 21 * Math.sin(rad);
                const x2 = 50 + 29 * Math.cos(rad);
                const y2 = 100 + 29 * Math.sin(rad);
                const isDiag = angle % 90 !== 0;
                return (
                  <motion.line
                    key={angle}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#8B3E2F"
                    strokeWidth={isDiag ? "0.5" : "0.9"}
                    strokeLinecap="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: isDiag ? 0.3 : 0.6, scale: 1 } : {}}
                    transition={{ delay: 1.6 + i * 0.06, duration: 0.4 }}
                    style={{ transformOrigin: "50px 100px" }}
                  />
                );
              })}

              {/* Center dot */}
              <motion.circle
                cx="50" cy="100" r="3"
                fill="#8B3E2F"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.85 } : {}}
                transition={{ delay: 1.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "50px 100px" }}
              />

              {/* Left arrow (←) pointing toward video */}
              <motion.path
                d="M 22 100 L 8 100 M 14 93 L 6 100 L 14 107"
                stroke="#8B3E2F"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0, x: 6 }}
                animate={inView ? { opacity: 0.55, x: 0 } : {}}
                transition={{ delay: 2.0, duration: 0.5 }}
              />

              {/* Right arrow (→) pointing toward photo */}
              <motion.path
                d="M 78 100 L 92 100 M 86 93 L 94 100 L 86 107"
                stroke="#C4A882"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0, x: -6 }}
                animate={inView ? { opacity: 0.55, x: 0 } : {}}
                transition={{ delay: 2.1, duration: 0.5 }}
              />

              {/* Bottom vertical line */}
              <motion.line
                x1="50" y1="138" x2="50" y2="200"
                stroke="#8B3E2F"
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{ transformOrigin: "50px 138px" }}
              />

              {/* Small horizontal tick marks on bottom line */}
              {[148, 162, 176, 190].map((y, i) => (
                <motion.line
                  key={y}
                  x1="44" y1={y} x2="56" y2={y}
                  stroke="#8B3E2F"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.3 } : {}}
                  transition={{ delay: 1.8 + i * 0.1, duration: 0.3 }}
                />
              ))}
            </motion.svg>
          </div>

          {/* Mobile divider, also grafismo */}
          <div className="md:hidden flex items-center gap-0 w-full py-2 justify-center">
            <div className="flex-1 h-px bg-[#8B3E2F]/15" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
              <circle cx="20" cy="20" r="10" stroke="#8B3E2F" strokeWidth="0.6" fill="none" opacity="0.4" />
              <circle cx="20" cy="20" r="2" fill="#8B3E2F" opacity="0.7" />
              {[0, 90, 180, 270].map((a) => {
                const r = (a * Math.PI) / 180;
                return (
                  <line
                    key={a}
                    x1={20 + 12 * Math.cos(r)} y1={20 + 12 * Math.sin(r)}
                    x2={20 + 16 * Math.cos(r)} y2={20 + 16 * Math.sin(r)}
                    stroke="#8B3E2F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"
                  />
                );
              })}
            </svg>
            <div className="flex-1 h-px bg-[#8B3E2F]/15" />
          </div>

          {/* ── RIGHT: Current photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-[42%] flex-shrink-0 flex flex-col"
          >
            <div className="relative group flex-1 flex flex-col">
              {/* Glowing border */}
              <motion.div
                className="absolute -inset-[1px] rounded-sm pointer-events-none z-10"
                style={{
                  background: "linear-gradient(135deg, transparent, rgba(196,168,130,0.15), transparent)",
                }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Expanded portrait, matches full height of left panel including film strips */}
              <div
                className="relative overflow-hidden rounded-sm bg-[#0a0805] flex-1 min-h-[300px] md:min-h-0"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/day-03.png"
                  alt="Day Soufer hoje, artista, dançarina e educadora"
                  fill
                  className="object-cover object-center"
                  style={{ filter: "contrast(1.05) brightness(0.92)" }}
                />

                {/* Warm color wash */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-color"
                  style={{ background: "rgba(180, 100, 40, 0.06)" }}
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.5) 100%)",
                  }}
                />

                {/* "Today" badge */}
                <div className="absolute top-3 right-3 bg-[#0a0805]/80 border border-[#C4A882]/30 px-2 py-0.5 backdrop-blur-sm">
                  <span
                    className="text-[10px] tracking-[0.2em] text-[#C4A882]/80"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    hoje
                  </span>
                </div>
              </div>
            </div>

            {/* Label below photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mt-4 text-center"
            >
              {/* Pointer arrow down */}
              <div className="flex justify-center mb-2">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path
                      d="M8 0 L8 16 M2 10 L8 18 L14 10"
                      stroke="#C4A882"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
              <p
                className="text-xs text-[#F5F0E8]/30 italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ela, ainda
              </p>
              <span
                className="text-[11px] tracking-[0.18em] text-[#C4A882]/50 uppercase"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Day Soufer · artista, educadora, dançarina
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom poetic caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-12 h-px bg-[#8B3E2F]/40" />
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="1.5" fill="#8B3E2F" opacity="0.6" />
              <circle cx="6" cy="6" r="4" stroke="#8B3E2F" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
            <div className="w-12 h-px bg-[#8B3E2F]/40" />
          </div>

          <blockquote
            className="text-xl md:text-2xl text-[#F5F0E8]/80 italic leading-relaxed mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            "O corpo guarda o que a memória esquece."
          </blockquote>

          <p
            className="text-sm text-[#C4A882]/45 leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A criança filmada no documentário da EDISCA carregava, sem saber, tudo que seria.{" "}
            <br className="hidden md:block" />
            O mesmo olhar. A mesma presença. A mesma Day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
