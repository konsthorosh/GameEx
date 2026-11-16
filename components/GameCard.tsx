import type { Game } from "@/types";

import { Badge } from "@/components/Badge";
import { conditionLabel, platformLabel } from "@/lib/games";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {game.title}
        </h3>
        <Badge variant="success">{conditionLabel(game.condition)}</Badge>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {platformLabel(game.platform)}
      </p>

      {game.description ? (
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
          {game.description}
        </p>
      ) : null}
    </article>
  );
}
