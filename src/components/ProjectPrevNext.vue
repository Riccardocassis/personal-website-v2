<template>
  <section class="bg-black py-14 md:py-20 px-6">
    <div class="max-w-sm mx-auto text-center">

      <!-- NEXT PROJECT — anteprima principale, stesso rapporto delle card
           di /projects così l'immagine non viene mai tagliata male -->
      <router-link
        v-if="nextProject"
        :to="next"
        class="reveal group block"
      >
        <p class="text-white/50 text-xs uppercase tracking-wide mb-4">{{ $t('projectShared.nextProject') }}</p>
        <div class="relative aspect-[746/1040] max-w-[240px] mx-auto rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/25 transition-colors duration-300">
          <img
            :src="nextProject.img"
            alt=""
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-4">
            <span class="text-white font-semibold text-base leading-snug">{{ nextProject.title }}</span>
          </div>
        </div>
      </router-link>

      <!-- Navigazione secondaria, solo frecce + etichetta -->
      <div class="reveal flex items-center justify-center gap-10 mt-10" style="transition-delay: 120ms">
        <router-link
          :to="prev"
          class="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">←</span>
          <span class="text-sm">{{ $t('projectShared.prevProject') }}</span>
        </router-link>

        <router-link
          :to="next"
          class="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
        >
          <span class="text-sm">{{ $t('projectShared.nextProject') }}</span>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">→</span>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { allProjects } from '@/data/projects.js'

const props = defineProps({
  prev: { type: String, required: true },
  next: { type: String, required: true }
})

const { t } = useI18n()

const nextProject = computed(() => {
  const found = allProjects.find(p => p.to === props.next)
  if (!found) return null
  return { img: found.img, title: t(`projectsPage.cards.${found.key}`) }
})
</script>
