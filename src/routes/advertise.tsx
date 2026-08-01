import { createFileRoute } from "@tanstack/react-router";
import { pageImages } from "@/data/media";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionTitle } from "@/components/Sections";

export const Route = createFileRoute("/advertise")({
  head: () => ({
    meta: [
      { title: "Write for Us — SEO & Link Building | RankBridge" },
      {
        name: "description",
        content:
          "Write for us: editorial guidelines for contributing an SEO, outreach or link building article to the RankBridge journal — accepted topics, format, review process and timelines.",
      },
      { property: "og:title", content: "Write for Us — SEO & Link Building | RankBridge" },
      {
        property: "og:description",
        content:
          "Contributor guidelines for the RankBridge journal: what we publish, what we decline, and how the editorial review works.",
      },
    ],
  }),
  component: Advertise,
});

function Advertise() {
  return (
    <>
      <PageHero
        eyebrow="Advertise with us"
        title={
          <>
            Write for us: contribute to the <span className="text-gradient">RankBridge</span> journal
          </>
        }
        subtitle="We publish a small number of external SEO, outreach and content marketing articles each month. This page explains what we accept, how the review works, and what to prepare before sending anything."

        image={pageImages.advertise}
        imageAlt="Stack of glowing glass article cards"
      />

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl space-y-5 text-muted-foreground">
          <Reveal>
            <p className="leading-relaxed">
              Our readers are in-house marketers, agency strategists and founders who make decisions
              about search and content budgets. They read us for practical detail, so contributions
              are judged on one question: does this teach our audience something they can use on
              Monday morning?
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="leading-relaxed">
              Editorial control stays with us. We may edit for clarity, structure and house style,
              and we will always show you the final version before it goes live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Topics" title="What we publish" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-background p-7">
                <h3 className="text-lg font-semibold text-primary">Accepted subjects</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Outreach, editorial partnerships and publisher relations",
                    "Content strategy, briefing and editorial operations",
                    "Search research, measurement and reporting practice",
                    "Digital PR campaigns with documented outcomes",
                    "Original studies, surveys and first-hand case studies",
                    "Team, process and workflow lessons from real campaigns",
                  ].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-border bg-background p-7">
                <h3 className="text-lg font-semibold text-primary">Outside our scope</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "General introductions that restate widely available basics",
                    "Product announcements or company news releases",
                    "Articles written primarily around a single commercial link",
                    "Topics unrelated to marketing, search or publishing",
                    "Material published elsewhere, in full or in part",
                    "Regulated financial, medical or legal advice",
                  ].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Requirements" title="Format and standards" />
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            {[
              { k: "Length", v: "1,200–2,000 words. Shorter is fine if the piece is complete." },
              { k: "Originality", v: "Unpublished elsewhere, and written for our readers." },
              { k: "Structure", v: "Clear H2 sections, short paragraphs, descriptive subheadings." },
              {
                k: "Evidence",
                v: "At least one original data point, example or first-hand observation.",
              },
              { k: "Sources", v: "Cite primary sources where you reference research or figures." },
              {
                k: "Links",
                v: "Up to two external references where they genuinely help the reader, plus one author link.",
              },
              {
                k: "Author details",
                v: "Full name, role, company and a two-sentence biography.",
              },
              { k: "Images", v: "Optional. Supply originals or clearly licensed files only." },
            ].map((row, i) => (
              <Reveal key={row.k} delay={i * 40}>
                <div className="grid gap-1 border-b border-border bg-card px-6 py-5 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold">{row.k}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{row.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Process" title="From pitch to publication" />
          <div className="mt-12 space-y-4">
            {[
              {
                n: "01",
                t: "Send a short pitch",
                b: "Two or three sentences on the angle, the audience it serves and the evidence behind it. A working title helps. Please do not send a finished draft first.",
              },
              {
                n: "02",
                t: "Editorial review",
                b: "We review pitches in weekly batches and reply within five working days, either with a yes, a suggested reframing, or a clear decline.",
              },
              {
                n: "03",
                t: "Brief agreement",
                b: "Approved pitches get a short brief covering scope, structure and deadline so expectations are shared from the start.",
              },
              {
                n: "04",
                t: "Draft and edit",
                b: "You submit the draft; our editor reviews for accuracy, structure and house style. Most pieces go through one revision round.",
              },
              {
                n: "05",
                t: "Publication",
                b: "You approve the final version, we schedule it, and you receive the live URL along with the publication date.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="flex gap-6 rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <span className="font-display text-2xl font-bold text-primary/50">{s.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Good to know" title="Questions we are asked most" />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {[
              {
                q: "Do you charge for contributions?",
                a: "Editorial contributions are published on merit and are not paid placements. Where a collaboration involves any commercial arrangement, it is agreed in advance and disclosed on the published article.",
              },
              {
                q: "How many pieces do you publish?",
                a: "Two to four external articles a month. The limit is deliberate — it keeps the standard high and the editorial queue short.",
              },
              {
                q: "Can I include a link to my company?",
                a: "Yes. One author link is standard, plus up to two references inside the article where they genuinely support the point being made.",
              },
              {
                q: "Will you edit my article?",
                a: "Usually lightly, for structure, clarity and house style. Substantive changes are always discussed with you first, and you approve the final version.",
              },
              {
                q: "What happens if my pitch is declined?",
                a: "We tell you why. In many cases the topic works with a different angle, and you are welcome to pitch again.",
              },
            ].map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                  {f.q}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="text-xl font-semibold">Send your pitch</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Email the outline to our editorial desk with the subject line “Contribution
                pitch — [your topic]”.
              </p>
              <a
                href="mailto:editorial@rankbridge.com"
                className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110"
              >
                editorial@rankbridge.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
