<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

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
    prev="/projects/project-8"
    next="/projects/project-1"
  />

</template>


<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectKeyPoints from "@/components/ProjectKeyPoints.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

const { t, tm } = useI18n();

/* HERO IMAGE */
import fumettohero from "@/assets/fumettohero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import ctrlaltcancillustrazione from "@/assets/ctrlaltcancillustrazione.webp?width=800,1280,1920&format=webp&as=picture";
import ctrlaltcancnarrazione from "@/assets/ctrlaltcancnarrazione.webp?width=800,1280,1920&format=webp&as=picture";
import crtlaltcancposter from "@/assets/crtlaltcancposter.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [ctrlaltcancillustrazione, ctrlaltcancnarrazione, crtlaltcancposter];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project9.hero.title'),
  subtitle: t('projects.project9.hero.subtitle'),
  img: fumettohero
}));

const intro = computed(() => tm('projects.project9.intro'));
const keyPoints = computed(() => tm('projects.project9.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project9.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>
