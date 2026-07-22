# Portfolio — Badr

Portfolio professionnel bilingue (FR/EN) pour présentation auprès de clients et recruteurs.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- next-intl (i18n)

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — redirection automatique vers `/fr`.

## Build production

```bash
npm run build
npm run start
```

## Personnalisation du contenu

Modifier vos informations dans :

- [`lib/data/profile.ts`](lib/data/profile.ts) — nom, bio, email, LinkedIn, compétences
- [`lib/data/projects.ts`](lib/data/projects.ts) — projets et études de cas

Remplacer les placeholders :
- `contact@example.com` → votre email
- `https://linkedin.com/in/your-profile` → votre profil LinkedIn
- URLs demo/GitHub des projets

Ajouter optionnellement :
- `public/cv/` — CV téléchargeables (FR / EN)
- `public/images/profile.jpg` — photo de profil

## Variables d'environnement

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

## Déploiement Vercel

### Option A — Import GitHub (recommandé)

1. Pousser le code sur `https://github.com/Badr0h/portfolio`
2. Aller sur [vercel.com/new](https://vercel.com/new)
3. Importer le repo **Badr0h/portfolio**
4. Vercel détecte automatiquement Next.js
5. Ajouter `NEXT_PUBLIC_SITE_URL` avec l'URL de production
6. Cliquer **Deploy**

### Option B — CLI Vercel

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

## Structure

```
app/[locale]/          → pages localisées (fr, en)
components/            → sections, layout, UI
lib/data/              → source de vérité du contenu
messages/              → traductions UI (fr.json, en.json)
i18n/                  → routing et navigation next-intl
```

## Sections

1. Hero — positionnement full-stack
2. Projet vedette — ZenithConvert
3. Projets — grille de projets (ZenithConvert, Comptyx, Serlimpin…)
4. Compétences — groupées par catégorie
5. À propos — bio + liens sociaux
6. Contact — email + GitHub/LinkedIn

Pages case study : `/fr/projects/comptyx`, `/en/projects/comptyx`, etc.
