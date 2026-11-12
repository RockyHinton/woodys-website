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
      note="A calendar of verified dates — releases, openings, premieres — already exists in the research behind this site, and no event has been manufactured to fill a date: some days will simply have none. The daily feature will be built on that calendar in its own phase."
    />
  );
}
