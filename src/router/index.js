// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import *relativi*
import Home          from '../pages/Home.vue'
import About         from '../pages/About.vue'
import Contact       from '../pages/Contact.vue'
import ContactFallback from '../pages/contact-fallback.vue'
import Projects      from '../pages/Projects.vue'

const routes = [
  { path: '/',              name: 'home',              component: Home },
  { path: '/about',         name: 'about',             component: About, meta: { breadcrumb: 'nav.chiSono' } },
  { path: '/contact',       name: 'contact',           component: Contact, meta: { breadcrumb: 'nav.contattami' } },
  { path: '/contact-fallback', name: 'contact-fallback', component: ContactFallback },

  // Contact page (mail link) — Netlify form routes removed

  { path: '/projects',      name: 'projects',          component: Projects, meta: { breadcrumb: 'nav.lavori' } },

  // Project detail pages — descriptive, keyword-rich slugs (SEO/GEO/AIO)
  { path: '/projects/medeghini',              name: 'medeghini',              component: () => import('../pages/projects/project-10.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project10' } },
  { path: '/projects/gibson-sg-1961',         name: 'gibson-sg-1961',         component: () => import('../pages/projects/project-1.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project1' } },
  { path: '/projects/sizexl-website',         name: 'sizexl-website',         component: () => import('../pages/projects/project-2.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project2' } },
  { path: '/projects/synapses-laba',          name: 'synapses-laba',          component: () => import('../pages/projects/project-3.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project3' } },
  { path: '/projects/fillbo-app',             name: 'fillbo-app',             component: () => import('../pages/projects/project-4.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project4' } },
  { path: '/projects/opsify-app',             name: 'opsify-app',             component: () => import('../pages/projects/project-5.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project5' } },
  { path: '/projects/webable-accessibility',  name: 'webable-accessibility',  component: () => import('../pages/projects/project-6.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project6' } },
  { path: '/projects/heller-garden',          name: 'heller-garden',          component: () => import('../pages/projects/project-7.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project7' } },
  { path: '/projects/roberto-rebranding',     name: 'roberto-rebranding',     component: () => import('../pages/projects/project-8.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project8' } },
  { path: '/projects/control-alt-canc-fanzine', name: 'control-alt-canc-fanzine', component: () => import('../pages/projects/project-9.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project9' } },

  // Old generic slugs — 301-style client redirects so existing links/bookmarks keep working
  { path: '/projects/project-1', redirect: '/projects/gibson-sg-1961' },
  { path: '/projects/project-2', redirect: '/projects/sizexl-website' },
  { path: '/projects/project-3', redirect: '/projects/synapses-laba' },
  { path: '/projects/project-4', redirect: '/projects/fillbo-app' },
  { path: '/projects/project-5', redirect: '/projects/opsify-app' },
  { path: '/projects/project-6', redirect: '/projects/webable-accessibility' },
  { path: '/projects/project-7', redirect: '/projects/heller-garden' },
  { path: '/projects/project-8', redirect: '/projects/roberto-rebranding' },
  { path: '/projects/project-9', redirect: '/projects/control-alt-canc-fanzine' },

  { path: '/services',       name: 'services',        component: () => import('../pages/Services.vue'), meta: { breadcrumb: 'nav.servizi' } },
  { path: '/social',         name: 'social',          component: () => import('../pages/Social.vue'), meta: { breadcrumb: 'social.title' } },
  { path: '/seo',            name: 'seo',             component: () => import('../pages/Seo.vue'), meta: { breadcrumb: 'seo.title' } },
  { path: '/process',        name: 'process',         component: () => import('../pages/Process.vue'), meta: { breadcrumb: 'process.title' } },
  { path: '/privacy',        name: 'privacy',         component: () => import('../pages/Privacy.vue'), meta: { breadcrumb: 'privacy.title' } },
  { path: '/cookie-policy',  name: 'cookie-policy',   component: () => import('../pages/CookiePolicy.vue'), meta: { breadcrumb: 'cookiePolicy.title' } },

  // ⛔ ROUTE CATCH-ALL (fallback to app for unknown routes)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router