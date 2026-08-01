import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { getServiceMedia } from "@/data/media";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/Sections";
import { getService, services, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | RankBridge" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const media = getServiceMedia(service.slug);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.tagline}
        subtitle={service.summary}
        image={media.src}
        imageAlt={media.alt}
      />

      {/* Intro */}
      <section className="px-4 pb-16">
        <div className="mx-auto mb-12 max-w-5xl">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl border border-border">
              <img
                src={media.src}
                alt={media.alt}
                width={1280}
                height={720}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-96"
              />
            </figure>
          </Reveal>
        </div>
        <div className="mx-auto max-w-3xl space-y-5">
          {service.intro.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="border-y border-border bg-card/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">What is included</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.whatYouGet.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-colors duration-500 hover:border-primary/40">
                  <Check className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">How the work runs</h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <div className="group flex gap-6 rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:border-primary/40 sm:p-8">
                  <span className="font-display text-2xl font-bold text-primary/40 transition-colors duration-500 group-hover:text-primary">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="border-y border-border bg-card/30 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Who this suits</h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.idealFor.map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <li className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {service.faqs.map((f) => (
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
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">Other services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
                >
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Interested in ${service.name.toLowerCase()}?`} />
    </>
  );
}
