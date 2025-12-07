import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import imagePresets from "vite-plugin-image-presets";
import fs from "fs";

export default defineConfig({
  plugins: [
    vue(),

    imagePresets({
      project: {
        formats: {
          webp: { quality: 70 },
          jpeg: { quality: 80 }
        },
        responsive: [
          { width: 1920 },
          { width: 1280 },
          { width: 800 }
        ],
      }
    }),

    {
      name: "rename-redirects",
      closeBundle() {
        const src = "dist/_redirects.txt";
        const dest = "dist/_redirects";
        if (fs.existsSync(src)) fs.renameSync(src, dest);
      },
    },
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
