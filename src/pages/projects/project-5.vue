<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/opsify.mp4"
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
    prev="/projects/fillbo-app"
    next="/projects/webable-accessibility"
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

import { usePageSeo } from "@/composables/usePageSeo";

const { t, tm, locale } = useI18n();

/* HERO IMAGE */
import coveropsify from "@/assets/coveropsify.webp?width=800,1280,1920&format=webp&as=picture";
import opsifyOg from "@/assets/coveropsify.webp?w=1200&format=webp&as=src";

/* SLIDES IMAGES */
import opsifywirewebp from "@/assets/opsifywirewebp.webp?width=800,1280,1920&format=webp&as=picture";
import oopsyf from "@/assets/oopsyf.webp?width=800,1280,1920&format=webp&as=picture";
import opsyfyproto from "@/assets/opsyfyproto.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [opsifywirewebp, oopsyf, opsyfyproto];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project5.hero.title'),
  subtitle: t('projects.project5.hero.subtitle'),
  img: coveropsify
}));

const intro = computed(() => tm('projects.project5.intro'));
const keyPoints = computed(() => tm('projects.project5.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project5.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${opsifyOg}`
const pageUrl = 'https://riccardocassis.com/projects/opsify-app'

usePageSeo(() => ({
  title: t('projects.project5.seo.title'),
  description: t('projects.project5.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project5.hero.title'),
    headline: t('projects.project5.hero.title'),
    description: t('projects.project5.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: 'UI/UX design, app design, prototyping',
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>

