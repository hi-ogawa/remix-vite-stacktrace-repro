import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { importDevServerPlugin } from "@hiogawa/vite-import-dev-server";

export default defineConfig({
  clearScreen: false,
  plugins: [importDevServerPlugin(), remix(), tsconfigPaths()],
});
