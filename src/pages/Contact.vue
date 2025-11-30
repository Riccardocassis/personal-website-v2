<template>
  <div class="contact-viewport flex flex-col min-h-screen bg-black">
    <section class="relative z-10 flex-1 flex flex-col justify-center items-center pt-20 md:pt-32 pb-8 px-4">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-white text-center animate-contact-title">Contattami</h1>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center animate-contact-sub">Hai un progetto, una domanda o vuoi collaborare?</h2>
      <div 
        class="bg-white/6 backdrop-blur-xl border border-white/12 rounded-3xl shadow-2xl w-full max-w-xl px-6 py-8 flex flex-col items-center gap-6 morphic-contact animate-fadein card-contact"
        @mousemove="handleMouseMove"
        @mouseleave="resetTilt"
        ref="cardRef"
        :style="cardStyle"
      >
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="w-full flex flex-col gap-5"
          @submit.prevent="handleSubmit"
          ref="contactForm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <!-- honeypot -->
          <p class="hidden"><label>Non compilare questo campo<input name="bot-field" /></label></p>

          <input name="name" v-model="name" type="text" placeholder="Nome" class="input-contact" required />
          <input name="email" v-model="email" type="email" placeholder="Email" class="input-contact" required />
          <textarea name="message" v-model="message" placeholder="Messaggio" rows="4" class="input-contact" required></textarea>

          <div class="flex items-center justify-between gap-4">
            <button type="submit" class="btn-contact" :disabled="submitting">{{ submitting ? 'Invio...' : 'Invia' }}</button>
            <div v-if="success" class="text-sm text-emerald-300">Messaggio inviato, grazie!</div>
            <div v-if="error" class="text-sm text-rose-300">Errore durante l'invio. Riprova più tardi.</div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// Footer removed from this page per request

const cardRef = ref(null)
const cardStyle = ref('')
const contactForm = ref(null)

// form state
const name = ref('')
const email = ref('')
const message = ref('')
const submitting = ref(false)
const success = ref(false)
const error = ref(false)

function handleMouseMove(e) {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * 8
  const rotateY = ((x - centerX) / centerX) * -8
  cardStyle.value = `transform: perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg); transition: transform 0.12s;`
}
function resetTilt() {
  cardStyle.value = 'transform: perspective(700px) rotateX(0deg) rotateY(0deg); transition: transform 0.3s;'
}

async function handleSubmit(e) {
  submitting.value = true
  success.value = false
  error.value = false
  try {
    const formEl = contactForm.value || e.target
    const formData = new FormData(formEl)

    // First: call Netlify Function to send mail via SendGrid
    await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    })

    // Second: submit to Netlify Forms so Netlify keeps a copy of the submission
    const urlEncoded = new URLSearchParams()
    for (const pair of formData.entries()) {
      urlEncoded.append(pair[0], pair[1])
    }
    // include form-name (already present) - POST to current origin
    await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: urlEncoded })

    success.value = true
    // clear fields
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    console.error('Contact submit error', err)
    error.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadein {
  animation: fadein 0.8s cubic-bezier(.4,0,.2,1);
}
.animate-contact-title {
  animation: fadein 1.2s cubic-bezier(.4,0,.2,1);
}
.animate-contact-sub {
  animation: fadein 1.6s cubic-bezier(.4,0,.2,1);
}
.morphic-contact {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.35);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
}

.morphic-contact:hover {
  box-shadow: 0 0 14px 2px rgba(255,255,255,0.06), 0 8px 32px 0 rgba(0,0,0,0.35);
  border-color: rgba(255,255,255,0.22);
  transition: box-shadow 0.3s, border-color 0.3s;
}

.input-contact {
  background: rgba(255,255,255,0.03);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 1rem;
  padding: 0.85rem 1rem;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
  outline: none;
}
.input-contact:focus {
  border-color: rgba(255,255,255,0.28);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.06);
}
.input-contact::placeholder {
  color: rgba(255,255,255,0.7);
  opacity: 1;
}
.btn-contact {
  background: #2563eb; /* tailwind bg-blue-600 */
  color: #ffffff;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.9rem 2.2rem;
  font-size: 1.15rem;
  margin-top: 0.5rem;
  box-shadow: 0 8px 28px rgba(37,99,235,0.18);
  transition: background 0.2s, box-shadow 0.2s, transform 120ms ease;
  border: none;
  cursor: pointer;
}
.btn-contact:hover {
  background: #1d4ed8; /* tailwind blue-700 */
  box-shadow: 0 12px 40px rgba(37,99,235,0.22);
  transform: translateY(-1px);
}
.btn-contact:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .card-contact {
    margin-top: 2.5rem;
  }
  .contact-viewport {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .contact-viewport > section {
    flex: 1 0 auto;
  }
  .contact-viewport > footer {
    flex-shrink: 0;
  }
}

/* animated gradient removed; page uses solid black background */
</style>