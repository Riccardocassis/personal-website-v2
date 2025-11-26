gsap.registerPlugin(ScrollTrigger)
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register plugin once
gsap.registerPlugin(ScrollTrigger)

export function useParallaxCards(gridRef) {
  let listeners = []
  let triggers = []
  let mq = null

  function setupParallaxForColumn(col, idx) {
    const yMap = [-10, -5, -12]
    const yPercent = yMap[idx] ?? -6
    const contents = col.querySelectorAll('.parallax-content')
    contents.forEach((content, i) => {
      try {
        const r = content.getBoundingClientRect()
        console.log('[useParallaxCards] setupParallax column', idx, 'content index', i, 'rect', r.width, r.height)
      } catch (e) {
        console.warn('[useParallaxCards] failed to read rect for content', e)
      }
      const tween = gsap.to(content, {
        yPercent: yPercent,
        ease: 'power2.out',
        overwrite: true,
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
      if (tween && tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger)
        console.log('[useParallaxCards] created ScrollTrigger for column', idx, 'content', i)
      }
    })
  }

  function init() {
    if (!gridRef?.value) return

    // Use media query to gate desktop behaviour
    mq = window.matchMedia('(min-width: 1024px)')

    const enable = () => {
      console.log('[useParallaxCards] enable called (desktop)')
      const columns = Array.from(gridRef.value.querySelectorAll('.parallax-column'))
      console.log('[useParallaxCards] columns found:', columns.length)
      columns.forEach((col, idx) => setupParallaxForColumn(col, idx))

      // Magnetic hover on card (outer element)
      const cards = Array.from(gridRef.value.querySelectorAll('.parallax-card, .project-card'))
      console.log('[useParallaxCards] cards for magnetic hover:', cards.length)
      cards.forEach((card) => {
        const maxOffset = 25
        const onMove = (e) => {
          const rect = card.getBoundingClientRect()
          const relX = e.clientX - rect.left
          const relY = e.clientY - rect.top
          const cx = rect.width / 2
          const cy = rect.height / 2

          const x = ((relX - cx) / cx) * maxOffset
          const y = ((relY - cy) / cy) * maxOffset

          gsap.to(card, { x, y, duration: 0.35, ease: 'power2.out' })
        }
        const onLeave = () => {
          gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
        }

        try {
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          listeners.push({ card, onMove, onLeave })
        } catch (err) {
          console.warn('[useParallaxCards] failed to attach listeners on card', err)
        }
      })
    }

    const disable = () => {
      // remove triggers and listeners when disabling
      triggers.forEach((t) => { try { t.kill() } catch (e) {} })
      triggers = []
      listeners.forEach(({ card, onMove, onLeave }) => {
        try { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) } catch (e) {}
      })
      listeners = []
      try { gsap.killTweensOf(gridRef.value.querySelectorAll('.parallax-content, .parallax-card, .project-card')) } catch (e) {}
      // Reset transforms so elements don't remain translated when effects are turned off
      try {
        const els = gridRef.value.querySelectorAll('.parallax-content, .parallax-card, .project-card')
        if (els && els.length) {
          gsap.set(els, { x: 0, y: 0, clearProps: 'transform' })
        }
      } catch (e) {}
    }

    // init depending on current viewport
    try {
      if (mq.matches) enable()

      // listen for changes
      const onChange = (e) => {
        console.log('[useParallaxCards] media change, matches=', e.matches)
        if (e.matches) enable()
        else disable()
      }
      try { mq.addEventListener('change', onChange) } catch (e) { mq.addListener(onChange) }

      // store listener so kill() can remove it
      listeners.push({ mq, onChange })
    } catch (err) {
      console.error('[useParallaxCards] init error', err)
    }
  }

  function kill() {
    // remove media listener
    const mqListener = listeners.find(l => l.mq)
    if (mqListener && mq) {
      try { mq.removeEventListener('change', mqListener.onChange) } catch (e) { try { mq.removeListener(mqListener.onChange) } catch (e) {} }
    }

    // Kill the stored triggers
    triggers.forEach((t) => { try { t.kill() } catch (e) {} })
    triggers = []

    // Remove event listeners added to cards
    listeners.forEach(({ card, onMove, onLeave }) => {
      if (!card) return
      try { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) } catch (e) {}
    })
    listeners = []

    // Kill any GSAP tweens on elements inside the grid
    if (gridRef?.value) {
      try {
        gsap.killTweensOf(gridRef.value.querySelectorAll('.parallax-content, .parallax-card, .project-card'))
      } catch (e) {}
    }
  }

  return { init, kill }
}
