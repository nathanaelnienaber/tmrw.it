# tmrw — Practical AI for real work

A single-page marketing site for tmrw, an AI systems consultancy. Built with Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion.

## Getting started

```bash
pnpm install # or npm install / yarn install
pnpm run dev
```

Visit `http://localhost:3000` to view the site.

### Environment variables

Copy `.env.example` to `.env.local` (or the environment editor in your hosting provider) and fill in the placeholders to enable the contact form email delivery:

- `RESEND_API_KEY` — API key for your Resend account. Create one from the [API Keys](https://resend.com/api-keys) tab in the dashboard.
- `RESEND_FROM` (optional) — from address verified with Resend. Defaults to `TMRW Studio <hello@tmrw.it>` if not provided.
- `CONTACT_EMAIL_RECIPIENTS` (optional) — comma-separated list of inboxes that should receive contact requests. Defaults to `hello@tmrw.it`.

Make sure the address you use for `RESEND_FROM` (or the `hello@tmrw.it` default) has a verified domain inside Resend. If the domain, API key, or recipient list is missing the contact form will surface an actionable error so you can finish configuration.

If the email service is not configured the form will surface a helpful error message and ask users to reach out directly.

## Tech stack

- Next.js 14 with the App Router
- React 18
- Tailwind CSS with a custom theme for tmrw brand tokens
- Framer Motion for scroll and hover animations

## Structure

All page sections live in `components/` and are composed in `app/page.tsx`.
