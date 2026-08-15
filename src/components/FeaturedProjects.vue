<template>
  <section class="relative w-full bg-black py-20 md:py-28 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <RouterLink
          v-for="p in projects"
          :key="p.to"
          :to="p.to"
          class="group block"
        >
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

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
</script>
