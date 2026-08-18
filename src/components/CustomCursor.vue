<template>
  <Teleport to="body">
    <div
      v-if="enabled"
      ref="dotRef"
      class="custom-cursor"
      :class="{ 'custom-cursor--art': mode === 'art' }"
      aria-hidden="true"
    >
      <span class="custom-cursor__core"></span>
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
  width: 16px;
  height: 16px;
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
  width: 44px;
  height: 44px;
}

/* Pulse lives on a child, never on the dot itself: GSAP drives the dot's
   position via transform, so animating transform there too would fight it. */
.custom-cursor__core {
  position: absolute;
  inset: -35%;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, rgba(34, 211, 238, 0) 72%);
  animation: cursor-pulse 2.2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes cursor-pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.45;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor {
    transition: none;
  }
  .custom-cursor__core {
    animation: none;
  }
}
</style>
