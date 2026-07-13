export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-ink px-6 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <div aria-hidden />

        <span className="text-[11px] text-[#8a8580]">Reema Sharma</span>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/reemasharma123"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-nb-pink text-sm font-bold text-ink transition-colors duration-150 hover:border-ink"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sharmarims123@gmail.com"
            className="border-b-2 border-nb-pink text-sm font-bold text-ink transition-colors duration-150 hover:border-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
