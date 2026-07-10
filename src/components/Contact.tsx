import Button from "./Button";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <FadeIn className="flex flex-col items-start rounded-xl2 border border-border bg-card px-8 py-16 shadow-card sm:items-center sm:px-16 sm:text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s connect.
        </h2>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
          Open to conversations about AI-native products, growth, and
          building things that work.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 sm:justify-center">
          <Button href="mailto:sharmarims123@gmail.com">Get in Touch</Button>

          <a
            href="https://www.linkedin.com/in/reemasharma123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
