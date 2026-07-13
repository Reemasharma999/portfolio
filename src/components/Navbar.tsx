"use client";

import { useState } from "react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

type NavItem = "about" | "work";

export default function Navbar() {
  const [active, setActive] = useState<NavItem>("about");

  const handleAbout = () => {
    setActive("about");
    scrollTo("hero");
  };

  const handleWork = () => {
    setActive("work");
    scrollTo("work");
  };

  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <button onClick={handleAbout} className="text-2xl font-bold text-ink">
          ✦
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={handleAbout}
            className={`rounded-full border-2.5 border-ink px-4 py-2 text-xs font-bold transition-all duration-150 sm:text-sm ${
              active === "about"
                ? "bg-ink text-white shadow-nbSm"
                : "bg-transparent text-ink hover:bg-ink hover:text-white"
            }`}
          >
            About
          </button>

          <button
            onClick={handleWork}
            className={`rounded-full border-2.5 border-ink px-4 py-2 text-xs font-bold transition-all duration-150 sm:text-sm ${
              active === "work"
                ? "bg-ink text-white shadow-nbSm"
                : "bg-transparent text-ink hover:bg-ink hover:text-white"
            }`}
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
