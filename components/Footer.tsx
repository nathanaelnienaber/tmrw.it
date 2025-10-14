const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="section-padding py-12" aria-label="Site footer">
      <div className="flex flex-col gap-4 border-t border-offwhite/10 pt-6 text-sm text-offwhite/60 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="footer-logo-glow inline-flex h-8 w-8 items-center justify-center rounded-full border border-electricBlue/60 text-electricBlue" aria-hidden="true">
            t
          </span>
          <p className="text-offwhite/80">tmrw — Practical AI for real work.</p>
        </div>
        <div className="flex flex-col items-start gap-1 text-xs uppercase tracking-widest text-offwhite/50 md:items-end">
          <span>© {currentYear} tmrw systems. All rights reserved.</span>
          <span>Built with Next.js + ChatGPT + tmrw</span>
        </div>
      </div>
    </footer>
  );
}
