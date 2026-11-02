import type { Metadata } from "next";
import ExploreExperiencePage from "@/components/ExploreExperiencePage";

export const metadata: Metadata = {
  title: "Map",
  description: "The filming locations of every film, plotted on one map.",
};

export default function MapPage() {
  return (
    <ExploreExperiencePage
      slug="map"
      placeholderLabel="Interactive map"
      note="An interactive map will live here, drawing on the filming locations recorded against each film. The Film data model already carries location names and coordinates."
    />
  );
}
