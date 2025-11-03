<script setup>
import Navbar from './components/navbar.vue'
</script>

<template>
  <div class="bg-black text-white min-h-screen overflow-hidden">
    <Navbar />
    <router-view />
  </div>
</template>
