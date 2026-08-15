import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const DEFAULT_IMAGE = 'https://riccardocassis.com/riccardo-cassis-preview.jpg'
const JSONLD_ID = 'page-jsonld'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setJsonLd(data) {
  let script = document.getElementById(JSONLD_ID)
  if (!data) {
    if (script) script.remove()
    return
  }
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = JSONLD_ID
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

/**
 * Sets per-page title, meta description, Open Graph / Twitter tags and an
 * optional JSON-LD block. `getConfig` is re-evaluated on mount and on every
 * locale change, so translated pages stay in sync automatically.
 */
export function usePageSeo(getConfig) {
  const { locale } = useI18n()

  function apply() {
    const cfg = getConfig()
    if (!cfg || !cfg.title) return

    document.title = cfg.title
    upsertMeta('name', 'description', cfg.description)

    upsertMeta('property', 'og:title', cfg.title)
    upsertMeta('property', 'og:description', cfg.description)
    upsertMeta('property', 'og:image', cfg.image || DEFAULT_IMAGE)

    upsertMeta('name', 'twitter:title', cfg.title)
    upsertMeta('name', 'twitter:description', cfg.description)
    upsertMeta('name', 'twitter:image', cfg.image || DEFAULT_IMAGE)

    setJsonLd(cfg.jsonLd || null)
  }

  onMounted(apply)
  watch(locale, apply)
  onBeforeUnmount(() => setJsonLd(null))
}
