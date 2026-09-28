# Bespoke Property Management

Website for Bespoke Property Management, Cyprus. Available in English (`/`), Greek (`/el`) and Russian (`/ru`).

## Development 

Requires Node.js and Yarn.

```sh
yarn install
yarn dev        # http://localhost:8080
```

## Scripts

- `yarn build`: production build into `.output/`
- `yarn preview`: serve the production build locally
- `yarn lint` / `yarn format`: ESLint and Prettier

## Deployment

The build targets Cloudflare Workers (`nitro({ preset: "cloudflare-module" })` in `vite.config.ts`). After `yarn build`, deploy with `npx wrangler deploy --config .output/server/wrangler.json`. To host elsewhere, change the Nitro preset (e.g. `vercel`, `netlify`, `node-server`).

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
