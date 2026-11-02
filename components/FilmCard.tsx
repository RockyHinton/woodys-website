import Link from "next/link";
import Image from "next/image";
import type { Film } from "@/lib/types";
import ImagePlaceholder from "@/components/ImagePlaceholder";

/**
 * One film in the filmography grid. The poster is the interface:
 * no card chrome, just the artwork (or its placeholder), the title
 * and the year. Hover lifts the poster slightly and underlines the
 * title — nothing louder.
 */
export default function FilmCard({ film }: { film: Film }) {
  return (
    <Link href={`/films/${film.slug}`} className="group block">
      <div className="overflow-hidden border border-hairline transition-colors duration-300 group-hover:border-hairline-strong">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
          {film.poster ? (
            <Image
              src={film.poster.src}
              alt={film.poster.alt}
              width={film.poster.width ?? 600}
              height={film.poster.height ?? 900}
              className="aspect-[2/3] w-full object-cover"
            />
          ) : (
            <ImagePlaceholder label="Poster" aspect="2/3" className="border-0" />
          )}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl leading-tight tracking-tight">
          <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-ink-muted">
            {film.title}
          </span>
        </h3>
        <span className="text-xs tabular-nums text-ink-muted">{film.year}</span>
      </div>
    </Link>
  );
}
