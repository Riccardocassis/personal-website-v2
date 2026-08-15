<template>
  <RouterLink
    :to="to"
    class="project-card group relative overflow-hidden rounded-2xl parallax-card"
    :class="offsetClass"
  >
    <div class="parallax-content">

      <!-- Base image -->
      <img
        :src="img"
        alt=""
        class="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
      />

      <!-- Hover image -->
      <img
        :src="imgHover"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center text-white text-lg font-medium transition-opacity duration-300 group-hover:opacity-100"
      >
        {{ $t('projectCard.view') }}
      </div>

    </div>
  </RouterLink>

  <!-- Title under each card -->
  <h3 class="text-lg font-medium mt-3">{{ title }}</h3>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  to: { type: String, required: true },
  img: { type: String, required: true },
  imgHover: { type: String, required: true },
  title: { type: String, required: true },
  offset: { type: String, default: null } // "1" | "2" | "3"
})

/* Generate offset class dynamically */
const offsetClass = computed(() =>
  props.offset ? `offset-${props.offset}` : ""
)
</script>

<style scoped>
.project-card {
  width: 100%;
  height: 420px;
}
@media (min-width: 1024px) {
  .project-card {
    height: 520px;
  }
}

/* Remove vertical offsets on desktop */
@media (min-width: 768px) {
  .parallax-card.offset-1 .parallax-content,
  .parallax-card.offset-2 .parallax-content,
  .parallax-card.offset-3 .parallax-content {
    transform: none !important;
  }
}

.parallax-content {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.12);
  transition: transform 0.45s ease, border-color 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
}

.project-card:hover .parallax-content {
  border-color: rgba(255,255,255,0.22);
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
}
</style>