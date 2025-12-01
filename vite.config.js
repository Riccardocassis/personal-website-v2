import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vue(),

    // 🔥 Plugin per rinominare _redirects.txt in _redirects nella build finale
    {
      name: 'rename-redirects',
      closeBundle() {
        const src = 'dist/_redirects.txt'
        const dest = 'dist/_redirects'
        if (fs.existsSync(src)) {
          fs.renameSync(src, dest)
        }
      }
    }
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})