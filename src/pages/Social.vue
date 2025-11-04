<template>
  <main class="page-bg text-white min-h-screen py-20 px-6 md:px-12">
    <header class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">Social Media Management</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">Trasforma la tua presenza online in uno strumento di crescita: piano editoriale, contenuti creativi e advertising mirato per costruire relazione e performance.</p>
    </header>

    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">Cosa includo</h2>
        <ul class="list-disc list-inside text-white/80 space-y-2">
          <li>Strategia editoriale e piano mensile</li>
          <li>Creazione di contenuti visual e copy ottimizzati</li>
          <li>Gestione community e attività di engagement</li>
          <li>Campagne Facebook & Instagram Ads</li>
          <li>Report e ottimizzazione continua</li>
        </ul>
      </article>

      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">Per chi è</h2>
        <p class="text-white/80">Il servizio è pensato per brand e professionisti che vogliono costruire una presenza coerente e misurabile sui social, con focus su awareness, lead generation e performance.</p>

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
  document.title = 'Social Media Management — Riccardo Cassis'
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta) }
  meta.setAttribute('content','Servizi di Social Media Management: strategia editoriale, creazione contenuti, advertising e reportistica per far crescere il tuo brand online.')
})
</script>

<style scoped>
.page-bg { background-color: #0b0b0b }
</style>
