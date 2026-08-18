<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- OVERVIEW -->
  <ProjectOverview
    :overview-text="intro.text"
    :meta="meta"
    :key-points="keyPointTitles"
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
    prev="/projects/roberto-rebranding"
    next="/projects/medeghini"
  />

</template>


<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import ProjectHero from "@/components/ProjectHero.vue";
import ProjectOverview from "@/components/ProjectOverview.vue";
import ProjectSlide from "@/components/ProjectSlide.vue";
import ProjectCTA from "@/components/ProjectCTA.vue";
import ProjectPrevNext from "@/components/ProjectPrevNext.vue";

import { useReveal } from "@/composables/useReveal.js"; // ⭐ AGGIUNTA
useReveal(); // ⭐ ATTIVA ANIMAZIONI SU QUESTA PAGINA

import { usePageSeo } from "@/composables/usePageSeo";

const { t, tm, locale } = useI18n();

/* HERO IMAGE */
import fumettohero from "@/assets/fumettohero.webp?width=800,1280,1920&format=webp&as=picture";
import controlAltCancOg from "@/assets/fumettohero.webp?w=1200&format=webp&as=src";

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
const keyPointTitles = computed(() => keyPoints.value.map(k => k.title));
const meta = computed(() => tm('projects.project9.meta'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project9.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${controlAltCancOg}`
const pageUrl = 'https://riccardocassis.com/projects/control-alt-canc-fanzine'

usePageSeo(() => ({
  title: t('projects.project9.seo.title'),
  description: t('projects.project9.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project9.hero.title'),
    headline: t('projects.project9.hero.title'),
    description: t('projects.project9.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: [...meta.value.category, ...meta.value.stack].join(', '),
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/', jobTitle: meta.value.role.join(', ') },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>
