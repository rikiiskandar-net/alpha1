# Alpha1 — Next.js Secure Stack 2026

High-security Next.js web application built with **Supabase**, **Tailwind CSS**, **Zod**, and modern flat icons (`lucide-react`). Deployed on **Vercel** with **Row Level Security (RLS)** and **Zero Trust** architecture.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React (flat, modern) |
| Backend & Auth | Supabase (SSR, RLS, MFA) |
| Validation | Zod (strict type-safe schemas) |
| Security | CSP, HSTS, X-Frame-Options, Rate Limiting |
| Deployment | Vercel Edge |

## Project Structure

```text
alpha1/
├── app/                      # App Router (page.tsx, layout.tsx, globals.css)
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript strict mode
└── package.json              # Dependencies & scripts
```

## Environment Variables

Create a `.env.local` file with the following:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

This project is deployed on Vercel:

- **Preview:** https://alpha1-k2ijsok1w-mi2976921-3602s-projects.vercel.app

To deploy to production:

```bash
vercel --prod
```

## Security Features

- **Content Security Policy (CSP)** via middleware
- **HTTP Security Headers** (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- **Zod validation** on all input schemas
- **Row Level Security (RLS)** on Supabase database
- **Secure HTTP-only cookies** for session management

## License

© 2026 Alpha1 Project.