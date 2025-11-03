<template>
  <div class="loading-bg flex items-center justify-center min-h-screen">
    <div class="loading-content flex flex-col items-center gap-6">
      <div class="logo-wrapper animate-logo">
        <img src="../assets/logo-rc.png" alt="Logo RC" class="w-24 h-24" />
      </div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <span class="loading-text">Caricamento in corso...</span>
    </div>
  </div>
</template>

<script setup>
// Loading page professionale
</script>

<style scoped>
.loading-bg {
  background: linear-gradient(120deg, #0f172a 0%, #22d3ee 100%);
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.logo-wrapper {
  filter: drop-shadow(0 0 18px #22d3ee88);
}
.animate-logo {
  animation: logo-bounce 1.2s infinite alternate cubic-bezier(.4,0,.2,1);
}
@keyframes logo-bounce {
  0% { transform: scale(1) translateY(0); }
  100% { transform: scale(1.08) translateY(-12px); }
}
.loader-bar {
  width: 180px;
  height: 10px;
  background: #164e63;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 16px 0 #22d3ee44;
}
.loader-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg,#22d3ee 0%,#38bdf8 100%);
  border-radius: 8px;
  animation: loading-bar 2.2s infinite;
}
@keyframes loading-bar {
  0% { width: 0%; }
  50% { width: 100%; }
  100% { width: 0%; }
}
.loading-text {
  color: #22d3ee;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-shadow: 0 0 8px #22d3ee44;
}
</style>
