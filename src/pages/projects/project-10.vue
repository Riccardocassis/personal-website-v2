<template>

  <!-- HERO -->
  <ProjectHero :data="hero" />

  <!-- OVERVIEW -->
  <ProjectOverview
    :overview-text="intro.text"
    :meta="meta"
    :key-points="keyPointTitles"
  />

  <!-- INTRODUZIONE E CREDITI (specifico di questo progetto, non un componente condiviso) -->
  <section class="bg-black px-6 -mt-6 md:-mt-8 pb-12 md:pb-16">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ credits.title }}</h2>
        <p class="text-white/70 leading-relaxed mb-4">{{ credits.text }}</p>
        <p v-if="collaboration" class="text-white/70 leading-relaxed">
          {{ credits.creditsBefore }}
          <a
            :href="collaboration.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200"
          >{{ collaboration.name }}</a>{{ credits.creditsAfter }}
        </p>
      </div>
    </div>
  </section>

  <!-- VIDEO: nessuna sorgente per ora — mostra il fallback "Nessun video
       disponibile" già previsto dal componente. Struttura pronta a ricevere
       il video reale: basterà passare la prop :src quando disponibile. -->
  <ProjectVideo
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
    prev="/projects/control-alt-canc-fanzine"
    next="/projects/gibson-sg-1961"
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

import { useReveal } from "@/composables/useReveal.js";
useReveal();

import { usePageSeo } from "@/composables/usePageSeo";

const { t, tm, locale } = useI18n();

/* COVER — usata sia per la hero che per la card esterna in /projects.
   PLACEHOLDER: sostituire con l'asset reale mantenendo lo stesso nome file. */
import medeghiniCover from "@/assets/medeghini-cover.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniCoverOg from "@/assets/medeghini-cover.webp?w=1200&format=webp&as=src";

/* SLIDES IMAGES — PLACEHOLDER: sostituire con gli asset reali mantenendo gli stessi nomi file. */
import medeghiniDesignSystem from "@/assets/medeghini-design-system.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniSlide01 from "@/assets/medeghini-slide-01-identita.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniSlide02 from "@/assets/medeghini-slide-02-catalogo-prodotti.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniSlide03 from "@/assets/medeghini-slide-03-visual-prodotti.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniSlide04 from "@/assets/medeghini-slide-04-metodo.webp?width=800,1280,1920&format=webp&as=picture";
import medeghiniSlide05 from "@/assets/medeghini-slide-05-contatti.webp?width=800,1280,1920&format=webp&as=picture";

const slideImages = [
  medeghiniDesignSystem,
  medeghiniSlide01,
  medeghiniSlide02,
  medeghiniSlide03,
  medeghiniSlide04,
  medeghiniSlide05
];

/* HERO DATA */
const hero = computed(() => ({
  title: t('projects.project10.hero.title'),
  subtitle: t('projects.project10.hero.subtitle'),
  imgAlt: t('projects.project10.hero.imgAlt'),
  img: medeghiniCover
}));

const intro = computed(() => tm('projects.project10.intro'));
const credits = computed(() => tm('projects.project10.credits'));
const keyPoints = computed(() => tm('projects.project10.keyPoints'));
const keyPointTitles = computed(() => keyPoints.value.map(k => k.title));
const meta = computed(() => tm('projects.project10.meta'));
const collaboration = computed(() => tm('projects.project10.collaboration'));

/* SLIDES DATA */
const slides = computed(() =>
  tm('projects.project10.slides').map((s, i) => ({ ...s, img: slideImages[i] }))
);

/* SEO / GEO / AIO */
const ogImage = `https://riccardocassis.com${medeghiniCoverOg}`
const pageUrl = 'https://riccardocassis.com/projects/medeghini'

usePageSeo(() => ({
  title: t('projects.project10.seo.title'),
  description: t('projects.project10.seo.description'),
  image: ogImage,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t('projects.project10.hero.title'),
    headline: t('projects.project10.hero.title'),
    description: t('projects.project10.seo.description'),
    image: ogImage,
    url: pageUrl,
    inLanguage: locale.value,
    keywords: [...meta.value.category, ...meta.value.stack].join(', '),
    creator: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/', jobTitle: meta.value.role.join(', ') },
    author: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' }
  }
}))
</script>
