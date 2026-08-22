import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/manjuwangzahn/",
  plugins: [react()],
  build: {
    outDir: "dist/client",
  },
});
