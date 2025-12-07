<template>
  <!-- HERO -->
  <section class="relative w-full md:h-[85vh] h-[35vh] overflow-hidden bg-transparent -mt-12 md:mt-0">
    <picture>
      <template v-for="src in hero.sources" :key="src.srcset">
        <source :type="src.type" :srcset="src.srcset" />
      </template>

      <img
        :src="hero.img.src"
        alt="Sizexl cover"
        class="reveal-img absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-90"
        fetchpriority="high"
        decoding="async"
      />
    </picture>

    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center md:items-end justify-center md:justify-start pt-2 md:pb-20 pl-4 md:pl-20">
      <div class="max-w-3xl text-center md:text-left px-4 md:px-6">
        <h1 class="hidden md:block text-3xl md:text-6xl font-extrabold text-white leading-tight">
          Sizexl — Restyling del sito e ottimizzazione della presenza digitale
        </h1>
        <p class="hidden md:block text-xs md:text-sm text-white/70 mt-3 md:mt-4 tracking-wide">
          Un progetto di UX, UI e ottimizzazione dei contenuti per migliorare chiarezza, credibilità e navigazione.
        </p>
      </div>
    </div>
  </section>

  <!-- MOBILE TITLE -->
  <div class="md:hidden px-6 pt-3">
    <h1 class="text-3xl font-extrabold text-white leading-tight mb-1">
      Sizexl — Restyling del sito e ottimizzazione della presenza digitale
    </h1>
    <p class="text-xs text-white/70 mt-2">
      Un progetto di UX, UI e ottimizzazione dei contenuti per migliorare chiarezza, credibilità e navigazione.
    </p>
  </div>

  <!-- INTRO -->
  <section class="bg-black py-8 md:py-20 px-6">
    <div class="max-w-3xl mx-auto text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 text-center">
        Lo scopo del progetto
      </h2>

      <p class="text-white/60 text-lg leading-snug md:leading-relaxed">
        In questo progetto ho ricostruito l’intera esperienza digitale di Sizexl, riorganizzando contenuti,
        navigazione e interfaccia visiva per renderla più chiara, credibile e coerente con la qualità dei servizi offerti.
      </p>
    </div>
  </section>

  <!-- VIDEO -->
  <section class="bg-black py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h3 class="text-white/70 mb-6">Preview della pagina</h3>
      <div class="relative w-full aspect-[16/9] max-h-[65vh] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <video controls playsinline preload="metadata" class="w-full h-full object-cover">
          <source src="https://github.com/Riccardocassis/sizexl/raw/refs/heads/main/videosizexl.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <!-- SECTION 1 -->
  <section class="bg-black py-16 px-6">
    <div class="max-w-7xl mx-auto space-y-20">

      <!-- SITUAZIONE INIZIALE -->
      <div>
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
          Situazione iniziale
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div>
            <div class="aspect-[4/3] overflow-hidden">
              
              <picture>
                <template v-for="src in situation.sources" :key="src.srcset">
                  <source :type="src.type" :srcset="src.srcset" />
                </template>
                <img
                  :src="situation.img.src"
                  class="reveal-img w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>

            </div>
          </div>

          <div class="px-6 md:pr-20 flex items-center pt-4 md:pt-0">
            <div class="reveal-text text-center md:text-left">
              <h3 class="text-xl text-white font-semibold mb-1">Analisi del sito</h3>
              <p class="text-white/70 mt-3">
                Ho analizzato il sito esistente per individuare criticità in struttura, UI e contenuti:
                leggibilità scarsa, distribuzione confusa e identità visiva non allineata alla professionalità dell’azienda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- PALETTE -->
      <div>
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
          Branding & Palette Colori
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center order-2 md:order-1">
            <div class="reveal-text text-center md:text-left">
              <h3 class="text-xl text-white font-semibold">Nuova direzione visiva</h3>
              <p class="text-white/70 mt-4">
                Palette aggiornata per un tono più professionale, leggibile e contemporaneo.
              </p>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <div class="aspect-[4/3] overflow-hidden">

              <picture>
                <template v-for="src in palette.sources" :key="src.srcset">
                  <source :type="src.type" :srcset="src.srcset" />
                </template>
                <img
                  :src="palette.img.src"
                  class="reveal-img w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>

            </div>
          </div>
        </div>
      </div>

      <!-- FONT -->
      <div>
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
          Tipografia
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div>
            <div class="aspect-[4/3] overflow-hidden">
              
              <picture>
                <template v-for="src in fontImg.sources" :key="src.srcset">
                  <source :type="src.type" :srcset="src.srcset" />
                </template>
                <img
                  :src="fontImg.img.src"
                  class="reveal-img w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>

            </div>
          </div>

          <div class="px-6 md:pr-20 flex items-center pt-4 md:pt-0">
            <div class="reveal-text text-center md:text-left">
              <h3 class="text-xl text-white font-semibold">Un font semplice ma efficace</h3>
              <p class="text-white/70 mt-4">
                Scelta condivisa con il cliente: Inter, per massima leggibilità e coerenza tipografica.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ARCHITETTURA -->
      <div>
        <h2 class="px-6 md:pl-20 text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
          Architettura del sito
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div class="px-6 md:pl-20 flex items-center order-2 md:order-1">
            <div class="reveal-text text-center md:text-left">
              <h3 class="text-xl text-white font-semibold">Struttura & UX semplificata</h3>
              <p class="text-white/70 mt-4">
                Redistribuzione dei contenuti e percorsi più chiari per ridurre il carico cognitivo e facilitare la navigazione.
              </p>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <div class="aspect-[4/3] overflow-hidden">

              <picture>
                <template v-for="src in architecture.sources" :key="src.srcset">
                  <source :type="src.type" :srcset="src.srcset" />
                </template>
                <img
                  :src="architecture.img.src"
                  class="reveal-img w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import sizexlHero from '../../assets/coversizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlSituation from '../../assets/img2sizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlPalette from '../../assets/colorpalettesizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlFont from '../../assets/fontsizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlArchitecture from '../../assets/cardsize.webp?w=800;1280;1920&format=webp;jpeg&as=picture'

const hero = sizexlHero
const situation = sizexlSituation
const palette = sizexlPalette
const fontImg = sizexlFont
const architecture = sizexlArchitecture
</script>
