import { createFileRoute } from "@tanstack/react-router";
import servicesImage from "@/assets/services.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionTitle } from "@/components/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RankBridge | Outreach-Led Link Building Studio" },
      {
        name: "description",
        content:
          "RankBridge is a small outreach-led studio building editorial authority for brands through vetted guest posts, niche edits and digital PR.",
      },
      { property: "og:title", content: "About RankBridge | Outreach-Led Link Building Studio" },
      {
        property: "og:description",
        content:
          "Who we are, how we vet publications, and the standards we refuse to trade away for volume.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    t: "Honesty over upsell",
    b: "If link acquisition is not your bottleneck, we say so on the first call. We have turned down work more than once because the answer was a technical fix or better content.",
  },
  {
    t: "Quality is a floor, not a tier",
    b: "There is no cheaper package where the vetting relaxes. Every placement passes the same checks regardless of budget.",
  },
  {
    t: "Documentation as standard",
    b: "You own every record of the work: shortlists, briefs, live URLs, anchors and metrics. Nothing lives only in our systems.",
  },
  {
    t: "Patience as a strategy",
    b: "We plan in quarters. Results that arrive in three weeks tend to leave just as quickly.",
  },
];

const timeline = [
  {
    y: "2019",
    t: "Started as two outreach specialists",
    b: "Founded after years inside agencies where link quality was measured by spreadsheet volume. The original brief was simple: place articles we would be happy to sign.",
  },
  {
    y: "2021",
    t: "Editorial team formed",
    b: "In-house writers replaced freelancers so every draft met the same standard before an editor saw it.",
  },
  {
    y: "2023",
    t: "Digital PR practice launched",
    b: "Data-led campaigns joined the mix, opening publications that contributed content could never reach.",
  },
  {
    y: "2026",
    t: "Six disciplines, one programme",
    b: "Today RankBridge runs managed authority programmes across thirty-eight verticals, with the same vetting standard applied to every placement.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A small studio with an <span className="text-gradient">unfashionably slow</span>{" "}
            standard
          </>
        }
        subtitle="RankBridge exists because most link building is sold by volume and delivered by template. We build the other kind — fewer placements, each one defensible."
        image={servicesImage}
      />

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl space-y-5 text-muted-foreground">
          <Reveal>
            <p className="leading-relaxed">
              We are a team of outreach specialists, editors and writers who spend our days talking
              to publishers. That is the whole business. There is no proprietary tool, no private
              network of sites we quietly own, and no automated sequence pretending to be a person.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="leading-relaxed">
              What we do have is a vetting process refined over seven years, a roster of editors who
              answer our emails, and a stubborn refusal to place anything we would not be
              comfortable seeing in a client's audit two years from now.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="leading-relaxed">
              Clients come to us after a bad experience roughly half the time. The pattern is always
              the same: a large volume of links from sites with inflated metrics, no traffic, and an
              outbound profile that spans every vertical imaginable. Undoing that takes longer than
              doing it properly would have.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="What we believe" title="Four commitments we do not negotiate" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <h3 className="text-lg font-semibold text-primary">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Our story" title="How RankBridge got here" />
          <div className="mt-12 space-y-4">
            {timeline.map((item, i) => (
              <Reveal key={item.y} delay={i * 70}>
                <div className="flex gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <span className="font-display text-lg font-bold text-primary">{item.y}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk before you read another page?"
        body="Send us your domain and the pages you want to move. You will get a considered reply from a person, usually within one working day."
      />
    </>
  );
}
