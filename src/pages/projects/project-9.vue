<template>
  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[50vh] overflow-hidden bg-black">
    <img
      src="../../assets/fumettohero.webp"
      alt="fumettohero"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-6 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="text-3xl md:text-6xl font-extrabold text-white leading-tight">Control alt canc</h1>
        <p class="text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Una fanzine illustrata dedicata alla Giornata Mondiale della Salute Mentale </p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">n questo progetto ho voluto tradurre l’overthinking in una narrazione visiva semplice da capire ma difficile da ignorare.
Ho scelto un’estetica in bianco e nero per togliere il superfluo e concentrare l’attenzione su ciò che conta: il rumore mentale, il peso dei pensieri, la lotta quotidiana che molti vivono in silenzio.

La fanzine è stata realizzata per la Giornata Mondiale della Salute Mentale (10 ottobre) e successivamente condivisa con psicologi e professionisti del settore, come strumento divulgativo e conversazionale.</p>
    </div>
  </section>

  <!-- Video CTA: preview + button that opens fullscreen modal -->
  <!-- Video section removed as requested -->

  <!-- Key Features (three clean columns) moved under Video CTA -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-8">Elementi cardine</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Linguaggio visivo essenziale</h3>
          <p class="text-white/60 mt-3">Ho scelto un tratto volutamente semplice, quasi infantile, per parlare di temi complessi senza farli sembrare “pesanti”. La mancanza di sfumature e la scelta del bianco/nero amplificano il contrasto emotivo.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Narrazione diretta e metaforica</h3>
          <p class="text-white/60 mt-3"> La fanzine trasforma l’overthinking in un racconto militare: soldati, missioni, mostri interiori. Una metafora che permette al lettore di prendere distanza dai propri pensieri e guardarli con più lucidità.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white"> Funzione divulgativa</h3>
          <p class="text-white/60 mt-3">Pur essendo illustrata, la fanzine è pensata per essere usata come strumento educativo da psicologi e operatori. Il suo obiettivo è rompere il ghiaccio, normalizzare il dialogo e far capire che chiedere aiuto non è un fallimento, anzi un atto di coraggio volto a migliorare la qualità della propria vita.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Disegno & stile</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/ctrlaltcanc-illustrazione.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-4 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">L'imperfezione del fatto a manno riflette l'imperfezione in ciascuno di noi</h3>
              <p class="text-white/70 mt-4">Tutte le illustrazioni sono state disegnate a mano sull'Ipad, adottando uno stile volutamente “grezzo”, perché l’overthinking non è pulito, ordinato o patinato. È caotico, scomodo, rumoroso.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Costruzione narrativa</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Una trama fantasy sarcastica ma con un messaggio chiaro.</h3>
              <p class="text-white/70 mt-4">Ho strutturato la fanzine in step, come un manuale per soldati:
	•	riconosci il problema
	•	entra nella tua mente
	•	identifica i mostri
	•	affrontali
	•	liberatene
  Ovviamente questo non è un manuale e serve come primo approccio ma a mio avviso specialmente quando si pensa troppo è utile seguire un piano senza divagare, il tutto scritto con un tono sarcastico e leggero
.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/ctrlaltcanc-narrazione.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Il poster</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/crtlaltcanc-poster.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-4 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un messaggio visivo chiaro.</h3>
              <p class="text-white/70 mt-4">Il poster riassume il messaggio della fanzine.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 'Sviluppo dell'app' section removed -->

      <!-- sections 4-5 removed -->

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
      <a href="/projects/project-8" class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for mobile -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-1" class="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-4 text-center md:text-right">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="text-white/70 text-sm">Progetto successivo</span>
      </a>
    </div>
  </section>

  <!-- Video modal removed -->

</template>

<script setup>
import { onMounted, ref } from 'vue'
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

// Video functionality removed
</script>

