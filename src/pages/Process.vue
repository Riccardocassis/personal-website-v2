<template>
  <main class="page-bg text-white min-h-screen">
    <!-- Hero -->
    <header class="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto" role="region" aria-label="Il mio processo di lavoro - Hero">
      <p class="text-[#00BFFF] font-medium mb-4">Metodo • Strategia • Esecuzione</p>
      <h1 class="text-3xl md:text-5xl font-extrabold leading-tight mb-6">Il mio processo di lavoro</h1>
      <p class="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-6">Un metodo chiaro per trasformare la tua idea in un brand digitale performante.</p>
      <p class="text-gray-400 max-w-2xl mx-auto mb-8">Dall’analisi alla pubblicazione, ogni fase è progettata per creare siti web efficaci, curati e orientati alla conversione.</p>

      <div>
        <RouterLink to="/contact" class="inline-block bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform duration-200 hover:translate-y-[-3px]">Parliamone</RouterLink>
      </div>
    </header>

    <!-- Timeline: Come lavoro -->
    <section class="py-12 md:py-24 px-6 md:px-12 max-w-6xl mx-auto" aria-labelledby="timeline-title">
      <h2 id="timeline-title" class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Come lavoro: un processo pensato per far crescere il tuo brand online</h2>

      <div class="mt-8 space-y-10">
        <!-- Step 1 -->
        <article class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md" data-step="01">
          <div class="md:w-1/6 flex items-start">
            <div class="text-[#00BFFF] font-bold text-xl mr-4">01</div>
            <div class="text-2xl">🎯</div>
          </div>
          <div class="md:w-5/6">
            <h3 class="text-xl font-semibold text-white">Analisi e Strategia</h3>
            <p class="text-gray-300 mt-2">Capisco il mercato, il target e gli obiettivi per costruire una base solida.<br><strong class="text-gray-400">Keyword SEO:</strong> strategia digitale, analisi UX, obiettivi di business.</p>
          </div>
        </article>

        <!-- Step 2 -->
        <article class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md" data-step="02">
          <div class="md:w-1/6 flex items-start">
            <div class="text-[#00BFFF] font-bold text-xl mr-4">02</div>
            <div class="text-2xl">🧩</div>
          </div>
          <div class="md:w-5/6">
            <h3 class="text-xl font-semibold text-white">Architettura e UX Design</h3>
            <p class="text-gray-300 mt-2">Disegno esperienze chiare e intuitive. Ogni interazione guida l’utente con naturalezza.<br><strong class="text-gray-400">Keyword SEO:</strong> user experience, progettazione siti web.</p>
          </div>
        </article>

        <!-- Step 3 -->
        <article class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md" data-step="03">
          <div class="md:w-1/6 flex items-start">
            <div class="text-[#00BFFF] font-bold text-xl mr-4">03</div>
            <div class="text-2xl">🎨</div>
          </div>
          <div class="md:w-5/6">
            <h3 class="text-xl font-semibold text-white">Visual Design e Identità</h3>
            <p class="text-gray-300 mt-2">Creo un linguaggio visivo coerente e riconoscibile, che racconta il brand.<br><strong class="text-gray-400">Keyword SEO:</strong> brand identity, UI design.</p>
          </div>
        </article>

        <!-- Step 4 -->
        <article class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md" data-step="04">
          <div class="md:w-1/6 flex items-start">
            <div class="text-[#00BFFF] font-bold text-xl mr-4">04</div>
            <div class="text-2xl">💻</div>
          </div>
          <div class="md:w-5/6">
            <h3 class="text-xl font-semibold text-white">Sviluppo Front-end</h3>
            <p class="text-gray-300 mt-2">Trasformo il design in un sito veloce, accessibile e ottimizzato SEO.<br><strong class="text-gray-400">Keyword SEO:</strong> sviluppo front-end, siti web performanti.</p>
          </div>
        </article>

        <!-- Step 5 -->
        <article class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md" data-step="05">
          <div class="md:w-1/6 flex items-start">
            <div class="text-[#00BFFF] font-bold text-xl mr-4">05</div>
            <div class="text-2xl">📈</div>
          </div>
          <div class="md:w-5/6">
            <h3 class="text-xl font-semibold text-white">Ottimizzazione e Crescita</h3>
            <p class="text-gray-300 mt-2">Analizzo i dati e ottimizzo continuamente per far crescere il progetto digitale.<br><strong class="text-gray-400">Keyword SEO:</strong> ottimizzazione web, crescita digitale.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- I miei valori -->
    <section class="py-12 md:py-20 px-6 md:px-12 max-w-6xl mx-auto" aria-labelledby="values-title">
      <h2 id="values-title" class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">I principi che guidano ogni progetto</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article class="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-500 hover:scale-105 hover:ring-1 hover:ring-[#00BFFF]/30">
          <div class="text-2xl mb-3">🎯</div>
          <h3 class="font-semibold text-white">Precisione strategica</h3>
          <p class="text-gray-300 mt-2 text-sm">Ogni decisione nasce da analisi, non da intuizione.</p>
        </article>

        <article class="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-500 hover:scale-105 hover:ring-1 hover:ring-[#00BFFF]/30">
          <div class="text-2xl mb-3">🤝</div>
          <h3 class="font-semibold text-white">Collaborazione trasparente</h3>
          <p class="text-gray-300 mt-2 text-sm">Lavoro in sinergia con te, passo dopo passo.</p>
        </article>

        <article class="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-500 hover:scale-105 hover:ring-1 hover:ring-[#00BFFF]/30">
          <div class="text-2xl mb-3">📈</div>
          <h3 class="font-semibold text-white">Design che converte</h3>
          <p class="text-gray-300 mt-2 text-sm">Estetica e performance si fondono per generare risultati concreti.</p>
        </article>

        <article class="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-500 hover:scale-105 hover:ring-1 hover:ring-[#00BFFF]/30">
          <div class="text-2xl mb-3">🔍</div>
          <h3 class="font-semibold text-white">Cura del dettaglio</h3>
          <p class="text-gray-300 mt-2 text-sm">Ogni pixel ha uno scopo preciso.</p>
        </article>
      </div>
    </section>

    <!-- CTA finale -->
    <section class="py-20 px-6 md:px-12 mt-12">
      <div class="max-w-4xl mx-auto rounded-3xl overflow-hidden" style="background: linear-gradient(90deg,#00BFFF,#0099CC);">
        <div class="py-20 px-6 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Hai un progetto in mente?</h2>
          <p class="text-white/90 mb-8">Parliamone e costruiamo insieme un brand digitale solido e riconoscibile.</p>
          <RouterLink to="/contact" class="inline-block bg-white text-black rounded-full px-8 py-4 font-semibold transition-colors hover:bg-gray-100">Richiedi una call gratuita</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'

// SEO: set title and meta description dynamically
onMounted(()=>{
  document.title = 'Il mio processo di lavoro — Riccardo Cassis | Web e Digital Designer'
  const description = 'Scopri il metodo di lavoro di Riccardo Cassis, web e digital designer. Un processo strategico e strutturato per creare brand digitali efficaci e siti web performanti.'
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name','description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', description)

  // small entrance animation using GSAP (fade-up) for major sections
  try{
    gsap.from('header', { y: 26, opacity: 0, duration: 0.7, ease: 'power3.out' })
    gsap.utils.toArray('section').forEach((sec, i)=>{
      gsap.from(sec, { y: 18, opacity: 0, duration: 0.7, delay: 0.12 * i, ease: 'power3.out', scrollTrigger: { trigger: sec, start: 'top 85%' } })
    })
  }catch(e){
    // if ScrollTrigger not registered or available, ignore
  }
})
</script>

<style scoped>
.page-bg { background-color: #0b0b0b; }
/* soft reveal helper */
.reveal { transition: all 600ms cubic-bezier(.22,.77,.12,1); }

/* ensure text rhythm */
h1,h2,h3 { color: #fff }

/* small responsive tweaks */
@media (min-width: 768px){
  header { padding-top: 6rem; padding-bottom: 6rem; }
}
</style>
