<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/gb_behance.mp4"
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
    prev="/projects/project-9"
    next="/projects/project-2"
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
import gibsonHero from "@/assets/gibson-cover-pagina-progetti.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import p1slide1 from "@/assets/p1slide1.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide2 from "@/assets/p1slide2.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide3 from "@/assets/p1slide3.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide4 from "@/assets/p1slide4.webp?width=800,1280,1920&format=webp&as=picture";
import p1slide5 from "@/assets/p1slide5.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [p1slide1, p1slide2, p1slide3, p1slide4, p1slide5];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project1.hero.title'),
  subtitle: t('projects.project1.hero.subtitle'),
  img: gibsonHero
}));

const intro = computed(() => tm('projects.project1.intro'));
const keyPoints = computed(() => tm('projects.project1.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project1.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>

