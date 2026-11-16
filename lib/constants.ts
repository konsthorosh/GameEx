export const APP_NAME = "GameEx";

export const APP_DESCRIPTION =
  "Platform for exchanging console games between users";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/exchange", label: "Exchange" },
  { href: "/profile", label: "Profile" },
] as const;

export const GENRES = [
  "Action",
  "Adventure",
  "RPG",
  "Sports",
  "Racing",
  "Shooter",
  "Simulation",
  "Strategy",
  "Platformer",
  "Fighting",
] as const;
