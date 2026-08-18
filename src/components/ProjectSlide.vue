<template>
  <section class="reveal bg-black w-full py-12 md:py-20 overflow-hidden">

    <!-- MOBILE: titolo sopra immagine -->
    <div class="md:hidden px-6 mb-4">
      <h3 class="text-xl font-semibold text-white">{{ data.title }}</h3>
      <p class="text-white/60 text-sm mt-1">{{ data.subtitle }}</p>
    </div>

    <!-- WRAPPER -->
    <div
      class="w-full flex flex-col md:flex-row items-center relative"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
    >

      <!-- IMAGE (picture compatibile con ?as=picture) -->
      <div class="w-full md:w-1/2">
        <picture>
          <template v-for="source in data.img.sources" :key="source.srcset">
            <source :srcset="source.srcset" :type="source.type" />
          </template>

          <img
            :src="data.img.img.src"
            :alt="data.imgAlt || ''"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>

      <!-- TEXT -->
     <div class="reveal w-full md:w-1/2 px-6 md:px-12 mt-6 md:mt-0">

        <h3 class="hidden md:block text-3xl font-semibold text-white">
          {{ data.title }}
        </h3>

        <p class="hidden md:block text-white/60 mt-2">
          {{ data.subtitle }}
        </p>

        <p class="text-white/60 mt-3 max-w-md">
          {{ data.text }}
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
defineProps({
  data: { type: Object, required: true },
  index: Number
})
</script>
