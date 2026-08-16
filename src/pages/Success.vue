<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-white bg-black px-4 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">{{ $t('success.title') }}</h1>

    <p class="text-lg md:text-xl opacity-80">
      {{ $t('success.subtitle') }}
    </p>

    <a
      href="/"
      class="mt-8 text-blue-400 underline hover:text-blue-300 transition"
    >
      {{ $t('success.backHome') }}
    </a>
  </div>
</template>

<script setup>
// Vuoto, ma NECESSARIO per far sì che Vite includa la pagina nel bundle
</script>