<template>
  <div class="contact-viewport flex flex-col min-h-screen bg-black">
    <section class="relative z-10 flex-1 flex flex-col justify-center items-center pt-6 md:pt-10 pb-8 px-4">

      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white text-center">
        {{ $t('contact.title') }}
      </h1>

      <p class="text-lg text-white/80 mb-6 text-center max-w-xl px-4">
        {{ $t('contact.subtitle') }}
      </p>

      <a href="mailto:riccardocassis.rc@gmail.com" class="inline-block bg-blue-600 text-white text-lg px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors">
        riccardocassis.rc@gmail.com
      </a>

    </section>
  </div>
</template>

<style scoped>
.contact-viewport { }
/* Keep styles minimal and consistent with site look */
a {
  text-decoration: none;
}
</style>