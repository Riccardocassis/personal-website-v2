<template>
  <section class="py-20 bg-black w-full">
    <div class="w-full">

      <!-- TITLE -->
      <h2 class="px-6 md:px-20 text-2xl md:text-3xl font-semibold text-white mb-10">
        {{ title }}
      </h2>

      <!-- GRID -->
      <div
        :class="[
          'grid grid-cols-1 gap-12 px-6 md:px-20 items-center',
          reverse ? 'md:grid-cols-[40%_60%]' : 'md:grid-cols-[60%_40%]'
        ]"
      >

        <!-- IMAGE -->
        <div :class="reverse ? 'md:order-1 order-1' : 'md:order-1 order-1'">
          <picture>
            <template v-for="source in img.sources" :key="source.srcset">
              <source :srcset="source.srcset" :type="source.type" />
            </template>

            <img
              :src="img.img.src"
              class="reveal-img w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <!-- TEXT -->
        <div :class="reverse ? 'md:order-2 order-2' : 'md:order-2 order-2'">
          <div class="reveal-text text-white max-w-xl md:text-left text-center">
            <h3 class="text-xl font-semibold mb-3">{{ subtitle }}</h3>

            <p class="text-white/70 leading-relaxed">
              {{ text }}
            </p>
          </div>
        </div>

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
