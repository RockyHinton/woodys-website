import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "Quotes",
  description: "Lines from the films and the writing, collected.",
};

export default function QuotesPage() {
  return (
    <ExploreExperiencePage
      slug="quotes"
      placeholderLabel="Quotations"
      note="A collection drawn from the quotations recorded against each film and piece of writing. The Film data model already carries quotations."
    />
  );
}
