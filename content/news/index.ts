import type { NewsArticle } from "@/lib/types";

/**
 * News articles, newest first.
 *
 * The single entry below is a clearly labelled PLACEHOLDER used only
 * to develop and test the /news/[slug] template. It must be replaced
 * with real articles before launch — do not fabricate news items.
 */
export const newsArticles: NewsArticle[] = [
  {
    title: "Placeholder Article",
    slug: "placeholder-article",
    date: "2026-01-01",
    category: "Announcements",
    standfirst:
      "A sample entry used to establish the news article template. It will be removed when real articles are introduced.",
    body: [
      "This is placeholder body copy. It exists so that the typography, measure and rhythm of the article template can be judged before real editorial content is written.",
      "Articles will support several paragraphs, a category, a date and an optional image. Nothing on this page is real news.",
    ],
  },
];
