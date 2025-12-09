<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'Il Decreto Europeo sull’Accessibilità (EAA) impone a prodotti e servizi digitali di essere accessibili a tutti. La formazione in questo ambito purtroppo presenta delle lacune ed è molto teorica. WebAble nasce per cambiare approccio. È una web app che propone micro-esercizi pratici e percorsi su misura, pensati per chi lavora nel digitale: designer, developer, content creator. Obiettivo: rendere la formazione sull’accessibilità semplice, concreta e immediata.'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/webable registrazione schermo.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Personalizzazione tramite AI', text: 'Webable genera percorsi personalizzati in base al ruolo dell’utente, alle sue competenze e al tempo che ha a disposizione. L’obiettivo è proporre solo contenuti utili e applicabili subito.' },
      { title: 'Microlearning & Gamification', text: 'Ho adottato un approccio basato su sessioni brevi, esercizi pratici e badge che incentivano progressione e continuità. L’apprendimento diventa leggero, concreto e misurabile.' },
      { title: 'Community & Spazio Recruiting', text: 'La piattaforma include un’area condivisa dove professionisti e recruiter possono confrontarsi, scambiarsi risorse e creare opportunità lavorative legate all’accessibilità.' }
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
    prev="/projects/project-5"
    next="/projects/project-7"
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
import webableimgcop from "@/assets/webableimgcop.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import webintro from "@/assets/webintro.webp?width=800,1280,1920&format=webp&as=picture";
import webablelow from "@/assets/webablelow.webp?width=800,1280,1920&format=webp&as=picture";
import webads from "@/assets/webads.webp?width=800,1280,1920&format=webp&as=picture";
import webapercorsi from "@/assets/webapercorsi.webp?width=800,1280,1920&format=webp&as=picture";
import webainterface from "@/assets/webainterface.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = {
  title: "Webable",
  subtitle: "La piattaforma di microlearning dedicata all’accessibilità web.",
  img: webableimgcop
};

/* SLIDES DATA */
const slides = [
  { title: "Dal problema nasce l’opportunità", subtitle: "Come nasce Webable", text: "La formazione sull’accessibilità è spesso troppo teorica, dispersiva e complessa per chi lavora nel digitale. Con Webable ho esplorato un approccio diverso: un sistema che crea percorsi personalizzati e propone micro-esercizi concreti, basati sugli standard WCAG ed EAA ma tradotti in un linguaggio semplice e immediato.", img: webintro },
  { title: "Onboarding low-fidelity", subtitle: "Capire chi sei per personalizzare l’apprendimento", text: "La prima fase che ho progettato è l’onboarding, in versione low-fidelity, per definire le domande fondamentali: ruolo dell’utente, esperienza con l’accessibilità, tempo disponibile e stile di apprendimento. Questo step permette alla piattaforma di generare un percorso formativo su misura.", img: webablelow },
  { title: "Design System", subtitle: "Le linee guida", text: "Ho definito una palette morbida, una tipografia leggibile e componenti semplici per costruire un’interfaccia accessibile e coerente. Il tone of voice è amichevole e leggero, coerente con l’obiettivo di rendere la formazione più piacevole e meno tecnica.", img: webads },
  { title: "Flusso principale dell’App", subtitle: "dal percorso personalizzato al micro-learning", text: "Ho progettato e prototipato il flusso principale: scelta del percorso, generazione personalizzata tramite AI, progressione attraverso micro-lezioni e reward gamificati. Ogni step è pensato per essere breve, chiaro e motivante.", img: webapercorsi },
  { title: "UI finale", subtitle: "Un’interfaccia amichevole e motivante", text: "L’interfaccia finale combina colori morbidi, icone rotonde e micro-feedback per rendere il tema dell’accessibilità più accessibile. Weby accompagna l’utente senza mai diventare invadente.", img: webainterface }
];
</script>

