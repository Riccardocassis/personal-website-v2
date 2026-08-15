<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/synapsesvideo.mp4"
  :title="$t('projectShared.videoDefaultTitle')"
/>


  <!-- ELEMENTI CHIAVE -->
  <ProjectKeyPoints :items="keyPoints" />

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
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectVideo from "@/components/ProjectVideo.vue";
import ProjectKeyPoints from "@/components/ProjectKeyPoints.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

const { t, tm } = useI18n();

/* HERO IMAGE */
import landingsynapses from "@/assets/landingsynapses.webp?width=800,1280,1920&format=webp&as=picture";

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project3.hero.title'),
  subtitle: t('projects.project3.hero.subtitle'),
  img: landingsynapses
}));

const intro = computed(() => tm('projects.project3.intro'));
const keyPoints = computed(() => tm('projects.project3.keyPoints'));

/* SLIDES DATA — this project has no image slides */
const slides = computed(() => []);
</script>

