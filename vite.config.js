import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import fs from "fs";

export default defineConfig({
  plugins: [
    vue(),
    imagetools(), // deve stare QUI e deve essere caricato
    {
      name: "rename-redirects",
      closeBundle() {
        const src = "dist/_redirects.txt";
        const dest = "dist/_redirects";
        if (fs.existsSync(src)) fs.renameSync(src, dest);
      },
    },
  ],

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  assetsInclude: [
    "**/*.webp",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
  ],
});
