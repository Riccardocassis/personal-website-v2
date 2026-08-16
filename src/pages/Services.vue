<template>
  <section class="relative max-w-7xl mx-auto px-6 md:px-16 pt-6 pb-24 md:pb-32 text-white bg-black">
    <div class="relative z-10">

      <!-- HEADER -->
      <header class="max-w-2xl mb-14 md:mb-20">
        <p class="text-cyan-400 font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
          {{ $t('services.eyebrow') }}
        </p>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          {{ $t('services.title') }}
        </h1>
        <p class="text-base md:text-lg text-white/70 mb-8">
          {{ $t('services.subtitle') }}
        </p>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          {{ $t('services.ctaButton') }}
        </RouterLink>
      </header>

      <!-- SERVICES GRID -->
      <div class="services-grid grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <article
          v-for="card in cards"
          :key="card.key"
          class="service-card flex flex-col h-full p-6 md:p-8 rounded-2xl"
          tabindex="0"
        >
          <div class="service-icon mb-5" v-html="card.icon"></div>

          <h2 class="text-lg md:text-xl font-semibold text-white mb-3">
            {{ $t(`services.${card.key}.title`) }}
          </h2>
          <p class="text-white/70 leading-relaxed text-[15px] mb-5">
            {{ $t(`services.${card.key}.text`) }}
          </p>

          <ul class="service-list space-y-2 text-white/70 text-sm mb-6">
            <li v-for="item in $tm(`services.${card.key}.list`)" :key="item" class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 shrink-0 text-cyan-400">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <RouterLink
            :to="'/contact'"
            class="service-cta mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {{ $t('services.cardCta') }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 service-cta-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>
        </article>
      </div>

      <!-- FINAL CTA -->
      <section ref="finalCtaRef" class="final-cta mt-20 md:mt-28 rounded-3xl overflow-hidden">
        <div class="py-14 px-6 md:py-20 md:px-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('services.finalCta.title') }}</h2>
          <p class="text-white/90 max-w-xl mx-auto mb-8">{{ $t('services.finalCta.text') }}</p>
          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center whitespace-nowrap bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            {{ $t('services.finalCta.button') }}
          </RouterLink>
        </div>
      </section>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { usePageSeo } from '@/composables/usePageSeo'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()

const finalCtaRef = ref(null)

const ICONS = {
  card1: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="m9 9-2 2 2 2M15 9l2 2-2 2"/></svg>`,
  card2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`,
  card3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 22c5.5 0 10-4 10-9a8 8 0 0 0-8-8 9 9 0 0 0-9 9c0 1 .8 1.5 1.5 1.5H8a2 2 0 0 1 2 2v.5c0 2.2 1 4 2 4Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="6.5" r="1"/><circle cx="16" cy="7.5" r="1"/><circle cx="17.5" cy="12" r="1"/></svg>`,
  card4: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>`
}

const cards = computed(() => ['card1', 'card2', 'card3', 'card4'].map(key => ({ key, icon: ICONS[key] })))

/* SEO / GEO / AIO */
usePageSeo(() => ({
  title: t('services.seo.title'),
  description: t('services.seo.description'),
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: t('services.title'),
    provider: { '@type': 'Person', name: 'Riccardo Cassis', url: 'https://riccardocassis.com/' },
    areaServed: ['Bergamo', 'Brescia', 'Italy'],
    description: t('services.seo.description'),
    url: 'https://riccardocassis.com/services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('services.title'),
      itemListElement: ['card1', 'card2', 'card3', 'card4'].map(key => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(`services.${key}.title`),
          description: t(`services.${key}.text`)
        }
      }))
    }
  }
}))

onMounted(() => {
  if (finalCtaRef.value) {
    gsap.fromTo(
      finalCtaRef.value,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: finalCtaRef.value, start: 'top 88%' }
      }
    )
  }
})
</script>

<style scoped>
/* CSS entrance animation (staggered via nth-child delays) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
.service-card {
  opacity: 1;
  background: rgba(255,255,255,0.03);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 30px rgba(2,6,23,0.35);
  animation: fadeInUp 0.7s cubic-bezier(.22,1,.32,1) both;
  transition: transform 420ms cubic-bezier(.16, .84, .24, 1), box-shadow 420ms cubic-bezier(.16, .84, .24, 1), border-color 220ms ease;
}
.service-card:nth-child(1) { animation-delay: 0.06s; }
.service-card:nth-child(2) { animation-delay: 0.18s; }
.service-card:nth-child(3) { animation-delay: 0.30s; }
.service-card:nth-child(4) { animation-delay: 0.42s; }

.service-card:hover,
.service-card:focus-visible {
  transform: translateY(-0.375rem);
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 16px 40px rgba(2,6,23,0.45), 0 0 24px rgba(34, 211, 238, 0.08);
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.85rem;
  color: rgb(34, 211, 238);
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  transition: background 220ms ease, border-color 220ms ease;
}
.service-card:hover .service-icon {
  background: rgba(34, 211, 238, 0.16);
  border-color: rgba(34, 211, 238, 0.4);
}

.service-cta-arrow {
  transition: transform 220ms ease;
}
.service-cta:hover .service-cta-arrow {
  transform: translateX(3px);
}

.final-cta {
  background: linear-gradient(120deg, rgba(37,99,235,0.9), rgba(8,145,178,0.85));
}

@media (prefers-reduced-motion: reduce) {
  .service-card { animation: none; }
  .service-card:hover,
  .service-card:focus-visible { transform: none; }
}
</style>
