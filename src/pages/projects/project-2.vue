<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- INTRO -->
  <ProjectIntro :data="intro" />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/videosizexl.mp4"
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
    prev="/projects/gibson-sg-1961"
    next="/projects/synapses-laba"
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
import coversizexl from "@/assets/coversizexl.webp?width=800,1280,1920&format=webp&as=picture";
import sizexlOg from "@/assets/coversizexl.webp?w=1200&format=webp&as=src";

/* SLIDES IMAGES */
import img2sizexl from "@/assets/img2sizexl.webp?width=800,1280,1920&format=webp&as=picture";
import colorpalettesizexl from "@/assets/colorpalettesizexl.webp?width=800,1280,1920&format=webp&as=picture";
import fontsizexl from "@/assets/fontsizexl.webp?width=800,1280,1920&format=webp&as=picture";
import cardsize from "@/assets/cardsize.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [img2sizexl, colorpalettesizexl, fontsizexl, cardsize];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project2.hero.title'),
  subtitle: t('projects.project2.hero.subtitle'),
  img: coversizexl
}));

const intro = computed(() => tm('projects.project2.intro'));
const keyPoints = computed(() => tm('projects.project2.keyPoints'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project2.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${sizexlOg}`
const pageUrl = 'https://riccardocassis.com/projects/sizexl-website'

usePageSeo(() => ({
  title: t('projects.project2.seo.title'),
  description: t('projects.project2.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project2.hero.title'),
    headline: t('projects.project2.hero.title'),
    description: t('projects.project2.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: 'web design, restyling, SEO',
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>

