export function Footer() {
  return (
    <footer className="section-padding py-12">
      <div className="flex flex-col gap-2 border-t border-offwhite/10 pt-6 text-sm text-offwhite/60 md:flex-row md:items-center md:justify-between">
        <p>tmrw — Practical AI for real work.</p>
        <p>© {new Date().getFullYear()} tmrw systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
