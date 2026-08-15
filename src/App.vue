<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"

import Navbar from "./components/navbar.vue"
import Footer from "./components/Footer.vue"
import Breadcrumb from "./components/Breadcrumb.vue"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useReveal } from "@/composables/useReveal.js"

// Attiva reveal globale
useReveal()

// Barra di progresso scroll
const scrollProgress = ref(0)
let rafId = null

const route = useRoute()

function updateProgress() {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const scrollHeight = doc.scrollHeight - window.innerHeight
  scrollProgress.value =
    scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0
}

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(updateProgress)
}

onMounted(() => {
  updateProgress()
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onScroll)

  try {
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray("main > *")

    sections.forEach((sec) => {
      gsap.from(sec, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        }
      })
    })
  } catch (e) {
    console.warn("GSAP error:", e)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll)
  window.removeEventListener("resize", onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="relative bg-black text-white min-h-screen overflow-x-hidden">
    <Navbar />
    <Breadcrumb />

    <!-- Qui vengono caricati i tuoi pages -->
    <main>
      <router-view />
    </main>

    <Footer :class="route.path === '/' ? 'hidden' : ''" />

    <!-- Scroll indicator -->
    <div
      aria-hidden="true"
      class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div class="w-2 h-56 rounded-full bg-white/10 overflow-hidden">
        <div
          class="scroll-indicator-fill bg-[color:var(--accent)] h-full"
          :style="{ transform: `scaleY(${scrollProgress})` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --accent: #00bfff;
}

.scroll-indicator-fill {
  transform-origin: bottom;
  transition: transform 200ms linear;
}
</style>
