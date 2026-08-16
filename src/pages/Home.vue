<template>
  <main class="w-full min-h-screen bg-black">
    <Hero />
    <TechMarquee />
    <FeaturedProjects />
    <CustomCursor />
  </main>
</template>

<script setup>
import Hero from '@/components/hero.vue'
import TechMarquee from '@/components/TechMarquee.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import CustomCursor from '@/components/CustomCursor.vue'
</script>
