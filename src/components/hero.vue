<template>
  <section aria-labelledby="hero-title" class="w-full bg-black">
    <div class="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- LEFT: subtle image / pattern -->
        <div class="order-2 md:order-1 flex items-center justify-center">
          <!-- faded, blurred image to keep focus on text -->
          <img src="../assets/hero-riccardo.webp" alt="pattern" class="w-full max-w-md object-cover opacity-20 filter blur-sm rounded-lg" />
        </div>

        <!-- RIGHT: textual content -->
        <div class="order-1 md:order-2 text-left text-white">
          <div class="space-y-6 md:space-y-8 lg:space-y-10">
            <h1 ref="titleRef" id="hero-title" class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Riccardo Cassis — UI/UX & Web Designer
            </h1>

            <p ref="subtitleRef" class="text-lg md:text-xl text-white/90 max-w-2xl">
              Progetto interfacce chiare e flussi ordinati, unendo design e front-end leggero.
            </p>

            <p class="text-sm md:text-base text-white/70 max-w-xl">
              Creo soluzioni semplici e utili attraverso un approccio pratico e orientato al problema.
            </p>

            <div class="pt-2">
              <RouterLink to="/projects" ref="ctaRef" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Esplora i miei progetti
              </RouterLink>
            </div>

            <div class="mt-4 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" title="LinkedIn" class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24H18v-7.3c0-1.7 0-3.9-2.4-3.9-2.4 0-2.7 1.8-2.7 3.8V24H7.5V8z"/></svg>
              </a>
              <a href="#" aria-label="Behance" title="Behance" class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 10.5c0-1.93-1.57-3.5-3.5-3.5H11v14h7.5C20.43 21 22 19.43 22 17.5c0-1.55-1.05-2.86-2.5-3.27V14c1.45.41 2.5 1.72 2.5 3.27 0 1.93-1.57 3.5-3.5 3.5H11V7h7.5C20.43 7 22 8.57 22 10.5zM8.5 12c1.38 0 2.5-1.12 2.5-2.5S9.88 7 8.5 7 6 8.12 6 9.5 7.12 12 8.5 12zM8.5 14H6v6h2.5v-6z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" title="GitHub" class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19.93-.26 1.94-.39 2.94-.39 1 0 2.01.13 2.94.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.11 0 4.44-2.71 5.42-5.29 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.35.5 12 .5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)

let tl = null

onMounted(() => {
  // timeline for hero elements: fade + translateY
  tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
  tl.from(titleRef.value, { y: 20, opacity: 0 })
    .from(subtitleRef.value, { y: 16, opacity: 0 }, '-=0.38')
    .from(ctaRef.value, { y: 12, opacity: 0 }, '-=0.3')

  // stagger navbar items if they exist in DOM with .nav-item
  const navItems = document.querySelectorAll('.nav-item')
  if (navItems && navItems.length) {
    gsap.from(navItems, { y: -8, opacity: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' })
  }
})

onBeforeUnmount(() => {
  try {
    if (tl) tl.kill()
    ScrollTrigger.getAll().forEach(t => t.kill())
  } catch (e) {
    // ignore
  }
})
</script>
