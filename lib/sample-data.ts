import type { Game } from "@/types";

/**
 * Placeholder catalogue data. Replace with API calls once the backend exists.
 */
export const SAMPLE_GAMES: Game[] = [
  {
    id: "g-001",
    title: "The Witcher 3: Wild Hunt",
    platform: "PlayStation 5",
    genre: "RPG",
    condition: "good",
    description:
      "Complete edition with both expansions. Disc in excellent shape, original case included.",
    ownerId: "u-001",
  },
  {
    id: "g-002",
    title: "Forza Horizon 5",
    platform: "Xbox Series X|S",
    genre: "Racing",
    condition: "like_new",
    description: "Played twice, no scratches. Open to swaps for racing titles.",
    ownerId: "u-002",
  },
  {
    id: "g-003",
    title: "The Legend of Zelda: Tears of the Kingdom",
    platform: "Nintendo Switch",
    genre: "Adventure",
    condition: "new",
    description:
      "Sealed copy, duplicate gift. Looking for any Zelda or Mario title.",
    ownerId: "u-003",
  },
  {
    id: "g-004",
    title: "Elden Ring",
    platform: "PlayStation 4",
    genre: "Action",
    condition: "fair",
    description: "Original case, manual missing. Game itself runs perfectly.",
    ownerId: "u-004",
  },
];
