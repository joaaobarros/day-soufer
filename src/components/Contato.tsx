"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "Instagram pessoal",
    handle: "@day.soufer",
    url: "https://www.instagram.com/day.soufer/",
    desc: "corpo, dança, cotidiano e a Acasemia da Tia Day",
  },
  {
    label: "TSURU Ateliê",
    handle: "@tsuru.atelie",
    url: "https://www.instagram.com/tsuru.atelie/",
    desc: "transformando linha em coisa-afeto",
  },
];

const services = [
  {
    title: "Oficinas",
    desc: "Workshops de dança contemporânea, capoeirança e processos criativos. Para grupos, escolas e espaços culturais.",
    tag: "coletivo",
  },
  {
    title: "Aulas particulares",
    desc: "Formação técnica personalizada em dança clássica e contemporânea.",
    tag: "individual",
  },
  {
    title: "Dramaturgia",
    desc: "Colaboração em processos criativos de dança e performance como dramaturgista.",
    tag: "criativo",
  },
  {
    title: "Palestras e formações",
    desc: "Encontros sobre pedagogia da dança, Capoeirança, videodança e educação pública em arte.",
    tag: "formativo",
  },
  {
    title: "TSURU — figurinos e objetos",
    desc: "Criação de figurinos, peças têxteis e objetos-afeto para projetos artísticos.",
    tag: "ateliê",
  },
  {
    title: "Apresentações",
    desc: "Espetáculos, intervenções urbanas e performances. Agenda disponível sob consulta.",
    tag: "cênico",
  },
];

export default function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#080808] overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(139,62,47,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B3E2F]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#8B3E2F]" />
            <span className="tracking-ritual text-xs text-[#8B3E2F]">
              contato e agenda
            </span>
            <div className="w-8 h-px bg-[#8B3E2F]" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-6">
            Vamos criar juntos?
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 max-w-lg mx-auto">
            Para aulas, oficinas, projetos, apresentações, dramaturgias ou simplesmente
            para trocar uma ideia sobre dança e vida.
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <a
            href="mailto:dayana.soufer@gmail.com"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-[#8B3E2F]/10 border border-[#8B3E2F]/40 hover:bg-[#8B3E2F]/20 hover:border-[#8B3E2F] text-[#C4A882] transition-all duration-500"
          >
            <span className="tracking-ritual text-xs">enviar mensagem</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="tel:+5585996324687"
            className="tracking-ritual text-xs text-[#C4A882]/40 hover:text-[#C4A882]/70 transition-colors duration-300"
          >
            (85) 99632-4687
          </a>
        </motion.div>

        {/* Services */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="tracking-ritual text-xs text-[#8B3E2F] mb-8 text-center"
          >
            possibilidades de encontro
          </motion.p>
          <div className="grid md:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5 border border-white/5 hover:border-[#8B3E2F]/20 transition-all duration-400 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="font-display text-sm text-[#F5F0E8]/80 group-hover:text-[#F5F0E8] transition-colors">
                    {s.title}
                  </p>
                  <span className="text-[9px] tracking-ritual px-1.5 py-0.5 border border-[#8B3E2F]/20 text-[#8B3E2F]/50 ml-2 flex-shrink-0">
                    {s.tag}
                  </span>
                </div>
                <p className="text-xs text-[#F5F0E8]/40 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-4 mb-20">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.handle}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between p-5 border border-white/5 hover:border-[#8B3E2F]/30 transition-all duration-500 group"
            >
              <div>
                <p className="text-xs tracking-wider text-[#C4A882]/50 mb-1">
                  {link.label}
                </p>
                <p className="font-display text-lg text-[#F5F0E8] group-hover:text-[#C4A882] transition-colors">
                  {link.handle}
                </p>
                <p className="font-editorial italic text-xs text-[#C4A882]/30 mt-0.5">
                  {link.desc}
                </p>
              </div>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="text-[#8B3E2F] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center pt-12 border-t border-white/5"
        >
          <p className="font-display text-2xl text-[#F5F0E8]/20 mb-2">
            Day Soufer
          </p>
          <p className="font-editorial italic text-sm text-[#C4A882]/20">
            artista da dança e das encruzas · Fortaleza, Ceará
          </p>
          <p className="text-[10px] tracking-ritual text-[#F5F0E8]/10 mt-6">
            dança como travessia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
