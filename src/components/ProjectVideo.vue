<template>
  <section class="bg-black py-8 px-6 text-center">
    <div class="max-w-6xl mx-auto">

      <!-- TITLE -->
      <h3 v-if="title" class="reveal text-white/70 mb-6">
        {{ title }}
      </h3>

      <!-- WRAPPER -->
      <div
        class="reveal relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black"
      >

        <!-- VIDEO -->
        <video
          v-if="src"
          :src="src"
          controls
          playsinline
          preload="metadata"
          class="w-full h-full object-cover"
        />

        <!-- FALLBACK -->
        <div v-else class="text-white/40 py-10">
          Nessun video disponibile
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: false
  },
  title: {
    type: String,
    default: "Preview della pagina"
  }
})
</script>
