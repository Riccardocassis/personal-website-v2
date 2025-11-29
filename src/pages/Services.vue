<template>
  <section class="relative max-w-6xl mx-auto px-4 py-20 text-white">
    <div class="fixed inset-0 pointer-events-none z-0" aria-hidden="true" style="background: radial-gradient(circle at 70% 50%, rgba(59,130,246,0.22), rgba(29,78,216,0.16) 28%, rgba(30,58,138,0.10) 60%);"></div>
    <div class="relative z-10">
    <header class="mb-4 px-2">
      <h1 class="text-3xl md:text-6xl font-extrabold text-white leading-tight">Services</h1>
    </header>

    <!-- Symmetric 2x2 icon block -->
    <div class="icons-2x2 mx-auto mb-4">
      <div class="grid grid-cols-2 gap-4 w-max mx-auto">
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
        <div class="w-6 h-6 rounded-full bg-white/6"></div>
      </div>
    </div>

    <div class="services-grid grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-2 items-stretch auto-rows-fr">
      <!-- Card 1 -->
      <article class="service-card bg-transparent border p-8 rounded-2xl hover:border-blue-500 flex flex-col justify-between h-full w-full" tabindex="0">
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
      <article class="service-card bg-transparent border p-8 rounded-2xl hover:border-blue-500 flex flex-col justify-between h-full w-full" tabindex="0">
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
      <article class="service-card bg-transparent border p-8 rounded-2xl hover:border-blue-500 flex flex-col justify-between h-full w-full" tabindex="0">
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
      <article class="service-card bg-transparent border p-8 rounded-2xl hover:border-blue-500 flex flex-col justify-between h-full w-full" tabindex="0">
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
    </div>
  </section>
</template>

<script setup>
// No JS-driven hover/entrance animation here to avoid conflicts.
</script>

<style scoped>
.text-muted { color: rgba(255,255,255,0.65); }

/* CSS entrance animation (staggered via nth-child delays) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
.service-card {
  opacity: 1; /* ensure visible by default */
  /* glass effect */
  background: rgba(255,255,255,0.03);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-color: rgba(255,255,255,0.06);
  box-shadow: 0 8px 30px rgba(2,6,23,0.35);
  animation: fadeInUp 0.7s cubic-bezier(.22,1,.32,1) both;
  transform: translateY(0) scale(1);
  transform-origin: center center;
  transition: transform 420ms cubic-bezier(.16, .84, .24, 1), box-shadow 420ms cubic-bezier(.16, .84, .24, 1), border-color 220ms ease;
  cursor: pointer;
}
.service-card:nth-child(1) { animation-delay: 0.06s; }
.service-card:nth-child(2) { animation-delay: 0.18s; }
.service-card:nth-child(3) { animation-delay: 0.30s; }
.service-card:nth-child(4) { animation-delay: 0.42s; }

.service-card:hover,
.service-card:focus {
  transform: translateY(-0.375rem) scale(1.03) translateZ(0) !important;
  border-color: rgba(96,165,250,1);
  will-change: transform;
}

</style>
