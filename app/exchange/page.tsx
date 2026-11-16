import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange",
  description: "Propose and manage console game exchanges on GameEx.",
};

export default function ExchangePage() {
  return (
    <div className="flex flex-col gap-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Exchanges
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Proposals, counter-offers and completed trades will appear here.
        </p>
      </header>

      <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        No exchanges yet. Pick a game from the catalogue to start a proposal.
      </div>
    </div>
  );
}
