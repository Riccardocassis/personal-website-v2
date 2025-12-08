<template>
  <section class="bg-black py-16 px-6">
    <div class="max-w-3xl mx-auto">
     <h2 class="reveal text-2xl md:text-4xl font-semibold text-white mb-2 md:mb-6 text-center">
  {{ data.title }}
</h2>

<p class="reveal text-white/60 text-base md:text-lg leading-snug md:leading-relaxed">
  {{ data.text }}
</p>

    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: "",
      text: ""
    })
  }
});
</script>
