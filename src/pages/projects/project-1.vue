<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[60vh] overflow-hidden bg-black">
    <img
      src="../../assets/gibson cover pagina progetti.webp"
      alt="Gibson cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-end justify-center md:justify-start pb-12 md:pb-20 pl-6 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-6">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight">Gibson SG-1961</h1>
        <p class="text-sm md:text-base text-white/70 mt-4 tracking-wide">Concept Experience — 3D, UI e interattività musicale</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">Un progetto minimale che unisce design, 3D e interazione per raccontare la chitarra Gibson in modo emozionale e funzionale. Focus su semplicità, ritmo e dettaglio visivo.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4" />
        </video>
      </div>
      <p class="text-white/60 mt-6">In questo video viene mostrata le preview del sito.</p>
    </div>
  </section>

  <!-- Key Features (three clean columns) moved under Video CTA -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-8">Elementi cardine</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Design System</h3>
          <p class="text-white/60 mt-3">Componenti UI modulari e coerenti con un linguaggio tipografico pulito.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">3D Interattivo</h3>
          <p class="text-white/60 mt-3">Elementi 3D integrati nell'interfaccia con animazioni leggere e reattive.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Prototipazione</h3>
          <p class="text-white/60 mt-3">Flussi interattivi e prototipi testabili per validare UX e micro-interazioni.</p>
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

  

  <!-- Prototype Video removed -->

  <!-- Horizontal carousel removed -->

  <!-- CTA minimal -->
  <section class="bg-black py-12 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <p class="text-white/60 mb-6">Vuoi esplorare altri progetti o collaborare?</p>
      <div class="flex justify-center gap-8">
        <a href="/projects" class="text-white font-semibold underline">Progetti</a>
        <a href="/contact" class="text-blue-400 font-semibold underline">Contattami</a>
      </div>
    </div>
  </section>

  <!-- Prev / Next arrows below CTA -->
  <section class="bg-black py-6 px-6">
    <div class="max-w-2xl mx-auto flex justify-center gap-8">
      <a href="/projects/project-9" class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
        <span class="text-white">←</span>
      </a>
      <a href="/projects/project-2" class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
        <span class="text-white">→</span>
      </a>
    </div>
  </section>

  <!-- Prev/Next arrows removed -->

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
  const images = gsap.utils.toArray('.reveal-img')

  images.forEach((img) => {
    // find the nearest grid container and its text block
    const grid = img.closest('.grid')
    const text = grid ? grid.querySelector('.reveal-text') : null

    // initial states
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

    // subtle parallax while scrolling through image (scrubbed)
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
