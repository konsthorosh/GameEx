export type Platform =
  | "PlayStation 5"
  | "PlayStation 4"
  | "Xbox Series X|S"
  | "Xbox One"
  | "Nintendo Switch"
  | "PC";

export type GameCondition = "new" | "like_new" | "good" | "fair";

export type ListingStatus = "available" | "reserved" | "exchanged";

export interface User {
  id: string;
  username: string;
  email: string;
  reputation: number;
  createdAt: string;
}

export interface Game {
  id: string;
  title: string;
  platform: Platform;
  genre: string;
  condition: GameCondition;
  description?: string;
  coverUrl?: string;
  ownerId: string;
}

export interface ExchangeListing {
  id: string;
  gameId: string;
  ownerId: string;
  status: ListingStatus;
  createdAt: string;
  updatedAt: string;
}
