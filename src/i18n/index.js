import { createI18n } from 'vue-i18n'

import it from './locales/it.js'
import en from './locales/en.js'
import de from './locales/de.js'
import es from './locales/es.js'

export const SUPPORTED_LOCALES = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' }
]

const STORAGE_KEY = 'rc-lang'

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED_LOCALES.some(l => l.code === saved)) return saved
  } catch (e) {}

  try {
    const nav = (navigator.language || 'it').slice(0, 2).toLowerCase()
    if (SUPPORTED_LOCALES.some(l => l.code === nav)) return nav
  } catch (e) {}

  return 'it'
}

const initialLocale = detectLocale()

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'it',
  messages: { it, en, de, es }
})

export function setLocale(code) {
  if (!SUPPORTED_LOCALES.some(l => l.code === code)) return
  i18n.global.locale.value = code
  try { localStorage.setItem(STORAGE_KEY, code) } catch (e) {}
  document.documentElement.setAttribute('lang', code)
}

document.documentElement.setAttribute('lang', initialLocale)

export default i18n
