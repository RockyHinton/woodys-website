import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import MetaLabel from "@/components/MetaLabel";
import { formatDate, getAllArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "News and current work.",
};

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <Container>
      <PageIntro
        eyebrow="Current"
        title="News"
        lede="Announcements, releases, openings and interviews. The single entry below is a placeholder used to establish the article template."
      />
      <ul className="border-t border-hairline">
        {articles.map((article) => (
          <li key={article.slug} className="border-b border-hairline">
            <Link
              href={`/news/${article.slug}`}
              className="group grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:py-10"
            >
              <div>
                <MetaLabel as="span">{article.category}</MetaLabel>
                <p className="mt-1 text-xs text-ink-muted">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                  <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
                    {article.title}
                  </span>
                </h2>
                {article.standfirst ? (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                    {article.standfirst}
                  </p>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
