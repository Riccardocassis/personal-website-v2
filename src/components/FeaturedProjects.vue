<template>
  <section class="relative w-full bg-[#050608] py-20 md:py-28 overflow-hidden">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_65%)]"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-7xl mx-auto px-6 md:px-16">
      <div class="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <p class="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 mb-3">
            {{ $t('home.featuredEyebrow') }}
          </p>
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">
            {{ $t('home.featuredTitle') }}
          </h2>
        </div>

        <RouterLink
          to="/projects"
          class="hidden md:inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
        >
          {{ $t('home.viewAll') }} →
        </RouterLink>
      </div>

      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <RouterLink
          v-for="p in projects"
          :key="p.to"
          :to="p.to"
          class="featured-card group block"
        >
          <div
            class="featured-card-inner relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            data-cursor="art"
          >
            <img
              :src="p.img"
              alt=""
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          <div class="mt-4 flex items-center justify-between gap-3">
            <h3 class="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
              {{ p.title }}
            </h3>
            <span class="shrink-0 text-[11px] uppercase tracking-wide text-white/40 border border-white/15 rounded-full px-3 py-1">
              {{ p.category }}
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="md:hidden mt-12 text-center">
        <RouterLink to="/projects" class="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200">
          {{ $t('home.viewAll') }} →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import gibsonA from '@/assets/gibson-a.webp?w=800&format=webp&as=src'
import hellerA from '@/assets/hellergarden-a.webp?w=800&format=webp&as=src'
import webableA from '@/assets/webable-a.webp?w=800&format=webp&as=src'

const { t } = useI18n()

const projects = computed(() => [
  {
    to: '/projects/gibson-sg-1961',
    img: gibsonA,
    title: t('projects.project1.hero.title'),
    category: t('projectsPage.filters.webDesign')
  },
  {
    to: '/projects/heller-garden',
    img: hellerA,
    title: t('projects.project7.hero.title'),
    category: t('projectsPage.filters.brandIdentity')
  },
  {
    to: '/projects/webable-accessibility',
    img: webableA,
    title: t('projects.project6.hero.title'),
    category: t('projectsPage.filters.app')
  }
])

const gridRef = ref(null)
let cleanupFns = []

function setupCardTilt() {
  const cards = gridRef.value?.querySelectorAll('.featured-card') || []
  cards.forEach((card) => {
    const inner = card.querySelector('.featured-card-inner')
    if (!inner) return

    function onMove(e) {
      const rect = card.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(inner, {
        rotateX: relY * -8,
        rotateY: relX * 8,
        x: relX * 10,
        y: relY * 10,
        scale: 1.03,
        transformPerspective: 600,
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    function onLeave() {
      gsap.to(inner, { rotateX: 0, rotateY: 0, x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' })
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    cleanupFns.push(() => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    })
  })
}

onMounted(() => {
  const cards = gridRef.value?.querySelectorAll('.featured-card') || []
  if (cards.length) {
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: gridRef.value, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    setupCardTilt()
  }
})

onBeforeUnmount(() => {
  cleanupFns.forEach((fn) => fn())
  cleanupFns = []
})
</script>
