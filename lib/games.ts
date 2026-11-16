import type { GameCondition, Platform } from "@/types";

export const PLATFORMS: Platform[] = [
  "PlayStation 5",
  "PlayStation 4",
  "Xbox Series X|S",
  "Xbox One",
  "Nintendo Switch",
  "PC",
];

export const CONDITIONS: GameCondition[] = ["new", "like_new", "good", "fair"];

/** Human-readable label for a game condition. */
export function conditionLabel(condition: GameCondition): string {
  return condition
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Human-readable label for a console platform. */
export function platformLabel(platform: Platform): string {
  return platform;
}
