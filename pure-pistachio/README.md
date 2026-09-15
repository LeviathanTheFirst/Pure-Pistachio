This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host and load [Inter](https://rsms.me/inter/), the site's single sans-serif typeface, from `src/app/fonts/`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setup — contact form email (Resend)

The contact form posts to a server-side route (`/api/contact`) that emails inquiries to `info@purepistachio.co` via [Resend](https://resend.com). The free tier covers 100 emails/day.

1. Create a free account at [resend.com](https://resend.com).
2. In the Resend dashboard, add and verify your sending domain (`purepistachio.co`) — follow the DNS records they provide.
3. Create an API key with sending access (API keys page) and copy it.
4. Set the environment variables below in **both** your local `.env.local` and Vercel:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=Pure Pistachio <info@purepistachio.co>
```

### Local development

Copy `.env.example` to `.env.local` and paste in your real API key. If your domain is still unverified, Resend lets you send from its test domain instead — set `EMAIL_FROM=Pure Pistachio <onboarding@resend.dev>` in development. A copy of the variable reference lives in `.env.example`.

### Vercel

An [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) runs serverlessly, so no static export is used — the app deploys as a standard Next.js server on Vercel. Add `RESEND_API_KEY` and `EMAIL_FROM` under the project's **Settings → Environment Variables**, then redeploy.

The route includes a honeypot field and a per-IP rate limit (5/min) as lightweight anti-spam.
