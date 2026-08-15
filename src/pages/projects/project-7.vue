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
    prev="/projects/project-6"
    next="/projects/project-8"
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
import hellerhero from "@/assets/hellerhero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import hgintro from "@/assets/hgintro.webp?width=800,1280,1920&format=webp&as=picture";
import hglogo from "@/assets/hglogo.webp?width=800,1280,1920&format=webp&as=picture";
import hgfont from "@/assets/hgfont.webp?width=800,1280,1920&format=webp&as=picture";
import hellers2 from "@/assets/hellers2.webp?width=800,1280,1920&format=webp&as=picture";
import hgptg from "@/assets/hgptg.webp?width=800,1280,1920&format=webp&as=picture";
import hgmp from "@/assets/hgmp.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [hgintro, hglogo, hgfont, hellers2, hgptg, hgmp];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project7.hero.title'),
  subtitle: t('projects.project7.hero.subtitle'),
  img: hellerhero
}));

const intro = computed(() => tm('projects.project7.intro'));
const keyPoints = computed(() => tm('projects.project7.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project7.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>
