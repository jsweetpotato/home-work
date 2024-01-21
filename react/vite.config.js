import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "docs",
    target: "esnext",
    rollupOptions: {},
  },
  // esbuild로 빌드 시 console과 debugger 구문 제거
  esbuild: {
    drop: ["debugger", "console"],
  },
});
