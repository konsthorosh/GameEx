# GameEx

Platform for exchanging console games between users.

GameEx lets players list the console games they own, browse what other members
are offering, and propose fair swaps. It covers PlayStation, Xbox, Nintendo
Switch and PC titles, with condition tracking and member reputation built in.

## Tech stack

- [Next.js](https://nextjs.org) 15.5 with the App Router
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [ESLint](https://eslint.org) (`next/core-web-vitals`, `next/typescript`)
- [Prettier](https://prettier.io) with `prettier-plugin-tailwindcss`

## Project structure

```
GameEx/
├── app/            # App Router routes and layouts
│   ├── catalog/    # Game catalogue
│   ├── exchange/   # Exchange proposals
│   ├── profile/    # Member profile
│   ├── layout.tsx  # Root layout (header, footer, fonts)
│   ├── page.tsx    # Landing page
│   └── globals.css # Tailwind entry point
├── components/     # Reusable UI (Header, Footer, GameCard, Badge, Container)
├── lib/            # Constants, helpers and sample data
├── types/          # Shared TypeScript domain types
├── .prettierrc.json
├── .eslintrc.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Start the dev server with HMR         |
| `npm run build`        | Produce an optimized production build |
| `npm run start`        | Serve the production build            |
| `npm run lint`         | Run ESLint                            |
| `npm run format`       | Format the codebase with Prettier     |
| `npm run format:check` | Check formatting without writing      |
| `npm run typecheck`    | Type-check with `tsc --noEmit`        |

## Repository

[https://github.com/konsthorosh/GameEx](https://github.com/konsthorosh/GameEx)

## License

MIT
