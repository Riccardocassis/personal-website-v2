<template>
  <section class="pt-24 pb-32">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold">Projects</h1>
        <p class="text-lg text-white/80 mt-3">Una selezione dei miei lavori tra identità visive, UI/UX e web design.</p>
      </div>

      <!-- Masonry-like grid generated from data -->
      <div ref="gridRef" class="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <template v-for="(card, idx) in cards" :key="card.id">
          <div :class="card.wrapperClass">
            <RouterLink :to="card.route" class="project-card group relative overflow-hidden rounded-2xl cursor-pointer block w-full h-full">
              <!-- LAYER 1 - default cover -->
              <img :src="card.default" :alt="`default ${card.id}`" class="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0" />
              <!-- LAYER 2 - hover cover -->
              <img :src="card.hover" :alt="`hover ${card.id}`" class="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <!-- LAYER 3 - overlay -->
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </RouterLink>
            <h3 class="text-lg font-medium mt-4">{{ card.title }}</h3>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// Import existing assets to avoid missing /img references
import rebert from '../assets/rebert.webp'
import piadina from '../assets/piadinaroberto.webp'
import ironriff from '../assets/ironriff.webp'
import zaini from '../assets/zaini.png'
import museodellacarta from '../assets/museodellacarta.webp'
import fillbo from '../assets/fillbo.webp'
import appchitarra from '../assets/appchitarra.webp'
import hero from '../assets/hero-riccardo.webp'
import vasi from '../assets/vasi.webp'
import beat from '../assets/beat.webp'

const gridRef = ref(null)

// Define cards with irregular span classes for a masonry effect
const cards = [
  { id: 1, title: 'Titolo Progetto 1', route: '/projects/project-1', default: rebert, hover: piadina, wrapperClass: 'lg:row-span-2' },
  { id: 2, title: 'Titolo Progetto 2', route: '/projects/project-2', default: piadina, hover: rebert, wrapperClass: 'lg:row-span-2' },
  { id: 3, title: 'Titolo Progetto 3', route: '/projects/project-3', default: ironriff, hover: zaini, wrapperClass: 'lg:row-span-2' },
  { id: 4, title: 'Titolo Progetto 4', route: '/projects/project-4', default: zaini, hover: museodellacarta, wrapperClass: 'lg:row-span-2' },
  { id: 5, title: 'Titolo Progetto 5', route: '/projects/project-5', default: museodellacarta, hover: fillbo, wrapperClass: 'lg:row-span-2' },
  { id: 6, title: 'Titolo Progetto 6', route: '/projects/project-6', default: fillbo, hover: appchitarra, wrapperClass: 'lg:row-span-2' },
  { id: 7, title: 'Titolo Progetto 7', route: '/projects/project-7', default: appchitarra, hover: hero, wrapperClass: 'lg:row-span-2' },
  { id: 8, title: 'Titolo Progetto 8', route: '/projects/project-8', default: hero, hover: vasi, wrapperClass: 'lg:row-span-2' },
  { id: 9, title: 'Titolo Progetto 9', route: '/projects/project-9', default: vasi, hover: beat, wrapperClass: 'lg:row-span-2' },
  { id:10, title: 'Titolo Progetto 10', route: '/projects/project-10', default: beat, hover: rebert, wrapperClass: 'lg:row-span-2' }
]

onMounted(() => {
  const els = gridRef.value?.querySelectorAll('.project-card') || []
  if (els.length) {
    gsap.fromTo(els,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
    )
  }
})
</script>

<style scoped>
.masonry-grid {
  grid-auto-rows: 12rem;
}
.masonry-grid img {
  height: 100%;
}
.project-card {
  display: block;
  width: 100%;
  height: 100%;
}
</style>