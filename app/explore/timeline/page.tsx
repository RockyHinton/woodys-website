import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "Timeline",
  description: "The complete body of work, laid out year by year.",
};

export default function TimelinePage() {
  return (
    <ExploreExperiencePage
      slug="timeline"
      placeholderLabel="Timeline — 1965 to today"
      note="A year-by-year timeline will live here, weaving films, books, theatre and music into a single chronology."
    />
  );
}
