<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/webable registrazione schermo.mp4"
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
    prev="/projects/project-5"
    next="/projects/project-7"
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
import webableimgcop from "@/assets/webableimgcop.webp?width=800,1280,1920&format=webp&as=picture";

/* SLIDES IMAGES */
import webintro from "@/assets/webintro.webp?width=800,1280,1920&format=webp&as=picture";
import webablelow from "@/assets/webablelow.webp?width=800,1280,1920&format=webp&as=picture";
import webads from "@/assets/webads.webp?width=800,1280,1920&format=webp&as=picture";
import webapercorsi from "@/assets/webapercorsi.webp?width=800,1280,1920&format=webp&as=picture";
import webainterface from "@/assets/webainterface.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [webintro, webablelow, webads, webapercorsi, webainterface];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project6.hero.title'),
  subtitle: t('projects.project6.hero.subtitle'),
  img: webableimgcop
}));

const intro = computed(() => tm('projects.project6.intro'));
const keyPoints = computed(() => tm('projects.project6.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project6.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);
</script>

