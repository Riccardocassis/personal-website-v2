<template>
  <section class="pt-36 pb-28 relative">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Header -->
      <header class="text-center mb-14">
        <h1 ref="titleRef" class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Projects</h1>
        <p ref="subtitleRef" class="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">Una selezione curata dei miei lavori. Design, front-end e identità visive.</p>
      </header>

      <!-- Master card (single card that expands / splits into 3) -->
      <div ref="masterRef" class="master-card fixed inset-0 flex items-center justify-center pointer-events-none z-50">
        <div class="master-inner w-80 h-60 rounded-2xl"></div>
      </div>

      <!-- Grid categories -->
      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <!-- Web Design -->
        <RouterLink to="/projects/web" class="project-card group block rounded-2xl overflow-hidden transform transition will-change-transform bg-gradient-to-br from-slate-900/90 to-blue-900/75 border border-white/8" aria-label="Web Design">
          <div class="relative z-40 p-8 md:p-10 min-h-[16rem] flex flex-col justify-between rounded-2xl shadow-lg backdrop-blur-sm">
            <div>
              <!-- icon -->
              <div class="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-white/6">
                <!-- globe icon (minimal) -->
                <svg class="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20M4 6h16M4 18h16"/></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold mt-2">Web Design</h3>
              <p class="text-white/80 mt-3 leading-relaxed">Progetti di interfacce moderne e performanti, pensati per conversione e accessibilità. Focus su UX solida e front-end snello.</p>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">Scopri i progetti</span>
              <span class="arrow text-white/60 transition-transform opacity-80">→</span>
            </div>
          </div>
        </RouterLink>

        <!-- Brand Design -->
        <RouterLink to="/projects/brand" class="project-card group block rounded-2xl overflow-hidden transform transition will-change-transform bg-gradient-to-br from-slate-900/88 to-violet-900/70 border border-white/8" aria-label="Brand Design">
          <div class="relative z-40 p-8 md:p-10 min-h-[16rem] flex flex-col justify-between rounded-2xl shadow-lg backdrop-blur-sm">
            <div>
              <div class="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-white/6">
                <!-- paint brush icon -->
                <svg class="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3 21l4-4 7-7 4-4 3 3-4 4-7 7-4 4H3z"/></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold mt-2">Brand Design</h3>
              <p class="text-white/80 mt-3 leading-relaxed">Sistemi visivi distintivi e identità strategiche che comunicano valore e coerenza lungo tutti i touchpoint del brand.</p>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">Scopri i progetti</span>
              <span class="arrow text-white/60 transition-transform opacity-80">→</span>
            </div>
          </div>
        </RouterLink>

        <!-- Product Design -->
        <RouterLink to="/projects/product" class="project-card group block rounded-2xl overflow-hidden transform transition will-change-transform bg-gradient-to-br from-slate-900/88 to-cyan-900/70 border border-white/8" aria-label="Product Design">
          <div class="relative z-40 p-8 md:p-10 min-h-[16rem] flex flex-col justify-between rounded-2xl shadow-lg backdrop-blur-sm">
            <div>
              <div class="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-white/6">
                <!-- cube icon -->
                <svg class="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM12 2v20"/></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold mt-2">Product Design</h3>
              <p class="text-white/80 mt-3 leading-relaxed">Dall'idea al prototipo: soluzioni UX centrali, validate e scalabili, progettate per impattare il prodotto e il business.</p>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">Scopri i progetti</span>
              <span class="arrow text-white/60 transition-transform opacity-80">→</span>
            </div>
          </div>
        </RouterLink>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)
const cardsRef = ref(null)
const seedRef = ref(null)
const masterRef = ref(null)
let tl = null

onMounted(() => {
  // basic entrance timeline: title then subtitle then cards stagger
  const cards = cardsRef.value ? Array.from(cardsRef.value.querySelectorAll('.project-card')) : []
  tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'power2.out' } })
  tl.from(titleRef.value, { y: 18, opacity: 0 })
    .from(subtitleRef.value, { y: 14, opacity: 0 }, '-=0.42')

  // Only run the master -> split animation on desktop (>=768px)
  const isDesktop = window.innerWidth >= 768
  if (isDesktop && cards.length) {

    // wait a frame so layout is stable, then position cards at center and animate them into place
    requestAnimationFrame(async () => {
      await nextTick()

      // prepare cards at center with mask (clip-path) so they look like they're revealed from the master
      cards.forEach((el) => {
        const r = el.getBoundingClientRect()
        const dx = r.left + r.width / 2 - (window.innerWidth / 2)
        const dy = r.top + r.height / 2 - (window.innerHeight / 2)
        // hide card content while positioned at center to avoid ghosting
        gsap.set(el, { x: -dx, y: -dy, scale: 0.92, autoAlpha: 0 })
        // start with clipped content
        el.style.clipPath = 'inset(35% 35% 35% 35% round 14px)'
      })

      // reveal cards with clip-path animation and move to place — snappier timings for a fresher feel
      cards.forEach((el, i) => {
        tl.to(el, { clipPath: 'inset(0% 0% 0% 0% round 14px)', x: 0, y: 0, scale: 1, autoAlpha: 1, duration: 0.42, ease: 'power4.out' }, i * 0.05 - 0.1)
      })

      // subtle lift and settling (shorter)
      tl.to(cards, { y: 0, stagger: 0.05, duration: 0.32, ease: 'power2.out' }, '-=0.28')

      // cleanup clip-paths after animation to avoid inline styles lingering
      tl.call(() => { cards.forEach(el => { el.style.clipPath = '' }) }, null, '>-0.02')
    })
  } else if (cards.length) {
    // fallback: simple translate-in (no central seed)
    tl.from(cards, { y: 18, stagger: 0.12, duration: 0.65 }, '-=0.3')
  } else {
    // fallback: ensure any project-card is visible and has no transform
    const fallback = document.querySelectorAll('.project-card')
    fallback.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })
  }
})

onBeforeUnmount(() => {
  try {
    if (tl) tl.kill()
  } catch (e) {}
})
</script>

<style scoped>
/* Card hover polish */
.project-card { transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease, opacity 200ms ease; }
.project-card:hover { transform: scale(1.02); }
.project-card .shadow-lg { box-shadow: 0 10px 40px rgba(2,6,23,0.6); }
.project-card .arrow { display: inline-block; transition: transform 220ms ease, opacity 220ms ease; }
.project-card:hover .arrow { transform: translateX(6px); opacity: 1; }

/* keep card content readable on small screens */
@media (max-width: 767px) {
  section { padding-top: 3.5rem; }
  .project-card > div { height: auto; }
}

/* Seed central card styles */
.seed-card { pointer-events: none; position: fixed; inset: 0; display: none; align-items: center; justify-content: center; }
.seed-inner { background: linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.6)); border: 1px solid rgba(255,255,255,0.04); box-shadow: 0 10px 30px rgba(2,6,23,0.5); backdrop-filter: blur(6px); }

/* Master single-card (expand/divide) styles */
.master-card { pointer-events: none; position: fixed; inset: 0; display: none; align-items: center; justify-content: center; }
.master-inner { background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(17,24,39,0.7)); border: 1px solid rgba(255,255,255,0.04); box-shadow: 0 18px 50px rgba(2,6,23,0.55); backdrop-filter: blur(8px); }
@media (min-width: 768px) {
  .seed-card { display: flex; }
}
</style>