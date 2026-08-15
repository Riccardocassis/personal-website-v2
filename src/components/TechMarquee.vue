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
            <div
              class="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 mx-4 md:mx-6"
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

              <div
                v-else
                class="px-3 h-full rounded-full border border-white/15 flex items-center justify-center text-white/60 text-[11px] md:text-xs uppercase tracking-wide whitespace-nowrap"
              >
                {{ tool.name }}
              </div>
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
  siGooglesearchconsole
} from 'simple-icons'

function svgTool(icon, forceWhite = false) {
  return { type: 'svg', name: icon.title, path: icon.path, hex: icon.hex, forceWhite }
}

const tools = [
  svgTool(siFigma),
  { type: 'badge', name: 'Adobe Illustrator', label: 'Ai', bg: '#FF9A00', fg: '#1a1a1a' },
  { type: 'badge', name: 'Adobe Photoshop', label: 'Ps', bg: '#31A8FF', fg: '#1a1a1a' },
  { type: 'badge', name: 'Adobe After Effects', label: 'Ae', bg: '#00005B', fg: '#9999FF' },
  { type: 'badge', name: 'Adobe InDesign', label: 'Id', bg: '#FF3366', fg: '#1a1a1a' },
  svgTool(siWebflow),
  { type: 'badge', name: 'Visual Studio Code', label: 'VS', bg: '#007ACC', fg: '#ffffff' },
  svgTool(siBlender),
  svgTool(siVuedotjs),
  { type: 'text', name: 'Spline' },
  svgTool(siWordpress),
  svgTool(siElementor),
  svgTool(siReact),
  { type: 'text', name: 'Crocoblock' },
  svgTool(siTypescript),
  { type: 'text', name: 'Protopie' },
  svgTool(siNuxt),
  svgTool(siGit),
  svgTool(siGithub, true),
  svgTool(siJavascript),
  svgTool(siHtml5),
  svgTool(siCss),
  svgTool(siPython),
  svgTool(siNetlify),
  svgTool(siOdoo),
  svgTool(siBrevo),
  svgTool(siMailchimp),
  svgTool(siGoogleanalytics),
  svgTool(siGooglesearchconsole),
  { type: 'text', name: 'Canva' },
  { type: 'text', name: 'MailUp' }
]
</script>

<style scoped>
.marquee-track {
  animation: marquee-scroll 38s linear infinite;
}

.marquee-outer:hover .marquee-track,
.marquee-outer:focus-within .marquee-track {
  animation-play-state: paused;
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
    animation-duration: 22s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
