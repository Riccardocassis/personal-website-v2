<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro
    :data="{
      title: 'Scopo del progetto',
      text: 'Fillbo è un prototipo di un’app mobile pensata per ridurre gli sprechi alimentari migliorando il flusso tra supermercati e CAUTO. Ho analizzato il processo reale con cui i commessi identificano i prodotti in scadenza e l’ho trasformato in un sistema digitale più rapido, chiaro e tracciabile. Il risultato è un prototipo che semplifica il lavoro quotidiano, riduce errori e accelera la donazione degli alimenti.'
    }"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/fillbovideo.mp4"
  title="Preview della pagina"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints
    :items="[
      { title: 'Ricerca & Concept', text: 'Ho costruito il concept di Fillbo partendo dai bisogni reali del personale: velocità, chiarezza e riduzione degli errori operativi. Il tono dell’interfaccia è volutamente amichevole per abbassare lo stress in un contesto già operativo e intenso.' },
      { title: 'UX Design & Flussi', text: 'Ho progettato flussi che accompagnano l’utente passo dopo passo, minimizzando la complessità. Tutti i percorsi sono stati pensati per essere completati con una mano sola e in pochi tap.' },
      { title: 'UI Design & Prototipo', text: 'Ho realizzato un prototipo completo in Figma, curando gerarchie visive, leggibilità e micro-feedback. L’obiettivo è stato quello dipermettere anche a personale non tecnico di usarlo senza formazione.' }
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
    prev="/projects/project-3"
    next="/projects/project-5"
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
import fillbohero from "@/assets/fillbohero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import fillbos1 from "@/assets/fillbos1.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos2 from "@/assets/fillbos2.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos3 from "@/assets/fillbos3.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos4 from "@/assets/fillbos4.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos5 from "@/assets/fillbos5.webp?width=800,1280,1920&format=webp&as=picture";
/* HERO DATA */
const hero = {
  title: "Fillbo concept app",
  subtitle: "Un prototipo mobile progettato per ridurre gli sprechi alimentari.",
  img: fillbohero
};

/* SLIDES DATA */
const slides = [
  { title: "Ricerca sul campo e comprensione del problema", subtitle: "Analisi dei processi reali per ridurre gli sprechi alimentari.", text: "Nel team della Dispensa Alimentare di Cauto, il problema era la mancanza di uno strumento che semplificasse un flusso operativo frammentato.Per capire davvero dove intervenire, ho osservato da vicino il lavoro quotidiano: dagli addetti dei supermercati che monitorano le scadenze, fino ai responsabili del magazzino che gestiscono la redistribuzione.Ho raccolto insight tramite interviste, osservazione diretta e analisi dei punti critici: errori di trascrizione, passaggi ridondanti, mancanza di uno storico digitale e zero visibilità sul volume dei prodotti recuperati.Questa fase ha definito le basi dell’app: leggerezza, velocità e zero complessità.", img: fillbos1 },
  { title: "Flussi, requisiti e architettura dell’app", subtitle: "Dal caos dei processi fisici a un flusso digitale lineare.", text: "Dopo la fase di ricerca, ho ricostruito tutti i flussi reali in una mappa operativa: dalla segnalazione dei prodotti in scadenza fino alla loro categorizzazione in box e alla consegna finale al magazzino.Questo lavoro ha permesso di eliminare passaggi ridondanti, chiarire ruoli e priorità e definire i requisiti funzionali della prima versione dell’app.La mappatura in Figma è servita per tradurre i bisogni del personale — commessi, volontari e responsabili — in un sistema coerente, semplice e tracciabile.", img: fillbos2 },
  { title: "Wireframes / Concept", subtitle: "L'esperienza sul campo è stato l'elemento più importante per lo svilupo dei Wireframes", text: "Sono partito dall’analisi dei bisogni operativi di supermercati e magazzini. Ho definito i flussi principali e li ho trasformati in wireframe chiari, dove ogni step è ottimizzato per velocizzare le operazioni quotidiane e ridurre gli errori di catalogazione.", img: fillbos3 },
  { title: "Scelta della piattaforma", subtitle: "Ho scelto Figma per una prototipazione veloce ecollaborazione immediata", text: "Ho scelto Figma per la progettazione di Fillbo perché permette iterazioni rapide, componenti riutilizzabili e la possibilità di testare l’intero flusso direttamente dal browser. Questo mi ha permesso di simulare l’esperienza d’uso reale e ottimizzare ogni dettaglio dell’interfaccia.", img: fillbos4 },
  { title: "Interfaccia", subtitle: "Un’interfaccia semplice per ridurre errori e tempi operativi", text: "Ho progettato Fillbo per essere usabile anche nelle situazioni più frenetiche. L’interfaccia si basa su liste chiare, pulsanti grandi e percorsi brevi. Ogni prodotto viene inserito con pochi tap e assegnato automaticamente alla box corretta in base alla categoria. L'obiettivo è eliminare confusione, accelerare il processo e rendere più intuitiva la donazione degli alimenti.", img: fillbos5 }
];
</script>

