import { createFileRoute } from "@tanstack/react-router";
import { Clock, Globe2, Mail, MessageSquare } from "lucide-react";
import servicesImage from "@/assets/services.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionTitle } from "@/components/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RankBridge | Talk to the Outreach Team" },
      {
        name: "description",
        content:
          "Get in touch with RankBridge by email for guest posting, link building and digital PR enquiries. Replies from a real person within one working day.",
      },
      { property: "og:title", content: "Contact RankBridge | Talk to the Outreach Team" },
      {
        property: "og:description",
        content:
          "Email the RankBridge team about campaigns, partnerships or guest post submissions.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: Mail,
    label: "New enquiries",
    value: "hello@rankbridge.com",
    body: "Campaign briefs, pricing questions and anything about starting work together.",
  },
  {
    icon: MessageSquare,
    label: "Editorial & submissions",
    value: "editorial@rankbridge.com",
    body: "Contributor pitches and questions about our own publishing guidelines.",
  },
  {
    icon: Globe2,
    label: "Partnerships",
    value: "partners@rankbridge.com",
    body: "Agencies, publishers and white-label fulfilment conversations.",
  },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to a <span className="text-gradient">person</span>, not a ticket queue
          </>
        }
        subtitle="We deliberately do not run a contact form. Email reaches the team directly, keeps your context intact, and gets you a considered reply instead of an auto-response."
        image={servicesImage}
      />

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.value} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-500 hover:border-primary/50">
                <c.icon className="h-6 w-6 text-primary" />
                <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </span>
                <a
                  href={`mailto:${c.value}`}
                  className="mt-2 break-all text-lg font-semibold transition-colors hover:text-primary"
                >
                  {c.value}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Before you write"
            title="What to include for the fastest useful reply"
            body="You do not need a full brief. These four details let us answer with something specific rather than a generic rate card."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Your domain",
                b: "So we can look at your current profile before replying rather than guessing.",
              },
              {
                t: "The pages you want to move",
                b: "Two or three URLs and the queries you associate with them is plenty.",
              },
              {
                t: "Two competitors",
                b: "The sites currently outranking you tell us more than a keyword list does.",
              },
              {
                t: "Timeline and rough budget",
                b: "It saves both of us a round of email if the scope is not a fit.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-semibold text-primary">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-xl font-semibold">Response times</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  New enquiries are answered within one working day, Monday to Friday. Editorial and
                  submission emails are reviewed in batches and typically answered within three
                  working days.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <Globe2 className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-xl font-semibold">Where we work</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The team operates remotely across UK and European time zones and works with
                  clients worldwide. Calls are scheduled by email once we have exchanged the basics.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="text-xl font-semibold">Submitting an article instead?</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Contributor guidelines, accepted topics and the review process are set out on our
                Advertise With Us page. Reading it first saves a round of correspondence.
              </p>
              <a
                href="/advertise"
                className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110"
              >
                Read the guidelines
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
