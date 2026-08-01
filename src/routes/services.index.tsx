import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionTitle } from "@/components/Sections";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Link Building & Guest Posting Services | RankBridge" },
      {
        name: "description",
        content:
          "Explore RankBridge services: guest posting, managed link building, niche edits, blogger outreach, digital PR and SEO content writing.",
      },
      { property: "og:title", content: "Link Building & Guest Posting Services | RankBridge" },
      {
        property: "og:description",
        content:
          "Six disciplines built around one goal: authority directed at the pages that earn revenue.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything needed to earn <span className="text-gradient">durable authority</span>
          </>
        }
        subtitle="Each service is delivered by a dedicated team with its own quality standard. Run one, or combine several into a single managed programme."
        image={servicesImage}
        imageAlt="Abstract glass panels linked by luminous threads"
      />

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid gap-6 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 md:grid-cols-[1fr_1.6fr] md:p-10"
              >
                <div>
                  <span className="font-display text-xs font-semibold text-primary">
                    Service 0{i + 1}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold">{s.name}</h2>
                  <p className="mt-1 text-sm text-primary/80">{s.tagline}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.whatYouGet.slice(0, 4).map((w) => (
                      <li key={w.title} className="text-sm text-muted-foreground">
                        <span className="mr-2 text-primary">—</span>
                        {w.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Full service details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Why combine them"
            title="Individually useful, collectively difficult to copy"
            body="A profile built from a single tactic has a signature. A profile built from editorial placements, expert commentary, earned coverage and genuinely cited content looks like a company people talk about."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: "Diversity",
                b: "Different link types, different publication categories, different anchors — the pattern stays natural at scale.",
              },
              {
                t: "Velocity",
                b: "Fast-indexing edits carry a page while slower editorial placements and PR compound behind them.",
              },
              {
                t: "Destination quality",
                b: "Content writing keeps the pages you point at worth ranking, so acquisition is never wasted.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold text-primary">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
