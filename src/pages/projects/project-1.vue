<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Lo scopo del progetto',
      text: 'In questo progetto ho voluto ricreare un concept di landing page dedicata a uno strumento iconico come la Gibson SG-1961…'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/gb_behance.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Direzione Creativa & Concept', text: 'Ho definito il concept visivo…' },
      { title: '3D e interazioni', text: 'Ho realizzato modelli 3D…' },
      { title: 'Sviluppo Web & Integrazione', text: 'Ho sviluppato le funzionalità interattive…' }
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
    prev="/projects/project-9"
    next="/projects/project-2"
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
import gibsonHero from "@/assets/gibson-cover-pagina-progetti.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import p1slide1 from "@/assets/p1slide1.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide2 from "@/assets/p1slide2.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide3 from "@/assets/p1slide3.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide4 from "@/assets/p1slide4.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide5 from "@/assets/p1slide5.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = {
  title: "Gibson SG-1961",
  subtitle: "Concept Experience — Il suono della SG-1961 trasformato in un’esperienza digitale interattiva",
  img: gibsonHero
};

/* SLIDES DATA */
const slides = [
  { title: "Concept e sviluppo dei Wireframes", subtitle: "Stile estetico", text: "Sono partito analizzando le parti…", img: p1slide1 },
  { title: "Scelta della piattaforma", subtitle: "Controllo totale sul layout", text: "Webflow è stata la scelta ideale…", img: p1slide2 },
  { title: "3D Modeling", subtitle: "Spline — 3D leggero e integrabile", text: "Ho scelto Spline per modellare…", img: p1slide3 },
  { title: "Sviluppo dell'app", subtitle: "Ho scelto il codice come alleato", text: "Con Visual Studio Code ho realizzato una web-app…", img: p1slide4 },
  { title: "Interfaccia", subtitle: "Tre modalità per ridurre la curva d’apprendimento", text: "La struttura dell’app si basa su tre modalità…", img: p1slide5 }
];
</script>

