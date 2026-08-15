<template>
  <section class="bg-black py-12 px-6 text-center">
    <div class="max-w-2xl mx-auto">

      <!-- TEXT -->
      <p class="reveal text-white/60 mb-6">
        {{ $t('projectShared.ctaText') }}
      </p>

      <!-- CTA BUTTON -->
      <a
        href="/contact"
        class="reveal inline-block text-blue-400 font-semibold underline"
        style="transition-delay: 120ms"
      >
        {{ $t('projectShared.ctaButton') }}
      </a>

    </div>
  </section>
</template>

<script setup>
// Nessuna logica necessaria
</script>
