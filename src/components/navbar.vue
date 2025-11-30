<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/logo-rc.webp'

const mobileOpen = ref(false)       // menu mobile
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
</script>

<template>
  <!-- fissa sopra -->
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-transparent md:bg-black/40 md:backdrop-blur-md md:shadow-md md:border-b md:border-white/5' : 'bg-transparent']" style="height:70px;">
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
            <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          </li>

          <!-- Services -->
          <li>
            <RouterLink to="/services" class="nav-link">Services</RouterLink>
          </li>

          <!-- About -->
          <li>
            <RouterLink to="/about" class="nav-link">About me</RouterLink>
          </li>

          <!-- CTA -->
          <li class="flex items-center">
            <RouterLink to="/contact" class="inline-block bg-blue-600 text-white text-lg px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors">Contattami</RouterLink>
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

    <!-- Mobile menu panel -->
    <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-show="mobileOpen" class="md:hidden bg-black/80 backdrop-blur-sm text-white border-t border-white/10">
        <div class="px-4 py-3 space-y-2">

          <RouterLink to="/projects" class="block px-2 py-2 rounded text-white transition-colors duration-200 ease-in-out hover:text-white/80" @click="mobileOpen=false">Projects</RouterLink>

          <RouterLink to="/services" class="block px-2 py-2 rounded text-white transition-colors duration-200 ease-in-out hover:text-white/80" @click="mobileOpen=false">Services</RouterLink>

          <RouterLink to="/about" class="block px-2 py-2 rounded text-white transition-colors duration-200 ease-in-out hover:text-white/80" @click="mobileOpen=false">About me</RouterLink>

          <RouterLink to="/contact" class="block px-6 py-3 rounded-xl bg-blue-600 text-white text-center font-semibold hover:bg-blue-700" @click="mobileOpen=false">Contattami</RouterLink>
        </div>
      </div>
    </transition>
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