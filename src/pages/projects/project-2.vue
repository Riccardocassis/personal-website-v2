<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'In questo progetto ho ristrutturato il sito ufficialedi Sizexl, riorganizzando contenuti, navigazione e interfaccia visiva per renderla più chiara, credibile e coerente con la qualità dei servizi offerti.'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/videosizexl.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Direzione Creativa & Concept', text: 'Insieme al cliente sono partito sviluppando delle possibili reference che definissero la nuova direzione visiva da seguire e successivamente, una volta optato per uno stile formale e corporate ho sviluppato i wireframes e poi il sito web.' },
      { title: 'Obiettivi di progetto', text: 'Aumentare la brand awareness e migliorare l’esperienza utente attraverso una navigazione più intuitiva e contenuti più chiari.' },
      { title: 'Ottimizzazione SEO', text: 'In questo progetto ho migliorato la visibilità del sito sui motori di ricerca attraverso tecniche di ottimizzazione on-page e off-page e SEO tecnica,' }
    ]"
  />

  <!-- SLIDES -->
  <section class="bg-black">
    <ProjectSlide
      v-for="(slide, i) in slides"
      :key="i"
      :data="slide"
      :index="i"
    />
  </section>

  <!-- CTA -->
  <ProjectCTA />

  <!-- PREV/NEXT -->
  <ProjectPrevNext
    prev="/projects/project-1"
    next="/projects/project-3"
  />

</template>


<script setup>
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectVideo from "@/components/ProjectVideo.vue";
import ProjectKeyPoints from "@/components/ProjectKeyPoints.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

/* HERO IMAGE */
import coversizexl from "@/assets/coversizexl.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import img2sizexl from "@/assets/img2sizexl.webp?width=800,1280,1920&format=webp&as=picture";
import colorpalettesizexl from "@/assets/colorpalettesizexl.webp?width=800,1280,1920&format=webp&as=picture";
import fontsizexl from "@/assets/fontsizexl.webp?width=800,1280,1920&format=webp&as=picture";
import cardsize from "@/assets/cardsize.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = {
  title: "Restyling del sito e ottimizzazione SEO",
  subtitle: "Un progetto di UX, UI e ottimizzazione dei contenuti per migliorare chiarezza, credibilità e navigazione.",
  img: coversizexl
};

/* SLIDES DATA */
const slides = [
  { title: "Situazione iniziale", subtitle: "Analisi del sito", text: "Ho analizzato il sito esistente per individuare criticità in struttura, UI e contenuti: leggibilità scarsa, distribuzione confusa e identità visiva non allineata alla professionalità dell’azienda.", img: img2sizexl },
  { title: "Branding & Palette Colori", subtitle: "Nuova direzione visiva", text: "Ho creato una palette colori stabile da utilizzare sul sito web partendo dai colori del Logo ufficiale in maniera coerente e stabile.", img: colorpalettesizexl },
  { title: "Tipografia", subtitle: "Un Font semplice ma efficace", text: "Insieme al cliente sono state fatte delle proposte tipografiche ed è stato scelto l'inter per massima leggibilità e coerenza tipografica.", img: fontsizexl },
  { title: "Architettura del sito", subtitle: "Struttura & UX semplificata", text: "Ho effettuato una redistribuzione dei contenuti e reso i percorsi più chiari per ridurre il carico cognitivo evitare il tasso di abbandono facilitando la navigazione verso gli elementi desiderati.", img: cardsize },
 
];
</script>

