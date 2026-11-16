import { Container } from "@/components/Container";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {APP_NAME}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {APP_DESCRIPTION}
        </p>
      </Container>
    </footer>
  );
}
