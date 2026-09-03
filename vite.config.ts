import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackStartVite } from "@tanstack/start-plugin";

export default defineConfig({
  plugins: [
    TanStackStartVite({
      autoCodeSplitting: true,
      prerender: {
        routes: ["/"],
      },
    }),
    react(),
  ],
});
