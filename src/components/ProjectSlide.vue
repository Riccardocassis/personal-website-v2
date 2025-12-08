<template>
  <section class="w-full py-12 bg-black overflow-hidden">

    <div
      class="w-full flex flex-col md:flex-row relative"
      :class="reverse ? 'md:flex-row-reverse' : ''"
    >

      <!-- IMAGE FULL BLEED -->
      <div
        class="relative w-full md:w-[50vw] h-[50vh] md:h-auto overflow-hidden"
        :class="reverse ? 'md:right-0' : 'md:left-0'"
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
            class="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <!-- TEXT BLOCK -->
      <div
        class="w-full md:w-1/2 flex flex-col justify-center gap-4 px-6 md:px-12 text-white"
        :class="reverse ? 'md:items-start md:text-left' : 'md:items-end md:text-right'"
      >
        <h2 class="text-2xl md:text-3xl font-semibold">
          {{ title }}
        </h2>

        <h3 class="text-white/70 text-base md:text-lg">
          {{ subtitle }}
        </h3>

        <p class="text-white/60 leading-relaxed">
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
  img: Object,      // vite-imagetools picture object
  reverse: Boolean
})
</script>

<style scoped>
/* Nessuno spacing orizzontale: serve full-bleed reale */
</style>
