import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [react()],
});
