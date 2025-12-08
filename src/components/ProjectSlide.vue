<template>
  <section class="w-full bg-black py-20">
    <div
      :class="[
        'grid grid-cols-1 md:grid-cols-2 gap-10 items-center',
        reverse ? 'md:[direction:rtl]' : 'md:[direction:ltr]'
      ]"
      class="px-6 md:px-20"
    >

      <!-- IMAGE -->
      <div class="overflow-hidden rounded-lg">
        <picture>
          <template v-for="src in img.sources" :key="src.srcset">
            <source :srcset="src.srcset" :type="src.type" />
          </template>
          <img
            :src="img.img.src"
            class="w-full h-full object-cover rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <!-- TEXT -->
      <div class="max-w-xl text-white" :class="reverse ? 'md:text-right' : 'md:text-left'">
        <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
        <p class="text-white/70 leading-relaxed">{{ text }}</p>
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
});
</script>

<style scoped>
/* Fix per inversione direzione senza effetti collaterali */
[direction="rtl"] {
  direction: rtl;
}
[direction="ltr"] {
  direction: ltr;
}
</style>
