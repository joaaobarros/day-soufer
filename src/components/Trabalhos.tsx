"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categorias = ["tudo", "espetáculo", "pesquisa", "ensino", "coletivo"];

const trabalhos = [
  {
    id: 0,
    titulo: "Viração",
    categoria: "espetáculo",
    ano: "2017",
    parceria: "intérprete-criadora · direção João Paulo Barros",
    desc: "\"A ideia de índio que permeia o imaginário popular, cinco séculos após a ocupação portuguesa no Brasil, permanece como uma imagem-estereótipo de um ser mítico.\" Proposta cênica de dança contemporânea que questiona o que é ser índio hoje — identidade, memória e corpo como territórios de resistência. Intérpretes-criadores: Clarissa Costa, Dayana Ferreira, Érica Martins, João Paulo Barros, Júnior Meireles. Apoio: Edital das Artes de Fortaleza 2016 · SECULTFOR · Secult-CE.",
    tags: ["identidade indígena", "dança contemporânea", "criação coletiva", "2017"],
    destaque: true,
    imagem: "/images/viracao-confetes.png",
  },
  {
    id: 1,
    titulo: "YUGO",
    categoria: "espetáculo",
    ano: "2022–2026",
    parceria: "com Daniela Yara Cantillo Castrillón",
    desc: "Como dramaturgista, Day teceu a dramaturgia de YUGO — solo que explora feminilidade, resistência e a voz coletiva de mulheres que resistem à misoginia e ao racismo. O espetáculo circulou pela Escola Porto Iracema das Artes e pela Vila das Artes, com oficinas gratuitas de danças afro-colombianas. Apoio: Secult-CE.",
    tags: ["dramaturgia", "afro-diaspórico", "resistência"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Danças em Travessia",
    categoria: "espetáculo",
    ano: "2025–2026",
    parceria: "Theatro José de Alencar",
    desc: "Programação integrada reunindo as principais instituições de formação em dança de Fortaleza. No Dia Internacional da Dança, Day leva estudantes de todas as idades ao Theatro José de Alencar — afirmação de que dançar é um direito, não um privilégio.",
    tags: ["dança pública", "Theatro José de Alencar", "dia da dança"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Vadiação: Veículo de Criação da Capoeirança",
    categoria: "pesquisa",
    ano: "2015–presente",
    parceria: "Pesquisa autoral",
    desc: "Pesquisa cênica que investiga o trabalho entre dançarinos e capoeiristas. A Capoeirança não é mistura — é escuta. A ginga vira dramaturgia; o jogo, partitura. Um território limiar onde a dança contemporânea aprende a vadiar e a capoeira aprende a coreografar o improviso.",
    tags: ["capoeira angola", "improviso", "laboratório"],
    destaque: true,
  },
  {
    id: 4,
    titulo: "Residência Pina Bausch — 10 anos sem Pina",
    categoria: "pesquisa",
    ano: "2019",
    parceria: "Escola Porto Iracema das Artes · Vila das Artes",
    desc: "Residência de Dança-Teatro em homenagem aos 10 anos da morte de Pina Bausch. Mostra da residência com apresentações abertas e gratuitas, investigando a herança do teatro-dança na cena cearense.",
    tags: ["teatro-dança", "Pina Bausch", "residência artística"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Midiadança — Lab de Dança e Multimídia",
    categoria: "pesquisa",
    ano: "2010s",
    parceria: "Universidade Federal do Ceará",
    desc: "Pesquisa e co-coordenação do Festival Vai Dar Videodança. O corpo que entra na câmera e sai transformado. A dança como imagem e a imagem como gesto — investigação da presença em contexto virtual e midiático.",
    tags: ["videodança", "UFC", "festival", "multimídia"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "Sensibilizar e Acompanhar",
    categoria: "pesquisa",
    ano: "2020–2021",
    parceria: "UFC — pesquisa em contexto virtual",
    desc: "Pesquisa sobre pedagogia da dança em contexto virtual. Como construir presença e escuta à distância? O estudo investigou modos de manter o vínculo pedagógico durante o distanciamento — e encontrou que o corpo sempre acha um caminho.",
    tags: ["pedagogia virtual", "pandemia", "presença", "escuta"],
    destaque: false,
  },
  {
    id: 7,
    titulo: "Vila das Artes",
    categoria: "ensino",
    ano: "2018–presente",
    parceria: "Escola Pública de Dança de Fortaleza",
    desc: "Professora de Dança Clássica e Abordagens Técnicas. Ensino público e gratuito — formação de corpos que não teriam acesso de outra forma. A Vila das Artes como território de pertencimento artístico e afirmação de que a dança é para todos.",
    tags: ["ballet clássico", "escola pública", "formação"],
    destaque: false,
  },
  {
    id: 8,
    titulo: "CCBJ — Centro Cultural Bom Jardim",
    categoria: "ensino",
    ano: "2018–presente",
    parceria: "Curso Básico de Longa Duração",
    desc: "Dança na periferia. O Bom Jardim como território legítimo de criação artística. Cada aula é uma aposta na democratização da arte — que o endereço de nascimento não define o acesso à formação.",
    tags: ["periferia", "dança clássica", "formação longa duração"],
    destaque: false,
  },
  {
    id: 9,
    titulo: "ACASEMIA DA TIA DAY",
    categoria: "ensino",
    ano: "2020–presente",
    parceria: "Projeto autoral",
    desc: "Musculação em Casa e Danças — porque treino e alegria não são coisas separadas. Uma prova diária de que o humor também é político e que o corpo que ri também está se formando. O projeto une técnica, improviso e bom-humor como método.",
    tags: ["treino", "alegria", "humor", "corpo popular"],
    destaque: false,
  },
  {
    id: 10,
    titulo: "TSURU Ateliê",
    categoria: "coletivo",
    ano: "2020–presente",
    parceria: "Ateliê autoral",
    desc: "Extensão da pesquisa onde a manualidade e a dança se encontram sem hierarquia. Figurinos, dobraduras, objetos de afeto — o TSURU nasceu do que sobrou depois da aula. Costurar é também uma forma de coreografar.",
    tags: ["figurino", "costura", "artesanato", "objeto-afeto"],
    destaque: false,
  },
  {
    id: 11,
    titulo: "NODO_COLETIVO",
    categoria: "coletivo",
    ano: "2020–presente",
    parceria: "Plataforma artística latino-americana",
    desc: "Direção da plataforma artística e de mediação cultural latino-americana NODO. Arte que atravessa fronteiras. O coletivo como modelo de produção horizontal, solidária e internacionalista — Fortaleza dialogando com a América Latina.",
    tags: ["coletivo", "América Latina", "mediação cultural", "horizontal"],
    destaque: true,
  },
];

const categoryColors: Record<string, string> = {
  "espetáculo": "#8B3E2F",
  "pesquisa": "#B8860B",
  "ensino": "#5C6E4E",
  "coletivo": "#4A5568",
};

const categoryIcons: Record<string, string> = {
  "espetáculo": "◈",
  "pesquisa": "◎",
  "ensino": "◇",
  "coletivo": "◉",
};

function WorkCard({ trabalho, index }: { trabalho: typeof trabalhos[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const color = categoryColors[trabalho.categoria] || "#8B3E2F";
  const icon = categoryIcons[trabalho.categoria] || "◈";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className={`group border border-white/5 hover:border-white/15 transition-all duration-500 bg-[#080808] cursor-pointer overflow-hidden ${
        trabalho.destaque ? "md:col-span-2" : ""
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Featured image for destaque cards */}
      {"imagem" in trabalho && trabalho.imagem && (
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <Image
            src={trabalho.imagem}
            alt={trabalho.titulo}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/20 to-transparent" />
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-lg" style={{ color }}>{icon}</span>
            <span
              className="tracking-ritual text-[9px] px-2 py-0.5 border"
              style={{ color, borderColor: `${color}40` }}
            >
              {trabalho.categoria}
            </span>
            <span className="tracking-ritual text-[9px] text-[#C4A882]/30">
              {trabalho.ano}
            </span>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#C4A882]/30 group-hover:text-[#C4A882]/60 transition-colors text-xl leading-none flex-shrink-0"
          >
            +
          </motion.span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl text-[#F5F0E8] mb-2 group-hover:text-white transition-colors duration-300">
          {trabalho.titulo}
        </h3>
        <p className="font-editorial italic text-sm text-[#C4A882]/50 mb-4">
          {trabalho.parceria}
        </p>

        {/* Collapsible body */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="text-[#F5F0E8]/60 leading-relaxed text-sm mb-5 pt-2 border-t border-white/5">
                {trabalho.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {trabalho.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-wider px-2 py-0.5 text-[#C4A882]/40 border border-[#C4A882]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview line when collapsed */}
        {!expanded && (
          <p className="text-[#F5F0E8]/35 text-xs leading-relaxed line-clamp-2">
            {trabalho.desc}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.07 + 0.3 }}
        className="h-px origin-left"
        style={{ background: `linear-gradient(to right, ${color}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function Trabalhos() {
  const [activeCategoria, setActiveCategoria] = useState("tudo");
  const sectionRef = useRef<HTMLElement>(null);
  const titleInView = useInView(sectionRef, { once: true });

  const filtrados =
    activeCategoria === "tudo"
      ? trabalhos
      : trabalhos.filter((t) => t.categoria === activeCategoria);

  return (
    <section
      id="trabalhos"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #08070A 60%, #0D0D0D 100%)" }}
    >
      {/* Background ornament */}
      <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 500 500">
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={i}
              cx="500"
              cy="0"
              r={80 + i * 50}
              stroke="#C4A882"
              strokeWidth="0.4"
              fill="none"
            />
          ))}
        </svg>
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
              obras · projetos · pesquisas
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#F5F0E8] leading-none mb-4">
            Trabalhos
          </h2>
          <p className="font-editorial italic text-lg text-[#C4A882]/60 max-w-xl">
            registros de uma prática que não cabe em um único nome
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoria(cat)}
              className={`tracking-ritual text-[10px] px-4 py-2 border transition-all duration-300 ${
                activeCategoria === cat
                  ? "border-[#8B3E2F] text-[#C4A882] bg-[#8B3E2F]/10"
                  : "border-white/10 text-[#F5F0E8]/30 hover:border-[#8B3E2F]/30 hover:text-[#C4A882]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Works grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtrados.map((t, i) => (
              <WorkCard key={t.id} trabalho={t} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center font-editorial italic text-sm text-[#C4A882]/25 mt-12"
        >
          clique em cada trabalho para expandir o registro
        </motion.p>
      </div>
    </section>
  );
}
