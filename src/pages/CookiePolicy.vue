<template>
  <section class="relative pt-6 pb-20 md:pb-32 max-w-7xl mx-auto px-6 md:px-16">
    <div class="max-w-3xl">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">{{ $t('cookiePolicy.title') }}</h1>

      <p class="text-base text-neutral-300 mb-4">{{ $t('cookiePolicy.intro') }}</p>

      <p class="text-base text-neutral-300 mb-4 font-semibold">{{ $t('cookiePolicy.notUsedLabel') }}</p>
      <ul class="list-disc ml-6 text-neutral-300 mb-4">
        <li v-for="(item, i) in $tm('cookiePolicy.items')" :key="i">{{ item }}</li>
      </ul>

      <p class="text-base text-neutral-300 mb-4">{{ $t('cookiePolicy.noConsent') }}</p>

      <p class="text-base text-neutral-300">{{ $t('cookiePolicy.moreInfo') }}<a href="/privacy" class="text-indigo-400 underline">{{ $t('cookiePolicy.moreInfoLink') }}</a>.</p>
    </div>
  </section>
</template>

<script setup>
// Static page — no JS required
</script>

<style scoped>
.text-neutral-300 { color: rgba(226,231,235,0.95); }
</style>
