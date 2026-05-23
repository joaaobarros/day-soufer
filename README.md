# Day Soufer — dança como travessia

> Portfólio artístico de Dayana Ferreira de Souza (Day Soufer) —
> artista da dança e das encruzas, capoeirista, candomblecista,
> artesã e criadora do TSURU Ateliê. Fortaleza, Ceará.

---

## Sobre o projeto

Este site não é um portfólio corporativo. É uma **experiência artística sensorial** — entre um filme, um terreiro, uma videodança, um arquivo vivo e um ateliê têxtil.

Cada seção foi concebida como um movimento coreográfico. O scroll é uma travessia.

---

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 16** | Framework principal (App Router, static export) |
| **TypeScript** | Tipagem e segurança |
| **Tailwind CSS** | Estilização com paleta artesanal |
| **Framer Motion** | Animações e transições cinematográficas |
| **Lenis** | Smooth scroll orgânico |
| **next/font** | Tipografia (Playfair Display · Cormorant Garamond · Inter) |

---

## Paleta

```
Terracota escuro   #8B3E2F
Bege queimado      #C4A882
Ferrugem           #7C3D1E
Dourado opaco      #B8860B
Preto profundo     #0D0D0D
Branco cru         #F5F0E8
```

---

## Seções

1. **Hero** — Tela cheia com animações vivas e palavras em rotação
2. **Manifesto** — Texto poético sobre corpo-território e pedagogia
3. **Trajetória** — Linha do tempo sensorial e não-linear (constelação)
4. **Capoeirança** — Pesquisa *Vadiação: Veículo de criação*
5. **TSURU Ateliê** — Entre linhas e corpos — extensão da dança em matéria
6. **Pedagogia** — Visualização dos espaços de formação
7. **Impacto** — Gráficos poéticos e constelação pedagógica
8. **Galeria Viva** — Mosaico multimídia não-linear por categorias
9. **Contato** — Agenda, serviços e redes sociais

---

## Desenvolvimento local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de produção em ./out
```

---

## Deploy no GitHub Pages

### 1. Push para o GitHub

```bash
git init
git add .
git commit -m "feat: portfólio artístico Day Soufer"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/day-soufer.git
git push -u origin main
```

### 2. Ativar GitHub Pages

No repositório: **Settings → Pages → Source → GitHub Actions**

O deploy acontece automaticamente a cada push na branch `main`.

URL de publicação: `https://SEU_USUARIO.github.io/day-soufer/`

### 3. Domínio personalizado (opcional)

Crie `public/CNAME` com seu domínio:
```
daysoufer.com.br
```

Configure o DNS com CNAME apontando para `SEU_USUARIO.github.io`.

---

## Estrutura

```
day-soufer/
├── .github/workflows/deploy.yml   # CI/CD automático
├── public/images/                 # Adicionar fotos e vídeos aqui
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Layout raiz + metadados
│   │   ├── page.tsx               # Composição principal
│   │   └── globals.css            # Estilos globais + animações
│   └── components/
│       ├── SmoothScroll.tsx
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Manifesto.tsx
│       ├── Timeline.tsx
│       ├── Capoeiranca.tsx
│       ├── Tsuru.tsx
│       ├── Pedagogia.tsx
│       ├── Impacto.tsx
│       ├── Galeria.tsx
│       └── Contato.tsx
├── next.config.ts
└── tailwind.config.ts
```

---

*Site concebido como obra viva — arquivo corporal, instalação sensorial,
costura entre arte e vida.*
