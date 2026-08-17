<template>
  <section
    class="relative w-full aspect-video overflow-hidden bg-transparent"
  >
    <!-- safety guard -->
    <div v-if="!data" class="w-full h-full bg-black flex items-center justify-center">
      <p class="text-white/60">{{ $t('projectShared.heroMissing') }}</p>
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

      <!-- OVERLAY GRADIENT: anchored at the bottom, behind the title, so the
           text stays readable no matter the source image's own colors -->
      <div
        class="absolute inset-0 bg-gradient-to-t
               from-black/90 via-black/45 to-transparent"
      ></div>

      <!-- TEXT -->
      <div class="absolute inset-0 flex items-end justify-start p-8">
        <div>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
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
