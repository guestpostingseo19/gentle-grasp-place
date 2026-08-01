import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import blogImage from "@/assets/blog.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/Sections";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Link Building & Outreach Insights | RankBridge Blog" },
      {
        name: "description",
        content:
          "Practical articles on guest posting, link evaluation, anchor text strategy and outreach, written from live RankBridge campaigns.",
      },
      { property: "og:title", content: "Link Building & Outreach Insights | RankBridge Blog" },
      {
        property: "og:description",
        content:
          "Notes from the outreach desk: what earns placements, how to judge a link opportunity, and how to measure the result.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the <span className="text-gradient">outreach desk</span>
          </>
        }
        subtitle="No recycled listicles. Everything here comes from campaigns our team is running right now, written for people who have to make the decisions."
        image={blogImage}
        imageAlt="Stacked editorial pages lit with mint light"
      />

      {featured && (
        <section className="px-4 pb-14">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group grid gap-8 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 md:grid-cols-2 md:p-10"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold leading-tight">{featured.title}</h2>
                  <p className="mt-4 text-muted-foreground">{featured.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <img
                  src={blogImage}
                  alt=""
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="h-56 w-full rounded-2xl object-cover md:h-full"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want this thinking applied to your site?"
        body="We will look at your profile and tell you where the real bottleneck is — even if the answer is not link building."
      />
    </>
  );
}
