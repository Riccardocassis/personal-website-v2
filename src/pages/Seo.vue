<template>
  <main class="page-bg text-white min-h-screen pt-6 pb-20 px-6 md:px-12">
    <header class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">{{ $t('seo.title') }}</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">{{ $t('seo.subtitle') }}</p>
    </header>

    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">{{ $t('seo.servicesTitle') }}</h2>
        <ul class="list-disc list-inside text-white/80 space-y-2">
          <li v-for="(item, i) in $tm('seo.services')" :key="i">{{ item }}</li>
        </ul>
      </article>

      <article class="bg-[#0b0b0b] p-8 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold text-white mb-3">{{ $t('seo.approachTitle') }}</h2>
        <p class="text-white/80">{{ $t('seo.approachText') }}</p>

        <div class="mt-6">
          <RouterLink to="/contact" class="inline-block bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:translate-y-[-2px]">{{ $t('seo.contactButton') }}</RouterLink>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function updateSeo(){
  document.title = t('seo.docTitle')
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta) }
  meta.setAttribute('content', t('seo.docDescription'))
}

onMounted(()=>{
  updateSeo()
  watch(locale, updateSeo)
})
</script>

<style scoped>
.page-bg { background-color: #0b0b0b }
</style>
