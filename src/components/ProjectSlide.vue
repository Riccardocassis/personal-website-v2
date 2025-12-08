<template>
  <section class="w-full py-16 bg-black overflow-hidden">

    <div
      class="w-full flex flex-col md:flex-row relative items-center"
      :class="reverse ? 'md:flex-row-reverse' : ''"
    >

      <!-- IMAGE FULL BLEED -->
<div
  class="relative w-full 
         h-auto 
         md:w-[50vw] 
         md:h-auto 
         overflow-hidden"
>
  <picture>
    <source
      v-for="s in img.sources"
      :key="s.srcset"
      :srcset="s.srcset"
      :type="s.type"
    />
    <img
  :src="img.img.src"
  alt=""
  class="w-full h-auto max-h-[60vh] object-contain md:object-cover"
  loading="lazy"
  decoding="async"
/>
  </picture>
</div>

      <!-- TEXT BLOCK -->
      <div
        class="w-full md:w-1/2 flex flex-col justify-center gap-4 
               px-8 md:px-16 text-white text-center"
      >
        <h2 class="text-2xl md:text-3xl font-semibold">
          {{ title }}
        </h2>

        <h3 class="text-white/70 text-base md:text-lg">
          {{ subtitle }}
        </h3>

        <p class="text-white/60 leading-relaxed max-w-xl mx-auto">
          {{ text }}
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  text: String,
  img: Object,
  reverse: Boolean
})
</script>

<style scoped>
/* Full-bleed già corretto tramite utility Tailwind */
</style>
