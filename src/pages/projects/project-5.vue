<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[50vh] overflow-hidden bg-black">
    <img
      src="../../assets/coveropsify.webp"
      alt="Gibson cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-6 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="text-3xl md:text-6xl font-extrabold text-blue leading-tight">Opsify App</h1>
        <p class="text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Progettazione UX/UI, prototipazione avanzata in Protopie e sviluppo del design system per un’app mobile dedicata alla creazione e condivisione di scuse personalizzate.</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">Questo progetto riguarda lo sviluppo in figma e la prototipazione su protopie di una applicazione mobile, volta alla creazione e alla condivisione di scuse amichevoli tra gli utenti.
Ho scelto di dargli il nome Opsify, perché: opsi è uno termine amichevole che si usa per chiedere scusa in modo informale, l’aggiunta “-fy” richiama il significato di trasformare qualcosa, quindi “Opsify” vuol dire rendere più semplice e naturale il modo di chiedere scusa.
Ho scelto di utilizzare dunque un Tov amichevole ed informale nella applicazione e anche i colori che ho scelto abbinati ai font e in generale a tutta la struttura dell’interfaccia, sono volti a creare armonia all’utente.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview della pagina</h3>
      <div class="relative w-full max-w-4xl mx-auto aspect-square overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-contain">
          <source src="https://github.com/Riccardocassis/opsify/raw/refs/heads/main/Video_app_scuse.mp4" type="video/mp4" />
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
          <h3 class="text-xl font-semibold text-white"> Concept & Naming</h3>
          <p class="text-white/60 mt-3">Ho definito il tono dell’app partendo da un insight semplice: chiedere scusa è un momento scomodo. Ho scelto un linguaggio leggero e un naming che riflette questa idea: “Opsify” unisce l’espressione informale “opsi” al suffisso “-fy”, trasformando l’atto di scusarsi in qualcosa di semplice e naturale.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">UX Research & Flussi</h3>
          <p class="text-white/60 mt-3">Ho analizzato casi d’uso comuni e contesti ricorrenti (ritardi, imprevisti, appuntamenti mancati) per progettare flussi rapidi e categorizzati. L’obiettivo: permettere all’utente di generare una scusa coerente in pochi secondi, senza frizioni.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">UI Design & Micro-interazioni</h3>
          <p class="text-white/60 mt-3">Ho sviluppato un’interfaccia accogliente basata su colori pastello, tipografia rotonda e animazioni micro-espressive. L’obiettivo è ridurre l’imbarazzo, guidare l’utente e rendere l’esperienza immediata e positiva.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left"> Wireframes</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/opsifywirewebp.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Dai primi wireframe alla struttura dell’app</h3>
              <p class="text-white/70 mt-4">Ho sviluppato una prima struttura low-fi per testare navigazione, categorie e priorità dei contenuti prima di passare alla fase visual.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Visual Design / UI</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un’interfaccia leggera e amichevole</h3>
              <p class="text-white/70 mt-4">Ho costruito l’identità visiva scegliendo colori chiari, contrasti morbidi e una tipografia rotonda per creare un ambiente accogliente e allegro. Ogni scelta contribuisce a rendere l’esperienza immediata e piacevole.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Prototipazione con Protopie</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide3.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Il tocco finale che migliora l'esperienza.</h3>
              <p class="text-white/70 mt-4">Ho prototipato micro-interazioni e transizioni con Protopie per validare la fluidità dell’esperienza e simulare il comportamento reale dell’app.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- sections 4-5 removed per request -->

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
      <a href="/projects/project-4" class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for mobile -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-6" class="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-4 text-center md:text-right">
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
    <video ref="videoRef" controls class="w-full h-full max-w-[1200px] max-h-[90vh] rounded-lg shadow-2xl object-contain">
      <source src="https://github.com/Riccardocassis/opsify/raw/refs/heads/main/Video_app_scuse.mp4" type="video/mp4" />
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

