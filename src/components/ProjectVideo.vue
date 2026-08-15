<template>
  <section class="bg-black py-8 px-6 text-center">
    <div class="max-w-6xl mx-auto">

      <!-- TITLE -->
      <h3 v-if="title" class="reveal text-white/70 mb-6">
        {{ title }}
      </h3>

      <!-- WRAPPER (altezza dinamica, niente aspect-ratio fisso) -->
      <div
        class="reveal relative w-full max-h-[80vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center"
      >

        <!-- VIDEO: SEMPRE integro, mai tagliato -->
        <video
          v-if="src"
          :src="src"
          controls
          playsinline
          preload="metadata"
          class="max-h-[80vh] max-w-full object-contain"
        />

        <!-- FALLBACK -->
        <div v-else class="text-white/40 py-10">
          {{ $t('projectShared.videoNoVideo') }}
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  src: { type: String, required: false },
  title: { type: String, default: "Preview della pagina" }
})
</script>