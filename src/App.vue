<script setup>
import Navbar from './components/navbar.vue'
import Hero from './components/hero.vue'
import { ref, onMounted } from 'vue'
import LoadingPage from './components/LoadingPage.vue'

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<template>
  <LoadingPage v-if="isLoading" />
  <div v-else class="bg-black text-white min-h-screen overflow-hidden">
    <Navbar />
    <router-view />
  </div>
</template>
