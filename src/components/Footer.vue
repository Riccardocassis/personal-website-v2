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
            <a href="https://www.linkedin.com/in/riccardo-cassis/" target="_blank" rel="noopener" aria-label="LinkedIn" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.98 8h3.84v2.2h.05c.54-1 1.86-2.2 3.83-2.2 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.77 1.9-2.77 3.8V24h-4z"/>
              </svg>
            </a>
            <a href="https://github.com/Riccardocassis" target="_blank" rel="noopener" aria-label="GitHub" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.78-.25.78-.55 0-.27-.01-1.17-.01-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.28 5.7.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12 24 5.65 18.35.5 12 .5z"/>
              </svg>
            </a>
              <a href="https://www.behance.net/riccardocassis" target="_blank" rel="noopener" aria-label="Behance" class="inline-flex items-center justify-center w-8 h-8 text-white/70 hover:text-white hover:scale-[1.05] transition-all duration-200">
                <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/70 group-hover:bg-white/10 transition-colors duration-200">
                  <img src="../assets/icon-behance.webp" alt="Behance" class="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </span>
              </a>
          </div>
        </div>

        <!-- Column 4: Policies (moved to right) -->
        <div class="md:text-right">
          <nav class="flex flex-col items-center md:items-end gap-2">
            <RouterLink to="/privacy" class="text-sm text-white/70 hover:text-white transition">Privacy Policy</RouterLink>
            <RouterLink to="/cookie-policy" class="text-sm text-white/70 hover:text-white transition">Cookie Policy</RouterLink>
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
