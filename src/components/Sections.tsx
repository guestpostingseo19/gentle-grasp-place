import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to build authority that holds?",
  body = "Tell us about your site, your competitors and the pages that matter. We will come back with an honest read on what it takes.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110"
            >
              Get in touch
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Explore services
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      </Reveal>
      {body && (
        <Reveal delay={120}>
          <p className="mt-4 text-muted-foreground">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
