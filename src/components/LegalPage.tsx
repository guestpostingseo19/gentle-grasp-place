import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type LegalSection = { h: string; p?: string[]; ul?: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <div className="px-4 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 border-l-2 border-primary pl-5 leading-relaxed text-foreground/90">
            {intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 40}>
              <section>
                <h2 className="text-xl font-semibold">{s.h}</h2>
                {s.p?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.ul && (
                  <ul className="mt-4 space-y-2">
                    {s.ul.map((li) => (
                      <li key={li} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}
        </div>

        {children}

        <Reveal>
          <div className="mt-14 rounded-2xl border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">Questions about this policy?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Write to{" "}
              <a href="mailto:legal@rankbridge.com" className="text-primary hover:underline">
                legal@rankbridge.com
              </a>{" "}
              and a member of the team will respond within five working days.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
