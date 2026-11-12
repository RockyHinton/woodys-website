import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "Map",
  description: "The films through place — every confirmed filming location.",
};

export default function MapPage() {
  return (
    <ExploreExperiencePage
      slug="map"
      placeholderLabel="Interactive map"
      note="Around two hundred confirmed, address-level filming locations have been researched so far — roughly half of them in New York — each one distinguished from the places the films merely depict. The interactive map will be built on that record in its own development phase."
    />
  );
}
