<template>
  <section class="pt-32 max-w-6xl mx-auto px-4 pb-20">
    <h1 class="text-5xl font-extrabold mb-2 text-white">Projects</h1>
    <h2 class="text-2xl font-bold text-cyan-400 mb-12">Brand Design</h2>
    <div class="flex flex-col gap-16 items-center">
      <!-- Card Rebert streetwear -->
      <div class="bg-white/10 backdrop-blur-xl border border-cyan-400 rounded-3xl shadow-2xl flex flex-col items-center py-10 px-6 w-full max-w-3xl transition duration-300 hover:scale-105 hover:shadow-cyan-400/30 animate-fadein">
        <img src="../assets/rebert.png" alt="Rebert streetwear" class="w-full h-[340px] rounded-2xl object-cover mb-6 transition duration-300 hover:shadow-lg" />
        <span class="text-white text-2xl font-bold text-center mt-2">Rebert streetwear</span>
      </div>
      <!-- Card Piadina Roberto Concept -->
      <div class="bg-white/10 backdrop-blur-xl border border-cyan-400 rounded-3xl shadow-2xl flex flex-col items-center py-10 px-6 w-full max-w-3xl transition duration-300 hover:scale-105 hover:shadow-cyan-400/30 animate-fadein">
        <img src="../assets/piadinaroberto.png" alt="Rebranding piadine Roberto Concept" class="w-full h-[340px] rounded-2xl object-cover mb-6 transition duration-300 hover:shadow-lg" />
        <span class="text-white text-2xl font-bold text-center mt-2">Rebranding piadine Roberto Concept</span>
      </div>
      <!-- Card Iron Riff -->
      <div class="bg-white/10 backdrop-blur-xl border border-cyan-400 rounded-3xl shadow-2xl flex flex-col items-center py-10 px-6 w-full max-w-3xl transition duration-300 hover:scale-105 hover:shadow-cyan-400/30 animate-fadein">
  <img src="../assets/ironriff.png" alt="Iron Riff" class="w-full h-[340px] rounded-2xl object-cover mb-6 transition duration-300 hover:shadow-lg" />
        <span class="text-white text-2xl font-bold text-center mt-2">Iron Riff</span>
      </div>
    </div>
    <!-- Suggerimento per Product Design -->
    <div class="mt-16 flex justify-center">
      <RouterLink to="/projects/product" class="next-suggestion">
        <div class="bg-white/10 backdrop-blur-xl border border-cyan-400 rounded-2xl shadow-lg px-8 py-5 flex items-center gap-4 hover:scale-105 transition cursor-pointer">
          <span class="text-cyan-400 text-lg font-semibold">Scopri i progetti Product Design</span>
          <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="text-cyan-400"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </RouterLink>
    </div>
  </section>
  <Footer />
</template>
<script setup>
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router';
import rebert from '../assets/rebert.png';
import piadinaroberto from '../assets/piadinaroberto.png';
import ironriff from '../assets/ironriff.png';

const cards = [
  {
    img: rebert,
    title: 'Rebert streetwear',
  },
  {
    img: piadinaroberto,
    title: 'Rebranding piadine Roberto Concept',
  },
  {
    img: ironriff,
    title: 'Iron Riff',
  },
];
</script>

<style scoped>
@keyframes zoomin {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadein {
  animation: zoomin 0.8s cubic-bezier(.4,0,.2,1);
}
.flex-col.items-center {
  flex-direction: column !important;
  align-items: center;
  gap: 4rem;
}
.bg-white\/10 {
  width: 100%;
  max-width: 900px;
  min-width: 0;
}
img {
  margin-bottom: 1rem !important;
  width: 100%;
  height: auto !important;
  max-height: 340px;
  object-fit: contain !important;
  border-radius: 1rem;
  background: #18181b;
}
.next-suggestion {
  text-decoration: none;
}
@media (max-width: 768px) {
  .bg-white\/10 {
    max-width: 100vw;
    min-width: 0;
    height: auto;
    border-radius: 2rem !important;
    box-shadow: 0 4px 24px 0 #22d3ee33;
    border: 2px solid #22d3ee;
    padding: 1.2rem 0.7rem !important;
  }
  img {
    max-height: 160px;
    margin-bottom: 0.9rem !important;
    border-radius: 1.5rem !important;
    object-fit: contain !important;
    background: #18181b;
  }
  .flex-col.items-center {
    gap: 2rem;
  }
  span.text-white.text-2xl {
    font-size: 1.3rem !important;
    margin-top: 0.7rem !important;
  }
}
</style>
