<template>
  <section class="bg-black py-16 px-6">
    <div class="max-w-6xl mx-auto text-center">

      <!-- TITLE -->
      <h2 class="reveal text-2xl md:text-3xl font-semibold text-white mb-10">
        Elementi chiave
      </h2>

      <!-- GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center"
      >
        <div
          v-for="(item, i) in items"
          :key="i"
          class="reveal px-6"
          :style="{ transitionDelay: `${i * 120}ms` }"
        >
          <h3 class="text-xl font-semibold text-white">
            {{ item.title }}
          </h3>

          <p class="text-white/60 mt-3">
            {{ item.text }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
