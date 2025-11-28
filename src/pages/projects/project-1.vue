<template>

  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full h-[85vh] overflow-hidden bg-black">
    <img
      src="../../assets/gibson cover pagina progetti.webp"
      alt="Gibson cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-end justify-start pb-20 pl-6 md:pl-20">
      <div class="max-w-3xl text-left px-6">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight">Gibson SG-1961</h1>
        <p class="text-sm md:text-base text-white/70 mt-4 tracking-wide">Concept Experience — 3D, UI e interattività musicale</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Un concept essenziale</h2>
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
      <p class="text-white/60 mt-6">Guarda il prototipo — controlla le animazioni e il flow.</p>
    </div>
  </section>

  <!-- Key Features (three clean columns) moved under Video CTA -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
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
  </section>

  <!-- Project Sections: 8 alternating 60:40 full-bleed image with text appearing on scroll -->
  <section class="bg-black">
    <!-- For spacing between sections -->
    <div class="space-y-20">

      <!-- Helper: each section is full-width; h2 aligned left with px -->

      <!-- 1 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6">Concept & Forma</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide1.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center">
            <div class="reveal-text translate-y-6 will-change-transform" data-animate>
              <h3 class="text-xl text-white font-semibold">Linea e silhouette</h3>
              <p class="text-white/70 mt-4">Analizziamo la forma classica della SG-1961 per adattarla a un'interfaccia visiva che enfatizzi proporzioni e equilibrio.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6">Materiali & Texture</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center">
            <div class="reveal-text translate-y-6 will-change-transform" data-animate>
              <h3 class="text-xl text-white font-semibold">Finiture</h3>
              <p class="text-white/70 mt-4">Lavoriamo sulle texture legno e vernici per ottenere profondità e riflesso caratteristico della chitarra.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6">3D Modeling</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide3.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center">
            <div class="reveal-text translate-y-6 will-change-transform" data-animate>
              <h3 class="text-xl text-white font-semibold">Modellazione</h3>
              <p class="text-white/70 mt-4">Costruzione del modello 3D con attenzione a dettagli come manopole, pickup e venature del legno.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6">Interazione</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center">
            <div class="reveal-text translate-y-6 will-change-transform" data-animate>
              <h3 class="text-xl text-white font-semibold">Micro-interazioni</h3>
              <p class="text-white/70 mt-4">Animazioni micro che rispondono all'input musicale e alle azioni dell'utente.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6">Sound Design</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="../../assets/p1slide5.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center">
            <div class="reveal-text translate-y-6 will-change-transform" data-animate>
              <h3 class="text-xl text-white font-semibold">Timbro e feedback</h3>
              <p class="text-white/70 mt-4">Integrazione dei campioni sonori con feedback visivo per un'esperienza coerente.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- sections 6-8 removed -->

    </div>
  </section>

  

  <!-- Prototype Video removed -->

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
