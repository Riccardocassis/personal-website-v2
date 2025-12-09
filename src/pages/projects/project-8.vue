<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'In questo concept ho deciso di prendere un classico brand di piadine qualsiasi, ristrutturarlo conferendogli un’identità nuova: coraggiosa, irriverente e impossibile da ignorare. Attorno ad esso ho costruito un immaginario visivo prendendo come riferimento il mondo hippy. Ho scelto di creare un ponte tra passato e presente con i ribelli di un tempo, in modo tale da conferire ad un prodotto semplice un aura mistica e accattivante.'
    }"
  />

 


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Direzione Creativa & Concept', text: 'Ho definito un’identità visiva che rompe gli schemi del food tradizionale e parla a un pubblico che vuole distinguersi. Palette psichedeliche, tono provocatorio e immaginario hippy diventano gli strumenti narrativi del brand.' },
      { title: 'Sistema visivo & Art direction', text: 'Ho costruito un linguaggio visivo fatto di tipografie espressive, pattern audaci e una fotografia diretta, spontanea e “viva”. Ogni elemento è pensato per creare un’identità che vibra: posters, composizioni pop, contrasti saturi e un mood energico che supporta il payoff: Don’t ask, act.' },
      { title: 'Branding & Applicazioni', text: 'Ho ridisegnato il logo, sviluppato il packaging, creato gli OOH e i contenuti social. L’obiettivo era uno: costruire un sistema coerente, riconoscibile e scalabile. Il risultato è un brand che funziona in ogni formato: dallo scaffale alla strada, fino ai social.' }
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
    prev="/projects/project-7"
    next="/projects/project-9"
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
import coverbrandbibler1 from "@/assets/coverbrandbibler1.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import rbpayoff from "@/assets/rbpayoff.webp?width=800,1280,1920&format=webp&as=picture";
import rbcolorietipografia from "@/assets/rbcolorietipografia.webp?width=800,1280,1920&format=webp&as=picture";
import rbft from "@/assets/rbft.webp?width=800,1280,1920&format=webp&as=picture";
import rbpackaging from "@/assets/rbpackaging.webp?width=800,1280,1920&format=webp&as=picture";
import rbcmp from "@/assets/rbcmp.webp?width=800,1280,1920&format=webp&as=picture";
import rbsc from "@/assets/rbsc.webp?width=800,1280,1920&format=webp&as=picture";
import rbsw from "@/assets/rbsw.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = {
  title: "Roberto Rebranding",
  subtitle: "Art direction proposal, un concept distruptive per un brand di piadine.",
  img: coverbrandbibler1
};

/* SLIDES DATA */
const slides = [
  { title: "Identità", subtitle: "Un brand ribelle dalle fondamenta.", text: "Ho introdotto questo payoff proprio per distaccarmi dal mondo che caratterizza questa tipologia di cibi in maniera distruptive. La piadina passa in secondo piano e fa da tramite nella vendita di un invito ad un comportamento da mettere in atto, rimanendo impresso nei consumatori.", img: rbpayoff },
  { title: "Palette e Tipografia", subtitle: "Colori vivaci con un approccio tipografico ispirato agli anni '60 e '70.", text: "La scelta della nuova palette del brand trae le fondamenta tra il mondo hippy e il mondo food, ho scelto di utilizzare dei colori pastello per l'effetto che producono in noi legato all'appetito. Questi colori si mischiano con il Font Losta Bonita, il quale conferisce al brand una estetica inconfondibile e si adatta coerentemente sia sul prodotto che nella comunicazione.", img: rbcolorietipografia },
  { title: "Photography Direction", subtitle: "Fotografia spontanea e imperfetta (nel modo giusto).", text: "Ho scelto una fotografia che valorizza corpi reali, situazioni quotidiane e un’estetica volutamente “raw”. Cibo e persone convivono nella stessa atmosfera: colori intensi, complicità e uno stile diretto che rompe con la classica food photography patinata.", img: rbft },
  { title: "Packaging", subtitle: "Un Packaging in grado di comunicarel’essenza del brand.", text: "Le confezioni sono pensate per emergere dallo scaffale: colori shock che variano in base al prodotto, pattern dichiarati e messaggi diretti. Ogni pack è un manifesto del brand, non solo un contenitore.", img: rbpackaging },
  { title: "Comunicazione e campagne", subtitle: "Uno stile comunicativo senza filtri.", text: "Poster irriverenti, contrasti saturi e messaggi brevi. Ho progettato una serie di OOH che incarnano l’archetipo ribelle: provocatori, pop, immediati e divertenti. Sono pensati per catturare l’attenzione prima ancora che il pubblico capisca di cosa si tratta.", img: rbcmp},
  {title: "Contenuti social", subtitle: "Un Tov che colpisce e diverte.", text: "Ho sviluppato i contenuti social amplificandol’identità del brand caratterizzandoli conironia, spontaneità e un linguaggio grafico che non ha paura di esagerare (superando forse i confini del politicamente corretto).L’obiettivo cardine è stato quello di puntare alla creazione di una community attiva e che si rispecchia nel brand, non un semplice numero di follower.", img: rbsc},
{ title: "Sito web e touchpoint digitali", subtitle: "Un’esperienza digitale coerente", text: "L’interfaccia segue la stessa direzione ribelle del brand: colori forti, tipografia espressiva e una navigazione veloce. La UI accoglie l’utente con la stessa energia degli OOH e del packaging.", img: rbsw},
];

</script>

