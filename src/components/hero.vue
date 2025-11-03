<template>
  <div ref="heroRef" class="relative h-screen w-full flex items-center justify-end text-right text-white">
    <img
      ref="bgImage"
      src="../assets/hero-riccardo.png"
      alt="Riccardo"
      class="absolute inset-0 w-full h-full object-cover opacity-80 will-change-transform"
    />
    <!-- liquid gradient: moving, blurred color blobs behind overlays -->
  <div class="absolute inset-0 liquid-gradient pointer-events-none" aria-hidden="true"></div>

    <!-- overlay direzionale sfumato per profondità -->
  <div class="absolute inset-0 hero-overlay bg-gradient-to-b from-black/50 to-black/30"></div>

  <!-- dynamic linear gradient (fluid blue/azure theme) -->
  <div class="absolute inset-0 dynamic-linear-gradient pointer-events-none" aria-hidden="true"></div>

  <!-- subtle animated gradient pattern (very soft) -->
  <div class="absolute inset-0 animated-gradient-pattern pointer-events-none"></div>

  <div class="relative z-10 px-6 pt-20 md:pt-24 w-full max-w-7xl pr-6 md:pr-16">
    <!-- right-aligned layout -->
    <div class="flex flex-col items-end justify-center gap-8">
      <div class="relative w-full max-w-3xl ml-auto">
        <!-- light spot behind heading aligned to the right -->
        <div class="absolute inset-0 flex items-center justify-end pointer-events-none z-0 pr-6 md:pr-0">
          <span class="light-spot"></span>
        </div>

        <div class="relative z-10 max-w-3xl text-right ml-auto">
          <p ref="intro" class="text-cyan-400 text-sm md:text-lg font-medium mb-4">Portfolio • Digital & Web Design</p>
          <h1 ref="name" class="text-4xl md:text-6xl font-extrabold leading-tight">Designing <span class="text-[#00BFFF]">human-centered</span><br/>digital experiences</h1>
          <p ref="role" class="text-white text-lg md:text-2xl mt-4 font-semibold">Aiuto brand e startup a costruire prodotti digitali, siti web e identità visive che uniscono design, strategia e tecnologia.</p>

          <p ref="desc" class="max-w-xl text-white/80 mt-4 text-base md:text-lg ml-auto">Progetto interfacce e siti ad alta conversione, con attenzione a UX, accessibilità e scalabilità per team e startup.</p>

          <div ref="ctas" class="mt-8 flex flex-col items-end space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-end">
            <div ref="ctaPrimary" class="inline-flex">
              <RouterLink to="/contact" class="btn-primary inline-flex items-center justify-center bg-[#00BFFF] text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-transform duration-200">
                Parliamo del tuo progetto
              </RouterLink>
            </div>

            <div ref="ctaSecondary" class="inline-flex">
              <RouterLink to="/projects" class="btn-ghost inline-flex items-center justify-center border border-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200 overflow-hidden">
                <span class="btn-ghost-text">Esplora i miei lavori</span>
              </RouterLink>
            </div>
          </div>

          <div ref="socialRef" class="social-icons-wrapper mt-6 flex items-end justify-end">
            <socialIcons />
          </div>

          <!-- Stats row similar to reference -->
          <div class="mt-10 grid grid-cols-3 gap-6 max-w-md ml-auto">
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
  <!-- Services section: two dark cards with pill CTAs (matches attachment aesthetic) -->
  <section ref="postSection" class="service-section w-full">
    <div class="max-w-7xl mx-auto px-6 py-20">
  <h2 ref="postTitle" class="text-4xl font-bold text-white mb-4 text-center">Scegli come possiamo lavorare insieme</h2>
  <p ref="postSubtitle" class="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">Che tu voglia costruire un nuovo brand digitale o migliorare la tua presenza online, posso aiutarti a ogni livello del processo.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <article ref="cardLeft" class="service-card rounded-2xl p-8 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl border border-white/6">
          <div class="p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-xl">
            <h3 class="text-2xl font-semibold text-white mb-2">Brand & Web Design</h3>
            <p class="text-white/60 mb-4 italic">Crea o rinnova la tua identità digitale</p>

            <ul class="list-disc list-inside space-y-2 text-white/80">
              <li>Branding e visual identity</li>
              <li>UX/UI design per siti ed e-commerce</li>
              <li>Design system e linee guida</li>
              <li>Wireframe e prototipi</li>
            </ul>

            <div class="mt-8">
              <RouterLink to="/process" class="block w-full text-center bg-white text-black rounded-full px-6 py-3 font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-xl">Scopri il processo</RouterLink>
            </div>
          </div>
        </article>

  <article ref="cardRight" class="service-card rounded-2xl p-8 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl border border-white/6">
          <div class="p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-xl">
            <h3 class="text-2xl font-semibold text-white mb-2">Consulenza & Strategia Digitale</h3>
            <p class="text-white/60 mb-4 italic">Definisci la direzione giusta per il tuo brand</p>

            <ul class="list-disc list-inside space-y-2 text-white/80">
              <li>Analisi UX e ottimizzazione conversioni</li>
              <li>Audit di siti e piattaforme</li>
              <li>Strategia di rebranding o restyling</li>
              <li>Supporto continuo al team</li>
            </ul>

            <div class="mt-8">
              <RouterLink to="/contact" class="block w-full text-center border border-white/30 text-white rounded-full px-6 py-3 font-semibold transition-colors duration-300 hover:bg-white hover:text-black">Richiedi una consulenza</RouterLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
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
  const ctaPrimary = ref(null)
  const ctaSecondary = ref(null)
  const socialRef = ref(null)
  const bgImage = ref(null)
  const heroRef = ref(null)
  const postSection = ref(null)
  const postTitle = ref(null)
  const postSubtitle = ref(null)
  const cardLeft = ref(null)
  const cardRight = ref(null)

  gsap.registerPlugin(ScrollTrigger)

  let parallaxTween = null

  onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
    tl.from(intro.value, { y: 20, opacity: 0 })
      .from(name.value, { y: 22, opacity: 0 }, '-=0.35')
      .from(role.value, { y: 18, opacity: 0 }, '-=0.32')
      .from(desc.value, { y: 16, opacity: 0 }, '-=0.28')
      .from([ctaPrimary.value, ctaSecondary.value, socialRef.value], { y: 12, opacity: 0, stagger: 0.12 }, '-=0.22')

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

    // services section reveal (fade + slide) with sequence delays
    try {
      if (postSection.value) {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: postSection.value,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          // Faster sequence: small offsets (120ms) between elements for a tighter reveal
          tl2.from(postTitle.value, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0)
            .from(postSubtitle.value, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.12)
            .from(cardLeft.value, { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.24)
            .from(cardRight.value, { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.36)

        // small parallax movement for cards (optional subtle)
        gsap.to(cardLeft.value, {
          y: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: postSection.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })

        gsap.to(cardRight.value, {
          y: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: postSection.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }
    } catch (e) {
      // ignore animation errors
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
  transform: translateY(-2px) scale(1.03);
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

/* social icons slight scale on hover */
.social-icons-wrapper > * {
  transition: transform 180ms ease, opacity 180ms ease;
}
.social-icons-wrapper > *:hover {
  transform: scale(1.08);
}

/* ensure ghost button border fill is subtle */
.btn-ghost{
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.btn-ghost::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  background: rgba(0,191,255,0.08);
  z-index: 0;
  transition: width 360ms cubic-bezier(.2,.9,.2,1);
}
.btn-ghost .btn-ghost-text{
  position: relative;
  z-index: 10;
  transition: color 260ms ease;
}
.btn-ghost:hover::before{
  width: 100%;
}
.btn-ghost:hover .btn-ghost-text{
  color: #ffffff;
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

/* Liquid gradient - dynamic blurred color blobs */
.liquid-gradient{
  z-index: 3;
  opacity: 0.28;
  background-image: radial-gradient(circle at 10% 20%, rgba(0,191,255,0.18) 0%, rgba(10,132,255,0.12) 12%, transparent 25%),
                    radial-gradient(circle at 80% 70%, rgba(0,116,255,0.14) 0%, rgba(0,191,255,0.08) 14%, transparent 30%),
                    radial-gradient(circle at 50% 40%, rgba(0,255,255,0.04) 0%, transparent 40%);
  background-size: 220% 220%, 180% 180%, 260% 260%;
  mix-blend-mode: screen;
  filter: blur(64px) saturate(120%);
  transform: translateZ(0);
  animation: liquidShift 20s ease-in-out infinite;
  pointer-events: none;
}

@keyframes liquidShift {
  0% {
    background-position: 0% 0%, 100% 100%, 50% 50%;
    transform: scale(1) translateY(0);
  }
  25% {
    background-position: 30% 20%, 70% 60%, 40% 30%;
    transform: scale(1.02) translateY(-2px);
  }
  50% {
    background-position: 60% 40%, 40% 20%, 60% 60%;
    transform: scale(1.03) translateY(1px);
  }
  75% {
    background-position: 40% 70%, 20% 40%, 30% 80%;
    transform: scale(1.01) translateY(-1px);
  }
  100% {
    background-position: 0% 0%, 100% 100%, 50% 50%;
    transform: scale(1) translateY(0);
  }
}

@media (max-width: 640px) {
  .liquid-gradient{ opacity: 0.18; filter: blur(46px); }
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

/* Services section visual tweaks */
.service-section { z-index: 2; }
.service-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.35) 100%);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.04);
  position: relative;
}
.service-card h3 { color: #ffffff; }
.service-card p, .service-card li { color: rgba(255,255,255,0.82); }
.service-card .p-6 { padding: 1.5rem; }

/* card hover interaction: modern Awwwards-like microinteraction */
.service-card{
  transition: transform 400ms cubic-bezier(.22,.77,.12,1), box-shadow 400ms cubic-bezier(.22,.77,.12,1), filter 400ms;
  will-change: transform, box-shadow, filter;
}
.service-card:hover{
  /* avoid overriding transform inline set by GSAP; animate inner panel instead */
  box-shadow: 0 28px 60px rgba(2,6,23,0.65), 0 12px 40px rgba(0,191,255,0.06);
  filter: drop-shadow(0 10px 30px rgba(0,191,255,0.06));
}
.service-card .p-6{
  position: relative;
  z-index: 2;
  transition: transform 420ms cubic-bezier(.22,.77,.12,1);
  transform-origin: center center;
}
.service-card:hover .p-6 {
  transform: scale(1.06);
}
.service-card:focus-visible{
  box-shadow: 0 30px 60px rgba(2,6,23,0.6), 0 0 0 6px rgba(0,191,255,0.08);
}

/* blue glow layer */
.service-card::before{
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  box-shadow: 0 0 0 0 rgba(0,191,255,0); /* start invisible */
  transition: box-shadow 400ms cubic-bezier(.22,.77,.12,1), opacity 400ms;
  pointer-events: none;
  z-index: 1;
}
.service-card:hover::before{
  box-shadow: 0 0 40px 6px rgba(0,191,255,0.06), 0 0 120px 24px rgba(0,191,255,0.03);
}

</style>