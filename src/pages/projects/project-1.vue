<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'Questo concept nasce da una domanda semplice:come può una chitarra iconica come la Gibson SG-1961 raccontarsi online con la stessa forza che ha dal vivo? Ho progettato una landing page capace di restituire il carattere della SG-1961 in ogni dettaglio dell’esperienza. L’obiettivo era creare un ponte tra il passato e il presente, trasmettendo l’anima rock dello strumento e aumentando awareness e coinvolgimento intorno a un prodotto che ha segnato la storia della musica.'
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
      { title: 'Creare un ponte tra il passato e il presente', text: 'Ho definito il concept visivo e il tono dell’esperienza partendo dall’identità della SG-1961. Colori, tipografia e ritmo visivo sono stati calibrati per riflettere la personalità dello strumento in un ambiente digitale coerente.' },
      { title: '3D e interazioni', text: 'Ho realizzato modelli 3D e micro-interazioni reattive al suono e all’input dell’utente. La chitarra non è più solo un’immagine: è interattiva, esplorabile, “suonabile” anche sul web. Il 3D non è decorazione, ma strumento narrativo per aumentare immersività e coinvolgimento.' },
      { title: 'Creazione di un applicazione esterna per migliorare la UX dell’ utente', text: 'Con Visual Studio Code ho realizzato una web-app che permette di suonare la SG-1961 direttamente dal browser. Input, animazioni e suoni lavorano insieme per creare un’interazione musicale semplice e immersiva. L’app è stata poi caricata su GitHub Pages e integrata in Webflow.' }
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
  subtitle: "Il suono della SG-1961 trasformato in un’esperienza digitale interattiva",
  img: gibsonHero
};

/* SLIDES DATA */
const slides = [
  { title: "Concept e sviluppo dei Wireframes", subtitle: "Apprendere dal mondo fisico e portare gli elementi nel digitale.", text: "In questo progetto sono partito analizzando ed esplorando tutte le componenti e l'aura legata a questo prodotto, sia a livello estetico che percettivo, dato che si trattava di uno strumento che è stato protagonista dello sviluppo della storia del Rock ed è ancora un caposaldo. Successivamente dopo questa analisi mi sono messo a prototipare i Wireframes.", img: p1slide1 },
  { title: "Scelta della piattaforma", subtitle: "Controllo totale sul layout.", text: "Webflow è stata la scelta ideale come next-step,dato che prevedevo l'implementazione di vari elementi da embeddare mantenendo allo stesso tempo la pagina leggera. Avevo dunque bisogno di uno strumento che mi permettesse di avere un controllo totale su più aspetti.", img: p1slide2 },
  { title: "3D Modeling", subtitle: "Spline un tool 3D leggero e integrabile.", text: "Ho scelto Spline per modellare in 3d la chitarra e creare delle interazioni e scene di essa poichè l'ho trovato lo strumento più congeniale per interfacciarmi con WebFlow.", img: p1slide3 },
  { title: "Sviluppo dell'app", subtitle: "Ho scelto il codice come alleato.", text: "Con Visual Studio Code ho realizzato una applicazione che permette all'utente di suonare la SG-1961 direttamente dal browser. Input, animazioni e suoni lavorano insieme per creare un’interazione musicale semplice e immersiva. L’app è stata poi caricata su GitHub Pages e integrata in Webflow.", img: p1slide4 },
  { title: "Interfaccia", subtitle: "Tre modalità per ridurre la curva d’apprendimento.", text: "La struttura dell’app si basa su due modalità principali di utilizzo: suono libero delle corde vuote e il suono di due brani che hanno fatto la storia del Rock. Ho volutamente reso l'app molto semplice sia a livello di interfaccia che di utilizzo in primis per renderla accessibile a tutti e in secondo luogo per renderla un elemento secondario a supporto della landing page.", img: p1slide5 }
];
</script>

