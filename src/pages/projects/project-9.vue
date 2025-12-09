<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'In questo progetto ho voluto tradurre l’overthinking in una narrazione visiva semplice da capire ma difficile da ignorare. Ho scelto un’estetica in bianco e nero per togliere il superfluo e concentrare l’attenzione su ciò che conta: il rumore mentale, il peso dei pensieri, la lotta quotidiana che molti vivono in silenzio. La fanzine è stata realizzata per la Giornata Mondiale della Salute Mentale (10 ottobre) e successivamente condivisa con psicologi e professionisti del settore, come strumento divulgativo e conversazionale.'
    }"
  />




  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Linguaggio visivo essenziale', text: 'Ho scelto un tratto volutamente semplice, quasi infantile, per parlare di temi complessi senza farli sembrare “pesanti”. La mancanza di sfumature e la scelta del bianco/nero amplificano il contrasto emotivo.' },
      { title: 'Narrazione diretta e metaforica', text: ' La fanzine trasforma l’overthinking in un racconto militare: soldati, missioni, mostri interiori. Una metafora che permette al lettore di prendere distanza dai propri pensieri e guardarli con più lucidità.' },
      { title: 'Funzione divulgativa', text: 'Pur essendo illustrata, la fanzine è pensata per essere usata come strumento educativo da psicologi e operatori. Il suo obiettivo è rompere il ghiaccio, normalizzare il dialogo e far capire che chiedere aiuto non è un fallimento, anzi un atto di coraggio volto a migliorare la qualità della propria vita.' }
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
    prev="/projects/project-8"
    next="/projects/project-1"
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
import fumettohero from "@/assets/fumettohero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import ctrlaltcancillustrazione from "@/assets/ctrlaltcancillustrazione.webp?width=800,1280,1920&format=webp&as=picture";
import ctrlaltcancnarrazione from "@/assets/ctrlaltcancnarrazione.webp?width=800,1280,1920&format=webp&as=picture";
import crtlaltcancposter from "@/assets/crtlaltcancposter.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = {
  title: "Control alt canc",
  subtitle: "Un fumetto illustrato dedicato alla Giornata Mondiale della Salute Mentale",
  img: fumettohero
};

/* SLIDES DATA */
const slides = [
  { title: "Disegno & stile", subtitle: "L'imperfezione del fatto a manno riflette l'imperfezione in ciascuno di noi.", text: "Tutte le illustrazioni sono state disegnate a mano sull'Ipad, adottando uno stile volutamente “grezzo”, perché l’overthinking non è pulito, ordinato o patinato. È caotico, scomodo, rumoroso.", img: ctrlaltcancillustrazione },
  { title: "Costruzione narrativa", subtitle: "Una tematica seria affrontata in modo informale.", text: "Ho strutturato la fanzine in step, come un manuale per soldati:riconosci il problema, entra nella tua mente prendendo consapevolezza dei tuoi pensieri,identifica i mostri, affrontali, ed infine vedrai che affrontandoli nella maodalità corretta se ne andranno da soli. Ovviamente questo non è un manuale e serve come primo approccio ma a mio avviso specialmente quando si pensa troppo è utile seguire un piano senza divagare, il tutto scritto con un tono sarcastico e leggero.", img: ctrlaltcancnarrazione },
  { title: "Poster", subtitle: "Un messaggio visivo chiaro", text: "Il poster riassume il messaggio della fanzine. Ho voluto fare un parallelismo tra la mente e un computer", img: crtlaltcancposter },
  ];
</script>

