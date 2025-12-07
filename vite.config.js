import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import imagePresets, { presetMultipleSizes } from "vite-plugin-image-presets";
import fs from "fs";

export default defineConfig({
  plugins: [
    vue(),

    // 🔥 Preset immagini ottimizzate e responsive
    imagePresets({
      project: presetMultipleSizes({
        widths: [800, 1280, 1920],
        formats: {
          webp: { quality: 70 },
          jpeg: { quality: 75 }
        }
      })
    }),

    // 🔥 Fix Netlify per _redirects
    {
      name: "rename-redirects",
      closeBundle() {
        const src = "dist/_redirects.txt";
        const dest = "dist/_redirects";
        if (fs.existsSync(src)) fs.renameSync(src, dest);
      },
    }
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
