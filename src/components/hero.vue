<template>
  <section aria-labelledby="hero-title" class="relative w-full bg-black">

    <div class="max-w-screen-xl mx-auto px-6 pt-0 md:pt-36 pb-12 md:pb-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:min-h-[72vh]">

        <!-- HERO IMAGE -->
        <div class="order-1 md:col-span-6 flex items-center justify-start">
          <div class="relative w-full flex justify-start -mx-6 md:mx-0">
            <div class="w-[80%] sm:w-[70%] md:w-[45%]">

              <picture class="block relative z-10">
                <source srcset="/src/assets/hero-riccardo.webp" type="image/webp" />

                <img
                  src="/src/assets/hero-riccardo.webp"
                  alt="Portrait of Riccardo Cassis"
                  class="w-full h-auto object-cover rounded-3xl hero-mask transform origin-left scale-[2] relative z-10"
                  decoding="async"
                  fetchpriority="high"
                />
              </picture>

            </div>
          </div>
        </div>

        <!-- TEXT -->
        <div class="order-2 md:col-span-6 flex items-center">
          <div class="w-full text-white pr-6 md:pr-20 pl-0 md:pl-12 lg:pl-20 mt-8 md:mt-0">
            <div class="max-w-xl md:text-left text-center">

              <h1 ref="titleRef" id="hero-title"
                  class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span class="whitespace-nowrap">Riccardo Cassis</span>
                <span class="block mt-2">UI/UX &amp; Web Designer</span>
              </h1>

              <p ref="subtitleRef"
                 class="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/90 max-w-md md:max-w-xl leading-relaxed mx-auto md:mx-0">
                Trasformo le tue idee in soluzioni digitali.
              </p>

              <!-- SOCIAL ICONS -->
              <div class="mt-6 md:mt-8 flex justify-center md:justify-start gap-4 md:gap-6">

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/riccardo-cassis/"
                   target="_blank"
                   class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-105 transition-all">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.8v2.06h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.67V24h-5V16.6c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8.98z"/>
</svg>
                </a>

                <!-- GitHub -->
                <a href="https://github.com/Riccardocassis"
                   target="_blank"
                   class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-105 transition-all">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12 .5C5.65.5.75 5.4.75 11.75c0 4.83 3.14 8.92 7.5 10.36.55.1.75-.24.75-.53 
        0-.26-.01-1-.01-1.93-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.66.07-.66 
        1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.71.38-1.18.69-1.45-2.44-.28-5-1.22-5-5.43 
        0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 012.75-.37c.93.01 
        1.86.13 2.74.38 2.09-1.43 3.01-1.13 3.01-1.13.6 1.52.22 2.64.11 2.92.7.77 1.12 1.75 1.12 2.95 
        0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 
        4.36-1.44 7.5-5.53 7.5-10.36C23.25 5.4 18.35.5 12 .5z"/>
</svg>
                </a>

                <!-- Behance -->
                <a href="https://www.behance.net/riccardocassis"
                   target="_blank"
                   class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-white/70 hover:text-white hover:scale-105 transition-all">
                  <img src="../assets/icon-behance.webp" class="w-5 h-5 sm:w-7 sm:h-7" />
                </a>

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
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const subtitleRef = ref(null)
let tl = null

onMounted(() => {
  tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
  tl.from(titleRef.value, { y: 20, opacity: 0 })
    .from(subtitleRef.value, { y: 16, opacity: 0 }, '-=0.35')
})

onBeforeUnmount(() => {
  tl?.kill()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
.hero-mask {
  -webkit-mask-image: radial-gradient(circle at 50% 37%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.6) 70%, transparent 100%);
  mask-image: radial-gradient(circle at 50% 37%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.6) 70%, transparent 100%);
}
@media (min-width: 768px) {
  .hero-mask {
    -webkit-mask-image: radial-gradient(circle at 68% 50%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.6) 65%, transparent 100%);
    mask-image: radial-gradient(circle at 68% 50%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.6) 65%, transparent 100%);
  }
}
</style>