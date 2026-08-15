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

  // Project detail placeholders
  { path: '/projects/project-1',  name: 'project-1',  component: () => import('../pages/projects/project-1.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project1' } },
  { path: '/projects/project-2',  name: 'project-2',  component: () => import('../pages/projects/project-2.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project2' } },
  { path: '/projects/project-3',  name: 'project-3',  component: () => import('../pages/projects/project-3.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project3' } },
  { path: '/projects/project-4',  name: 'project-4',  component: () => import('../pages/projects/project-4.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project4' } },
  { path: '/projects/project-5',  name: 'project-5',  component: () => import('../pages/projects/project-5.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project5' } },
  { path: '/projects/project-6',  name: 'project-6',  component: () => import('../pages/projects/project-6.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project6' } },
  { path: '/projects/project-7',  name: 'project-7',  component: () => import('../pages/projects/project-7.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project7' } },
  { path: '/projects/project-8',  name: 'project-8',  component: () => import('../pages/projects/project-8.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project8' } },
  { path: '/projects/project-9',  name: 'project-9',  component: () => import('../pages/projects/project-9.vue'), meta: { breadcrumb: 'nav.lavori', breadcrumbParent: '/projects', projectKey: 'project9' } },

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