<template>
  <section class="pt-24 pb-20 relative">
    <div class="max-w-7xl mx-auto px-6">
      <header class="mb-12 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold">Projects</h1>
        <p class="text-white/80 mt-3 max-w-2xl mx-auto">Scegli una categoria per esplorare i miei lavori. Layout curato, focus su case study e risultati.</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RouterLink to="/projects/web" class="group block rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-blue-900/30 border border-white/5 hover:scale-[1.02] transform transition">
          <div class="p-8 md:p-10 h-56 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold">Web Design</h3>
              <p class="text-white/80 mt-2">Interfacce responsive, animazioni microinteractions e front-end performante.</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">View projects</span>
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/projects/brand" class="group block rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/30 to-violet-900/30 border border-white/5 hover:scale-[1.02] transform transition">
          <div class="p-8 md:p-10 h-56 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold">Brand Design</h3>
              <p class="text-white/80 mt-2">Identità, sistemi visivi e progetti di branding con approccio strategico.</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">View projects</span>
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/projects/product" class="group block rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/30 to-cyan-900/30 border border-white/5 hover:scale-[1.02] transform transition">
          <div class="p-8 md:p-10 h-56 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold">Product Design</h3>
              <p class="text-white/80 mt-2">Flussi, prototipi e soluzioni UX per prodotti digitali completi.</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">View projects</span>
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* small visual polish for the landing */
.group:hover { }
</style>