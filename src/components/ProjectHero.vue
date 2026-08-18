<template>
  <section class="relative w-full bg-black">
    <!-- safety guard -->
    <div v-if="!data" class="w-full aspect-video bg-black flex items-center justify-center">
      <p class="text-white/60">{{ $t('projectShared.heroMissing') }}</p>
    </div>

    <div v-else>
      <!-- IMAGE -->
      <div class="relative w-full aspect-video overflow-hidden">
        <picture v-if="data.img && data.img.sources">
          <template v-for="s in data.img.sources" :key="s.srcset">
            <source :srcset="s.srcset" :type="s.type" />
          </template>
          <img
            :src="data.img.img.src"
            :alt="data.imgAlt || ''"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        <!-- fallback -->
        <img
          v-else
          :src="data.img?.src || data.img"
          :alt="data.imgAlt || ''"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- OVERLAY GRADIENT (desktop only): anchored at the bottom, behind
             the title, so the text stays readable no matter the source
             image's own colors -->
        <div
          class="hidden md:block absolute inset-0 bg-gradient-to-t
                 from-black/90 via-black/45 to-transparent"
        ></div>

        <!-- TEXT (desktop only, overlaid on the image) -->
        <div class="hidden md:flex absolute inset-0 items-end justify-start p-8">
          <div>
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              {{ data.title }}
            </h1>
            <p class="text-white/70 mt-2">{{ data.subtitle }}</p>
          </div>
        </div>
      </div>

      <!-- TEXT (mobile only): the source images already carry their own
           title/logo near the bottom of the frame, so overlaying our own
           title there caused it to collide with it once the image is shown
           uncropped. On mobile the title sits below the image instead. -->
      <div class="md:hidden px-6 py-6">
        <h1 class="text-3xl font-extrabold tracking-tight leading-tight text-white">
          {{ data.title }}
        </h1>
        <p class="text-white/70 mt-2">{{ data.subtitle }}</p>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  data: Object
})
</script>
