"use client";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <button
          onClick={() => scrollTo("hero")}
          className="font-hand text-2xl font-bold text-ink"
        >
          ✦ reema
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollTo("hero")}
            className="rounded-full border-2.5 border-ink bg-transparent px-4 py-2 text-xs font-bold text-ink transition-all duration-150 hover:bg-ink hover:text-white sm:text-sm"
          >
            About
          </button>

          <button
            onClick={() => scrollTo("work")}
            className="rounded-full border-2.5 border-ink bg-ink px-4 py-2 text-xs font-bold text-white shadow-nbSm transition-all duration-150 sm:text-sm"
          >
            Work
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border-2.5 border-ink bg-nb-pink px-4 py-2 text-xs font-bold text-ink transition-all duration-150 hover:shadow-nbSm sm:text-sm"
          >
            Let&apos;s Talk
          </button>
        </div>
      </nav>
    </header>
  );
}
