<template>
  <section class="bg-black py-10 px-6">
    <div class="max-w-xl mx-auto flex items-center justify-between">

      <!-- PREV -->
      <router-link
        v-if="prev"
        :to="`/projects/${prev}`"
        class="flex items-center gap-3 text-white/70 hover:text-white"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full"
        >
          ←
        </span>
        <span class="hidden md:block text-sm">Progetto precedente</span>
      </router-link>

      <!-- NEXT -->
      <router-link
        v-if="next"
        :to="`/projects/${next}`"
        class="flex items-center gap-3 flex-row-reverse text-white/70 hover:text-white"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full"
        >
          →
        </span>
        <span class="hidden md:block text-sm">Progetto successivo</span>
      </router-link>

    </div>
  </section>
</template>

<script setup>
defineProps({
  prev: String,
  next: String
})
</script>
