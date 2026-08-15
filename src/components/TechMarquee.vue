<template>
  <section
    class="relative w-full bg-black border-t border-white/5 py-10 md:py-14 overflow-hidden"
    :aria-label="$t('home.toolsTitle')"
  >
    <p class="text-center text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 mb-8 md:mb-10 px-6">
      {{ $t('home.toolsTitle') }}
    </p>

    <div
      class="marquee-outer w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div class="marquee-track flex items-center w-max">
        <template v-for="group in 2" :key="group">
          <div
            v-for="(tool, i) in tools"
            :key="group + '-' + i"
            class="flex items-center shrink-0"
          >
            <div class="flex flex-col items-center gap-2 mx-4 md:mx-6 w-16 md:w-20">
              <div
                class="icon-slot flex items-center justify-center w-9 h-9 md:w-11 md:h-11"
                role="img"
                :aria-label="tool.name"
              >
                <svg
                  v-if="tool.type === 'svg'"
                  viewBox="0 0 24 24"
                  class="w-full h-full"
                  :fill="tool.forceWhite ? '#ffffff' : '#' + tool.hex"
                >
                  <path :d="tool.path" />
                </svg>

                <div
                  v-else-if="tool.type === 'badge'"
                  class="w-full h-full rounded-lg flex items-center justify-center font-bold text-xs md:text-sm"
                  :style="{ background: tool.bg, color: tool.fg }"
                >
                  {{ tool.label }}
                </div>

                <div v-else class="w-full h-full" v-html="tool.raw"></div>
              </div>

              <span class="text-[10px] md:text-[11px] text-white/40 text-center leading-tight whitespace-nowrap">
                {{ tool.name }}
              </span>
            </div>

            <span class="w-1 h-1 rounded-full bg-white/15 shrink-0" aria-hidden="true"></span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  siWordpress,
  siElementor,
  siWebflow,
  siFigma,
  siBlender,
  siBrevo,
  siMailchimp,
  siPython,
  siHtml5,
  siCss,
  siJavascript,
  siNuxt,
  siOdoo,
  siVuedotjs,
  siReact,
  siTypescript,
  siGit,
  siGithub,
  siNetlify,
  siGoogleanalytics,
  siGooglesearchconsole,
  siShopify
} from 'simple-icons'

import vscodeRaw from 'devicon/icons/vscode/vscode-original.svg?raw'

function svgTool(icon, forceWhite = false) {
  return { type: 'svg', name: icon.title, path: icon.path, hex: icon.hex, forceWhite }
}

/* Only tools with a verified icon (official brand SVG, or Adobe/VS Code's
   own monogram-badge style) are listed here — no text-only placeholders,
   so every entry in the marquee looks the same. Spline, JetEngine/Crocoblock,
   Protopie, MailUp and Canva were dropped: no verified icon asset found. */
const tools = [
  svgTool(siFigma),
  { type: 'badge', name: 'Adobe Illustrator', label: 'Ai', bg: '#FF9A00', fg: '#1a1a1a' },
  { type: 'badge', name: 'Adobe Photoshop', label: 'Ps', bg: '#31A8FF', fg: '#1a1a1a' },
  { type: 'badge', name: 'Adobe After Effects', label: 'Ae', bg: '#00005B', fg: '#9999FF' },
  { type: 'badge', name: 'Adobe InDesign', label: 'Id', bg: '#FF3366', fg: '#1a1a1a' },
  svgTool(siWebflow),
  { type: 'raw', name: 'Visual Studio Code', raw: vscodeRaw },
  svgTool(siBlender),
  svgTool(siVuedotjs),
  svgTool(siWordpress),
  svgTool(siElementor),
  svgTool(siReact),
  svgTool(siTypescript),
  svgTool(siNuxt),
  svgTool(siGit),
  svgTool(siGithub, true),
  svgTool(siJavascript),
  svgTool(siHtml5),
  svgTool(siCss),
  svgTool(siPython),
  svgTool(siNetlify),
  svgTool(siOdoo),
  svgTool(siShopify),
  svgTool(siBrevo),
  svgTool(siMailchimp),
  svgTool(siGoogleanalytics),
  svgTool(siGooglesearchconsole)
]
</script>

<style scoped>
.marquee-track {
  animation: marquee-scroll 42s linear infinite;
}

.marquee-outer:hover .marquee-track,
.marquee-outer:focus-within .marquee-track {
  animation-play-state: paused;
}

.icon-slot :deep(svg) {
  width: 100%;
  height: 100%;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .marquee-track {
    animation-duration: 26s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
