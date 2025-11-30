<template>
  <!-- HERO (Apple-like, generous whitespace) -->
  <section class="relative w-full md:h-[85vh] h-[50vh] overflow-hidden bg-black">
    <img
      src="../../assets/cover-brandbibler1.webp"
      alt="Cover"
      class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-6 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="text-3xl md:text-6xl font-extrabold text-white leading-tight">Roberto piadine</h1>
        <p class="text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">Art direction proposal | un brand di piadine con un’identità nuova, coraggiosa e irriverente.</p>
      </div>
    </div>
  </section>

  <!-- Project Intro (Apple-style clear intro) -->
  <section class="bg-black py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">Lo scopo del progetto</h2>
      <p class="text-white/60 text-lg leading-relaxed">In questo concept ho deciso di prendere un classico brand di piadine e conferirgli un’identità nuova: coraggiosa, irriverente e impossibile da ignorare.
Attorno ad esso ho costruito un immaginario visivo ribelle prendendo come riferimento il "ribelli per eccezione" ovvero gli hippy, ribelli ironici, colorati e iconici.
Ho scelto di creare un ponte tra passato e presente con i ribelli di un tempo e un attitude che è ancora presente in ciascuno di noi.
Ho optato per un linguaggio diretto e volutamente sopra le righe per emergere in un mercato saturo e indistinguibile, conferendo ad un prodotto semplice un aura mistica e accattivante.</p>
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
          <p class="text-white/60 mt-3">Ho definito un’identità visiva che rompe gli schemi del food tradizionale e parla a un pubblico che vuole distinguersi. Palette psichedeliche, tono provocatorio e immaginario hippy diventano gli strumenti narrativi del brand.</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Sistema visivo & Art direction</h3>
          <p class="text-white/60 mt-3">Ho costruito un linguaggio visivo fatto di tipografie espressive, pattern audaci e una fotografia diretta, spontanea e “viva”.
Ogni elemento è pensato per creare un’identità che vibra: posters, composizioni pop, contrasti saturi e un mood energico che supporta il payoff “Don’t ask, act.”</p>
        </div>
        <div class="px-6">
          <h3 class="text-xl font-semibold text-white">Branding & Applicazioni</h3>
          <p class="text-white/60 mt-3">Ho ridisegnato il logo, sviluppato il packaging, creato gli OOH e i contenuti social.
L’obiettivo era uno: costruire un sistema coerente, riconoscibile e scalabile.
Il risultato è un brand che funziona in ogni formato: dallo scaffale alla strada, fino ai social.</p>
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
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Logo e Identità</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbpayoff.webp" alt="Concept" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Ribelli dalle fondamenta</h3>
              <p class="text-white/70 mt-4">Ho scelto di partire in questo concept rivisitando il logo, mi sono avvalso del font Losta Bonita per richiamare il tema musicale e lo stile degli anni sessanta e settanta tipico delle cover dei vinili.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Palette e Tipografia</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Colori psichedelici, tipografia libera.</h3>
              <p class="text-white/70 mt-4">La scelta della palette cromatica si ispira ai colori vivaci e saturi tipici dell’epoca psichedelica, coniugati comunque in chiave food e quindi senza una iperbole stilistica per non cadere nella banalità. Ho scelto inoltre di far dialogare un font energico come Losta Bonita con uno più pettinato e chiaro come l'Inter crendo il giusto mix volto a garantire la leggibilità</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbcolorietipografia.webp" alt="Materials" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Photography Direction</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbft.webp" alt="3D" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Fotografia spontanea e imperfetta (nel modo giusto).</h3>
              <p class="text-white/70 mt-4">Ho scelto una fotografia che valorizza corpi reali, situazioni quotidiane e un’estetica volutamente “raw”.
Cibo e persone convivono nella stessa atmosfera: colori intensi, complicità e uno stile diretto che rompe con la classica food photography patinata.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Packaging</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un Packaging che si vede anche da lontano, ti chiama senza guardarti in grado di comunicarel’essenza del brand.</h3>

              <p class="text-white/70 mt-4">Le confezioni sono pensate per emergere dallo scaffale: colori shock che variano in base al prodotto, pattern dichiarati e messaggi diretti.
Ogni pack è un manifesto del brand, non solo un contenitore.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbpackaging.webp" alt="Interaction" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Campagne</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbcmp.webp" alt="Sound" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Uno stile comunicativo senza filtri.</h3>
              <p class="text-white/70 mt-4">Poster irriverenti, contrasti saturi e messaggi brevi.
Ho progettato una serie di OOH che incarnano l’archetipo ribelle: provocatori, pop, immediati e divertenti.
Sono pensati per catturare l’attenzione prima ancora che il pubblico capisca di cosa si tratta.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 6: Eventi e attivazioni -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Contenuti social</h2>
        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center justify-center md:justify-start">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un tono di voce che colpisce e diverte</h3>
              <p class="text-white/70 mt-4">Ho sviluppato i contenuti social amplificandol’identità del brand caratterizzandoli conironia, spontaneità e un linguaggio grafico che non ha paura di esagerare (superando forse i confini del politicamente corretto).
L’obiettivo cardine è stato quello di puntare alla creazione di una community attiva e che si rispecchia nel brand, non un semplice numero di follower.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbsc.webp" alt="Eventi" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 7: Store & Retail -->
      <div class="w-full">
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">Sito web e touchpoint digitali</h2>
        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div class="w-full">
            <div class="w-full aspect-[4/3] overflow-hidden project-img-wrap">
              <img src="../../assets/rbsw.webp" alt="Sito web" class="reveal-img w-full h-full object-cover" />
            </div>
          </div>
          <div class="px-6 md:pr-20 flex items-center justify-center md:justify-start pt-6 md:pt-0">
            <div class="reveal-text translate-y-6 will-change-transform text-center md:text-left" data-animate>
              <h3 class="text-xl text-white font-semibold">Un’esperienza digitale coerente</h3>
              <p class="text-white/70 mt-4">L’interfaccia segue la stessa direzione ribelle del brand: colori forti, tipografia espressiva e una navigazione veloce.
La UI accoglie l’utente con la stessa energia degli OOH e del packaging.</p>
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
    <div class="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6">
      <!-- Previous -->
      <a href="/projects/project-7" class="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
        <span class="inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full">
          <span class="text-white">←</span>
        </span>
        <span class="text-white/70 text-sm">Progetto precedente</span>
      </a>

      <!-- Center spacer for mobile -->
      <div class="hidden md:block flex-1"></div>

      <!-- Next -->
      <a href="/projects/project-9" class="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-4 text-center md:text-right">
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

