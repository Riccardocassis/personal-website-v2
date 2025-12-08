<template>

  <!-- HERO -->

  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden bg-transparent -mt-12 md:mt-0">
    <picture>
      <template v-for="source in gibsonHero.sources" :key="source.srcset">
        <source :srcset="source.srcset" :type="source.type" />
      </template>

      <img
        :src="gibsonHero.img.src"
        alt="Gibson SG-1961 cover"
        class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
        fetchpriority="high"
        decoding="async"
      />
    </picture>

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">
          Gibson SG-1961
        </h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">
          Concept Experience — Il suono della SG-1961 trasformato in un’esperienza digitale interattiva
        </p>
      </div>
    </div>
  </section>

  <!-- MOBILE TITLE -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">Gibson SG-1961</h1>
    <p class="text-xs text-white/70 mt-2">
      Concept Experience — Il suono della SG-1961 trasformato in un’esperienza digitale interattiva
    </p>
  </div>

  <!-- INTRO -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 text-center">
        Lo scopo del progetto
      </h2>

      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">
        In questo progetto ho voluto ricreare un concept di landing page dedicata
        a uno strumento iconico come la Gibson SG-1961…
      </p>
    </div>
  </section>

  <!-- VIDEO -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-white/70 mb-6">Preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://raw.githubusercontent.com/Riccardocassis/-gibson-video/main/gb_behance.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <!-- ELEMENTI CHIAVE -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-8">Elementi chiave</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">

        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Direzione Creativa & Concept</h3>
          <p class="text-white/60 mt-3">Ho definito il concept visivo…</p>
        </div>

        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">3D e interazioni</h3>
          <p class="text-white/60 mt-3">Ho realizzato modelli 3D…</p>
        </div>

        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Sviluppo Web & Integrazione</h3>
          <p class="text-white/60 mt-3">Ho sviluppato le funzionalità interattive…</p>
        </div>

      </div>
    </div>
  </section>

<!-- PROJECT SECTIONS -->

<section class="bg-black py-20 px-6 md:px-20 space-y-32">
  <ProjectSlide
    v-for="(slide, i) in slides"
    :key="i"
    :title="slide.title"
    :subtitle="slide.subtitle"
    :text="slide.text"
    :img="slide.img"
    :reverse="slide.reverse"
  />
</section>




  <!-- CTA -->
  <section class="bg-black py-8 px-6 text-center">
    <div class="max-w-2xl mx-auto">
      <p class="text-white/60 mb-6">
        Ti è piaciuto questo progetto? Posso aiutarti a creare esperienze digitali su misura.
      </p>

      <a href="/contact" class="text-blue-400 font-semibold underline">Contattami</a>
    </div>
  </section>

  <!-- PREV/NEXT -->
  <section class="bg-black py-6 md:py-8 px-6">
    <div class="max-w-2xl mx-auto flex items-center justify-between gap-6">

      <router-link to="/projects/project-9" class="flex items-center gap-4">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="hidden md:block text-white/70 text-sm">Progetto precedente</span>
      </router-link>

      <router-link to="/projects/project-2" class="flex items-center gap-4 flex-row-reverse">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="hidden md:block text-white/70 text-sm">Progetto successivo</span>
      </router-link>

    </div>
  </section>

</template>


<script setup>
     import ProjectSlide from '@/components/ProjectSlide.vue'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted } from "vue"

gsap.registerPlugin(ScrollTrigger)

/* HERO */
import gibsonHero from '../../assets/gibson-cover-pagina-progetti.webp?w=800;1280;1920&format=webp;jpeg&as=picture'

/* SLIDES */
import p1slide1 from "../../assets/p1slide1.webp?w=800;1280;1920&format=webp;jpeg&as=picture"
import p1slide2 from "../../assets/p1slide2.webp?w=800;1280;1920&format=webp;jpeg&as=picture"
import p1slide3 from "../../assets/p1slide3.webp?w=800;1280;1920&format=webp;jpeg&as=picture"
import p1slide4 from "../../assets/p1slide4.webp?w=800;1280;1920&format=webp;jpeg&as=picture"
import p1slide5 from "../../assets/p1slide5.webp?w=800;1280;1920&format=webp;jpeg&as=picture"

const slides = [
  {
    title: "Concept e sviluppo dei Wireframes",
    img: p1slide1,
    subtitle: "Stile estetico",
    text: "Sono partito analizzando le parti…",
    reverse: false
  },
  {
    title: "Scelta della piattaforma",
    img: p1slide2,
    subtitle: "Controllo totale sul layout",
    text: "Webflow è stata la scelta ideale…",
    reverse: true
  },
  {
    title: "3D Modeling",
    img: p1slide3,
    subtitle: "Spline — 3D leggero e integrabile",
    text: "Ho scelto Spline per modellare…",
    reverse: false
  },
  {
    title: "Sviluppo dell'app",
    img: p1slide4,
    subtitle: "Ho scelto il codice come alleato",
    text: "Con Visual Studio Code ho realizzato una web-app…",
    reverse: true
  },
  {
    title: "Interfaccia",
    img: p1slide5,
    subtitle: "Tre modalità per ridurre la curva d’apprendimento",
    text: "La struttura dell’app si basa su tre modalità…",
    reverse: false
  }
]

/* GSAP ANIMATIONS */
onMounted(() => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches
  const images = gsap.utils.toArray(".reveal-img")

  images.forEach((img) => {
    const grid = img.closest(".grid")
    const text = grid ? grid.querySelector(".reveal-text") : null

    if (isMobile) {
      gsap.set([img, text], { y: 0, opacity: 1 })
      return
    }

    gsap.set(img, { y: 40, scale: 1.06, opacity: 0 })
    if (text) gsap.set(text, { y: 24, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    tl.to(img, { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: "power3.out" })
      .to(text, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.35")

    gsap.to(img, {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8
      }
    })
  })
})
</script>
