import type { NewsArticle } from "@/lib/types";
import { newsArticles } from "@/content/news";

/** All articles, newest first. */
export function getAllArticles(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
