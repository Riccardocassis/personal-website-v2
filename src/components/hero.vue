<template>
  <section aria-labelledby="hero-title" class="relative w-full bg-black min-h-screen">
    <!-- Full-bleed radial gradient layer for the hero (soft, behind content) -->
    <div
      ref="gradientRef"
      class="absolute inset-0 pointer-events-none z-0"
      :style="{
        background: 'radial-gradient(circle at 70% 50%, rgba(59,130,246,0.22), rgba(29,78,216,0.16) 28%, rgba(30,58,138,0.10) 60%)'
      }"
    ></div>

    <div class="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-12 gap-12 items-center min-h-screen">
        <!-- LEFT: subtle image / pattern -->
        <div class="order-2 md:order-1 md:col-span-7 flex items-center justify-center">
          <div class="relative w-full h-[72vh] md:h-[86vh] lg:h-[92vh] overflow-visible">
            <!-- Large side image: full-bleed within its column, toned down for better cohesion -->
            <img
              src="../assets/hero-riccardo.webp"
              alt="Portrait of Riccardo Cassis"
              class="absolute left-0 top-0 w-[120%] md:w-[140%] h-full object-cover brightness-[1.06] contrast-110 saturate-95 opacity-70 transform scale-[1.33] -translate-x-[8%] md:-translate-x-[18%] md:translate-y-0 z-20"
            />

            <!-- Softer overlay to gently blend the image with the blue background -->
            <div class="absolute inset-0 pointer-events-none z-30" aria-hidden>
              <!-- Use a softer custom linear gradient to avoid hard rectangular bands -->
              <div class="absolute inset-0" :style="{ background: 'linear-gradient(90deg, rgba(2,6,23,0.06) 0%, rgba(2,6,23,0.04) 40%, transparent 100%)' }"></div>
            </div>
          </div>
        </div>

        <!-- RIGHT: textual content -->
        <div class="order-1 md:order-2 md:col-span-5 text-left text-white">
          <div class="relative z-40 pl-6 md:pl-12 lg:pl-20">
            <div class="space-y-6 md:space-y-8 lg:space-y-10">
              <h1 ref="titleRef" id="hero-title" class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Riccardo Cassis UI/UX & Web Designer
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
const gradientRef = ref(null)

let tl = null
let gradTween = null

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

  // subtle 'breathing' radial gradient behind the text
  if (gradientRef.value) {
    gradTween = gsap.to(gradientRef.value, {
      scale: 1.08,
      x: 24,
      y: -16,
      duration: 12,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      transformOrigin: '50% 50%'
    })
  }
})

onBeforeUnmount(() => {
  try {
    if (tl) tl.kill()
    ScrollTrigger.getAll().forEach(t => t.kill())
    if (gradTween) gradTween.kill()
  } catch (e) {
    // ignore
  }
})
</script>
