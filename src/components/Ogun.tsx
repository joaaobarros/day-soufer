"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const facetas = [
  {
    titulo: "O ferro na dança",
    corpo:
      "O facão que abre o mato não é diferente da ginga que abre espaço no mundo. Na Capoeirança, a energia de Ogun aparece no golpe preciso, na tensão que guarda a batalha, no corpo que não recua.",
  },
  {
    titulo: "O artesão que cria",
    corpo:
      "Ogun não só destrói. Ele forja. O mesmo orixá que carrega o facão também molda o ferro bruto até virar instrumento. No TSURU, essa feitura se repete: linha, agulha, tecido, matéria que o gesto transforma.",
  },
  {
    titulo: "Abrir caminho é pedagogia",
    corpo:
      "Cada aula no chão público é um facão num matagal. Ogun desbrava para que outros passem. A pedagogia de Day não instrui corpos. Ela abre passagem para corpos que nunca teriam caminho.",
  },
];

function Faceta({
  titulo,
  corpo,
  delay,
}: {
  titulo: string;
  corpo: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-[#8B3E2F]/20 pt-6"
    >
      <p className="font-display text-lg text-[#C4A882] mb-3">{titulo}</p>
      <p className="text-sm text-[#F5F0E8]/60 leading-relaxed">{corpo}</p>
    </motion.div>
  );
}

export default function Ogun() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true });
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  return (
    <section
      id="ogun"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0608] overflow-hidden"
    >
      {/* Iron texture, diagonal lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern
              id="iron-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#8B3E2F"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iron-lines)" />
        </svg>
      </div>

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(139,62,47,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-10 h-px bg-[#8B3E2F]" />
          <span className="tracking-ritual text-xs text-[#8B3E2F]">
            axé · fundamento
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: image + title block */}
          <div>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-[#F5F0E8] tracking-tight">
                Irìn Omu
              </h2>
              <p className="font-editorial italic text-xl text-[#C4A882]/70 mt-3">
                Filha de Ogun · Candomblé
              </p>
            </motion.div>

            {/* Illustration, woman with machete */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full max-w-sm overflow-hidden"
            >
              <Image
                src="/images/ilustracao-espada.png"
                alt="Ilustração de mulher negra segurando um facão erguido, referência ao orixá Ogun: força, abertura de caminhos e coragem"
                fill
                className="object-cover object-center"
              />
              {/* Overlay to darken slightly and integrate with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0608]/30 to-transparent" />

              {/* Caption overlay */}
              <div className="absolute bottom-6 left-6">
                <p className="tracking-ritual text-[10px] text-[#C4A882]/50">
                  o facão de Ogun: que corta e que cria
                </p>
              </div>
            </motion.div>

            {/* Blue door, textural detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="relative mt-6 h-32 overflow-hidden"
            >
              <Image
                src="/images/porta-azul.png"
                alt="Porta azul de terreiro de Candomblé: detalhe arquitetônico de entrada sagrada, azul intenso como cor de proteção e passagem espiritual"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[#0A0608]/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0608]/80 via-transparent to-[#0A0608]/80" />
            </motion.div>
          </div>

          {/* Right: text content */}
          <div className="flex flex-col gap-12">
            {/* Lead paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-editorial italic text-[clamp(1.2rem,2.5vw,1.6rem)] text-[#F5F0E8]/80 leading-relaxed mb-6">
                O orixá do ferro forja quem o carrega.
              </p>
              <p className="text-base text-[#F5F0E8]/55 leading-relaxed mb-4">
                Ogun abre o caminho. Não com palavras, mas com o golpe certeiro
                do facão. Irìn Omu é o nome que o terreiro pronuncia. Um título
                que é também uma responsabilidade: a de desbravar passagem para
                que outros possam existir.
              </p>
              <p className="text-base text-[#F5F0E8]/55 leading-relaxed">
                O candomblé não é pano de fundo na trajetória de Day Soufer. É
                fundamento. A dança, o ensino, a costura, a pesquisa: tudo
                passa pelo axé antes de virar obra.
              </p>
            </motion.div>

            {/* Divider ornament */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 origin-left"
            >
              <div className="w-full h-px bg-gradient-to-r from-[#8B3E2F]/40 via-[#8B3E2F]/10 to-transparent" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="flex-shrink-0 text-[#8B3E2F]/40"
                role="img"
                aria-label="Símbolo de Ogun: cruz de ferro com quatro eixos cardinais e diagonais, representando abertura de caminhos nos quatro cantos"
              >
                {/* Simple iron/cross motif, Ogun's symbol */}
                <line
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <line
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <line
                  x1="5"
                  y1="5"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <line
                  x1="19"
                  y1="5"
                  x2="5"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* Three facets */}
            <div className="space-y-8">
              {facetas.map((f, i) => (
                <Faceta key={i} titulo={f.titulo} corpo={f.corpo} delay={i * 0.12} />
              ))}
            </div>

            {/* Portrait with elekes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-5 pt-8 border-t border-[#8B3E2F]/15"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#8B3E2F]/30">
                <Image
                  src="/images/retrato-elekes.png"
                  alt="Day Soufer usando elekes, colares sagrados do Candomblé. Irìn Omu, filha de Ogun, Ketu"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-lg text-[#F5F0E8]">
                  Day Soufer
                </p>
                <p className="font-editorial italic text-sm text-[#C4A882]/55 mt-0.5">
                  Irìn Omu · Filha de Ogun
                </p>
                <p className="tracking-ritual text-[10px] text-[#8B3E2F]/50 mt-1">
                  Candomblé · Ketu
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
