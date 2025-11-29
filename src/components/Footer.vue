<template>
  <footer class="w-full bg-[#05060a] text-white py-12 relative z-10">
    <!-- Small top-strip to hide any seam between sections (covers a few px) -->
    <div class="absolute top-0 left-0 right-0 h-8 md:h-6 bg-[#05060a] pointer-events-none" aria-hidden="true"></div>
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

        <!-- Column 1: Branding -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <RouterLink to="/" class="inline-block mb-4">
            <img src="../assets/logo-rc.webp" alt="RC logo" class="w-10 h-10 object-contain" />
          </RouterLink>
          <div class="text-sm font-semibold">Riccardo Cassis – UI/UX &amp; Web Designer</div>
          <div class="text-xs text-white/60 mt-2">Bergamo / Brescia</div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-sm font-semibold text-white/90 mb-4 text-center md:text-left">Quick Links</h4>
          <nav class="flex flex-col items-center md:items-start gap-2">
            <RouterLink to="/projects" class="text-sm text-white/70 hover:text-white transition">Projects</RouterLink>
            <RouterLink to="/services" class="text-sm text-white/70 hover:text-white transition">Services</RouterLink>
            <RouterLink to="/about" class="text-sm text-white/70 hover:text-white transition">About me</RouterLink>
            <RouterLink to="/contact" class="text-sm text-white/70 hover:text-white transition">Contact</RouterLink>
          </nav>
        </div>

        <!-- Column 3: Follow me -->
        <div>
          <h4 class="text-sm font-semibold text-white/90 mb-4 text-center md:text-left">Follow me</h4>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/riccardo-cassis" target="_blank" rel="noopener" aria-label="LinkedIn" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
              <img src="../assets/icon-linkedin.svg" alt="LinkedIn" class="w-5 h-5 object-contain" />
            </a>
            <a href="https://github.com/riccardocassis" target="_blank" rel="noopener" aria-label="GitHub" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
              <img src="../assets/icon-github.webp" alt="GitHub" class="w-5 h-5 object-contain" />
            </a>
            <a href="https://www.behance.net/riccardocassis" target="_blank" rel="noopener" aria-label="Behance" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
              <img src="../assets/icon-behance.webp" alt="Behance" class="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

        <!-- Column 4: Legal -->
        <div>
          <h4 class="text-sm font-semibold text-white/90 mb-4 text-center md:text-left">Legal</h4>
          <nav class="flex flex-col items-center md:items-start gap-2">
            <RouterLink to="/privacy" class="text-sm text-white/70 hover:text-white transition">Privacy Policy</RouterLink>
            <RouterLink to="/cookies" class="text-sm text-white/70 hover:text-white transition">Cookie Policy</RouterLink>
            <RouterLink to="/legal" class="text-sm text-white/70 hover:text-white transition">Legal Notice</RouterLink>
          </nav>
        </div>
      </div>

      <!-- Copyright -->
      <div class="w-full text-center">
        <div class="text-xs text-white/40 mt-8">© 2025 Riccardo Cassis. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
