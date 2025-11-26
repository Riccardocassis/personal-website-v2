<template>
  <section class="max-w-6xl mx-auto px-6 py-16 text-white">
    <header class="mb-10">
      <h2 class="text-3xl md:text-4xl font-semibold">Services</h2>
      <p class="text-muted mt-2 text-sm">Strategia, design e sviluppo per prodotti digitali eleganti.</p>
    </header>

    <div class="services-grid grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="service-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/6">
        <div class="h-12 w-12 rounded-full bg-white/6 flex items-center justify-center mb-4">S</div>
        <h3 class="text-xl font-medium">Strategy</h3>
        <p class="mt-2 text-sm text-white/70">Ricerca, roadmap e product thinking per prodotti che funzionano.</p>
      </div>

      <div class="service-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/6">
        <div class="h-12 w-12 rounded-full bg-white/6 flex items-center justify-center mb-4">D</div>
        <h3 class="text-xl font-medium">Design</h3>
        <p class="mt-2 text-sm text-white/70">UI, UX e visual design con attenzione alla performance e al dettaglio.</p>
      </div>

      <div class="service-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/6">
        <div class="h-12 w-12 rounded-full bg-white/6 flex items-center justify-center mb-4">T</div>
        <h3 class="text-xl font-medium">Development</h3>
        <p class="mt-2 text-sm text-white/70">Implementazione front-end moderna e ottimizzata per ogni schermo.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.service-card', {
    y: 28,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 85%'
    }
  })
})
</script>

<style scoped>
.text-muted { color: rgba(255,255,255,0.65); }
</style>
