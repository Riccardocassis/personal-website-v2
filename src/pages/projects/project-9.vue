<template>
  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[50vh] overflow-hidden bg-black">
    <img
      src="../../assets/gibson cover pagina progetti.webp"
      alt="Gibson cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-6 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="text-3xl md:text-6xl font-extrabold text-white leading-tight">Control alt canc</h1>
        <p class="text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Concept Experience — Il suono della SG-1961 trasformato in un’esperienza digitale interattiva</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">In questo progetto ho voluto ricreare un concept di landing page dedicata a uno strumento iconico come la Gibson SG-1961, capace di comunicare la sua anima rock in ogni parte dell’esperienza. L’obiettivo era trasmettere l’essenza dello strumento attraverso tutta la navigazione, aumentando awareness e coinvolgimento, e restituendo il giusto valore a un prodotto che ha segnato la storia della musica.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <!-- Key Features (three clean columns) moved under Video CTA -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-8">Elementi cardine</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white"> Direzione Creativa & Concept</h3>
          <p class="text-white/60 mt-3">Ho definito il concept visivo e il tono dell’esperienza partendo dall’identità della SG-1961: rock, materica e iconica. Ogni scelta:colori, tipografia, ritmo visivo, è calibrata per trasmettere la personalità dello strumento in un ambiente digitale.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">3D e interazioni</h3>
          <p class="text-white/60 mt-3">Ho realizzato modelli 3D e micro-interazioni che rispondono al suono e all’input dell’utente, trasformando la chitarra in un elemento interattivo. Il 3D non è decorazione, ma parte del linguaggio narrativo: rende la SG “suonabile” anche sul web.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Sviluppo Web & Integrazione</h3>
          <p class="text-white/60 mt-3">Ho sviluppato le funzionalità interattive tramite codice e le ho integrate in Webflow grazie a GitHub Pages e componenti custom. L’obiettivo era mantenere fluidità, performance e totale coerenza visiva tra design, interazioni e contenuti.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Sections: 8 alternating 60:40 full-bleed image with text appearing on scroll -->
  <section class="bg-black">
    <!-- For spacing between sections -->
    <div class="space-y-20">

      <!-- Helper: each section is full-width; h2 aligned left with px -->

      <!-- 1 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Concept e sviluppo dei Wireframes</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide1.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Stile estetico</h3>
              <p class="text-white/70 mt-4">Sono partito analizzando le parti che costituivano questo prodotto come materiali e finiture e il sentiment che ha suscitato nella cultura Rock e negli appassionati. Successivamente ho ripreso questi elementi e li ho reinterpretati a modo mio per creare il giusto mix tra passato presente e futuro costruendo un'esperienza immersiva mirata.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Scelta della piattaforma</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Controllo totale sul layout, performance solide, zero compromessi sull’esperienza.</h3>
              <p class="text-white/70 mt-4">Webflow è stata la scelta ideale per un concept che vive di dettaglio visivo e micro–interazioni.
Mi ha permesso di tradurre le scelte di design con precisione millimetrica, mantenendo il pieno controllo su griglie, transizioni e responsive senza dipendere da plugin esterni.

Inoltre, il motore nativo consente un output pulito e performante, perfetto per dare al progetto il ritmo visivo che meritava: fluido, leggero e fedele al design originale.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide2.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">3D Modeling</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide3.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Spline — 3D leggero, interattivo e integrabile nel web.</h3>
              <p class="text-white/70 mt-4">Ho scelto Spline per modellare la SG-1961 perché permette un 3D credibile e facilmente integrabile nel web.
Grazie all’embed nativo, il modello si inserisce in Webflow senza codice complesso, garantendo performance e la possibilità di aggiornare materiali e dettagli in modo immediato.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Sviluppo dell'app</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Ho scelto il codice come alleato e lo Sviluppo di una app interattiva per aumentare l'immersività e migliorare l'esperienza utente.</h3>

              <p class="text-white/70 mt-4">Con Visual Studio Code ho realizzato una web-app che permette di suonare la SG-1961 direttamente dal browser.
Input, animazioni e suoni lavorano insieme per creare un’interazione musicale semplice e immersiva.
L’app è stata poi caricata su GitHub Pages e integrata in Webflow.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide4.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Interfaccia </h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide5.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Ho pensato a tre modalità pensate per ridurre la curva d’apprendimento.</h3>
              <p class="text-white/70 mt-4">La struttura dell’app l’ho basata su tre modalità di gioco, ognuna pensata per rendere l’esperienza musicale intuitiva fin dal primo tap.
Ogni modalità offre un livello di complessità crescente, ma ho mantenuto un’interfaccia chiara e reattiva per permettere all’utente di sperimentare senza sentirsi sopraffatto.
Ho combinato suoni, micro-animazioni e feedback visivi per trasformare la SG-1961 in un’esperienza interattiva accessibile anche a chi non ha mai suonato una chitarra.</p>
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
    <div class="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6">
      <!-- Previous -->
      <a href="/projects/project-9" class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for mobile -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-2" class="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-4 text-center md:text-right">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="text-white/70 text-sm">Progetto successivo</span>
      </a>
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
  const images = gsap.utils.toArray('.reveal-img')

  images.forEach((img) => {
    const grid = img.closest('.grid')
    const text = grid ? grid.querySelector('.reveal-text') : null

    gsap.set(img, { y: 40, scale: 1.06, opacity: 0, transformOrigin: 'center center' })
    if (text) gsap.set(text, { y: 24, opacity: 0 })

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
})

const showVideo = ref(false)
const videoRef = ref(null)

function openVideo() {
  showVideo.value = true
  nextTick(() => {
    if (videoRef.value) {
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

