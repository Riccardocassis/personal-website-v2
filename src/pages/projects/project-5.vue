<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'Questo progetto riguarda lo sviluppo in figma e la prototipazione su protopie di una applicazione mobile, volta alla creazione e alla condivisione di scuse amichevoli tra gli utenti. Ho scelto di dargli il nome Opsify, perché: opsi è uno termine amichevole che si usa per chiedere scusa in modo informale, l’aggiunta “-fy” richiama il significato di trasformare qualcosa, quindi “Opsify” vuol dire rendere più semplice e naturale il modo di chiedere scusa. Ho scelto di utilizzare dunque un Tov amichevole ed informale nella applicazione e anche i colori che ho scelto abbinati ai font e in generale a tutta la struttura dell’interfaccia, sono volti a creare armonia all’utente.'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/opsify.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Concept & Naming', text: 'Ho definito il tono dell’app partendo da un insight semplice: chiedere scusa è un momento scomodo. Ho scelto un linguaggio leggero e un naming che riflette questa idea: “Opsify” unisce l’espressione informale “opsi” al suffisso “-fy”, trasformando l’atto di scusarsi in qualcosa di semplice e naturale.' },
      { title: 'UX Research & Flussi', text: 'Ho analizzato casi d’uso comuni e contesti ricorrenti (ritardi, imprevisti, appuntamenti mancati) per progettare flussi rapidi e categorizzati. L’obiettivo: permettere all’utente di generare una scusa coerente in pochi secondi, senza frizioni.' },
      { title: 'UI Design & Micro-interazioni', text: 'L’interfaccia è pensata per abbassare le difese e mettere l’utente a suo agio:colori pastello, tipografia rotonda e micro-animazioni espressive contribuiscono a creare un ambiente morbido, empatico e coinvolgente. Il design guida l’utente in modo intuitivo, rendendo l’esperienza positiva, immediata e leggera.' }
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
    prev="/projects/project-4"
    next="/projects/project-6"
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
import coveropsify from "@/assets/coveropsify.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import opsifywirewebp from "@/assets/opsifywirewebp.webp?width=800,1280,1920&format=webp&as=picture";
import oopsyf from "@/assets/oopsyf.webp?width=800,1280,1920&format=webp&as=picture";
import opsyfyproto from "@/assets/opsyfyproto.webp?width=800,1280,1920&format=webp&as=picture";
/* HERO DATA */
const hero = {
  title: "Opsify concept App",
  subtitle: " un’app mobile dedicata alla creazione e condivisione di scuse personalizzate.",
  img: coveropsify
};

/* SLIDES DATA */
const slides = [
  { title: "Wireframes", subtitle: "Dai primi wireframe alla struttura dell’app.", text: "Ho sviluppato una prima struttura low-fi per testare navigazione, categorie e priorità dei contenuti prima di passare alla fase visual.", img: opsifywirewebp },
  { title: "Visual Design / UI", subtitle: "Un’interfaccia leggera e amichevole.", text: "Ho costruito l’identità visiva scegliendo colori chiari, contrasti morbidi e una tipografia rotonda per creare un ambiente accogliente e allegro. Ogni scelta contribuisce a rendere l’esperienza immediata e piacevole.", img: oopsyf },
  { title: "Prototipazione con Protopie", subtitle: "Il tocco finale che migliora l'esperienza.", text: "Ho prototipato micro-interazioni e transizioni con Protopie per validare la fluidità dell’esperienza e simulare il comportamento reale dell’app.", img: opsyfyproto },
 
];
</script>

