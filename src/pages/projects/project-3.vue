<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'In questo progetto Web mi sono occupato della realizzazione della landing page inerente a Synapses, un evento organizzato dalla Libera Accademia delle Belle Arti di Brescia (LABA). I visual mi sono stati forniti dal team creativo dell\'accademia, mentre il mio compito è stato quello di sviluppare una pagina web funzionale e informativa per l\'evento. Gli obiettivi principali erano evidenziare la data e il luogo dell\'evento, oltre a fornire agli utenti un calendario dettagliato con gli orari delle varie attività previste durante la giornata.'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/synapsesvideo.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Direzione Creativa & Concept', text: 'La direzione creativa generale come gli asset che mi sono stati forniti sono stati preparati da dei miei compagni di corso e dalla LABA. Io in questa fase mi sono occupato di rendere fruibile i contenuti e a sviluppare il codice per pubblicare la landing page e renderla operativa.' },
      { title: 'Interazioni', text: 'Ho voluto mettere delle leggere interazioni come uno zoom al passaggio del mouse sulla data per darle enfasi e creare dei drop down menù con le informazioni degli eventi relativi per facilitarne la consultazione da parte degli utenti.' },
      { title: 'Sviluppo Web', text: 'La pagina è stata creata tramite codice in Visual Studio Code e successivamente pubblicata su un dominio dedicato fornitomi dal reparto IT della LABA.' }
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
    prev="/projects/project-2"
    next="/projects/project-4"
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
import landingsynapses from "@/assets/landingsynapses.webp?width=800,1280,1920&format=webp&as=picture";


/* HERO DATA */
const hero = {
  title: "Synapses landing Page",
  subtitle: "Sviluppo della landing page informativa.",
  img: landingsynapses
};

</script>

