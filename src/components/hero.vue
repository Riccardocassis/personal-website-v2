<template>
  <div ref="heroRef" class="relative h-screen w-full flex flex-col justify-center items-center text-center text-white">
    <img
      ref="bgImage"
      src="../assets/hero-riccardo.png"
      alt="Riccardo"
      class="absolute inset-0 w-full h-full object-cover opacity-80 will-change-transform"
    />
    <!-- overlay direzionale sfumato per profondità -->
  <div class="absolute inset-0 hero-overlay bg-gradient-to-b from-black/50 to-black/30"></div>

  <!-- dynamic linear gradient (fluid blue/azure theme) -->
  <div class="absolute inset-0 dynamic-linear-gradient pointer-events-none" aria-hidden="true"></div>

  <!-- subtle animated gradient pattern (very soft) -->
  <div class="absolute inset-0 animated-gradient-pattern pointer-events-none"></div>

  <div class="relative z-10 px-6 pt-20 md:pt-24 w-full max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:justify-end">
        <!-- Copy and CTAs moved to the right so the face remains visible -->
        <div class="w-full lg:w-1/2 relative">
          <!-- light spot / soft blue glow behind the main name (scoped to right column) -->
          <div class="absolute inset-0 flex items-center justify-end pointer-events-none z-0 pr-6 lg:pr-0">
            <span class="light-spot"></span>
          </div>

          <div class="relative z-10 max-w-2xl lg:mr-6 text-left">
            <p ref="intro" class="text-cyan-400 text-sm md:text-lg font-medium mb-4">Portfolio • Digital & Web Design</p>
            <h1 ref="name" class="text-4xl md:text-6xl font-extrabold leading-tight">Designing thoughtful<br/><span class="text-[#00BFFF]">digital experiences</span></h1>
            <p ref="role" class="text-white text-lg md:text-2xl mt-4 font-semibold">Io sono un digital e web designer</p>

            <p ref="desc" class="max-w-xl text-white/80 mt-4 text-base md:text-lg">Progetto interfacce digitali e siti web strategici: branding, UX/UI, e-commerce e landing page ottimizzate per conversione.</p>

            <div ref="ctas" class="mt-8">
              <div class="flex flex-col items-start">
                <RouterLink to="/contact" class="btn-primary inline-flex items-center justify-center bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-200">
                  Contattami
                </RouterLink>
                <socialIcons class="mt-4" />
              </div>
            </div>

            <!-- Stats row similar to reference -->
            <div class="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-white">25+</span>
                <span class="text-sm text-white/70">Projects</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-white">15+</span>
                <span class="text-sm text-white/70">Clients</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-white">6 mo</span>
                <span class="text-sm text-white/70">Avg Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <!-- (square removed) the content is aligned right so the background face is visible -->
      </div>
    </div>

    <!-- scroll indicator (floating arrow) -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
      <button aria-label="Scroll down" class="scroll-arrow inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
</template>

  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { RouterLink } from 'vue-router'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import socialIcons from './socialIcons.vue'

  const intro = ref(null)
  const name = ref(null)
  const role = ref(null)
  const desc = ref(null)
  const ctas = ref(null)
  const bgImage = ref(null)
  const heroRef = ref(null)

  gsap.registerPlugin(ScrollTrigger)

  let parallaxTween = null

  onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
    tl.from(intro.value, { y: 20, opacity: 0 })
      .from(name.value, { y: 22, opacity: 0 }, '-=0.35')
      .from(role.value, { y: 18, opacity: 0 }, '-=0.32')
      .from(desc.value, { y: 16, opacity: 0 }, '-=0.28')
      .from(ctas.value, { y: 12, opacity: 0, stagger: 0.12 }, '-=0.22')

    // Parallax: slight vertical movement of background image on scroll
    if (bgImage.value && heroRef.value) {
      parallaxTween = gsap.to(bgImage.value, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }
  })

  onBeforeUnmount(() => {
    // kill timeline/tweens and ScrollTrigger instances created for this component
    try {
      if (parallaxTween && parallaxTween.scrollTrigger) {
        parallaxTween.scrollTrigger.kill()
        parallaxTween.kill()
      }
      ScrollTrigger.getAll().forEach(t => t.kill())
    } catch (e) {
      // ignore cleanup errors
    }
  })

  </script>

<style scoped>
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
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.delay-200 {
  animation-delay: 0.2s !important;
}
.delay-400 {
  animation-delay: 0.4s !important;
}

/* Hero button enhancements */
.btn-primary {
  transition: box-shadow 220ms ease, transform 180ms ease, background-color 180ms ease;
}
.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0,191,255,0.16), 0 0 40px rgba(0,191,255,0.18);
}

.btn-ghost {
  position: relative;
  z-index: 0;
}
.btn-ghost::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  background: #00BFFF;
  z-index: 0;
  transition: width 360ms cubic-bezier(.2,.9,.2,1);
}
.btn-ghost .btn-ghost-text {
  position: relative;
  z-index: 10;
  transition: color 260ms ease;
}
.btn-ghost:hover::before {
  width: 100%;
}
.btn-ghost:hover .btn-ghost-text {
  color: #000000;
}

/* Animated gradient pattern (very subtle) */
.animated-gradient-pattern {
  z-index: 6;
  opacity: 0.18;
  background: linear-gradient(120deg, rgba(0,191,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%);
  background-size: 200% 200%;
  animation: gradientShift 30s linear infinite;
  mix-blend-mode: overlay;
}

/* dynamic linear gradient overlay (fluid, blue/azure theme) */
.dynamic-linear-gradient{
  z-index: 5;
  opacity: 0.22;
  background: linear-gradient(115deg, rgba(0,191,255,0.12) 0%, rgba(10,132,255,0.10) 30%, rgba(0,116,255,0.06) 55%, rgba(0,0,0,0) 100%);
  background-size: 400% 400%;
  animation: dynamicGradient 22s ease-in-out infinite;
  mix-blend-mode: overlay;
}

@keyframes dynamicGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Floating scroll arrow */
.scroll-arrow {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.04);
  display: inline-grid;
  place-items: center;
  transition: transform 220ms ease, opacity 220ms ease, background 180ms ease;
  will-change: transform, opacity;
  box-shadow: 0 6px 18px rgba(2,6,23,0.28);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: pointer;
  animation: float 2.4s ease-in-out infinite;
}
.scroll-arrow:hover {
  transform: translateY(-6px) scale(1.03);
  background: rgba(255,255,255,0.06);
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

/* hero overlay stacking */
.hero-overlay {
  z-index: 4;
}

/* light spot behind heading */
.light-spot{
  width: clamp(160px, 28vw, 520px);
  height: clamp(160px, 18vw, 420px);
  display: block;
  border-radius: 9999px;
  background: radial-gradient(circle at 40% 35%, rgba(0,191,255,0.22) 0%, rgba(0,191,255,0.12) 18%, rgba(0,191,255,0.06) 35%, transparent 60%);
  filter: blur(54px);
  transform: translateY(-8%);
  opacity: 0.95;
}

/* logo square hover glow */
.logo-square{
  transition: box-shadow 280ms ease, transform 220ms ease;
}
.logo-square:hover{
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,191,255,0.14), 0 0 80px rgba(0,191,255,0.12);
}
.logo-image{
  filter: drop-shadow(0 6px 18px rgba(0,0,0,0.35));
  transition: transform 220ms ease, opacity 220ms ease;
}
.logo-square:hover .logo-image{
  transform: scale(1.03);
  opacity: 1;
}

</style>