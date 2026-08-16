<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center px-6">
    <section class="w-full max-w-3xl bg-white/6 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/8">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">{{ $t('contactFallback.title') }}</h1>

      <p class="text-lg text-white/80 mb-6">{{ $t('contactFallback.subtitle') }}</p>

      <div class="mb-6">
        <p class="text-sm text-white/70">{{ $t('contactFallback.emailLabel') }}</p>
        <div class="mt-2 flex items-center gap-4">
          <code class="bg-white/8 px-4 py-2 rounded-md text-lg font-medium">riccardocassis.rc@gmail.com</code>
          <button @click="copyEmail" class="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">{{ $t('contactFallback.copyButton') }}</button>
        </div>
      </div>

      <div class="flex gap-4">
        <a :href="gmailUrl" target="_blank" rel="noopener" class="inline-block bg-transparent border border-white/12 text-white px-4 py-2 rounded-md hover:bg-white/6">{{ $t('contactFallback.openGmail') }}</a>
        <button @click="goBack" class="inline-block bg-white/8 text-white px-4 py-2 rounded-md hover:bg-white/12">{{ $t('contactFallback.goBack') }}</button>
      </div>

      <p v-if="copied" class="mt-4 text-sm text-emerald-400">{{ $t('contactFallback.copied') }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const EMAIL = 'riccardocassis.rc@gmail.com'
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
const copied = ref(false)
const router = useRouter()

async function copyEmail(){
  try{
    if (navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(EMAIL)
    } else {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  }catch(e){
    // fail silently
  }
}

function goBack(){
  router.back()
}
</script>

<style scoped>
/* Keep styling aligned with site's dark glass aesthetic */
code{ color: #fff; }
</style>
