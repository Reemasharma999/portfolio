import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <FadeIn className="mx-auto max-w-content rounded-cta border-[3px] border-ink bg-nb-blue px-8 py-14 text-center shadow-nbLg sm:px-14">
        <h2 className="font-heading text-2xl font-bold text-ink sm:text-[28px]">
          Let&apos;s build something cool together 🤝
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-[#3a5a70] sm:text-sm">
          Open to PM roles, product collabs, and interesting problems worth
          solving.
        </p>

        <a
          href="mailto:sharmarims123@gmail.com"
          className="mt-8 inline-flex items-center justify-center rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide shadow-nbBtn transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-nbBtnSm"
        >
          Send a Message ↗
        </a>
      </FadeIn>
    </section>
  );
}
