<template>
  <section class="min-h-screen bg-black">

    <!-- Full-width HERO with title overlay -->
    <div class="relative w-full h-[60vh] md:h-[80vh]">
      <img :src="gibsonCover" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>
      <!-- Subtle black overlay to improve readability (light) -->
      <div class="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 class="text-4xl md:text-6xl font-bold text-white">Gibson SG-1961 — Concept Experience</h1>
        <p class="text-lg md:text-xl text-white/70 mt-4">Un concept tra 3D, UI e interattività musicale.</p>
      </div>
    </div>

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
