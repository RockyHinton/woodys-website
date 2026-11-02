import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "By the Numbers",
  description: "The career in figures.",
};

export default function ByTheNumbersPage() {
  return (
    <ExploreExperiencePage
      slug="by-the-numbers"
      placeholderLabel="The career in figures"
      note="Counts and figures computed from the content itself — films, collaborators, cities, decades — will be presented here once the filmography is populated."
    />
  );
}
