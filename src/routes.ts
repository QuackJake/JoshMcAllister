import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'
import Services from './pages/Services.vue'
// import FAQ from './pages/FAQ.vue'
// import ContactMe from './pages/ContactMe.vue'

import Disclaimer from './pages/compliance/Disclaimer.vue'
import Privacy from './pages/compliance/Privacy.vue'
import ServicesAgreement from './pages/compliance/ServicesAgreement.vue'

import Calendar from './pages/services/Calendar.vue'
import Purchase from './pages/services/Purchase.vue'

// import NotFound from './pages/NotFound.vue'

const routes = [
  // 'main' = Dynamic routes for the NavBar
  { path: '/', name: 'Home', component: Home, meta: { group: 'main' } },
  { path: '/about', name: 'About Me', component: AboutMe, meta: { group: 'main' } },
  { path: '/services', name: 'My Services', component: Services, meta: { group: 'main' } },
  // { path: '/faq', name: 'FAQ', component: Purchase, meta: { group: 'main' } },
  // { path: '/contact', name: 'Contact Me', component: ContactMe, meta: { group: 'main' } },

  // 'compliance' = Dynamic routes for the hidden compliance pages accessible only from the footer links
  { path: '/disclaimer', name: 'Disclaimer', component: Disclaimer, meta: { group: 'compliance' } },
  { path: '/privacy', name: 'Privacy Policy', component: Privacy, meta: { group: 'compliance' } },
  { path: '/servicesagreement', name: 'Services Agreement', component: ServicesAgreement, meta: { group: 'compliance' } },

  // 'service' = Dynamic routes for the services and Acuity pages
  { path: '/calendar', name: 'Calendar', component: Calendar, meta: { group: 'service' } },
  { path: '/purchase', name: 'Purchase', component: Purchase, meta: { group: 'service' } },

  { path: '/:pathMatch(.*)*', redirect: '/notfound' }

]


export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: "smooth" }
  }
})