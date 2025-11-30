<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[50vh] overflow-hidden bg-black">
    <img
      src="../../assets/fillbohero.webp"
      alt="fillbohero"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center"
    />

    <!-- overlay removed so hero image is fully visible -->

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-6 md:pb-20 pl-4 md:pl-20 z-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="text-3xl md:text-6xl font-extrabold text-white leading-tight">Fillbo concept app</h1>
        <p class="text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Un prototipo mobile progettato per aiutare supermercati e distributori a tracciare prodotti in scadenza e donare più facilmente alimenti a CAUTO.</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">In questo progetto ho progettato Fillbo, un’app mobile pensata per ridurre gli sprechi alimentari migliorando il flusso tra supermercati e CAUTO.
Ho analizzato il processo reale con cui i commessi identificano i prodotti in scadenza e l’ho trasformato in un sistema digitale più rapido, chiaro e tracciabile.
Il risultato è un prototipo che semplifica il lavoro quotidiano, riduce errori e accelera la donazione degli alimenti.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview dell'app in azione</h3>
      <div class="relative w-full max-w-4xl aspect-square mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-contain">
          <source src="https://raw.githubusercontent.com/Riccardocassis/fillbo/refs/heads/main/fillbovideo.mp4" type="video/mp4" />
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
          <h3 class="text-xl font-semibold text-white"> Ricerca & Concept</h3>
          <p class="text-white/60 mt-3">Ho costruito il concept di Fillbo a partire dai bisogni reali del personale: velocità, chiarezza e riduzione degli errori operativi. Il tono dell’interfaccia è volutamente amichevole per abbassare lo stress in un contesto già operativo e intenso.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">UX Design & Flussi</h3>
          <p class="text-white/60 mt-3">Ho progettato flussi che accompagnano l’utente passo dopo passo, minimizzando la complessità. Tutti i percorsi sono stati pensati per essere completati con una mano sola e in pochi tap.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">UI Design & Prototipo</h3>
          <p class="text-white/60 mt-3">Ho realizzato un prototipo completo in Figma, curando gerarchie visive, leggibilità e micro-feedback. L’obiettivo: permettere anche a personale non tecnico di usarlo senza formazione.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Ricerca sul campo e comprensione del problema</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fillbos1.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold"> Analisi dei processi reali per ridurre gli sprechi alimentari.</h3>
              <p class="text-white/70 mt-4">SNel team della Dispensa Alimentare di Cauto, il problema non era la mancanza di volontà ma la mancanza di uno strumento che semplificasse un flusso operativo frammentato.
Per capire davvero dove intervenire, ho osservato da vicino il lavoro quotidiano: dagli addetti dei supermercati che monitorano le scadenze, fino ai responsabili del magazzino che gestiscono la redistribuzione.

Ho raccolto insight tramite interviste, osservazione diretta e analisi dei punti critici: errori di trascrizione, passaggi ridondanti, mancanza di uno storico digitale e zero visibilità sul volume dei prodotti recuperati.

Questa fase ha definito le basi dell’app: leggerezza, velocità e zero complessità.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Flussi, requisiti e architettura dell’app</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Dal caos dei processi fisici a un flusso digitale lineare.</h3>
              <p class="text-white/70 mt-4">Dopo la fase di ricerca, ho ricostruito tutti i flussi reali in una mappa operativa: dalla segnalazione dei prodotti in scadenza fino alla loro categorizzazione in box e alla consegna finale al magazzino.
Questo lavoro ha permesso di eliminare passaggi ridondanti, chiarire ruoli e priorità e definire i requisiti funzionali della prima versione dell’app.

La mappatura in Figma è servita per tradurre i bisogni del personale — commessi, volontari e responsabili — in un sistema coerente, semplice e tracciabile.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fillbos2.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Wireframes / Concept</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fillbos5.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">L'esperienza sul campo è stato l'elemento più importante per lo svilupo dei Wireframes</h3>
              <p class="text-white/70 mt-4">Sono partito dall’analisi dei bisogni operativi di supermercati e magazzini. Ho definito i flussi principali e li ho trasformati in wireframe chiari, dove ogni step è ottimizzato per velocizzare le operazioni quotidiane e ridurre gli errori di catalogazione.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Scelta della piattaforma</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Figma — prototipazione veloce, collaborazione immediata</h3>

              <p class="text-white/70 mt-4">Ho scelto Figma per la progettazione di Fillbo perché permette iterazioni rapide, componenti riutilizzabili e la possibilità di testare l’intero flusso direttamente dal browser. Questo mi ha permesso di simulare l’esperienza d’uso reale e ottimizzare ogni dettaglio dell’interfaccia.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fillbos4.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Interfaccia </h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/fillbos3.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un’interfaccia semplice per ridurre errori e tempi operativi</h3>
              <p class="text-white/70 mt-4">Ho progettato Fillbo per essere usabile anche nelle situazioni più frenetiche.
L’interfaccia si basa su liste chiare, pulsanti grandi e percorsi brevi. Ogni prodotto viene inserito con pochi tap e assegnato automaticamente alla box corretta in base alla categoria.
L’obiettivo è eliminare confusione, accelerare il processo e rendere più intuitiva la donazione degli alimenti.</p>
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
      <a href="/projects/project-3" class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for mobile -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-5" class="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-4 text-center md:text-right">
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
    <video ref="videoRef" controls class="w-full h-full max-w-[1100px] max-h-[90vh] object-contain rounded-lg shadow-2xl">
      <source src="https://raw.githubusercontent.com/Riccardocassis/fillbo/refs/heads/main/fillbovideo.mp4" type="video/mp4" />
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
      // show immediately on small screens
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

