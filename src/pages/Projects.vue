<template>
  <section class="grid-root pt-6 pb-32 px-10 lg:px-20 bg-black text-white">
    <div class="max-w-7xl mx-auto relative z-10">

      <!-- HEADER -->
      <div class="mb-14 md:mb-20">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none">{{ $t('projectsPage.title') }}</h1>
        <p class="text-base md:text-lg text-white/60 mt-6 max-w-xl">
          {{ $t('projectsPage.subtitle') }}
        </p>

        <!-- FILTERS -->
        <div class="flex flex-wrap gap-2 mt-10">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            @click="setFilter(cat)"
            :class="[
              'px-4 py-1.5 rounded-full border text-xs md:text-sm uppercase tracking-wide transition-colors duration-200',
              selectedCategory === cat
                ? 'border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.35)]'
                : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white/80'
            ]"
          >
            {{ $t('projectsPage.filters.' + cat) }}
          </button>
        </div>
      </div>

      <!-- GRID -->
      <div
        ref="gridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16"
      >

        <!-- ======================= -->
        <!-- COLUMN 1 -->
        <!-- ======================= -->
        <div class="parallax-column flex flex-col space-y-12">

          <ProjectCard
            v-show="isVisible('webDesign')"
            to="/projects/project-1"
            :img="gibsonA"
            :imgHover="gibsonB"
            :title="$t('projectsPage.cards.project1')"
            offset="2"
          />

          <ProjectCard
            v-show="isVisible('app')"
            to="/projects/project-4"
            :img="fillboA"
            :imgHover="fillboB"
            :title="$t('projectsPage.cards.project4')"
            offset="3"
          />

          <ProjectCard
            v-show="isVisible('brandIdentity')"
            to="/projects/project-7"
            :img="hellerA"
            :imgHover="hellerB"
            :title="$t('projectsPage.cards.project7')"
            offset="1"
          />

        </div>

        <!-- ======================= -->
        <!-- COLUMN 2 -->
        <!-- ======================= -->
        <div class="parallax-column flex flex-col space-y-12">

          <ProjectCard
            v-show="isVisible('webDesign')"
            to="/projects/project-2"
            :img="sizexlA"
            :imgHover="sizexlB"
            :title="$t('projectsPage.cards.project2')"
            offset="1"
          />

          <ProjectCard
            v-show="isVisible('app')"
            to="/projects/project-5"
            :img="opsifyA"
            :imgHover="opsifyB"
            :title="$t('projectsPage.cards.project5')"
            offset="2"
          />

          <ProjectCard
            v-show="isVisible('brandIdentity')"
            to="/projects/project-8"
            :img="robertoA"
            :imgHover="robertoB"
            :title="$t('projectsPage.cards.project8')"
          />

        </div>

        <!-- ======================= -->
        <!-- COLUMN 3 -->
        <!-- ======================= -->
        <div class="parallax-column flex flex-col space-y-12">

          <ProjectCard
            v-show="isVisible('webDesign')"
            to="/projects/project-3"
            :img="synapsesA"
            :imgHover="synapsesB"
            :title="$t('projectsPage.cards.project3')"
            offset="3"
          />

          <ProjectCard
            v-show="isVisible('app')"
            to="/projects/project-6"
            :img="webableA"
            :imgHover="webableB"
            :title="$t('projectsPage.cards.project6')"
            offset="2"
          />

          <ProjectCard
            v-show="isVisible('editorial')"
            to="/projects/project-9"
            :img="controlAltA"
            :imgHover="controlAltB"
            :title="$t('projectsPage.cards.project9')"
            offset="3"
          />

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useParallaxCards } from '../composables/useParallaxCards'

import ProjectCard from '@/components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const gridRef = ref(null)

/* FILTERS */
const categories = ['all', 'webDesign', 'app', 'brandIdentity', 'editorial']
const selectedCategory = ref('all')

function isVisible(cat) {
  return selectedCategory.value === 'all' || selectedCategory.value === cat
}

function setFilter(cat) {
  selectedCategory.value = cat
  nextTick(() => ScrollTrigger.refresh())
}

/* IMAGES — YOUR RENAMED FILES */
import controlAltA from '../assets/controlaltcanc-a.webp?w=800&format=webp&as=src'
import controlAltB from '../assets/controlaltcanc-b.webp?w=800&format=webp&as=src'

import fillboA from '../assets/fillbo-a.webp?w=800&format=webp&as=src'
import fillboB from '../assets/fillbo-b.webp?w=800&format=webp&as=src'

import gibsonA from '../assets/gibson-a.webp?w=800&format=webp&as=src'
import gibsonB from '../assets/gibson-b.webp?w=800&format=webp&as=src'

import hellerA from '../assets/hellergarden-a.webp?w=800&format=webp&as=src'
import hellerB from '../assets/hellergarden-b.webp?w=800&format=webp&as=src'

import robertoA from '../assets/roberto-a.webp?w=800&format=webp&as=src'
import robertoB from '../assets/roberto-b.webp?w=800&format=webp&as=src'

import sizexlA from '../assets/sizexl-a.webp?w=800&format=webp&as=src'
import sizexlB from '../assets/sizexl-b.webp?w=800&format=webp&as=src'

import synapsesA from '../assets/synapses-a.webp?w=800&format=webp&as=src'
import synapsesB from '../assets/synapses-b.webp?w=800&format=webp&as=src'

import webableA from '../assets/webable-a.webp?w=800&format=webp&as=src'
import webableB from '../assets/webable-b.webp?w=800&format=webp&as=src'

import opsifyA from '../assets/opsify-a.webp?w=800&format=webp&as=src'
import opsifyB from '../assets/opsify-b.webp?w=800&format=webp&as=src'

const { init, kill } = useParallaxCards(gridRef)

onMounted(() => {
  const cards = gridRef.value?.querySelectorAll('.project-card') || []
  if (cards.length) {
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 25, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 }
    )
  }

  init()
})

onBeforeUnmount(() => kill())
</script>

<style scoped>
.project-card {
  width: 100%;
  height: 420px;
}
@media (min-width: 1024px) {
  .project-card {
    height: 520px;
  }
}

.parallax-content {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.12);
  transition: transform 0.45s ease, border-color 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
}

.project-card:hover .parallax-content {
  border-color: rgba(255,255,255,0.22);
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
}

</style>