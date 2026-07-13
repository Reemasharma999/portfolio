export default function HeroProductAnimation() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      <div
        className="hero-anim-shadow absolute rounded-full"
        style={{
          background: "rgba(0,0,0,0.06)",
          top: "53%",
          left: "6%",
          height: "16px",
          transform: "translateX(-50%)",
        }}
      />

      <div className="hero-anim-box absolute flex h-[120px] w-[150px] flex-col items-center justify-center rounded-[14px] border-[4px] border-ink bg-white shadow-[5px_5px_0_rgba(0,0,0,0.15)]">
        <span className="text-[48px] leading-none">📦</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-wide">
          Product
        </span>
      </div>

      <div
        className="hero-anim-magnifier absolute flex h-[100px] w-[100px] items-center justify-center rounded-full border-[5px] border-ink"
        style={{ background: "rgba(196,232,255,0.25)" }}
      >
        <span className="absolute -bottom-2 -right-2 h-[30px] w-[5px] rotate-45 rounded-full bg-ink" />
      </div>

      <span
        className="hero-anim-insight absolute whitespace-nowrap rounded-[8px] border-[3px] border-ink bg-white px-3.5 py-1 text-[15px] font-extrabold shadow-[3px_3px_0_rgba(0,0,0,0.1)]"
        style={{ top: "22%", left: "22%" }}
      >
        💡 Insight
      </span>
      <span
        className="hero-anim-insight hero-anim-insight-2 absolute whitespace-nowrap rounded-[8px] border-[3px] border-ink bg-white px-3.5 py-1 text-[15px] font-extrabold shadow-[3px_3px_0_rgba(0,0,0,0.1)]"
        style={{ top: "32%", left: "26%" }}
      >
        ⚡ Found
      </span>
      <span
        className="hero-anim-insight hero-anim-insight-3 absolute whitespace-nowrap rounded-[8px] border-[3px] border-ink bg-white px-3.5 py-1 text-[15px] font-extrabold shadow-[3px_3px_0_rgba(0,0,0,0.1)]"
        style={{ top: "18%", left: "28%" }}
      >
        ✨ Deep
      </span>
    </div>
  );
}
