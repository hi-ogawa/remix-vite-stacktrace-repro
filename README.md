Demo to apply `viteDevServer.ssrFixStacktrace` in `handleError` function (see [this commit](https://github.com/hi-ogawa/remix-vite-stacktrace-repro/commit/7c22676bbb833bfc70f29846b080023a66d37e06)).

```sh
# run server
pnpm dev

# trigger loader error
curl "http://localhost:5173/?crash-loader"
```

- before (comment out `handleError` in `entry.server.tsx` to see the default behavior)

```
Error: crash-loader
    at Module.crash (/home/hiroshi/code/tmp/remix-vite-stacktrace/app/utils.ts:4:9)
    at loader (/home/hiroshi/code/tmp/remix-vite-stacktrace/app/routes/_index.tsx:18:27)
    at Object.callRouteLoaderRR (/home/hiroshi/code/tmp/remix-vite-stacktrace/node_modules/.pnpm/@remix-run+server-runtime@2.3.0_typescript@5.2.2/node_modules/@remix-run/server-runtime/dist/data.js:52:22)
    ...
```

- after

```
Error: crash-loader
    at Module.crash (/home/hiroshi/code/tmp/remix-vite-stacktrace/app/utils.ts:2:9)
    at loader (/home/hiroshi/code/tmp/remix-vite-stacktrace/app/routes/_index.tsx:14:5)
    at Object.callRouteLoaderRR (/home/hiroshi/code/tmp/remix-vite-stacktrace/node_modules/.pnpm/@remix-run+server-runtime@2.3.0_typescript@5.2.2/node_modules/@remix-run/server-runtime/dist/data.js:52:22)
    ...
```

---

# templates/unstable-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

## Run

Spin up the Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
