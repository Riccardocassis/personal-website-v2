<template>
  <nav
    v-if="crumbs.length"
    aria-label="Breadcrumb"
    class="max-w-7xl mx-auto px-6 md:px-16 pt-[86px] pb-1"
  >
    <ol class="flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] text-white/40">
      <li class="flex items-center gap-2">
        <span class="text-white/25">/</span>
        <RouterLink
          v-if="crumbs[0].to"
          :to="crumbs[0].to"
          class="hover:text-white/70 transition-colors duration-200"
        >
          {{ crumbs[0].label }}
        </RouterLink>
        <span v-else :class="crumbs.length > 1 ? 'text-white/40' : 'text-white/55'">
          {{ crumbs[0].label }}
        </span>
      </li>

      <li v-if="crumbs[1]" class="flex items-center gap-2">
        <span class="text-white/20">/</span>
        <span class="text-white/55 normal-case tracking-normal">{{ crumbs[1].label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, locale } = useI18n()

const crumbs = computed(() => {
  // touch locale so this recomputes on language change
  void locale.value

  const meta = route.meta || {}
  if (!meta.breadcrumb) return []

  const first = { label: t(meta.breadcrumb), to: meta.breadcrumbParent || null }

  if (meta.projectKey) {
    return [first, { label: t(`projects.${meta.projectKey}.hero.title`) }]
  }

  return [first]
})
</script>
