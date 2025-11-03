<template>
  <div class="relative h-screen w-full flex flex-col justify-center items-center text-center text-white">
    <img
      src="../assets/hero-riccardo.png"
      alt="Riccardo"
      class="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <!-- overlay per miglior contrasto -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 px-6">
        <p ref="intro" class="text-cyan-400 text-lg">Ciao, sono</p>
        <h1 ref="name" class="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">Riccardo Cassis</h1>
        <p ref="role" class="text-white text-2xl md:text-3xl mt-3 font-semibold">Io sono un digital e web designer</p>

        <p ref="desc" class="max-w-2xl mx-auto text-white/80 mt-4 text-base md:text-lg">Progetto interfacce digitali e siti web strategici: branding, UX/UI, e-commerce e landing page ottimizzate per conversione.</p>

        <div ref="ctas" class="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <RouterLink to="/contact" class="inline-flex items-center justify-center bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00A6E6] transition-colors duration-200">
            Contattami
          </RouterLink>

          <RouterLink to="/projects" class="inline-flex items-center justify-center border border-white/30 text-white px-5 py-3 rounded-full hover:text-[#00BFFF] hover:underline transition-colors duration-200">
            Vedi i progetti
          </RouterLink>
        </div>

        <socialIcons class="mt-8" />
    </div>
  </div>
</template>

  <script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import gsap from 'gsap'
  import socialIcons from './socialIcons.vue'

  const intro = ref(null)
  const name = ref(null)
  const role = ref(null)
  const desc = ref(null)
  const ctas = ref(null)

  onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
    tl.from(intro.value, { y: 20, opacity: 0 })
      .from(name.value, { y: 22, opacity: 0 }, '-=0.35')
      .from(role.value, { y: 18, opacity: 0 }, '-=0.32')
      .from(desc.value, { y: 16, opacity: 0 }, '-=0.28')
      .from(ctas.value, { y: 12, opacity: 0, stagger: 0.12 }, '-=0.22')
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
</style>