<template>
  <section class="bg-black py-10 md:py-14 px-6">
    <div class="max-w-2xl mx-auto flex items-center justify-between gap-6">

      <!-- PREV -->
      <router-link
        :to="prev"
        class="reveal flex items-center gap-4 group"
        style="transition-delay: 80ms"
      >
        <span
          class="inline-flex items-center justify-center w-12 h-12
                 bg-white/10 rounded-full transition-all duration-300
                 group-hover:bg-white/20"
        >
          <span class="text-white text-lg">←</span>
        </span>

        <span
          class="hidden md:block text-white/70 text-sm transition-opacity duration-300
                 group-hover:text-white/90"
        >
          {{ $t('projectShared.prevProject') }}
        </span>
      </router-link>

      <!-- NEXT -->
      <router-link
        :to="next"
        class="reveal flex items-center gap-4 flex-row-reverse group"
        style="transition-delay: 160ms"
      >
        <span
          class="inline-flex items-center justify-center w-12 h-12
                 bg-white/10 rounded-full transition-all duration-300
                 group-hover:bg-white/20"
        >
          <span class="text-white text-lg">→</span>
        </span>

        <span
          class="hidden md:block text-white/70 text-sm transition-opacity duration-300
                 group-hover:text-white/90"
        >
          {{ $t('projectShared.nextProject') }}
        </span>
      </router-link>

    </div>
  </section>
</template>

<script setup>
defineProps({
  prev: { type: String, required: true },
  next: { type: String, required: true }
})
</script>
