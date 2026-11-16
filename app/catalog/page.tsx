import type { Metadata } from "next";

import { GameCard } from "@/components/GameCard";
import { SAMPLE_GAMES } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse console games available for exchange on GameEx.",
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col gap-8 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Game catalogue
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Every game listed here is owned by a GameEx member and open to a trade
          proposal.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
