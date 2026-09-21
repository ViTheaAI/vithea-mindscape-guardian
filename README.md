# ViThea — Independent AI Technology & Software Solutions

> **Building Practical AI Solutions for a Changing World.**  
> Practical technology built around people, problems, and possibilities.

Official website repository for **ViThea** ([vithea.online](https://vithea.online/)).

---

## 1. Company Overview & Positioning

ViThea is an independent AI technology company that develops practical software solutions, intelligent applications, and automation tools for businesses and organizations across diverse industries.

We combine artificial intelligence, software engineering, and emerging technologies to address real-world operational challenges and create new possibilities.

### Core Disciplines
- **AI Application Development**: Purpose-built intelligent tools, domain assistants, and document intelligence.
- **Workflow Automation**: System integrations, unstructured message parsing, and event-driven automation.
- **Data-Powered Tools**: Operational visibility dashboards, anomaly detection, and data structuring pipelines.
- **Custom Software**: Tailored internal administration platforms, APIs, and microservices.
- **AI Prototypes & Proofs of Concept**: Rapid technical feasibility and accuracy validation.
- **AI Technology Integration**: Model orchestration, response latency optimization, and safe legacy system integration.

---

## 2. Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with React 19 & Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom dark midnight theme
- **Icons**: Lucide React
- **Architecture**: Modular, static pre-rendering, full SEO metadata & OpenGraph, sitemap & robots.txt

---

## 3. Project Structure

```
vithea-website/
├── public/                 # Static assets & icons
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # Company story, philosophy, founder section
│   │   ├── contact/        # Full commercial project intake form
│   │   ├── how-we-work/    # 5-step engineering methodology
│   │   ├── privacy/        # Privacy policy
│   │   ├── solutions/      # In-depth breakdown of the 6 solution categories
│   │   ├── terms/          # Terms of use
│   │   ├── work/           # Selected work & filterable case studies
│   │   ├── layout.tsx      # Root layout, header, footer, SEO metadata
│   │   ├── page.tsx        # Homepage
│   │   ├── robots.ts       # Automated robots.txt generator
│   │   └── sitemap.ts      # Automated sitemap.xml generator
│   ├── components/
│   │   ├── contact/        # ContactForm component
│   │   ├── home/           # Homepage sections (Hero, WhatWeDo, Solutions, etc.)
│   │   ├── layout/         # Header, Footer, navigation
│   │   ├── ui/             # Logo, StatusBadge, reusable UI
│   │   └── work/           # ProjectModal, case study cards
│   └── data/               # Extensible typed content stores
│       ├── navigation.ts   # Navigation and footer links
│       ├── process.ts      # 5-step methodology data
│       ├── projects.ts     # Extensible projects schema with transparent statuses
│       └── solutions.ts    # Solutions catalog
└── package.json
```

---

## 4. Getting Started Locally

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build production bundle
```bash
npm run build
npm run start
```

---

## 5. Adding New Projects

To add or update case studies, simply edit `src/data/projects.ts`. Each project follows an extensible schema:

```typescript
{
  id: 'my-project-id',
  slug: 'my-project-slug',
  title: 'Project Title',
  category: 'Workflow Automation',
  status: 'In Development', // 'Delivered' | 'In Development' | 'Proof of Concept' | 'Exploration' | 'Internal R&D'
  statusColor: 'blue',
  shortDescription: '...',
  challenge: '...',
  approach: '...',
  technologies: ['Python', 'React', 'FastAPI'],
  currentStatusDescription: '...',
  capabilities: ['...'],
  featured: true
}
```

---

## 6. Deploying to `vithea.online`

### Deploy via Vercel (Recommended)
1. Push this repository to GitHub under `ViTheaAI`:
   ```bash
   git remote add origin git@github.com:ViTheaAI/vithea-website.git
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/).
3. In the Vercel project settings, configure the custom domain `vithea.online`.
4. Update DNS records (A record pointing to `76.76.21.21` or CNAME `cname.vercel-dns.com`).

---

## 7. License & Rights

© ViThea. All rights reserved.
