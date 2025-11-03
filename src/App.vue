<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/navbar.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// scroll progress (0..1)
const scrollProgress = ref(0)
let rafId = null

function updateProgress() {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const scrollHeight = doc.scrollHeight - window.innerHeight
  const pct = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0
  scrollProgress.value = pct
}

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(updateProgress)
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  
  // Register ScrollTrigger and add reveal animations for page sections
  try {
    gsap.registerPlugin(ScrollTrigger)
    const sections = gsap.utils.toArray('main > *')
    sections.forEach((sec) => {
      gsap.from(sec, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      })
    })
  } catch (e) {
    // if GSAP not available, silently fail
    // console.warn('GSAP reveal not initialized', e)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <Navbar />
    <router-view />

    <!-- Vertical scroll indicator (right side) - hidden on mobile -->
    <div aria-hidden="true" class="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div class="w-2 h-56 rounded-full bg-white/6 overflow-hidden">
        <div
          class="scroll-indicator-fill origin-bottom bg-[color:var(--accent)] h-full"
          :style="{ transform: `scaleY(${scrollProgress})` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root{--accent:#00BFFF}
.scroll-indicator-fill{
  transform-origin: bottom;
  transition: transform 220ms linear;
}

/* make the track a bit visible on dark bg */
</style>

