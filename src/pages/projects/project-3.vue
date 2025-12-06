<template>

<div class="min-h-screen" style="background: radial-gradient(circle at 12% 20%, rgba(255,0,150,0.04) 0 12%, rgba(0,122,255,0.03) 12% 30%, rgba(255,140,0,0.025) 30% 50%, rgba(0,0,0,1) 50% 100%), #000;">

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden">
    <!-- Background image placed above the page gradient; slight opacity to soften contrast -->
    <img src="../../assets/landingsynapses.webp" alt="Landingsynapses" class="absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90" />

    <!-- Dark overlay to increase contrast for white text -->
    <div class="absolute inset-0" style="background-color: rgba(0,0,0,0.55)"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20 z-10">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">Synapses landing Page</h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Sviluppo della landing page informativa per l'evento Synapses della Libera Accademia delle Belle Arti di Brescia (LABA)</p>
      </div>
    </div>
  </section>

  <!-- Mobile H1: show immediately below hero on small screens -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">Synapses landing Page</h1>
    <p class="text-xs text-white/70 mt-2">Sviluppo della landing page informativa per l'evento Synapses della Libera Accademia delle Belle Arti di Brescia (LABA)</p>
  </div>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">In questo progetto web che ho realizzato all'interno del progetto Synapses della Libera accademia delle belle arti di Brescia (LABA). Ho realizzato una landing page che doveva essere funzionale alla giornata dell'evento. I requisiti che mi sono stati dati erano: rendere chiara la data degli eventi, spiegare dove si sarebbero svolti e creare uno strumento consultabile da parte degli utenti per sapere gli orari. Il logo e il concept artistico in questo caso era già stato deciso dalla direzione ed è stato realizzato da una mia compagna di corso.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://github.com/Riccardocassis/synapses/raw/refs/heads/main/Video_sito.mp4" type="video/mp4" />
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
          <p class="text-white/60 mt-3">La direzione creativa generale come gli asset che mi sono stati forniti sono stati preparati da dei miei compagni di corso e dalla LABA. Io in questa fase mi sono occupato di rendere fruibile i contenuti e a sviluppare il codice per pubblicare la landing page e renderla operativa.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Interazioni</h3>
          <p class="text-white/60 mt-3">Ho voluto mettere delle leggere interazioni come uno zoom al passaggio del mouse sulla data per darle enfasi e creare dei drop down menù con le informazioni degli eventi relativi per facilitarne la consultazione da parte degli utenti.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Sviluppo Web</h3>
          <p class="text-white/60 mt-3">La pagina è stata creata tramite codice in Visual Studio Code e successivamente pubblicata su un dominio dedicato fornitomi dal reparto It della LABA.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Sections: 8 alternating 60:40 full-bleed image with text appearing on scroll -->
  <section class="bg-black">
    <!-- For spacing between sections -->
    <div class="space-y-8 md:space-y-20">

      <!-- Helper: each section is full-width; h2 aligned left with px -->

      <!-- sections 1-5 removed per richiesta -->

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
      <router-link to="/projects/project-2" class="flex items-center gap-0 md:gap-4 md:flex-row text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto precedente</span>
      </router-link>

      <!-- Center spacer for desktop -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <router-link to="/projects/project-4" class="flex items-center gap-0 md:gap-4 md:flex-row-reverse text-center md:text-right">
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
      <source src="https://github.com/Riccardocassis/synapses/raw/refs/heads/main/Video_sito.mp4" type="video/mp4" />
    </video>
  </div>

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
    const grid = img.closest('.grid')
    const text = grid ? grid.querySelector('.reveal-text') : null

    if (isMobile) {
      gsap.set(img, { y: 0, scale: 1, opacity: 1, clearProps: 'all' })
      if (text) gsap.set(text, { y: 0, opacity: 1, clearProps: 'all' })
      return
    }

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

