<template>
  <section class="max-w-6xl mx-auto px-4 py-20 text-white">
    <header class="mb-10 px-2">
      <h2 class="text-3xl md:text-4xl font-semibold">Services</h2>
      <p class="text-white/70 mt-2 text-sm">Strategia, design e sviluppo per prodotti digitali eleganti.</p>
    </header>

    <!-- Symmetric 2x2 icon block -->
    <div class="icons-2x2 mx-auto mb-8">
      <div class="grid grid-cols-2 gap-4 w-max mx-auto">
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
      </div>
    </div>

    <div class="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-2">
      <!-- Card 1 -->
      <article class="service-card bg-neutral-900 border border-white/10 p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500" tabindex="0">
        <h2 class="text-xl font-semibold text-white mb-3">Web Design & Development</h2>
        <p class="text-white/70 leading-relaxed text-[15px]">Realizzo siti chiari, leggeri e ben strutturati, con attenzione a design, responsive e performance.</p>
        <ul class="mt-4 space-y-1 text-white/60 text-sm">
          <li>design responsive</li>
          <li>gerarchie pulite</li>
          <li>sviluppo Webflow/custom</li>
          <li>performance</li>
        </ul>
      </article>

      <!-- Card 2 -->
      <article class="service-card bg-neutral-900 border border-white/10 p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500" tabindex="0">
        <h2 class="text-xl font-semibold text-white mb-3">UI/UX Design</h2>
        <p class="text-white/70 leading-relaxed text-[15px]">Progetto interfacce semplici da usare, riducendo attriti e complessità.</p>
        <ul class="mt-4 space-y-1 text-white/60 text-sm">
          <li>flussi UX</li>
          <li>wireframe</li>
          <li>prototipi</li>
          <li>design system</li>
        </ul>
      </article>

      <!-- Card 3 -->
      <article class="service-card bg-neutral-900 border border-white/10 p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500" tabindex="0">
        <h2 class="text-xl font-semibold text-white mb-3">Brand Identity & Art Direction</h2>
        <p class="text-white/70 leading-relaxed text-[15px]">Definisco identità visive coerenti, leggibili e riconoscibili.</p>
        <ul class="mt-4 space-y-1 text-white/60 text-sm">
          <li>logo</li>
          <li>palette</li>
          <li>tipografia</li>
          <li>materiali grafici</li>
        </ul>
      </article>

      <!-- Card 4 -->
      <article class="service-card bg-neutral-900 border border-white/10 p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500" tabindex="0">
        <h2 class="text-xl font-semibold text-white mb-3">SEO & Web Optimization</h2>
        <p class="text-white/70 leading-relaxed text-[15px]">Ottimizzo struttura, contenuti e performance per un sito più veloce e più trovabile.</p>
        <ul class="mt-4 space-y-1 text-white/60 text-sm">
          <li>SEO tecnica</li>
          <li>on-page</li>
          <li>performance</li>
          <li>accessibilità</li>
        </ul>
      </article>

      
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

// Entrance animation on load + hover animation with GSAP
onMounted(() => {
  const cards = gsap.utils.toArray('.service-card')

  // Entrance: appear when the page loads (staggered)
  gsap.from(cards, {
    y: 28,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: 'power2.out'
  })

  // Hover interactions
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.03, duration: 0.25, ease: 'power1.out' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.25, ease: 'power1.out' })
    })
    // keyboard focus support
    card.addEventListener('focus', () => {
      gsap.to(card, { scale: 1.03, duration: 0.25, ease: 'power1.out' })
    })
    card.addEventListener('blur', () => {
      gsap.to(card, { scale: 1, duration: 0.25, ease: 'power1.out' })
    })
  })
})
</script>

<style scoped>
.text-muted { color: rgba(255,255,255,0.65); }
</style>
