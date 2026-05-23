# Audiodescriçao — Checklist de atualização

Sempre que uma imagem, vídeo ou grafismo for **adicionado ou alterado** no site,
aplicar as regras abaixo antes de fazer o commit.

---

## Regras por tipo de elemento

### Imagens (`<Image>` Next.js)
- **Descritivas** → `alt` com frase completa descrevendo **o que está na imagem**,
  o **contexto** e a **função** na página.
  - Ruim: `alt="Day Soufer"`
  - Bom: `alt="Day Soufer em ensaio fotográfico junto a parede, retrato editorial, olhar direto para a câmera"`
- **Decorativas puras** (usadas apenas como textura de fundo, completamente
  sobrepostas por overlay) → `alt=""` (string vazia — correto pela WCAG).

### Vídeos (`<video>`)
- Adicionar `aria-label` descrevendo o conteúdo do vídeo.
- Adicionar `title` como reforço.
- Se o vídeo tiver fala, providenciar legendas (`<track kind="subtitles">`).
- O botão de play também deve ter `aria-label` descritivo.

### SVGs decorativos (fundos, linhas, padrões, grafismos sem informação)
- Adicionar `aria-hidden="true"` **tanto no SVG quanto no div-pai**, se houver.
- Exemplos: padrões de pontos/linhas de fundo, fios decorativos, filamentos,
  cantos decorativos, sombras geométricas.

### SVGs informativos (gráficos, diagramas, símbolos com significado)
- Adicionar `role="img"` no elemento `<svg>`.
- Adicionar como **primeiro filho** do SVG:
  ```html
  <title id="id-unico">Título curto do gráfico</title>
  <desc id="id-unico-desc">Descrição detalhada dos dados e estrutura visual.</desc>
  ```
- Referenciar no SVG: `aria-labelledby="id-unico" aria-describedby="id-unico-desc"`.
- Exemplos: constelação de linguagens, gráfico radar pedagógico, símbolo de Ogun.

---

## Arquivos com audiodescriçao já implementada

| Componente | Elemento | Status |
|---|---|---|
| `Hero.tsx` | Foto background (coroa dourada) | ✅ alt descritivo |
| `Hero.tsx` | Retrato editorial (ensaio-parede-01) | ✅ alt descritivo |
| `Hero.tsx` | SVGs decorativos (linhas, canto, folha, sol) | ✅ `aria-hidden` |
| `Manifesto.tsx` | SVG ornamental de fundo | ✅ `aria-hidden` |
| `Manifesto.tsx` | Retrato circular assinatura | ✅ alt descritivo |
| `Impacto.tsx` | Padrão de pontos de fundo | ✅ `aria-hidden` |
| `Impacto.tsx` | Constelação de linguagens (SVG) | ✅ `role="img"` + `<title>` + `<desc>` |
| `Solar.tsx` | Grafismo do sol (SunGraphic) | ✅ `role="img"` no container |
| `Solar.tsx` | SVGs internos do sol (raios, botânica) | ✅ `aria-hidden` |
| `Solar.tsx` | Faixa de fotos da alegria (5 fotos) | ✅ alts descritivos |
| `Ogun.tsx` | Textura de linhas de fundo | ✅ `aria-hidden` |
| `Ogun.tsx` | Ilustração mulher com facão | ✅ alt descritivo |
| `Ogun.tsx` | Porta azul de terreiro | ✅ alt descritivo |
| `Ogun.tsx` | Símbolo de Ogun (cruz de ferro) | ✅ `role="img"` + `aria-label` |
| `Ogun.tsx` | Retrato com elekes | ✅ alt descritivo |
| `Pedagogia.tsx` | Padrão diagonal de fundo | ✅ `aria-hidden` |
| `Pedagogia.tsx` | Gráfico radar pedagógico | ✅ `role="img"` + `<title>` + `<desc>` |
| `Pedagogia.tsx` | Faixa de 3 fotos (crianças, CCBJ, turma) | ✅ alts descritivos |
| `Trabalhos.tsx` | SVG ornamental de fundo | ✅ `aria-hidden` |
| `Trabalhos.tsx` | Imagem de destaque (Viração) | ✅ alt com título + ano + parceria |
| `Tsuru.tsx` | Fios decorativos animados sobre foto | ✅ `aria-hidden` |
| `Tsuru.tsx` | Foto da porta azul (TSURU) | ✅ alt descritivo |
| `Galeria.tsx` | Todas as fotos da galeria | ✅ alt com título + descrição |
| `Capoeiranca.tsx` | Foto na praia | ✅ alt descritivo |
| `Capoeiranca.tsx` | Foto do fusca | ✅ alt descritivo |
| `DayCrianca.tsx` | Vídeo documentário EDISCA | ✅ `aria-label` + `title` |
| `DayCrianca.tsx` | Botão de play do vídeo | ✅ `aria-label` descritivo |
| `DayCrianca.tsx` | Ícone de play (SVG) | ✅ `aria-hidden` |
| `DayCrianca.tsx` | Grafismo conector central | ✅ `aria-hidden` |
| `DayCrianca.tsx` | Divisor mobile (SVG) | ✅ `aria-hidden` |
| `DayCrianca.tsx` | Setas indicadoras (SVGs) | ✅ `aria-hidden` |
| `DayCrianca.tsx` | Retrato atual Day Soufer | ✅ alt descritivo (pré-existente) |
| `Timeline.tsx` | Padrão de grade de fundo | ✅ `aria-hidden` |

---

## Ao adicionar um novo componente com imagens/grafismos

1. **Identifique** se o elemento é decorativo ou informativo.
2. **Aplique** o padrão correto da tabela acima.
3. **Atualize** a tabela neste arquivo com a nova linha.
4. **Escreva os alts em português**, com contexto completo.
