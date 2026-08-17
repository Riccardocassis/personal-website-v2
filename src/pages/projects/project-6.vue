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
  src="/videos/webable registrazione schermo.mp4"
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
    prev="/projects/opsify-app"
    next="/projects/heller-garden"
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
import webableimgcop from "@/assets/webableimgcop.webp?width=800,1280,1920&format=webp&as=picture";
import webableOg from "@/assets/webableimgcop.webp?w=1200&format=webp&as=src";

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
const keyPointTitles = computed(() => keyPoints.value.map(k => k.title));
const meta = computed(() => tm('projects.project6.meta'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project6.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${webableOg}`
const pageUrl = 'https://riccardocassis.com/projects/webable-accessibility'

usePageSeo(() => ({
  title: t('projects.project6.seo.title'),
  description: t('projects.project6.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project6.hero.title'),
    headline: t('projects.project6.hero.title'),
    description: t('projects.project6.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: [...meta.value.category, ...meta.value.stack].join(', '),
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/', jobTitle: meta.value.role.join(', ') },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>

