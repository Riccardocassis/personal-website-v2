<template>
  <Teleport to="body">
    <div
      v-if="enabled"
      ref="dotRef"
      class="custom-cursor"
      :class="{ 'custom-cursor--art': mode === 'art' }"
      aria-hidden="true"
    >
      <span v-if="mode === 'art'" class="custom-cursor__label">{{ $t('hero.cursorView') }}</span>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const enabled = ref(false)
const mode = ref('neutral')
const dotRef = ref(null)

function onMouseMove(e) {
  if (!dotRef.value) return
  gsap.to(dotRef.value, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power3.out' })
}

function onMouseOver(e) {
  const target = e.target.closest ? e.target.closest('[data-cursor]') : null
  mode.value = target ? target.dataset.cursor : 'neutral'
}

onMounted(async () => {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
  enabled.value = mq.matches
  if (!enabled.value) return

  await nextTick()
  if (!dotRef.value) return

  gsap.set(dotRef.value, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 })
  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseover', onMouseOver)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  border: 1.5px solid rgba(34, 211, 238, 0.8);
  background: rgba(34, 211, 238, 0.15);
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.25s ease, height 0.25s ease, border-radius 0.25s ease,
    background 0.25s ease, border-color 0.25s ease;
}

.custom-cursor--art {
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  border-color: rgba(255, 154, 158, 0.75);
  background: linear-gradient(135deg, rgba(255, 154, 158, 0.35), rgba(250, 177, 120, 0.25));
  backdrop-filter: blur(4px);
}

.custom-cursor__label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor {
    transition: none;
  }
}
</style>
