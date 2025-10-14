import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-padding flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/70">404</p>
      <h1 className="text-4xl font-semibold text-offwhite sm:text-5xl">We couldn&apos;t find that page.</h1>
      <p className="max-w-xl text-base text-offwhite/70 sm:text-lg">
        The link you followed may be broken or the page might have been removed. Let&apos;s get you back to the work that matters.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-electricBlue/60 bg-electricBlue/10 px-6 py-3 text-sm font-semibold text-offwhite transition hover:bg-electricBlue/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue"
      >
        Return home
      </Link>
    </main>
  );
}
