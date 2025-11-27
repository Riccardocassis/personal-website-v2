<template>
  <section class="min-h-screen bg-gradient-to-br from-[#0A0302] to-[#8E1C15]">

    <!-- Full-width HERO (no extra container) -->
    <div class="relative w-full h-[60vh] md:h-[80vh]">
      <img :src="gibsonCover" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>
    </div>

    <!-- Central title/intro section -->
    <section class="text-center max-w-3xl mx-auto pt-12 pb-16">
      <h1 class="text-4xl md:text-6xl font-bold">Gibson SG-1961 — Concept Experience</h1>
      <p class="text-lg md:text-xl text-white/70 mt-4">Un concept tra 3D, UI e interattività musicale.</p>
    </section>

    <div class="pt-12 pb-24 max-w-4xl mx-auto px-6">
      <div class="w-full flex justify-center items-center my-12">
        <video 
          class="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
          controls
          playsinline
          muted
        >
          <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4" />
        </video>
      </div>

      <p class="mt-4 text-white/80">Placeholder per il progetto Gibson. Qui aggiungeremo immagini, case study e descrizione.</p>
    </div>
  </section>
</template>

<script setup>
import gibsonCover from '../../assets/gibson cover pagina progetti.webp'
</script>

<style scoped>
/* No custom background here — Tailwind utilities used in template */
</style>
