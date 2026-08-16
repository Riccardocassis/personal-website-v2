<template>
  <section class="grid-root pt-6 pb-32 bg-black text-white">
    <div class="max-w-7xl mx-auto relative z-10 px-6 md:px-16">

      <!-- HEADER -->
      <div class="mb-14 md:mb-20">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{{ $t('projectsPage.title') }}</h1>
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
        <div
          v-for="(col, colIdx) in columns"
          :key="colIdx"
          class="parallax-column flex flex-col space-y-12"
        >
          <ProjectCard
            v-for="p in col"
            :key="p.key"
            :to="p.to"
            :img="p.img"
            :imgHover="p.imgHover"
            :title="$t('projectsPage.cards.' + p.key)"
            :offset="p.offset"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useParallaxCards } from '../composables/useParallaxCards'

import ProjectCard from '@/components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const gridRef = ref(null)

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

/* PROJECT DATA — single source of truth, order = default "Tutti" layout */
const allProjects = [
  { key: 'project1', to: '/projects/gibson-sg-1961',           img: gibsonA,      imgHover: gibsonB,      category: 'webDesign',     offset: '2' },
  { key: 'project2', to: '/projects/sizexl-website',           img: sizexlA,      imgHover: sizexlB,      category: 'webDesign',     offset: '1' },
  { key: 'project3', to: '/projects/synapses-laba',            img: synapsesA,    imgHover: synapsesB,    category: 'webDesign',     offset: '3' },
  { key: 'project4', to: '/projects/fillbo-app',                img: fillboA,      imgHover: fillboB,      category: 'app',           offset: '3' },
  { key: 'project5', to: '/projects/opsify-app',                img: opsifyA,      imgHover: opsifyB,      category: 'app',           offset: '2' },
  { key: 'project6', to: '/projects/webable-accessibility',    img: webableA,     imgHover: webableB,     category: 'app',           offset: '2' },
  { key: 'project7', to: '/projects/heller-garden',             img: hellerA,      imgHover: hellerB,      category: 'brandIdentity', offset: '1' },
  { key: 'project8', to: '/projects/roberto-rebranding',        img: robertoA,     imgHover: robertoB,     category: 'brandIdentity', offset: null },
  { key: 'project9', to: '/projects/control-alt-canc-fanzine',  img: controlAltA,  imgHover: controlAltB,  category: 'editorial',     offset: '3' }
]

/* FILTERS */
const categories = ['all', 'webDesign', 'app', 'brandIdentity', 'editorial']
const selectedCategory = ref('all')

const filteredProjects = computed(() =>
  selectedCategory.value === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory.value)
)

/* Re-distribute the filtered projects into 3 columns, always starting from
   the first slot, so the grid reflows instead of leaving empty columns. */
const columns = computed(() => {
  const cols = [[], [], []]
  filteredProjects.value.forEach((p, i) => cols[i % 3].push(p))
  return cols
})

const { init, kill } = useParallaxCards(gridRef)

function animateIn() {
  const cards = gridRef.value?.querySelectorAll('.project-card') || []
  if (cards.length) {
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 25, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06 }
    )
  }
}

function setFilter(cat) {
  selectedCategory.value = cat
  nextTick(() => {
    kill()
    init()
    animateIn()
  })
}

onMounted(() => {
  animateIn()
  init()
})

onBeforeUnmount(() => kill())
</script>

<style scoped>
.project-card {
  display: block;
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
