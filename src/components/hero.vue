<template>
  <section aria-labelledby="hero-title" class="w-full bg-black">
    <div class="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- LEFT: subtle image / pattern -->
        <div class="order-2 md:order-1 flex items-center justify-center">
          <!-- make portrait more visible: increase opacity/contrast, remove blur and add subtle shadow -->
          <img src="../assets/hero-riccardo.webp" alt="pattern" class="w-full max-w-lg object-cover opacity-70 filter contrast-125 rounded-lg shadow-2xl" />
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
