<template>
  <section class="grid-root pt-20 pb-32 px-10 lg:px-20">
    <div aria-hidden="true" class="fixed inset-0 pointer-events-none" style="background: radial-gradient(600px 400px at 10% 20%, rgba(59,130,246,0.14), transparent 30%), radial-gradient(500px 400px at 90% 80%, rgba(59,130,246,0.12), transparent 25%); -webkit-backdrop-filter: none; backdrop-filter: none;">
    </div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold">Projects</h1>
        <p class="text-lg text-white/80 mt-3">Una selezione dei miei lavori tra identità visive, UI/UX e web design.</p>
      </div>

      <!-- 3-column layout with static parallax-offset per column -->
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">

        <!-- Column 1 -->
        <div class="parallax-column flex flex-col space-y-12">
          <!-- Card 1 -->
          <RouterLink to="/projects/project-1" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-2">
            <div class="parallax-content absolute inset-0">
              <img :src="gibsonA" alt="gibson" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="gibsonB" alt="gibson-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">New Gibson website concept </h3>

          <!-- Card 4 -->
          <RouterLink to="/projects/project-4" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-3">
            <div class="parallax-content absolute inset-0">
              <img :src="fillboA" alt="fillbo" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="fillboB" alt="fillbo-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Fillbo App</h3>

          <!-- Card 7 -->
          <RouterLink to="/projects/project-7" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-1">
            <div class="parallax-content absolute inset-0">
              <img :src="hellerA" alt="p7" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="hellerB" alt="p7-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Heller Garden Art direction proposal</h3>
        </div>

        <!-- Column 2 -->
        <div class="parallax-column flex flex-col space-y-12">
          <!-- Card 2 -->
          <RouterLink to="/projects/project-2" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-1">
            <div class="parallax-content absolute inset-0">
              <img :src="sizexlA" alt="sizexl" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="sizexlB" alt="sizexl-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">SizeXL website</h3>

          <!-- Card 5 -->
          <RouterLink to="/projects/project-5" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-2">
            <div class="parallax-content absolute inset-0">
              <img :src="opsifyA" alt="opsify" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="opsifyB" alt="opsify-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Opsify App</h3>

          <!-- Card 8 -->
          <RouterLink to="/projects/project-8" class="project-card group relative overflow-hidden rounded-2xl parallax-card">
            <div class="parallax-content absolute inset-0">
              <img :src="robertoA" alt="roberto" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="robertoB" alt="roberto-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Piadine Roberto Art direction proposal</h3>
        </div>

        <!-- Column 3 -->
        <div class="parallax-column flex flex-col space-y-12">
          <!-- Card 3 -->
          <RouterLink to="/projects/project-3" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-3">
            <div class="parallax-content absolute inset-0">
                <img :src="synapsesA" alt="synapses" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
                <img :src="synapsesB" alt="synapses-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                  <span class="text-lg font-medium">Visualizza →</span>
                </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Synapses landing page </h3>

          <!-- Card 6 -->
          <RouterLink to="/projects/project-6" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-2">
            <div class="parallax-content absolute inset-0">
              <img :src="webableA" alt="webable" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="webableB" alt="webable-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">WebAble App</h3>

          <!-- Card 9 -->
          <RouterLink to="/projects/project-9" class="project-card group relative overflow-hidden rounded-2xl parallax-card offset-3">
            <div class="parallax-content absolute inset-0">
              <img :src="controlAltA" alt="control-alt-canc" class="w-full h-full object-cover aspect-auto transition-all duration-300 group-hover:opacity-0" />
              <img :src="controlAltB" alt="control-alt-canc-hover" class="absolute inset-0 w-full h-full object-cover aspect-auto opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                <span class="text-lg font-medium">Visualizza →</span>
              </div>
            </div>
          </RouterLink>
          <h3 class="text-lg font-medium mt-3">Control-Alt-Canc fanzine</h3>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useParallaxCards } from '../composables/useParallaxCards'

// register here as well to ensure plugin available
gsap.registerPlugin(ScrollTrigger)

// Import existing assets to avoid missing /img references
import rebert from '../assets/rebert.webp'
import piadina from '../assets/piadinaroberto.webp'
import ironriff from '../assets/ironriff.webp'
import zaini from '../assets/zaini.png'
import museodellacarta from '../assets/museodellacarta.webp'
import fillbo from '../assets/fillbo.webp'
import gibsonA from '../assets/gibson a.webp'
import gibsonB from '../assets/gibson b.webp'
import sizexlA from '../assets/sizexl logo a .webp'
import sizexlB from '../assets/sizexl b.webp'
import appchitarra from '../assets/appchitarra.webp'
import hero from '../assets/hero-riccardo.webp'
import vasi from '../assets/vasi.webp'
import beat from '../assets/beat.webp'
import opsifyB from '../assets/opsify-b.webp'
import opsifyA from '../assets/opsify-a.webp'
import fillboA from '../assets/fillbo-a.webp'
import fillboB from '../assets/fillbo-b.webp'
import hellerA from '../assets/hellergarden-a.webp'
import hellerB from '../assets/heller garden-b.webp'
import controlAltA from '../assets/control alt canc a.webp'
import controlAltB from '../assets/control alt canc b.webp'
import webableA from '../assets/webable a.webp'
import webableB from '../assets/webable b.webp'
import synapsesA from '../assets/synapses-a.webp'
import synapsesB from '../assets/synapses b.webp'
import robertoA from '../assets/roberto a.webp'
import robertoB from '../assets/roberto b.webp'

const gridRef = ref(null)

// Cards are manually written in the template to respect the editorial pattern.

const { init, kill } = useParallaxCards(gridRef)

onMounted(() => {
  // simple entrance animation for project cards (no full-screen loader)
  const els = gridRef.value?.querySelectorAll('.project-card') || []
  if (els.length) {
    gsap.fromTo(
      els,
      { autoAlpha: 0, y: 20, scale: 0.98 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 }
    )
  }

  // init parallax + magnetic hover (composable handles desktop checks)
  try {
    init()
  } catch (err) {
    console.error('[Projects.vue] useParallaxCards init failed:', err)
  }
})

onBeforeUnmount(() => {
  // cleanup parallax & listeners
  kill()
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
  height: 420px; /* mobile/tablet fixed height */
}

@media (min-width: 1024px) {
  .project-card {
    height: 520px; /* larger fixed height on desktop */
  }
}

/* Card height types */
.card-large { height: 650px; }
.card-medium { height: 420px; }
.card-small { height: 300px; }
.card-wide { height: 380px; }

/* Controlled offsets for editorial rhythm (applied at md and up) */
/* Remove translate offsets so cards stay perfectly aligned */
@media (min-width: 768px) {
  .project-card.offset-1 .parallax-content { transform: none !important; }
  .project-card.offset-2 .parallax-content { transform: none !important; }
  .project-card.offset-3 .parallax-content { transform: none !important; }
}

/* Parallax hooks */
.parallax-column { will-change: transform; }
.parallax-card { will-change: transform; }
.parallax-content { will-change: transform; position: absolute; inset: 0; border-radius: inherit; overflow: hidden; transition: transform 0.45s ease; }
.parallax-content img { display: block; width: 100%; height: 100%; object-fit: cover; }

/* Ensure rounded corners and clipping on mobile (force high specificity) */
@media (max-width: 768px) {
  .project-card { border-radius: 1rem !important; overflow: hidden !important; }
  .project-card .parallax-content { border-radius: 1rem !important; overflow: hidden !important; position: absolute; inset: 0; }
  .project-card .parallax-content img { border-radius: 1rem !important; }
}
</style>