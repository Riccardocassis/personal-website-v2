<template>
  <div class="relative h-screen w-full flex flex-col justify-center items-center text-center text-white">
    <img
      src="../assets/hero-riccardo.png"
      alt="Riccardo"
      class="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <div class="relative z-10">
  <p class="text-cyan-500 text-lg animate-fade-in-up">Hi I’m</p>
  <h1 class="text-5xl md:text-6xl font-bold mt-2 animate-fade-in-up delay-200">Riccardo Cassis</h1>
  <p class="text-cyan-500 text-xl md:text-2xl mt-2 animate-fade-in-up delay-400">Product and web designer</p>

     
      <socialIcons class="mt-6" />
    </div>
  </div>
</template>

<script setup>

import socialIcons from './socialIcons.vue'

// ...existing code...

</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.delay-200 {
  animation-delay: 0.2s !important;
}
.delay-400 {
  animation-delay: 0.4s !important;
}
</style>