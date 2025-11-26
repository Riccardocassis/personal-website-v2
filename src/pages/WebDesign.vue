<template>
  <section class="pt-32 pb-24">
    <!-- Deprecated project subpage; redirecting -->
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {
  // keep repository clean: redirect old subpage to main Projects
  router.replace('/projects')
})
</script>