<script setup>
import Navbar from './components/navbar.vue'
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <Navbar />
    <router-view />
  </div>
</template>
