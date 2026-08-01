import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/Sections";
import { getPost, posts, type Post } from "@/data/posts";
import { getPostMedia } from "@/data/media";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | RankBridge" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | RankBridge` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const media = getPostMedia(post.slug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="px-4 pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 border-l-2 border-primary pl-5 text-lg leading-relaxed text-foreground/90">
              {post.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <figure className="mt-10 overflow-hidden rounded-3xl border border-border">
              <img
                src={media.src}
                alt={media.alt}
                width={1280}
                height={720}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-80"
              />
            </figure>
          </Reveal>

          <div className="mt-10 space-y-8">
            {post.body.map((block, i) => (
              <Reveal key={i} delay={40}>
                <div>
                  {block.h && <h2 className="text-2xl font-semibold">{block.h}</h2>}
                  {block.ul && (
                    <ul className="mt-4 space-y-2">
                      {block.ul.map((li) => (
                        <li key={li} className="flex gap-3 text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.p?.map((p, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">Keep reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
