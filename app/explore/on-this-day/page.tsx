import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "On This Day",
  description: "Moments from the archive, matched to today's date.",
};

export default function OnThisDayPage() {
  return (
    <ExploreExperiencePage
      slug="on-this-day"
      placeholderLabel="Today's entry"
      note="Each day this page will surface a release, an opening or a moment from the archive that happened on this date. The logic is deliberately not built yet."
    />
  );
}
