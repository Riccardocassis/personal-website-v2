<template>
  <section class="relative pt-6 pb-20 md:pb-32">
    <div class="max-w-3xl mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-semibold mb-6">{{ $t('cookiePolicy.title') }}</h1>

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
