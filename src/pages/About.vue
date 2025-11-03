<template>
  <div class="h-screen flex flex-col bg-black overflow-hidden">
    <section class="flex-1 flex flex-col justify-center items-center px-8">
      <h1 class="text-6xl font-extrabold mb-8 tracking-tight text-white text-center animate-fade-in">About me</h1>
      <div class="max-w-2xl text-white/90 text-lg leading-relaxed mb-8 text-center animate-fade-in delay-200">
        Ho sempre avuto una grande passione per i computer e per tutto ciò che riguarda la creatività. Mi piace mettermi in gioco, lavorare insieme agli altri e imparare da ogni nuova esperienza.<br>
        Per me il design non è solo una professione, ma un modo di pensare che si può applicare in tanti ambiti diversi.<br>
        Quando progetto lo vivo come una sfida strategica: mescolo creatività e analisi per trasformare un problema in una soluzione.
      </div>
      <h2 class="text-4xl font-bold text-cyan-400 text-center animate-fade-in delay-400">
        <template v-if="showCounter">
          <span class="glow-hover cursor-pointer">{{ artistaCount }}% Artista</span><br>
          <span class="glow-hover cursor-pointer">{{ nerdCount }}% Nerd</span>
        </template>
      </h2>
    </section>
    <!-- Immagini fisse ai lati sopra il footer -->
  <img src="../assets/ioartista.png" alt="Artista" class="fixed left-0 bottom-20 w-[32vw] min-w-[180px] max-w-none object-contain opacity-80 z-10 pointer-events-none" />
  <img src="../assets/ionerd.png" alt="Nerd" class="fixed right-0 bottom-20 w-[32vw] min-w-[180px] max-w-none object-contain opacity-80 z-10 pointer-events-none" />
    <!-- Footer originale statico -->
    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Footer from '../components/Footer.vue'

const artistaCount = ref(0)
const nerdCount = ref(0)
const showCounter = ref(false)

function animateCount(target, refVar) {
  let current = 0
  let start = null
  const duration = 1200 // durata totale animazione in ms
  function step(timestamp) {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    // Easing: easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const value = Math.floor(eased * target)
    refVar.value = value
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      refVar.value = target
    }
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  setTimeout(() => {
    showCounter.value = true
    animateCount(50, artistaCount)
    setTimeout(() => animateCount(50, nerdCount), 400)
  }, 700)
})
</script>

<style scoped>
/* Glow effetto all'hover sulla scritta 50% */
.glow-hover {
  transition: text-shadow 0.3s, color 0.3s;
}
.glow-hover:hover {
  color: #22d3ee;
  text-shadow: 0 0 12px #22d3ee, 0 0 32px #22d3ee99;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeInUp 1.5s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.delay-200 {
  animation-delay: 0.2s !important;
}
.delay-400 {
  animation-delay: 0.4s !important;
}
/* Ottimizzazione mobile About */
@media (max-width: 480px) {
  h1 {
    font-size: 2.2rem !important;
    margin-bottom: 1.5rem !important;
  }
  .max-w-2xl {
    max-width: 22rem !important;
    font-size: 1rem !important;
    margin-bottom: 1.5rem !important;
  }
  h2 {
    font-size: 1.7rem !important;
    margin-bottom: 1.2rem !important;
  }
  .fixed.left-0,
  .fixed.right-0 {
    min-width: 140px !important;
    width: 40vw !important;
    bottom: 7.7rem !important;
    opacity: 0.8 !important;
  }
  .about-container > footer {
    margin-top: 3.5rem !important;
  }
  section {
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
  }
}
</style>