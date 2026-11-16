import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your GameEx profile, shelf and reputation.",
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Profile
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Sign-in, your shelf and reputation tracking are not wired up yet.
        </p>
      </header>

      <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        Authentication arrives with the backend integration.
      </div>
    </div>
  );
}
