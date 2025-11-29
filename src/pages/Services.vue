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
  animation: fadeInUp 0.7s cubic-bezier(.22,1,.32,1) both;
}
.service-card:nth-child(1) { animation-delay: 0.06s; }
.service-card:nth-child(2) { animation-delay: 0.18s; }
.service-card:nth-child(3) { animation-delay: 0.30s; }
.service-card:nth-child(4) { animation-delay: 0.42s; }

.service-card:hover,
.service-card:focus {
  transform: translateY(-0.25rem);
  border-color: rgba(96,165,250,1);
}

</style>
