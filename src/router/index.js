// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import *relativi*
import Home          from '../pages/Home.vue'
import About         from '../pages/About.vue'
import Contact       from '../pages/Contact.vue'
import Projects      from '../pages/Projects.vue'
import WebDesign     from '../pages/WebDesign.vue'
import BrandDesign   from '../pages/BrandDesign.vue'
import ProductDesign from '../pages/ProductDesign.vue'

const routes = [
  { path: '/',              name: 'home',              component: Home },
  { path: '/about',         name: 'about',             component: About },
  { path: '/contact',       name: 'contact',           component: Contact },
  { path: '/projects',      name: 'projects',          component: Projects },
  { path: '/projects/web',  name: 'projects-web',      component: WebDesign },
  { path: '/projects/brand',name: 'projects-brand',    component: BrandDesign },
  { path: '/projects/product', name: 'projects-product', component: ProductDesign },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router