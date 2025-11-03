<template>
  <div class="contact-viewport flex flex-col min-h-screen animated-gradient-bg">
    <section class="flex-1 flex flex-col justify-center items-center pt-20 md:pt-32 pb-8 px-4">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-white text-center animate-contact-title">Contattami</h1>
      <h2 class="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 text-center animate-contact-sub">Hai un progetto, una domanda o vuoi collaborare?</h2>
      <div 
        class="bg-white/10 backdrop-blur-xl border border-cyan-400 rounded-3xl shadow-2xl w-full max-w-xl px-6 py-8 flex flex-col items-center gap-6 morphic-contact animate-fadein card-contact"
        @mousemove="handleMouseMove"
        @mouseleave="resetTilt"
        ref="cardRef"
        :style="cardStyle"
      >
        <form class="w-full flex flex-col gap-5">
          <input type="text" placeholder="Nome" class="input-contact" />
          <input type="email" placeholder="Email" class="input-contact" />
          <textarea placeholder="Messaggio" rows="4" class="input-contact"></textarea>
          <button type="submit" class="btn-contact">Invia</button>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'

const cardRef = ref(null)
const cardStyle = ref('')

function handleMouseMove(e) {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * 8
  const rotateY = ((x - centerX) / centerX) * -8
  cardStyle.value = `transform: perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg); transition: transform 0.12s;`
}
function resetTilt() {
  cardStyle.value = 'transform: perspective(700px) rotateX(0deg) rotateY(0deg); transition: transform 0.3s;'
}
</script>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadein {
  animation: fadein 0.8s cubic-bezier(.4,0,.2,1);
}
.animate-contact-title {
  animation: fadein 1.2s cubic-bezier(.4,0,.2,1);
}
.animate-contact-sub {
  animation: fadein 1.6s cubic-bezier(.4,0,.2,1);
}
.morphic-contact {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(80, 200, 255, 0.25);
  background: rgba(30, 41, 59, 0.55);
}

.morphic-contact:hover {
  box-shadow: 0 0 10px 2px #22d3ee44, 0 8px 32px 0 rgba(0,0,0,0.37);
  border-color: #22d3ee;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.input-contact {
  background: rgba(0,0,0,0.45);
  border: 1.5px solid #22d3ee;
  border-radius: 1rem;
  padding: 0.85rem 1rem;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 2px 12px 0 rgba(34,211,238,0.08);
  outline: none;
}
.input-contact:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 2px #22d3ee55;
}
.input-contact::placeholder {
  color: #7dd3fc;
  opacity: 1;
}
.btn-contact {
  background: linear-gradient(90deg,#22d3ee 0%,#38bdf8 100%);
  color: #0f172a;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.9rem 2.2rem;
  font-size: 1.15rem;
  margin-top: 0.5rem;
  box-shadow: 0 2px 16px 0 #22d3ee44;
  transition: background 0.2s, box-shadow 0.2s;
  border: none;
  cursor: pointer;
}
.btn-contact:hover {
  background: linear-gradient(90deg,#38bdf8 0%,#22d3ee 100%);
  box-shadow: 0 4px 24px 0 #22d3ee88;
}

@media (min-width: 768px) {
  .card-contact {
    margin-top: 2.5rem;
  }
  .contact-viewport {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .contact-viewport > section {
    flex: 1 0 auto;
  }
  .contact-viewport > footer {
    flex-shrink: 0;
  }
}

/* Gradient morphic animato */

 .animated-gradient-bg {
  position: relative;
  z-index: 0;
  background: radial-gradient(ellipse 80% 60% at 20% 30%, #010409 0%, transparent 96%),
              radial-gradient(ellipse 60% 40% at 80% 70%, #0a0a0a 0%, transparent 98%),
              linear-gradient(120deg, #010409 0%, #0a0a0a 100%);
  background-blend-mode: screen, lighten, normal;
  animation: liquid-gradient 24s ease-in-out infinite;
}

@keyframes liquid-gradient {
  0% {
    background-position:
      0% 0%,
      100% 100%,
      0% 50%;
  }
  50% {
    background-position:
      80% 60%,
      20% 80%,
      100% 50%;
  }
  100% {
    background-position:
      0% 0%,
      100% 100%,
      0% 50%;
  }
}
</style>