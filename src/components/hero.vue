<template>
  <section aria-labelledby="hero-title" class="relative w-full bg-black">
    <!-- Full-bleed radial gradient layer for the hero (soft, behind content) -->
    <div
      ref="gradientRef"
      class="absolute inset-0 pointer-events-none z-0"
      :style="{
        background: 'radial-gradient(circle at 70% 50%, rgba(59,130,246,0.22), rgba(29,78,216,0.16) 28%, rgba(30,58,138,0.10) 60%)'
      }"
    ></div>

    <div class="max-w-screen-xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[72vh]">
        <!-- IMAGE: mobile on top, desktop on the left -->
        <div class="order-1 md:order-1 md:col-span-6 flex items-center justify-center md:justify-start">
          <div class="relative w-full flex justify-center md:justify-start">
            <!-- Image container: constrained width on desktop for a cleaner layout -->
            <div class="w-[86%] md:w-[45%]">
              <img
                src="../assets/hero-riccardo.webp"
                alt="Portrait of Riccardo Cassis"
                class="w-full h-auto object-cover rounded-3xl brightness-[1.12] contrast-110 opacity-80 [mask-image:radial-gradient(circle_at_68%_50%,rgba(0,0,0,0.5)_55%,transparent_100%)]"
              />
            </div>
          </div>
        </div>

        <!-- TEXT: desktop on the right -->
        <div class="order-2 md:order-2 md:col-span-6 flex items-center">
          <div class="w-full text-white pl-0 md:pl-12 lg:pl-20">
            <div class="max-w-2xl">
              <h1 ref="titleRef" id="hero-title" class="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Riccardo Cassis – UI/UX & Web Designer
              </h1>

              <p ref="subtitleRef" class="mt-6 text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                Progetto interfacce chiare e flussi ordinati, unendo design e front-end leggero.
              </p>

              <div class="mt-10">
                <RouterLink
                  to="/projects"
                  ref="ctaRef"
                  class="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
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
