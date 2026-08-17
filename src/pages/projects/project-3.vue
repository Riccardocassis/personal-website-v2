<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- OVERVIEW -->
  <ProjectOverview
    :overview-text="intro.text"
    :meta="meta"
    :key-points="keyPointTitles"
  />

  <!-- VIDEO -->
  <ProjectVideo
  src="/videos/synapsesvideo.mp4"
  :title="$t('projectShared.videoDefaultTitle')"
/>


  <!-- SLIDES -->
  <section id="project-details" class="bg-black">
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
    prev="/projects/sizexl-website"
    next="/projects/fillbo-app"
  />

</template>


<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectOverview from "@/components/ProjectOverview.vue";
import ProjectVideo from "@/components/ProjectVideo.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

import { usePageSeo } from "@/composables/usePageSeo";

const { t, tm, locale } = useI18n();

/* HERO IMAGE */
import landingsynapses from "@/assets/landingsynapses.webp?width=800,1280,1920&format=webp&as=picture";
import synapsesOg from "@/assets/landingsynapses.webp?w=1200&format=webp&as=src";

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project3.hero.title'),
  subtitle: t('projects.project3.hero.subtitle'),
  img: landingsynapses
}));

const intro = computed(() => tm('projects.project3.intro'));
const keyPoints = computed(() => tm('projects.project3.keyPoints'));
const keyPointTitles = computed(() => keyPoints.value.map(k => k.title));
const meta = computed(() => tm('projects.project3.meta'));

/* SLIDES DATA — this project has no image slides */
const slides = computed(() => []);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${synapsesOg}`
const pageUrl = 'https://riccardocassis.com/projects/synapses-laba'

usePageSeo(() => ({
  title: t('projects.project3.seo.title'),
  description: t('projects.project3.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project3.hero.title'),
    headline: t('projects.project3.hero.title'),
    description: t('projects.project3.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: [...meta.value.category, ...meta.value.stack].join(', '),
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/', jobTitle: meta.value.role.join(', ') },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>

