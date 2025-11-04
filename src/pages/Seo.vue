<template>
  <main class="page-bg text-white min-h-screen py-20 px-6 md:px-12">
    <header class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">SEO & Content Strategy</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">Fatti trovare dalle persone giuste con contenuti pensati e ottimizzazione tecnica: keyword research, SEO on-page e copy orientato alla conversione.</p>
    </header>

    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">Servizi principali</h2>
        <ul class="list-disc list-inside text-white/80 space-y-2">
          <li>Analisi keyword e ricerca competitor</li>
          <li>Ottimizzazione on-page e miglioramenti tecnici</li>
          <li>Content brief e strategia editoriale</li>
          <li>Copywriting SEO orientato alla conversione</li>
          <li>Monitoraggio posizionamento e report</li>
        </ul>
      </article>

      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">Approccio</h2>
        <p class="text-white/80">Lavoro partendo dai dati: analisi keyword e intent, sviluppo di contenuti di valore e iterazione continua per far crescere il traffico organico e le conversioni.</p>

        <div class="mt-6">
          <RouterLink to="/contact" class="inline-block bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:translate-y-[-2px]">Contattami</RouterLink>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(()=>{
  document.title = 'SEO & Content Strategy — Riccardo Cassis'
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta) }
  meta.setAttribute('content','Servizi di SEO e content strategy: analisi keyword, ottimizzazione on-page, content marketing e copywriting per aumentare la visibilità e le conversioni.')
})
</script>

<style scoped>
.page-bg { background-color: #0b0b0b }
</style>
