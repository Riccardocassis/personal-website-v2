<template>
  <div class="contact-viewport flex flex-col min-h-screen bg-black">
    <section class="relative z-10 flex-1 flex flex-col justify-center items-center pt-20 md:pt-32 pb-8 px-4">

      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-white text-center animate-contact-title">
        Contattami
      </h1>

      <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center animate-contact-sub">
        Hai un progetto o vuoi collaborare?
      </h2>

      <div 
        class="bg-white/6 backdrop-blur-xl border border-white/12 rounded-3xl shadow-2xl w-full max-w-xl px-6 py-8 flex flex-col items-center gap-6 morphic-contact animate-fadein card-contact"
      >

        <!-- FORM NETLIFY FUNZIONANTE -->
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success"
>

  <p class="hidden">
    <label>Non compilare questo campo:<input name="bot-field" /></label>
  </p>

  <input name="name" type="text" placeholder="Nome" class="input-contact" required />
  <input name="email" type="email" placeholder="Email" class="input-contact" required />
  <textarea name="message" placeholder="Messaggio" rows="4" class="input-contact" required></textarea>

  <button type="submit" class="btn-contact">Invia</button>

</form>

      </div>

    </section>
  </div>
</template>

<style scoped>
@keyframes fadein {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-fadein { animation: fadein 0.8s cubic-bezier(.4,0,.2,1); }
.animate-contact-title { animation: fadein 1.2s cubic-bezier(.4,0,.2,1); }
.animate-contact-sub { animation: fadein 1.6s cubic-bezier(.4,0,.2,1); }

.morphic-contact {
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  border-radius: 1.5rem;
}

.input-contact {
  background: rgba(255,255,255,0.03);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 1rem;
  padding: 0.85rem 1rem;
  color: #fff;
  font-size: 1.08rem;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.input-contact:focus {
  border-color: rgba(255,255,255,0.28);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.06);
}

.btn-contact {
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.9rem 2.2rem;
  font-size: 1.15rem;
  margin-top: 0.5rem;
  box-shadow: 0 8px 28px rgba(37,99,235,0.18);
  transition: background 0.2s, box-shadow 0.2s, transform 120ms ease;
}

.btn-contact:hover {
  background: #1d4ed8;
  box-shadow: 0 12px 40px rgba(37,99,235,0.22);
  transform: translateY(-1px);
}
</style>