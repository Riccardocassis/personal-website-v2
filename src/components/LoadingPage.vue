<template>
  <div class="loading-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-6">
      <div class="loading-logo-wrap">
        <img src="../assets/logo-rc.webp" alt="RC" class="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </div>

      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>

      <span class="loading-text">{{ $t('loading.text') }}</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #000;
}

.loading-logo-wrap {
  animation: logo-pulse 2.2s ease-in-out infinite;
  filter: drop-shadow(0 0 16px rgba(34, 211, 238, 0.45));
}

@keyframes logo-pulse {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.08); opacity: 1; }
}

.loader-bar {
  width: 140px;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.loader-progress {
  height: 100%;
  width: 40%;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 1) 50%, rgba(34, 211, 238, 0) 100%);
  animation: loader-sweep 1.3s ease-in-out infinite;
}

@keyframes loader-sweep {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(320%); }
}

.loading-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .loading-logo-wrap,
  .loader-progress {
    animation: none;
  }
}
</style>
