<template>
  <section class="relative max-w-7xl mx-auto px-6 md:px-16 pt-6 pb-24 md:pb-32 text-white bg-black">
    <div class="relative z-10">

      <!-- HEADER -->
      <header class="max-w-2xl mb-14 md:mb-20">
        <p class="text-cyan-400 font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
          {{ $t('hero.eyebrow') }}
        </p>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          {{ $t('about.title') }}
        </h1>
        <p class="text-base md:text-lg text-white/70">
          {{ $t('about.lead') }}
        </p>
      </header>

      <!-- BIO + IDENTITY -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

        <!-- BIO -->
        <div class="reveal">
          <p class="text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line max-w-2xl">{{ $t('about.bio') }}</p>

          <RouterLink
            to="/contact"
            class="mt-8 inline-flex items-center justify-center whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            {{ $t('about.ctaButton') }}
          </RouterLink>
        </div>

        <!-- IDENTITY CARD -->
        <div class="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <div class="text-center">
              <div class="aspect-square rounded-xl overflow-hidden mb-4">
                <img :src="ioArtista" alt="Riccardo Cassis da bambino, lato artista" class="w-full h-full object-cover" />
              </div>
              <p class="glow-hover cursor-pointer text-2xl md:text-3xl font-extrabold text-cyan-400 leading-none">
                <span v-if="showCounter">{{ artistaCount }}%</span>
              </p>
              <p class="mt-1 text-white/60 text-xs md:text-sm uppercase tracking-wide">{{ $t('about.artista') }}</p>
            </div>

            <div class="text-center">
              <div class="aspect-square rounded-xl overflow-hidden mb-4">
                <img :src="ioNerd" alt="Riccardo Cassis da bambino, lato nerd" class="w-full h-full object-cover" />
              </div>
              <p class="glow-hover cursor-pointer text-2xl md:text-3xl font-extrabold text-cyan-400 leading-none">
                <span v-if="showCounter">{{ nerdCount }}%</span>
              </p>
              <p class="mt-1 text-white/60 text-xs md:text-sm uppercase tracking-wide">{{ $t('about.nerd') }}</p>
            </div>
          </div>

          <p class="mt-6 text-white/50 text-xs md:text-sm text-center">{{ $t('about.identityCaption') }}</p>
        </div>
      </div>

      <!-- FINAL CTA -->
      <section class="final-cta mt-20 md:mt-28 rounded-3xl overflow-hidden">
        <div class="py-14 px-6 md:py-20 md:px-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('about.finalCta.title') }}</h2>
          <p class="text-white/90 max-w-xl mx-auto mb-8">{{ $t('about.finalCta.text') }}</p>
          <RouterLink
            to="/projects"
            class="inline-flex items-center justify-center whitespace-nowrap bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            {{ $t('about.finalCta.button') }}
          </RouterLink>
        </div>
      </section>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'
import { useReveal } from '@/composables/useReveal.js'
import ioArtista from '../assets/ioartista.webp?w=600&format=webp&as=src'
import ioNerd from '../assets/ionerd.webp?w=600&format=webp&as=src'

useReveal()

const { t } = useI18n()

const artistaCount = ref(0)
const nerdCount = ref(0)
const showCounter = ref(false)

function animateCount(target, refVar) {
  let start = null
  const duration = 1200
  function step(timestamp) {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    refVar.value = Math.floor(eased * target)
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      refVar.value = target
    }
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  setTimeout(() => {
    showCounter.value = true
    animateCount(50, artistaCount)
    setTimeout(() => animateCount(50, nerdCount), 400)
  }, 400)
})

/* SEO / GEO / AIO */
usePageSeo(() => ({
  title: t('about.seo.title'),
  description: t('about.seo.description'),
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('about.seo.title'),
    description: t('about.seo.description'),
    url: 'https://riccardocassis.com/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Riccardo Cassis',
      jobTitle: 'UI/UX Designer e Web Designer',
      url: 'https://riccardocassis.com/',
      knowsAbout: ['UI/UX Design', 'Web Design', 'SEO', 'Branding', 'Social Media Strategy'],
      sameAs: [
        'https://www.linkedin.com/in/riccardo-cassis/',
        'https://github.com/Riccardocassis',
        'https://www.behance.net/riccardocassis'
      ]
    }
  }
}))
</script>

<style scoped>
.glow-hover {
  transition: text-shadow 0.3s, color 0.3s;
}
.glow-hover:hover {
  color: #22d3ee;
  text-shadow: 0 0 12px #22d3ee, 0 0 32px #22d3ee99;
}

.final-cta {
  background: linear-gradient(120deg, rgba(37,99,235,0.9), rgba(8,145,178,0.85));
}
</style>
