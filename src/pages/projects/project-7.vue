<template>
  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden bg-transparent -mt-12 md:mt-0">
    <img
      src="../../assets/hellerhero.webp"
      alt="hellerhero"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">Heller garden</h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Art direction proposal| un giardino botanico contemporaneo dove arte e natura convivono in un ecosistema narrativo e dinamico.</p>
      </div>
    </div>
  </section>

  <!-- Mobile H1: show immediately below hero on small screens -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">Heller garden</h1>
    <p class="text-xs text-white/70 mt-2">Art direction proposal| un giardino botanico contemporaneo dove arte e natura convivono in un ecosistema narrativo e dinamico.</p>
  </div>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">In questo progetto ho voluto ridefinire l’identità visiva di Heller Garden, creando una direzione creativa coerente al luogo e un linguaggio visivo capace di raccontare l’essenza del giardino: un luogo in cui arte, botanica e movimento si intrecciano. Con il nuovo brand system ho voluto provare a riorganizza la comunicazione, semplificando l’esperienza del visitatore e dando vita a un’identità riconoscibile, fluida e contemporanea.</p>
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
          <h3 class="text-xl font-semibold text-white"> Direzione Creativa & Concept</h3>
          <p class="text-white/60 mt-3">Ho definito un concept visivo basato sulle stagioni, sulla ciclicità naturale e sulla fusione tra arte e botanica. Ogni scelta dai colori alla  tipografia scelta ai visual ed infine al tone of voice è calibrata per restituire ed enfatizzare l’identità viva e in continua trasformazione del giardino.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Identità Visiva & Logo System</h3>
          <p class="text-white/60 mt-3">Ho progettato un marchio modulare ispirato al percorso del visitatore, alla crescita naturale e all’estetica organica del parco. Tipografie e palette stagionali creano un sistema unico e tempoaneo e immediatamente riconoscibile.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Wayfinding, Mappe & Materiali</h3>
          <p class="text-white/60 mt-3">Basandomi sulla situazione di partenza, ho ridisegnato mappa e segnaletica per rendere la visita intuitiva e immersiva. I Totem, i pittogrammi e i visual stagionali accompagnano il pubblico attraverso un linguaggio morbido e accessibile ad ogni fascia d'età.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-6 text-center md:text-left">Concept</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/hgintro.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-1 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold mb-1">Un ecosistema naturale e artificiale in grado di respirare e cambiare sguardo in base alle stagioni.</h3>
              <p class="text-white/70 mt-1 md:mt-4">Il concept nasce dall’idea di un organismo vivo: un giardino che cambia con le stagioni, si trasforma con lo sguardo dei visitatori e racconta narrazioni diverse a seconda del percorso. La direzione creativa costruisce un linguaggio fluido, naturale e contemporaneo che unisce leggerezza, movimento e scoperta.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Logo</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">La consapevolezza al centro di tutto.</h3>
              <p class="text-white/70 mt-4">Il marchio combina una foglia stilizzata, un percorso circolare e la lettera “H”, creando un simbolo che rappresenta crescita, scoperta e ciclicità.</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/hglogo.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Font</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/hgfont.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Il passato scolpito nel presente e nel futuro.</h3>
              <p class="text-white/70 mt-4">Ho scelto Skia come carattere espressivo per titoli e logotipo: organico, variabile, scolpito.
Per la comunicazione ho utilizzato Work Sans: accessibile, leggibile e neutra, ideale per testi editoriali e materiali divulgativi.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Palette stagionale</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">La natura cambia ai nostri occhi seguendo le stagioni.</h3>

              <p class="text-white/70 mt-4">Ho deciso di sviluppare un sistema cromatico che segue il ciclo naturale del giardino (primavera, estate, autunno, inverno). Ogni stagione definisce l'identità per le campagne, il merchandising e la segnaletica.
                A mio avviso la scelta plurima di inserire un sistema visuale variabile crea nel visitatore la voglia di tornare più volte per scoprire le diverse sfumature del luogo.</p>
            </div>
          </div>
          <div class="w-full order-1 md:order-2">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/hellers2.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Iconografia e segnaletica </h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/hgptg.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Pittogrammi morbidi e organici</h3>
              <p class="text-white/70 mt-4">Ho scelto di disegnare delle icone botaniche e di navigazione dal tratto morbido, ad alta leggibilità e di facile comprensione per tutti gli utenti che visitano il giardino e che trasmettano una vibrazione in linea con tutto il concept.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- sections 6-8 removed -->
      
        <!-- 6: la mappa -->
        <div class="w-full">
          <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">La mappa</h2>
          <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
            <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start order-2 md:order-1">
              <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
                <h3 class="text-xl text-white font-semibold">Tre macro aree suddivise in tasselli che compongono un puzzle organico da visitare</h3>
                <p class="text-white/70 mt-4">La nuova mappa suddivide il giardino in tre macro-zone e integra percorsi e i punti d’interesse artistici e botanici.</p>
              </div>
            </div>
            <div class="w-full order-1 md:order-2">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/hgmp.webp" alt="La mappa" class="reveal-img w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 7: Materiali e applicazioni -->
        <div class="w-full">
          <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Merchandising</h2>
          <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
            <div class="w-full">
              <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
                <img src="../../assets/hgmerch.webp" alt="Materiali" class="reveal-img w-full h-full object-cover" />
              </div>
            </div>
            <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
              <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
                <h3 class="text-xl text-white font-semibold">Indossare il brand è farsi promotori di questo posto</h3>
                <p class="text-white/70 mt-4">Poster, brochure, biglietti, gadget e materiali per eventi seguono il sistema visivo stagionale, creando coerenza tra fisico e digitale.</p>
              </div>
            </div>
          </div>
        </div>

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
      <a href="/projects/project-6" class="flex items-center gap-0 md:gap-4 md:flex-row text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for desktop -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-8" class="flex items-center gap-0 md:gap-4 md:flex-row-reverse text-center md:text-right">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">→</span>
        </span>
        <span class="hidden md:inline-block text-white/70 text-sm">Progetto successivo</span>
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
})

// Video functionality removed
</script>

