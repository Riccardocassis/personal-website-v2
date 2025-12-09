<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'In questo progetto ho voluto ridefinire l’identità visiva di Heller Garden, creando una direzione creativa coerente al luogo e un linguaggio visivo capace di raccontare l’essenza del giardino: un luogo in cui arte, botanica e movimento si intrecciano. Con il nuovo brand system ho voluto provare a riorganizza la comunicazione, semplificando l’esperienza del visitatore e dando vita a un’identità riconoscibile, fluida e contemporanea.'
    }"
  />

  



  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Direzione Creativa & Concept', text: 'Ho definito un concept visivo basato sulle stagioni, sulla ciclicità naturale e sulla fusione tra arte e botanica. Ogni scelta dai colori alla  tipografia scelta ai visual ed infine al tone of voice è calibrata per restituire ed enfatizzare l’identità viva e in continua trasformazione del giardino.' },
      { title: 'Identità Visiva & Logo System', text: 'Ho progettato un marchio modulare ispirato al percorso del visitatore, alla crescita naturale e all’estetica organica del parco. Tipografie e palette stagionali creano un sistema unico e tempoaneo e immediatamente riconoscibile.' },
      { title: 'Wayfinding, Mappe & Materiali', text: 'Basandomi sulla situazione di partenza, ho ridisegnato mappa e segnaletica per rendere la visita intuitiva e immersiva. I Totem, i pittogrammi e i visual stagionali accompagnano il pubblico attraverso un linguaggio morbido e accessibile ad ogni fascia d\'età.' }
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
    prev="/projects/project-6"
    next="/projects/project-8"
  />

</template>


<script setup>
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectKeyPoints from "@/components/ProjectKeyPoints.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

/* HERO IMAGE */
import hellerhero from "@/assets/hellerhero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import hgintro from "@/assets/hgintro.webp?width=800,1280,1920&format=webp&as=picture";
import hglogo from "@/assets/hglogo.webp?width=800,1280,1920&format=webp&as=picture";
import hgfont from "@/assets/hgfont.webp?width=800,1280,1920&format=webp&as=picture";
import hellers2 from "@/assets/hellers2.webp?width=800,1280,1920&format=webp&as=picture";
import hgptg from "@/assets/hgptg.webp?width=800,1280,1920&format=webp&as=picture";
import hgmp from "@/assets/hgmp.webp?width=800,1280,1920&format=webp&as=picture";
/* HERO DATA */
const hero = {
  title: "Heller garden",
  subtitle: "Art direction proposal rebranding del giardino botanico.",
  img: hellerhero
};

/* SLIDES DATA */
const slides = [
  { title: "Concept del Rebranding", subtitle: " Un ecosistema naturale e artificiale in grado di respirare e cambiare sguardo in base al periodo.", text: "Il concept nasce dall’idea di un organismo vivo: un giardino che cambia con le stagioni, si trasforma con lo sguardo dei visitatori e racconta narrazioni diverse a seconda del percorso. La direzione creativa costruisce un linguaggio fluido, naturale e contemporaneo che unisce leggerezza, movimento e scoperta.", img: hgintro },
  { title: "Logo", subtitle: "La consapevolezza al centro di tutto", text: "Il marchio combina una foglia stilizzata, un percorso circolare e la lettera “H”, creando un simbolo che rappresenta crescita, scoperta e ciclicità.", img: hglogo },
  { title: "Font", subtitle: "Il passato scolpito nel presente e nel futuro", text: "Ho scelto Skia come carattere espressivo per titoli e logotipo: organico, variabile, scolpito. Per la comunicazione ho utilizzato Work Sans: accessibile, leggibile e neutra, ideale per testi editoriali e materiali divulgativi.", img: hgfont },
  { title: "Palette stagionale", subtitle: "I colori cambiano seguendo le stagioni.", text: "Ho deciso di sviluppare un sistema cromatico che segue il ciclo naturale del giardino (primavera, estate, autunno, inverno). Ogni stagione definisce l'identità per le campagne, il merchandising e la segnaletica. A mio avviso la scelta plurima di inserire un sistema visuale variabile crea nel visitatore la voglia di tornare più volte per scoprire le diverse sfumature del luogo.", img: hellers2 },
  { title: "Iconografia e segnaletica", subtitle: "Pittogrammi morbidi caratterizzati da forme organiche", text: "La struttura dell’app si basa su tre modalità…", img: hgptg },
  { title: "La mappa", subtitle: "Tre macro aree suddivise in tasselli che compongono un puzzle organico da visitare", text: "La nuova mappa suddivide il giardino in tre macro-zone e integra percorsi e i punti d’interesse artistici e botanici.", img: hgmp }

];
</script>

