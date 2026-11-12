import type { Film } from "@/lib/types";

// Source: films.md — RIFKIN'S FESTIVAL record. Key sources: [S002], [S020], [S046]
const rifkinsFestival: Film = {
  title: "Rifkin's Festival",
  year: 2020,
  slug: "rifkins-festival",
  roles: ["Director", "Writer"],
  releaseDate: "2020-09-18",
  shortSynopsis:
    "Mort Rifkin, a former film-studies lecturer who has spent decades failing to write a novel, accompanies his wife to the San Sebastián film festival, where she is doing publicity for a fashionable young director she is evidently involved with. His anxieties surface as black-and-white dreams restaging the European art films he reveres.",
  cast: [
    { name: "Wallace Shawn", as: "Mort Rifkin" },
    { name: "Gina Gershon", as: "Sue Rifkin" },
    { name: "Elena Anaya", as: "Dr. Joanna \"Jo\" Rojas" },
    { name: "Louis Garrel", as: "Philippe" },
    { name: "Sergi López", as: "Paco" },
    { name: "Christoph Waltz", as: "Death" },
    { name: "Tammy Blanchard", as: "Doris Rifkin" },
  ],
  legacyUrl: "https://woodyallen.com/rifkins-festival/",
};

export default rifkinsFestival;
