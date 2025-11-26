<template>
  <section class="grid-root pt-20 pb-32 px-10 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold">Projects</h1>
        <p class="text-lg text-white/80 mt-3">Una selezione dei miei lavori tra identità visive, UI/UX e web design.</p>
      </div>

      <!-- 3-column layout with static parallax-offset per column -->
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">

        <!-- Column 1 -->
        <div class="parallax-column flex flex-col">
          <!-- Card 1 -->
          <RouterLink to="/projects/project-1 parallax-card offset-2" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[520px]">
            <img :src="rebert" alt="p1" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="piadina" alt="p1-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 1</h3>

          <!-- Card 4 -->
          <RouterLink to="/projects/project-4" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[380px] parallax-card offset-3">
            <img :src="zaini" alt="p4" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="museodellacarta" alt="p4-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 4</h3>

          <!-- Card 7 -->
          <RouterLink to="/projects/project-7" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[460px] parallax-card offset-1">
            <img :src="appchitarra" alt="p7" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="hero" alt="p7-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 7</h3>
        </div>

        <!-- Column 2 -->
        <div class="parallax-column flex flex-col">
          <!-- Card 2 -->
          <RouterLink to="/projects/project-2" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[380px] parallax-card offset-1">
            <img :src="piadina" alt="p2" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="rebert" alt="p2-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 2</h3>

          <!-- Card 5 -->
          <RouterLink to="/projects/project-5" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[520px] parallax-card offset-2">
            <img :src="museodellacarta" alt="p5" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="fillbo" alt="p5-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 5</h3>

          <!-- Card 8 -->
          <RouterLink to="/projects/project-8" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[380px] parallax-card offset-3">
            <img :src="hero" alt="p8" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="vasi" alt="p8-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 8</h3>
        </div>

        <!-- Column 3 -->
        <div class="parallax-column flex flex-col">
          <!-- Card 3 -->
          <RouterLink to="/projects/project-3" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[460px] parallax-card offset-3">
            <img :src="ironriff" alt="p3" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="zaini" alt="p3-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 3</h3>

          <!-- Card 6 -->
          <RouterLink to="/projects/project-6" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[460px] parallax-card offset-2">
            <img :src="fillbo" alt="p6" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="appchitarra" alt="p6-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 6</h3>

          <!-- Card 9 -->
          <RouterLink to="/projects/project-9" class="project-card group relative overflow-hidden rounded-2xl h-[380px] md:h-[460px] parallax-card offset-3">
            <img :src="vasi" alt="p9" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
            <img :src="beat" alt="p9-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span class="text-lg font-medium">Visualizza →</span>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Titolo Progetto 9</h3>
        </div>

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

// Cards are manually written in the template to respect the editorial pattern.

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
  grid-auto-rows: 300px;
}
.masonry-grid img {
  height: 100%;
}
.project-card {
  display: block;
  width: 100%;
  height: 100%;
}

/* Card height types */
.card-large { height: 650px; }
.card-medium { height: 420px; }
.card-small { height: 300px; }
.card-wide { height: 380px; }

/* Controlled offsets for editorial rhythm (applied at md and up) */
@media (min-width: 768px) {
  .offset-1 { margin-top: 40px; }
  .offset-2 { margin-top: 60px; }
  .offset-3 { margin-top: 80px; }
}

/* Parallax hooks */
.parallax-column { will-change: transform; }
.parallax-card { will-change: transform; }
</style>