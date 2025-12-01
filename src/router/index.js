// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import *relativi*
import Home          from '../pages/Home.vue'
import About         from '../pages/About.vue'
import Contact       from '../pages/Contact.vue'
import Projects      from '../pages/Projects.vue'

const routes = [
  { path: '/',              name: 'home',              component: Home },
  { path: '/about',         name: 'about',             component: About },
  { path: '/contact',       name: 'contact',           component: Contact },

  // 🔥 SUCCESS PAGE (necessaria per il form Netlify)
  { 
    path: '/success',
    name: 'Success',
    component: () => import('../pages/Success.vue')
  },

  { path: '/projects',      name: 'projects',          component: Projects },

  // Project detail placeholders
  { path: '/projects/project-1',  name: 'project-1',  component: () => import('../pages/projects/project-1.vue') },
  { path: '/projects/project-2',  name: 'project-2',  component: () => import('../pages/projects/project-2.vue') },
  { path: '/projects/project-3',  name: 'project-3',  component: () => import('../pages/projects/project-3.vue') },
  { path: '/projects/project-4',  name: 'project-4',  component: () => import('../pages/projects/project-4.vue') },
  { path: '/projects/project-5',  name: 'project-5',  component: () => import('../pages/projects/project-5.vue') },
  { path: '/projects/project-6',  name: 'project-6',  component: () => import('../pages/projects/project-6.vue') },
  { path: '/projects/project-7',  name: 'project-7',  component: () => import('../pages/projects/project-7.vue') },
  { path: '/projects/project-8',  name: 'project-8',  component: () => import('../pages/projects/project-8.vue') },
  { path: '/projects/project-9',  name: 'project-9',  component: () => import('../pages/projects/project-9.vue') },
  { path: '/projects/project-10', name: 'project-10', component: () => import('../pages/projects/project-10.vue') },

  { path: '/services',       name: 'services',        component: () => import('../pages/Services.vue') },
  { path: '/social',         name: 'social',          component: () => import('../pages/Social.vue') },
  { path: '/seo',            name: 'seo',             component: () => import('../pages/Seo.vue') },
  { path: '/process',        name: 'process',         component: () => import('../pages/Process.vue') },
  { path: '/privacy',        name: 'privacy',         component: () => import('../pages/Privacy.vue') },
  { path: '/cookie-policy',  name: 'cookie-policy',   component: () => import('../pages/CookiePolicy.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router