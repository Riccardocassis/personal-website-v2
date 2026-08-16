<template>
  <main class="page-bg text-white min-h-screen">
    <div class="max-w-7xl mx-auto px-6 md:px-16">
      <!-- Hero -->
      <header class="pt-6 pb-24 max-w-4xl" role="region" aria-label="Il mio processo di lavoro - Hero">
        <p class="text-[#00BFFF] font-medium mb-4">{{ $t('process.eyebrow') }}</p>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">{{ $t('process.title') }}</h1>
        <p class="text-gray-300 max-w-2xl text-lg md:text-xl mb-6">{{ $t('process.subtitle') }}</p>
        <p class="text-gray-400 max-w-2xl mb-8">{{ $t('process.subtitle2') }}</p>

        <div>
          <RouterLink to="/contact" class="inline-block bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform duration-200 hover:translate-y-[-3px]">{{ $t('process.ctaButton') }}</RouterLink>
        </div>
      </header>

      <!-- Timeline: Come lavoro -->
      <section class="py-12 md:py-24" aria-labelledby="timeline-title">
        <h2 id="timeline-title" class="text-2xl md:text-3xl font-bold text-white mb-6">{{ $t('process.timelineTitle') }}</h2>

        <div class="mt-8 space-y-10">
          <article
            v-for="(step, i) in $tm('process.steps')"
            :key="i"
            class="md:flex md:items-start md:gap-8 bg-[#111] rounded-2xl p-8 shadow-md"
            :data-step="String(i + 1).padStart(2, '0')"
          >
            <div class="md:w-1/6 flex items-start">
              <div class="text-[#00BFFF] font-bold text-xl mr-4">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="text-2xl">{{ ['🎯','🧩','🎨','💻','📈'][i] }}</div>
            </div>
            <div class="md:w-5/6">
              <h3 class="text-xl font-semibold text-white">{{ step.title }}</h3>
              <p class="text-gray-300 mt-2" v-html="step.text"></p>
            </div>
          </article>
        </div>
      </section>

      <!-- I miei valori -->
      <section class="py-12 md:py-20" aria-labelledby="values-title">
        <h2 id="values-title" class="text-2xl md:text-3xl font-bold text-white mb-8">{{ $t('process.valuesTitle') }}</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            v-for="(value, i) in $tm('process.values')"
            :key="i"
            class="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-500 hover:scale-105 hover:ring-1 hover:ring-[#00BFFF]/30"
          >
            <div class="text-2xl mb-3">{{ ['🎯','🤝','📈','🔍'][i] }}</div>
            <h3 class="font-semibold text-white">{{ value.title }}</h3>
            <p class="text-gray-300 mt-2 text-sm">{{ value.text }}</p>
          </article>
        </div>
      </section>

      <!-- CTA finale -->
      <section class="py-20 mt-12">
        <div class="rounded-3xl overflow-hidden" style="background: linear-gradient(90deg,#00BFFF,#0099CC);">
          <div class="py-20 px-6 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">{{ $t('process.ctaTitle') }}</h2>
            <p class="text-white/90 mb-8">{{ $t('process.ctaText') }}</p>
            <RouterLink to="/contact" class="inline-block bg-white text-black rounded-full px-8 py-4 font-semibold transition-colors hover:bg-gray-100">{{ $t('process.ctaButton2') }}</RouterLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const { t, locale } = useI18n()

function updateSeo(){
  document.title = t('process.seoTitle')
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name','description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', t('process.seoDescription'))
}

onMounted(()=>{
  updateSeo()
  watch(locale, updateSeo)

  // small entrance animation using GSAP (fade-up) for major sections
  try{
    gsap.from('header', { y: 26, opacity: 0, duration: 0.7, ease: 'power3.out' })
    gsap.utils.toArray('section').forEach((sec, i)=>{
      gsap.from(sec, { y: 18, opacity: 0, duration: 0.7, delay: 0.12 * i, ease: 'power3.out', scrollTrigger: { trigger: sec, start: 'top 85%' } })
    })
  }catch(e){
    // if ScrollTrigger not registered or available, ignore
  }
})
</script>

<style scoped>
.page-bg { background-color: #0b0b0b; }
/* soft reveal helper */
.reveal { transition: all 600ms cubic-bezier(.22,.77,.12,1); }

/* ensure text rhythm */
h1,h2,h3 { color: #fff }

/* small responsive tweaks */
@media (min-width: 768px){
  header { padding-top: 1.5rem; padding-bottom: 6rem; }
}
</style>
