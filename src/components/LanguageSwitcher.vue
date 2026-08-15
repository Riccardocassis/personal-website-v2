<template>
  <div ref="rootRef" class="relative inline-block">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 pl-1.5 pr-3 py-1 text-white hover:border-white/30 hover:bg-white/10 transition-colors duration-200"
      :class="mobile ? 'py-1.5 pl-2 pr-3.5' : ''"
      aria-haspopup="listbox"
      :aria-expanded="open"
      aria-label="Seleziona lingua"
      @click="toggle"
    >
      <FlagIcon :code="locale" :class="mobile ? 'w-6 h-[18px]' : 'w-5 h-[15px]'" />
      <span :class="['font-semibold uppercase tracking-wide', mobile ? 'text-base' : 'text-sm']">
        {{ currentLabel }}
      </span>
      <svg
        viewBox="0 0 12 8"
        fill="none"
        class="w-2.5 h-2.5 text-white/50 transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
      >
        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        ref="panelRef"
        class="fixed z-[100] min-w-[9.5rem] overflow-hidden rounded-xl border border-white/10 bg-[#111318]/95 backdrop-blur-md shadow-2xl py-1"
        :style="panelStyle"
        role="listbox"
      >
        <button
          v-for="l in SUPPORTED_LOCALES"
          :key="l.code"
          type="button"
          role="option"
          :aria-selected="locale === l.code"
          class="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors duration-150"
          :class="locale === l.code ? 'text-cyan-400 bg-white/5' : 'text-white/75 hover:text-white hover:bg-white/5'"
          @click="select(l.code)"
        >
          <FlagIcon :code="l.code" class="w-5 h-[15px] shrink-0" />
          <span class="font-medium uppercase tracking-wide">{{ l.label }}</span>
          <svg
            v-if="locale === l.code"
            viewBox="0 0 16 16"
            fill="none"
            class="w-3.5 h-3.5 ml-auto text-cyan-400"
          >
            <path d="M3 8.5L6.2 12L13 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

defineProps({
  mobile: { type: Boolean, default: false }
})

const { locale } = useI18n()

const currentLabel = computed(() => SUPPORTED_LOCALES.find(l => l.code === locale.value)?.label ?? locale.value)

const open = ref(false)
const rootRef = ref(null)
const panelRef = ref(null)
const panelStyle = ref({})

function computePosition() {
  const el = rootRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const viewportW = window.innerWidth
  const panelWidth = 152 // approx min-w-[9.5rem]
  let left = rect.left
  if (left + panelWidth > viewportW - 8) left = viewportW - panelWidth - 8
  panelStyle.value = {
    top: `${rect.bottom + 8}px`,
    left: `${Math.max(8, left)}px`
  }
}

function toggle() {
  if (open.value) {
    close()
  } else {
    computePosition()
    open.value = true
    window.addEventListener('scroll', onScrollOrResize, true)
    window.addEventListener('resize', onScrollOrResize)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeydown)
  }
}

function onScrollOrResize() {
  computePosition()
}

function onClickOutside(e) {
  if (rootRef.value && rootRef.value.contains(e.target)) return
  if (panelRef.value && panelRef.value.contains(e.target)) return
  close()
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

function close() {
  open.value = false
  window.removeEventListener('scroll', onScrollOrResize, true)
  window.removeEventListener('resize', onScrollOrResize)
  document.removeEventListener('mousedown', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
}

function select(code) {
  setLocale(code)
  close()
}

onBeforeUnmount(close)

/* FLAGS — compact inline SVGs, no external assets */
const FLAG_PATHS = {
  it: () => [
    h('rect', { width: 3, height: 2, fill: '#fff' }),
    h('rect', { width: 1, height: 2, fill: '#009246' }),
    h('rect', { x: 2, width: 1, height: 2, fill: '#ce2b37' })
  ],
  en: () => [
    h('rect', { width: 30, height: 20, fill: '#00247d' }),
    h('line', { x1: 0, y1: 0, x2: 30, y2: 20, stroke: '#fff', 'stroke-width': 4 }),
    h('line', { x1: 30, y1: 0, x2: 0, y2: 20, stroke: '#fff', 'stroke-width': 4 }),
    h('line', { x1: 0, y1: 0, x2: 30, y2: 20, stroke: '#cf142b', 'stroke-width': 1.4 }),
    h('line', { x1: 30, y1: 0, x2: 0, y2: 20, stroke: '#cf142b', 'stroke-width': 1.4 }),
    h('rect', { x: 12, y: 0, width: 6, height: 20, fill: '#fff' }),
    h('rect', { x: 0, y: 7, width: 30, height: 6, fill: '#fff' }),
    h('rect', { x: 13.5, y: 0, width: 3, height: 20, fill: '#cf142b' }),
    h('rect', { x: 0, y: 8.5, width: 30, height: 3, fill: '#cf142b' })
  ],
  de: () => [
    h('rect', { width: 3, height: 2, fill: '#000' }),
    h('rect', { y: 0.667, width: 3, height: 0.667, fill: '#dd0000' }),
    h('rect', { y: 1.333, width: 3, height: 0.667, fill: '#ffce00' })
  ],
  es: () => [
    h('rect', { width: 3, height: 2, fill: '#aa151b' }),
    h('rect', { y: 0.5, width: 3, height: 1, fill: '#f1bf00' })
  ]
}

const FLAG_VIEWBOX = {
  it: '0 0 3 2',
  en: '0 0 30 20',
  de: '0 0 3 2',
  es: '0 0 3 2'
}

const FlagIcon = (props, { attrs }) =>
  h(
    'svg',
    {
      viewBox: FLAG_VIEWBOX[props.code] || '0 0 3 2',
      preserveAspectRatio: 'xMidYMid slice',
      class: ['inline-block rounded-[3px] ring-1 ring-white/15', attrs.class],
      style: attrs.style
    },
    (FLAG_PATHS[props.code] || FLAG_PATHS.it)()
  )
FlagIcon.props = ['code']
</script>
