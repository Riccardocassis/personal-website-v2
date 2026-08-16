<template>
  <section class="relative pt-6 pb-20 md:pb-32 max-w-7xl mx-auto px-6 md:px-16">
    <div class="max-w-3xl">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">{{ $t('privacy.title') }}</h1>

      <p class="text-base text-neutral-300 mb-6">{{ $t('privacy.intro') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.titolare.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.titolare.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.datiRaccolti.heading') }}</h2>
      <ul class="list-disc ml-5 text-neutral-300 mb-4">
        <li v-for="(item, i) in $tm('privacy.datiRaccolti.items')" :key="i">{{ item }}</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.finalita.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.finalita.intro') }}</p>
      <ul class="list-disc ml-5 text-neutral-300 mb-4">
        <li v-for="(item, i) in $tm('privacy.finalita.items')" :key="i">{{ item }}</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.baseGiuridica.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.baseGiuridica.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.conservazione.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.conservazione.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.diritti.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.diritti.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.cookie.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.cookie.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.modifiche.heading') }}</h2>
      <p class="text-base text-neutral-300 mb-4">{{ $t('privacy.modifiche.text') }}</p>

      <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.contatti.heading') }}</h2>
      <p class="text-base text-neutral-300">{{ $t('privacy.contatti.text') }} <br /><a href="mailto:Riccardocassis.rc@gmail.com" class="text-indigo-400">Riccardocassis.rc@gmail.com</a></p>
    </div>
  </section>
</template>

<script setup>
// Pagina statica: nessuna logica JS necessaria per ora
</script>

<style scoped>
/* Piccole regolazioni per la leggibilità all'interno del tema corrente */
.text-neutral-300 { color: rgba(226,231,235,0.95); }
</style>
