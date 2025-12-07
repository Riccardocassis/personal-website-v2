<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// --- IMPORT IMMAGINI ---
import sizexlHero from '../../assets/coversizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlSituation from '../../assets/img2sizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlPalette from '../../assets/colorpalettesizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlFont from '../../assets/fontsizexl.webp?w=800;1280;1920&format=webp;jpeg&as=picture'
import sizexlArchitecture from '../../assets/cardsize.webp?w=800;1280;1920&format=webp;jpeg&as=picture'


// --- DEBUG: CONTROLLIAMO SE GLI IMPORT FUNZIONANO ---
console.log("HERO:", sizexlHero)
console.log("SITUATION:", sizexlSituation)
console.log("PALETTE:", sizexlPalette)
console.log("FONT:", sizexlFont)
console.log("ARCHITECTURE:", sizexlArchitecture)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  const images = gsap.utils.toArray('.reveal-img')

  images.forEach((img) => {
    const grid = img.closest('.grid')
    const text = grid ? grid.querySelector('.reveal-text') : null

    if (isMobile) {
      gsap.set(img, { y: 0, scale: 1, opacity: 1, clearProps: 'all' })
      if (text) gsap.set(text, { y: 0, opacity: 1, clearProps: 'all' })
      return
    }

    gsap.set(img, { y: 40, scale: 1.06, opacity: 0, transformOrigin: 'center center' })
    if (text) gsap.set(text, { y: 24, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.to(img, { y: 0, scale: 1, opacity: 1, ease: 'power3.out', duration: 1.1 })
      .to(text || {}, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.6 }, '-=0.35')

    gsap.to(img, {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    })
  })
})

const showVideo = ref(false)
const videoRef = ref(null)

function openVideo() {
  showVideo.value = true
  nextTick(() => {
    if (videoRef.value) {
      videoRef.value.currentTime = 0
      videoRef.value.play().catch(() => {})
    }
  })
}

function closeVideo() {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
  showVideo.value = false
}
</script>
