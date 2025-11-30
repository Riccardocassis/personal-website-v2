<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden bg-transparent -mt-12 md:mt-0">
    <img
      src="../../assets/webable-imgcop.webp"
      alt="Webable cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">Webable</h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">La piattaforma di microlearning dedicata all’accessibilità</p>
      </div>
    </div>
  </section>

  <!-- Mobile H1: show immediately below hero on small screens -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">Webable</h1>
    <p class="text-xs text-white/70 mt-2">La piattaforma di microlearning dedicata all’accessibilità</p>
  </div>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">Ho prototipato micro-interazioni e transizioni con Protopie per validare la fluidità dell’esperienza e simulare il comportamento reale dell’app.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-center text-white/70 mb-6">preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center">
        <video controls playsinline preload="metadata" class="w-full h-full object-contain object-center bg-black block rounded-2xl border-0 outline-none">
          <source src="https://riccardocassis.github.io/webable/Webable%20registrazione%20schermo.mp4" type="video/mp4" />
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
          <h3 class="text-xl font-semibold text-white"> Personalizzazione tramite AI</h3>
          <p class="text-white/60 mt-3">Webable genera percorsi personalizzati in base al ruolo dell’utente, alle sue competenze e al tempo che ha a disposizione. L’obiettivo è proporre solo contenuti utili e applicabili subito.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Microlearning & Gamification</h3>
          <p class="text-white/60 mt-3">Ho adottato un approccio basato su sessioni brevi, esercizi pratici e badge che incentivano progressione e continuità. L’apprendimento diventa leggero, concreto e misurabile.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Community & Spazio Recruiting</h3>
          <p class="text-white/60 mt-3">La piattaforma include un’area condivisa dove professionisti e recruiter possono confrontarsi, scambiarsi risorse e creare opportunità lavorative legate all’accessibilità..</p>
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
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-6 text-center md:text-left">Il problema e l’opportunità</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/webintro.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
              </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-1 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold mb-1">Come nasce Webable</h3>
              <p class="text-white/70 mt-1 md:mt-4">La formazione sull’accessibilità è spesso troppo teorica, dispersiva e complessa per chi lavora nel digitale.
Con Webable ho esplorato un approccio diverso: un sistema che crea percorsi personalizzati e propone micro-esercizi concreti, basati sugli standard WCAG ed EAA ma tradotti in un linguaggio semplice e immediato.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Onboarding low-fidelity </h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Capire chi sei per personalizzare l’apprendimento.</h3>
              <p class="text-white/70 mt-4">La prima fase che ho progettato è l’onboarding, in versione low-fidelity, per definire le domande fondamentali: ruolo dell’utente, esperienza con l’accessibilità, tempo disponibile e stile di apprendimento.
Questo step permette alla piattaforma di generare un percorso formativo su misura..</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/webablelow.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
              </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Design System</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/webads.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
              </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Le linee guida per creare una web app efficace.</h3>
              <p class="text-white/70 mt-4">Ho definito una palette morbida, una tipografia leggibile e componenti semplici per costruire un’interfaccia accessibile e coerente.
Il tone of voice è amichevole e leggero, coerente con l’obiettivo di rendere la formazione più piacevole e meno tecnica.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Flusso principale dell’app</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Flusso principale: dal percorso personalizzato al micro-learning.</h3>

              <p class="text-white/70 mt-4">Ho progettato e prototipato il flusso principale: scelta del percorso, generazione personalizzata tramite AI, progressione attraverso micro-lezioni e reward gamificati.
Ogni step è pensato per essere breve, chiaro e motivante.</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/webapercorsi.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
              </div>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">UI finale </h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/webainterface.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
              </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un’interfaccia amichevole e motivante.</h3>
              <p class="text-white/70 mt-4">L’interfaccia finale combina colori morbidi, icone rotonde e micro-feedback per rendere il tema dell’accessibilità più accessibile.
Weby accompagna l’utente senza mai diventare invadente.</p>
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
      <a href="/projects/project-5" class="flex items-center gap-0 md:gap-4 md:flex-row text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for desktop -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-7" class="flex items-center gap-0 md:gap-4 md:flex-row-reverse text-center md:text-right">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto successivo</span>
      </a>
    </div>
  </section>

  <!-- Fullscreen video modal -->
  <div v-if="showVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
    <button @click="closeVideo" class="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 px-3 py-2 rounded">Chiudi</button>
    <video ref="videoRef" controls class="w-full h-full max-w-[1400px] max-h-[90vh] rounded-2xl shadow-2xl object-contain object-center bg-black block border-0 outline-none">
      <source src="https://riccardocassis.github.io/webable/Webable%20registrazione%20schermo.mp4" type="video/mp4" />
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

