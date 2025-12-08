<template>
  <section
    class="relative w-full h-[50vh] md:h-[85vh] overflow-hidden bg-transparent"
  >
    <!-- safety guard -->
    <div v-if="!data" class="w-full h-full bg-black flex items-center justify-center">
      <p class="text-white/60">Missing hero data</p>
    </div>

    <div v-else>
      <!-- IMAGE -->
      <picture v-if="data.img && data.img.sources">
        <template v-for="s in data.img.sources" :key="s.srcset">
          <source :srcset="s.srcset" :type="s.type" />
        </template>
        <img
          :src="data.img.img.src"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <!-- fallback -->
      <img
        v-else
        :src="data.img?.src || data.img"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- OVERLAY GRADIENT -->
      <div
        class="absolute inset-0 bg-gradient-to-b
               from-black/50 via-black/30 to-transparent"
      ></div>

      <!-- TEXT -->
      <div class="absolute inset-0 flex items-end justify-start p-8">
        <div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white">
            {{ data.title }}
          </h1>
          <p class="text-white/70 mt-2">{{ data.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  data: Object
})
</script>
