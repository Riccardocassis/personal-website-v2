<template>
  <section class="min-h-screen bg-black">

    <!-- Title section (newspaper headline style) -->
    <div class="w-full pt-24 md:pt-32 pb-12 md:pb-20 flex items-center justify-center text-center px-6">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white">Gibson SG-1961 — Concept Experience</h1>
        <p class="text-lg md:text-xl text-white/70 mt-4">Un concept tra 3D, UI e interattività musicale.</p>
      </div>
    </div>

    <!-- Main image below the title (hero preserved) -->
    <div class="relative w-full h-[60vh] md:h-[80vh]">
      <img :src="gibsonCover" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>
      <!-- Subtle black overlay to improve readability (light) -->
      <div class="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>
    </div>

    <!-- Project Intro -->
    <section class="max-w-3xl mx-auto px-6 text-center py-20" data-aos="fade-up">
      <h2 class="text-2xl md:text-3xl font-semibold text-white">Overview</h2>
      <p class="mt-4 text-white/70">Un concept che unisce esperienza 3D, interfacce UI e interattività musicale: esplora mockup, workflow e prototipi interattivi.</p>
    </section>

    <!-- Main Mockups -->
    <section class="max-w-5xl mx-auto px-6 py-12" data-aos="fade-up">
      <div class="rounded-xl shadow-xl overflow-hidden">
        <img :src="mockDesktop" alt="desktop mockup" class="w-full object-cover rounded-xl" />
      </div>
      <div class="max-w-sm mx-auto mt-6">
        <img :src="mockMobile" alt="mobile mockup" class="w-full rounded-xl shadow-xl object-cover" />
      </div>
    </section>

    <!-- Workflow -->
    <section class="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
      <h2 class="text-2xl md:text-3xl font-semibold text-white text-center">Workflow</h2>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="rounded-xl bg-white/5 p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
          <h3 class="text-white font-medium">Research</h3>
          <p class="text-white/70 mt-2 text-sm">Analisi utenti e benchmark per definire tono e interazione.</p>
          <img :src="thumb1" class="mt-4 w-20 h-12 object-cover rounded-md" />
        </div>
        <div class="rounded-xl bg-white/5 p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
          <h3 class="text-white font-medium">Concept</h3>
          <p class="text-white/70 mt-2 text-sm">Sketching e moodboards per definire l'estetica.</p>
          <img :src="thumb2" class="mt-4 w-20 h-12 object-cover rounded-md" />
        </div>
        <div class="rounded-xl bg-white/5 p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
          <h3 class="text-white font-medium">UI</h3>
          <p class="text-white/70 mt-2 text-sm">Wireframes e componenti per flussi coerenti.</p>
          <img :src="thumb3" class="mt-4 w-20 h-12 object-cover rounded-md" />
        </div>
        <div class="rounded-xl bg-white/5 p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
          <h3 class="text-white font-medium">Prototype</h3>
          <p class="text-white/70 mt-2 text-sm">Prototipi interattivi per test e iterazioni rapide.</p>
          <img :src="thumb4" class="mt-4 w-20 h-12 object-cover rounded-md" />
        </div>
      </div>
    </section>

    <!-- Behind the Scenes (masonry-like) -->
    <section class="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
      <h2 class="text-2xl md:text-3xl font-semibold text-white text-center">Behind the Scenes</h2>
      <div class="mt-8 columns-1 md:columns-2 lg:columns-3 gap-4">
        <img :src="bts1" class="mb-4 w-full rounded-xl break-inside-avoid shadow-lg object-cover" />
        <img :src="bts2" class="mb-4 w-full rounded-xl break-inside-avoid shadow-lg object-cover" />
        <img :src="bts3" class="mb-4 w-full rounded-xl break-inside-avoid shadow-lg object-cover" />
        <img :src="bts4" class="mb-4 w-full rounded-xl break-inside-avoid shadow-lg object-cover" />
      </div>
    </section>

    <!-- Interactive Prototype (video) -->
    <section class="max-w-4xl mx-auto px-6 py-16 text-center" data-aos="fade-up">
      <h2 class="text-2xl md:text-3xl font-semibold text-white">Interactive Prototype</h2>
      <p class="text-white/70 mt-4">Guarda il prototipo interattivo e prova le animazioni e transizioni.</p>
      <video controls class="w-full max-w-4xl mx-auto rounded-xl shadow-2xl mt-6">
        <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4">
      </video>
    </section>

    <!-- Call to Action -->
    <section class="max-w-3xl mx-auto px-6 py-16 text-center">
      <p class="text-white/70">Vuoi vedere altri progetti o collaborare?</p>
      <div class="mt-6 flex gap-6 justify-center">
        <router-link to="/projects" class="text-white/90 underline">Tutti i progetti</router-link>
        <router-link to="/contact" class="text-white/90 underline">Contattami</router-link>
      </div>
    </section>
  </section>
</template>

<script setup>
import gibsonCover from '../../assets/gibson cover pagina progetti.webp'
import mockDesktop from '../../assets/gibson b.webp'
import mockMobile from '../../assets/gibson a.webp'
import thumb1 from '../../assets/museodellacarta-a.webp'
import thumb2 from '../../assets/webable a.webp'
import thumb3 from '../../assets/finia.webp'
import thumb4 from '../../assets/hero-riccardo.webp'
import bts1 from '../../assets/ironriff.webp'
import bts2 from '../../assets/rebert.webp'
import bts3 from '../../assets/synapses-a.webp'
import bts4 from '../../assets/vasi.webp'
</script>

<style scoped>
/* No custom background here — Tailwind utilities used in template */
</style>
