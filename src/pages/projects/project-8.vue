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
    prev="/projects/project-7"
    next="/projects/project-9"
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
import coverbrandbibler1 from "@/assets/coverbrandbibler1.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import rbpayoff from "@/assets/rbpayoff.webp?width=800,1280,1920&format=webp&as=picture";
import rbcolorietipografia from "@/assets/rbcolorietipografia.webp?width=800,1280,1920&format=webp&as=picture";
import rbft from "@/assets/rbft.webp?width=800,1280,1920&format=webp&as=picture";
import rbpackaging from "@/assets/rbpackaging.webp?width=800,1280,1920&format=webp&as=picture";
import rbcmp from "@/assets/rbcmp.webp?width=800,1280,1920&format=webp&as=picture";
import rbsc from "@/assets/rbsc.webp?width=800,1280,1920&format=webp&as=picture";
import rbsw from "@/assets/rbsw.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [rbpayoff, rbcolorietipografia, rbft, rbpackaging, rbcmp, rbsc, rbsw];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project8.hero.title'),
  subtitle: t('projects.project8.hero.subtitle'),
  img: coverbrandbibler1
}));

const intro = computed(() => tm('projects.project8.intro'));
const keyPoints = computed(() => tm('projects.project8.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project8.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>
