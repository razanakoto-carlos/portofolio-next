# Razanakoto Carlos — Portfolio

Personal portfolio of **Razanakoto Carlos**, a FullStack JavaScript/TypeScript developer based in Antananarivo, Madagascar.

**Live site:** [razanakoto-carlos.vercel.app](https://razanakoto-carlos.vercel.app)

The site is in French and presents my profile, tech stack, projects, experience and a contact form.

## Features

- **Single-page layout**: Hero, À propos, Tech Stack, Projets, Expérience & Formation, Contact
- **Dark / light theme**: saved in `localStorage`, applied before first paint (no flash), with a cross-fade via the View Transitions API
- **Animations**: CSS entrance animations in the hero, scroll-linked reveals and a scroll progress bar (framer-motion); `prefers-reduced-motion` is respected
- **Projects**: cards with screenshots, tech tags, an expandable description and links to the source code
- **Contact form**: handled by [Getform](https://getform.io), no backend needed
- **Downloadable CV** (PDF)
- **Responsive**: mobile navigation drawer, layouts adapted from phone to desktop

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | framer-motion (`LazyMotion`), CSS keyframes |
| Icons | react-icons |
| Hosting | Vercel |

## Performance & SEO

- Fully **static** page (prerendered at build time)
- **Server Components** by default; only interactive parts (navbar, theme toggle, project cards, scroll effects) ship JavaScript
- Hero content is visible on first paint, without waiting for hydration
- Images served by `next/image` (AVIF/WebP, responsive sizes, lazy loading)
- Poppins self-hosted with `next/font` (no request to Google Fonts, no layout shift)
- Full **Metadata API** setup: title, description, canonical URL, Open Graph and X card
- Generated `robots.txt`, `sitemap.xml`, Open Graph image and Apple touch icon
- **JSON-LD** structured data (`WebSite`, `ProfilePage`, `Person`)
- Custom `noindex` 404 page

## Getting started

**Requirements:** Node.js 20.9 or later, npm.

```bash
git clone https://github.com/razanakoto-carlos/portofolio-react.git
cd portofolio-react
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment variables

Both are optional.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata, sitemap, robots and JSON-LD | `https://razanakoto-carlos.vercel.app` |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification code (HTML tag method) | — |

## Project structure

```text
src/
├── app/
│   ├── layout.tsx            # Root layout: metadata, font, theme script
│   ├── page.tsx              # Home page + JSON-LD structured data
│   ├── globals.css           # Tailwind, light theme variant, hero animations
│   ├── not-found.tsx         # Custom 404 page
│   ├── robots.ts             # /robots.txt
│   ├── sitemap.ts            # /sitemap.xml
│   ├── opengraph-image.tsx   # Generated social sharing image
│   ├── apple-icon.tsx        # Generated Apple touch icon
│   └── icon.svg              # Favicon
├── App.tsx                   # Page layout (sections, dividers, footer)
├── components/               # Sections (Hero, About, Work…) and client components
├── data/data.ts              # Experience & education timeline
├── hooks/useTheme.ts         # Dark / light theme state
├── lib/site.ts               # Site URL, name, description, social links
└── assets/                   # Project screenshots
public/
└── CV_CARLOS_FULLSTACK_JS.pdf
```

## Updating the content

| To change… | Edit |
| --- | --- |
| Projects | `src/components/Work.tsx` (screenshots in `src/assets/`) |
| Experience & education | `src/data/data.ts` |
| About text and profile card | `src/components/About.tsx` |
| Tech stack | `src/components/Techstack.tsx` |
| Hero text and social links | `src/components/Hero.tsx` |
| Site name, description, URL | `src/lib/site.ts` |
| CV | Replace `public/CV_CARLOS_FULLSTACK_JS.pdf` (keep the same name or update the link in `Hero.tsx`) |

## Deployment

The site is deployed on **Vercel**. With the Vercel Git integration, pushes to `main` deploy to production and other branches get preview URLs. No extra configuration is needed.

After deploying, submit `https://razanakoto-carlos.vercel.app/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to speed up indexing.

## Contact

- Email: [razanakotocarlos24@gmail.com](mailto:razanakotocarlos24@gmail.com)
- LinkedIn: [carlos-razanakoto](https://www.linkedin.com/in/carlos-razanakoto-9013b2342)
- GitHub: [razanakoto-carlos](https://github.com/razanakoto-carlos)
