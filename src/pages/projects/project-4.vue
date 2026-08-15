<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/fillbovideo.mp4"
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
    prev="/projects/project-3"
    next="/projects/project-5"
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
import fillbohero from "@/assets/fillbohero.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import fillbos1 from "@/assets/fillbos1.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos2 from "@/assets/fillbos2.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos3 from "@/assets/fillbos3.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos4 from "@/assets/fillbos4.webp?width=800,1280,1920&format=webp&as=picture";
import fillbos5 from "@/assets/fillbos5.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [fillbos1, fillbos2, fillbos3, fillbos4, fillbos5];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project4.hero.title'),
  subtitle: t('projects.project4.hero.subtitle'),
  img: fillbohero
}));

const intro = computed(() => tm('projects.project4.intro'));
const keyPoints = computed(() => tm('projects.project4.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project4.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>

