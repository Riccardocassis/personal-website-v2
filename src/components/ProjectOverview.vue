<template>
  <section class="bg-black pt-8 pb-10 md:pt-10 md:pb-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">

        <!-- PANORAMICA -->
        <div class="reveal">
          <p class="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 mb-4">
            {{ $t('projectShared.overviewEyebrow') }}
          </p>
          <p class="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
            {{ overviewText }}
          </p>

          <button
            type="button"
            @click="scrollToDetails"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            {{ $t('projectShared.scrollCta') }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>

        <!-- METADATA CARD -->
        <div class="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-6">
          <div v-if="meta.client">
            <p class="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{{ $t('projectShared.metaClient') }}</p>
            <p class="text-white font-semibold">{{ meta.client }}</p>
          </div>

          <div v-if="meta.role && meta.role.length">
            <p class="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{{ $t('projectShared.metaRole') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="r in meta.role" :key="r" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">{{ r }}</span>
            </div>
          </div>

          <div v-if="meta.category && meta.category.length">
            <p class="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{{ $t('projectShared.metaCategory') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="c in meta.category" :key="c" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">{{ c }}</span>
            </div>
          </div>

          <div v-if="meta.stack && meta.stack.length">
            <p class="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{{ $t('projectShared.metaStack') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in meta.stack" :key="s" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- PUNTI CHIAVE -->
      <div v-if="keyPoints && keyPoints.length" class="mt-8 md:mt-10">
        <h2 class="reveal text-lg md:text-xl font-bold tracking-tight text-white/70 mb-4">
          {{ $t('projectShared.keyPointsTitle') }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            v-for="(kp, i) in keyPoints"
            :key="i"
            class="reveal rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-colors duration-300"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400/40 text-cyan-400 text-xs font-semibold mb-2.5">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <p class="text-white/85 text-sm leading-snug">{{ kp }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  overviewText: { type: String, default: '' },
  meta: { type: Object, default: () => ({}) },
  keyPoints: { type: Array, default: () => [] },
  targetId: { type: String, default: 'project-details' }
})

function scrollToDetails() {
  const el = document.getElementById(props.targetId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
