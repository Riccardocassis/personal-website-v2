<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/logo-rc.webp'

const mobileOpen = ref(false)       // menu mobile
let _scrollPos = 0
// Chiudi mobile con ESC
function onKeydown(e) {
  if (e.key === 'Escape') {
    mobileOpen.value = false
  }
}

// glass effect: visibile solo quando si scrolla
const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('scroll', onScroll, { passive: true })
  // inizializza stato
  onScroll()
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onScroll)
})

// Quando il menu mobile è aperto, blocchiamo lo scroll dello sfondo
watch(mobileOpen, (val) => {
  if (val) {
    _scrollPos = window.scrollY || window.pageYOffset || 0
    document.body.style.position = 'fixed'
    document.body.style.top = `-${_scrollPos}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.overflow = ''
    window.scrollTo(0, _scrollPos)
  }
})
</script>

<template>
  <!-- fissa sopra -->
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-black/30 backdrop-blur-sm shadow-sm border-b border-white/6' : 'bg-transparent']" style="height:70px;">
    <div class="flex items-center justify-between max-w-7xl mx-auto w-full px-6 md:px-16 h-full">
      <!-- Logo RC -->
      <div class="flex items-center h-full">
        <RouterLink to="/" class="flex items-center justify-center" style="width:70px;height:70px;padding:7px;">
          <img
            :src="logo"
            alt="Logo RC"
            class="max-h-full max-w-full object-contain self-center"
          />
        </RouterLink>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center h-full w-full max-w-3xl ml-auto">
        <ul class="flex items-center gap-8 text-lg w-full justify-end">
          <!-- Projects (link to landing page) -->
          <li>
            <RouterLink to="/projects" class="nav-link">Progetti</RouterLink>
          </li>

          <!-- Services -->
          <li>
            <RouterLink to="/services" class="nav-link">Servizi</RouterLink>
          </li>

          <!-- About -->
          <li>
            <RouterLink to="/about" class="nav-link">Chi sono</RouterLink>
          </li>

          <!-- CTA -->
          <li class="flex items-center">
            <a href="mailto:riccardocassis.rc@gmail.com" class="inline-block bg-blue-600 text-white text-lg px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors">Contattami</a>
          </li>
        </ul>
      </div>

      <!-- Burger (mobile) -->
      <button class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 focus:outline-none text-white" @click="mobileOpen = !mobileOpen" aria-label="Open menu" :aria-expanded="mobileOpen">
        <svg v-if="!mobileOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile full-screen off-canvas glass menu (slides in from left) -->
    <div class="md:hidden">
      <nav :class="['fixed inset-0 z-50 transform transition-transform duration-300 ease-out', mobileOpen ? 'translate-x-0' : '-translate-x-full']" aria-hidden="false" style="padding-top:70px;">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div class="relative h-full flex items-center justify-center px-6">
          <button class="absolute top-6 right-6 text-white/80 hover:text-white focus:outline-none" @click="mobileOpen = false" aria-label="Chiudi menu">
            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="relative z-10 w-full max-w-xs" style="max-height:calc(100vh - 140px); overflow-y:auto; -webkit-overflow-scrolling: touch;">
            <div class="space-y-6 text-center py-6">
              <RouterLink to="/projects" class="block text-2xl font-semibold text-white/90 hover:text-white" @click="mobileOpen=false">Progetti</RouterLink>
              <RouterLink to="/services" class="block text-2xl font-semibold text-white/90 hover:text-white" @click="mobileOpen=false">Servizi</RouterLink>
              <RouterLink to="/about" class="block text-2xl font-semibold text-white/90 hover:text-white" @click="mobileOpen=false">Chi sono</RouterLink>
              <a href="mailto:riccardocassis.rc@gmail.com" class="block mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700" @click="mobileOpen=false">Contattami</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<style scoped>
.nav-link{
  color: #ffffff;
  padding: 0.5rem 0.9rem;
  font-weight: 600;
  transition: color 180ms ease;
}
.nav-link:hover{
  color: rgba(255,255,255,0.8);
}
</style>