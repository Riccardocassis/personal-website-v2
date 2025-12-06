<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden bg-transparent -mt-12 md:mt-0">
    <img
      src="../../assets/coversizexl.webp
      "
      alt="Gibson cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">Sizexl — Restyling del sito e ottimizzazione della presenza digitale</h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Un progetto di UX, UI e ottimizzazione dei contenuti per migliorare chiarezza, credibilità e navigazione.</p>
      </div>
    </div>
  </section>

  <!-- Mobile H1: show immediately below hero on small screens -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">Sizexl — Restyling del sito e ottimizzazione della presenza digitale</h1>
    <p class="text-xs text-white/70 mt-2">Un progetto di UX, UI e ottimizzazione dei contenuti per migliorare chiarezza, credibilità e navigazione.</p>
  </div>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">In questo progetto ho ricostruito l’intera esperienza digitale di Sizexl, riorganizzando contenuti, navigazione e interfaccia visiva. L’obiettivo era rendere il sito più chiaro, credibile e coerente con la qualità dei servizi offerti, utilizzando strumenti già in uso dall’azienda e ottimizzando ogni pagina per una comunicazione più efficace.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://github.com/Riccardocassis/sizexl/raw/refs/heads/main/videosizexl.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <!-- Key Features (three clean columns) moved under Video CTA -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-8">Elementi chiave</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white"> Direzione Creativa & Concept</h3>
          <p class="text-white/60 mt-3">Ho ridisegnato la struttura del sito per renderla più intuitiva, chiara e funzionale.
L’obiettivo era migliorare la comunicazione del brand e facilitare il percorso dell’utente, ottimizzando contenuti, gerarchie e flussi di navigazione.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">UI Design & Rinnovamento Visivo</h3>
          <p class="text-white/60 mt-3">Ho sviluppato un’interfaccia moderna, coerente e più leggibile, migliorando tipografia, colori e layout.
Il redesign mantiene l’identità del brand ma la rende più professionale, credibile e adatta agli standard digitali attuali.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Sviluppo Web & Ottimizzazioni</h3>
          <p class="text-white/60 mt-3">Mi sono occupato dell’implementazione tecnica del sito, adattandomi alle specifiche della piattaforma scelta dal cliente.
Ho curato performance, responsive design, SEO on-page e micro-miglioramenti che aumentano chiarezza, stabilità e qualità percepita dell’esperienza.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Sections: 8 alternating 60:40 full-bleed image with text appearing on scroll -->
  <section class="bg-black">
    <!-- For spacing between sections -->
    <div class="space-y-4 md:space-y-20">

      <!-- Helper: each section is full-width; h2 aligned left with px -->

      <!-- 1 -->
      <div class="w-full mb-6 md:mb-0">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-6 text-center md:text-left">Situazione iniziale</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/img2sizexl.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-1 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold mb-1">Analisi del sito</h3>
              <p class="text-white/70 mt-1 md:mt-4">Ho analizzato il sito esistente per individuare punti deboli in struttura, UI e contenuti.
Le principali criticità erano la scarsa leggibilità, la distribuzione poco chiara delle informazioni e un’identità visiva poco allineata alla professionalità dell’azienda.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Branding & Palette Colori</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Nuova direzione visiva</h3>
              <p class="text-white/70 mt-4">Ho definito una palette aggiornata per dare al sito un tono più professionale e contemporaneo.
I colori sono stati scelti per migliorare leggibilità, contrasto e coerenza visiva tra le diverse sezioni.</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/colorpalettesizexl.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Tipografia</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fontsizexl.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un font semplice ma efficace</h3>
              <p class="text-white/70 mt-4">In accordo con il cliente abbiamo scelto Inter come font: per la sua chiarezza, la leggibilità eccellente e la versatilità dei suoi pesi.
La gerarchia tipografica costruita con Inter rende i contenuti più immediati, migliora la scansione visiva e garantisce un’esperienza coerente su ogni dispositivo.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Architettura del sito</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Struttura & UX semplificata</h3>

              <p class="text-white/70 mt-4">Ho riorganizzato contenuti e percorsi di navigazione per renderli più chiari e immediati.
La nuova struttura facilita l’accesso alle informazioni principali e riduce il carico cognitivo dell’utente.</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/cardsize.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 5 (replaced) -->
      <div class="w-full mb-12 md:mb-40">
        <div class="px-6 md:pl-20">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-2xl md:text-3xl font-semibold text-white mb-6">SEO & Content Strategy</h2>
            <p class="text-white/60 text-lg leading-relaxed">Ho lavorato su tre livelli di SEO per poter ottenere e garantire un risultato significativo al cliente.</p>
          </div>

          <div class="max-w-6xl mx-auto text-center mt-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
              <div class="px-6">
                <h3 class="text-xl font-semibold text-white">SEO On-page</h3>
                <p class="text-white/60 mt-3">Ho riscritto titoli, testi e struttura delle pagine per renderli più leggibili sia per gli utenti che per i motori di ricerca.
Obiettivo: chiarezza, coerenza e contenuti che rispondono davvero alle intenzioni di ricerca.</p>
              </div>
              <div class="px-6">
                <h3 class="text-xl font-semibold text-white">SEO Tecnica</h3>
                <p class="text-white/60 mt-3">Ho ottimizzato performance, immagini, semantic tag e struttura HTML.
Risultato: sito più veloce, stabile e facilmente interpretabile dai crawler.
</p>
              </div>
              <div class="px-6">
                <h3 class="text-xl font-semibold text-white">SEO Off-page</h3>
                <p class="text-white/60 mt-3">Ho migliorato la struttura dei link, la coerenza con le pagine chiave e la qualità generale dell’ecosistema digitale, rendendo più solida la presenza online del brand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- sections 6-8 removed -->

    </div>
  </section>

  

  <!-- CTA minimal -->
  <section class="bg-black py-8 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <p class="text-white/60 mb-6">Ti è piaciuto questo progetto?
Posso aiutarti a creare esperienze digitali su misura.</p>
      <div class="flex justify-center gap-8">
        <a href="/contact" class="text-blue-400 font-semibold underline">Contattami</a>
      </div>
    </div>
  </section>

  <!-- Prev / Next arrows below CTA with labels (responsive) -->
  <section class="bg-black py-6 md:py-8 px-6">
    <div class="max-w-2xl mx-auto flex flex-row md:flex-row items-center md:items-stretch justify-center md:justify-between gap-6">
      <!-- Previous -->
      <router-link to="/projects/project-1" class="flex items-center gap-0 md:gap-4 md:flex-row text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto precedente</span>
      </router-link>

      <!-- Center spacer for desktop -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <router-link to="/projects/project-3" class="flex items-center gap-0 md:gap-4 md:flex-row-reverse text-center md:text-right">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto successivo</span>
      </router-link>
    </div>
  </section>

  <!-- Fullscreen video modal -->
  <div v-if="showVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
    <button @click="closeVideo" class="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 px-3 py-2 rounded">Chiudi</button>
    <video ref="videoRef" controls class="w-full h-full max-w-[1400px] max-h-[90vh] rounded-lg shadow-2xl">
      <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4" />
    </video>
  </div>


</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // GSAP-controlled reveal: animate image first, then text; keep subtle parallax
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  const images = gsap.utils.toArray('.reveal-img')

  images.forEach((img) => {
    // find the nearest grid container and its text block
    const grid = img.closest('.grid')
    const text = grid ? grid.querySelector('.reveal-text') : null

    if (isMobile) {
      gsap.set(img, { y: 0, scale: 1, opacity: 1, clearProps: 'all' })
      if (text) gsap.set(text, { y: 0, opacity: 1, clearProps: 'all' })
      return
    }

    // initial states for desktop
    gsap.set(img, { y: 40, scale: 1.06, opacity: 0, transformOrigin: 'center center' })
    if (text) gsap.set(text, { y: 24, opacity: 0 })

    // timeline: reveal image then text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.to(img, { y: 0, scale: 1, opacity: 1, ease: 'power3.out', duration: 1.1 })
      .to(text || {}, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.6 }, '-=0.35')

    gsap.to(img, {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    })
  })

  // final video has been removed from the template

  // Horizontal carousel logic removed
})

// Video modal state & controls
const showVideo = ref(false)
const videoRef = ref(null)

function openVideo() {
  showVideo.value = true
  nextTick(() => {
    if (videoRef.value) {
      // try to play; some browsers block autoplay without user gesture but click opened it
      videoRef.value.currentTime = 0
      videoRef.value.play().catch(() => {})
    }
  })
}

function closeVideo() {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
  showVideo.value = false
}
</script>

