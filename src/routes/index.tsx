import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  FileSearch,
  Handshake,
  LineChart,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionTitle } from "@/components/Sections";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guest Posting & Link Building Services | RankBridge" },
      {
        name: "description",
        content:
          "Manual guest posting and link building services: hand-vetted publications, contextual editorial links, niche edits and digital PR. Transparent pricing and reporting.",
      },
      { property: "og:title", content: "Guest Posting & Link Building Services | RankBridge" },
      {
        property: "og:description",
        content:
          "Editorial guest posts, niche edits, blogger outreach and digital PR that build authority the defensible way. Hand-vetted publications, transparent reporting.",
      },

    ],
  }),
  component: Home,
});

const stats = [
  { value: "1,400+", label: "Editorial placements delivered" },
  { value: "38", label: "Verticals covered" },
  { value: "12 mo", label: "Placement assurance window" },
  { value: "100%", label: "Manual, human outreach" },
];

const principles = [
  {
    icon: FileSearch,
    title: "Vetted before pitched",
    body: "Relevance, organic traffic trend and outbound-link hygiene are checked by hand before a publication ever reaches your shortlist.",
  },
  {
    icon: PenLine,
    title: "Written to be read",
    body: "Subject-matter writers produce original articles that editors want to publish, not filler built around a link.",
  },
  {
    icon: Handshake,
    title: "Relationships, not databases",
    body: "We pitch editors we know by name. That is why our acceptance rate holds while blast outreach collapses.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing placed without approval",
    body: "You see and sign off on every site and every brief. There are no surprises in the monthly report.",
  },
  {
    icon: LineChart,
    title: "Measured against revenue pages",
    body: "Authority is directed at the pages that earn, with internal linking guidance so the value flows onward.",
  },
  {
    icon: BadgeCheck,
    title: "Documented and auditable",
    body: "Live URLs, anchors, target pages and metrics, delivered every month in a format you can hand to anyone.",
  },
];

const marqueeItems = [
  "SaaS",
  "Fintech",
  "E-commerce",
  "Health",
  "Travel",
  "Legal",
  "Education",
  "Property",
  "B2B Services",
  "Marketplaces",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-44">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Abstract network of glowing links forming a bridge"
            width={1600}
            height={1008}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Guest posting & link building
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.06] sm:text-6xl md:text-7xl">
                Guest posting and link building that earns{" "}
                <span className="text-gradient">authority you can defend</span>.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                RankBridge is a manual outreach studio placing editorial guest posts and contextual
                links on publications with real readers — vetted by hand, pitched by people, and
                reported in full. No networks, no volume games, no surprises.
              </p>

            </Reveal>
            <Reveal delay={270}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  See how we work
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="h-full bg-card p-6">
                  <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max marquee-track gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-border px-5 py-2 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="What we do"
            title="Six disciplines, one authority programme"
            body="Every service below can run standalone, but they are designed to compound when combined around the pages that matter to your business."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
                >
                  <span className="font-display text-xs font-semibold text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm text-primary/80">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Read the full service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="How we operate"
            title="The standards behind every placement"
            body="Link building goes wrong in predictable ways. These six commitments exist to remove each of them from your campaign."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-colors duration-500 hover:border-primary/40">
                  <p.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="The engagement"
            title="A predictable rhythm from month one"
            body="You always know what is happening this week, what is coming next, and what it is meant to achieve."
          />
          <div className="mt-14 space-y-4">
            {[
              {
                n: "01",
                t: "Discovery call and audit",
                b: "We review your profile, competitors and priority pages, then tell you plainly whether link acquisition is your bottleneck — and what to fix first if it is not.",
              },
              {
                n: "02",
                t: "Strategy document",
                b: "Target pages, anchor distribution, publication categories, monthly volume and a realistic timeline, written down and agreed before work begins.",
              },
              {
                n: "03",
                t: "Approval and outreach",
                b: "You sign off the shortlist and briefs. Our team pitches editors individually and manages every conversation through to publication.",
              },
              {
                n: "04",
                t: "Placement and verification",
                b: "Articles go live, we confirm indexation and link attributes, and each placement is logged with its anchor and target page.",
              },
              {
                n: "05",
                t: "Monthly review",
                b: "A report you can forward without editing, plus a call to adjust next month's plan against what the data is telling us.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="group flex gap-6 rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:border-primary/40 sm:p-8">
                  <span className="font-display text-2xl font-bold text-primary/40 transition-colors duration-500 group-hover:text-primary">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="border-t border-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Insights"
            title="Notes from the outreach desk"
            body="Practical writing on what actually earns placements, drawn from campaigns we run every week."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-5 text-xs text-muted-foreground">{p.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Read all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
