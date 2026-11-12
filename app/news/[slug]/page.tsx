import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MetaLabel from "@/components/MetaLabel";
import TrailBar from "@/components/TrailBar";
import SequenceNav from "@/components/SequenceNav";
import { formatDate, getAllArticles, getArticleBySlug } from "@/lib/news";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.standfirst,
  };
}

/** Reusable article template — all articles render through this page. */
export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <TrailBar label="News" href="/news" />
      <Container>
        <article className="mx-auto max-w-2xl">
        <header className="pt-16 sm:pt-24">
          <MetaLabel className="mb-4">
            {article.category} ·{" "}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </MetaLabel>
          <h1 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
            {article.title}
          </h1>
          {article.standfirst ? (
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              {article.standfirst}
            </p>
          ) : null}
        </header>
        <div className="mt-10 border-t border-hairline pt-10">
          {article.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-sm leading-relaxed first:mt-0 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
          <SequenceNav
            ariaLabel="News"
            parent={{ label: "All News", href: "/news" }}
          />
        </article>
      </Container>
    </>
  );
}
