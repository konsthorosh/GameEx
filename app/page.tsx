import Link from "next/link";

import { GameCard } from "@/components/GameCard";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { SAMPLE_GAMES } from "@/lib/sample-data";

const FEATURES = [
  {
    title: "List your shelf",
    description:
      "Add the games you own, note their condition, and mark the ones you are willing to part with.",
  },
  {
    title: "Find a match",
    description:
      "Browse offers by platform and genre, then propose a swap that works for both players.",
  },
  {
    title: "Trade with trust",
    description:
      "Reputation scores and exchange history keep every trade transparent.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="flex flex-col items-start gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {APP_NAME}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Trade the games you have for the games you want.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          {APP_DESCRIPTION}. GameEx connects console players so a game finished
          on one shelf becomes the next adventure on another.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalog"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Browse the catalogue
          </Link>
          <Link
            href="/exchange"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Start an exchange
          </Link>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Recently listed
          </h2>
          <Link
            href="/catalog"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SAMPLE_GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
