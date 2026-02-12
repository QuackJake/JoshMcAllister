import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'
import MyServices from './pages/MyServices.vue'
// import FAQ from './pages/FAQ.vue'
// import ContactMe from './pages/ContactMe.vue'

import DisclaimerPage from './pages/compliance/DisclaimerPage.vue'
import PrivacyPage from './pages/compliance/PrivacyPage.vue'
import ServicesAgreement from './pages/compliance/ServicesAgreement.vue'

import CalendarPage from './pages/services/CalendarPage.vue'
import PurchasePage from './pages/services/PurchasePage.vue'

// import NotFound from './pages/NotFound.vue'

const routes = [
  // 'main' = Dynamic routes for the NavBar
  { path: '/', name: 'Home', component: Home, meta: { group: 'main' } },
  { path: '/about', name: 'About Me', component: AboutMe, meta: { group: 'main' } },
  { path: '/services', name: 'My Services', component: MyServices, meta: { group: 'main' } },
  // { path: '/faq', name: 'FAQ', component: Purchase, meta: { group: 'main' } },
  // { path: '/contact', name: 'Contact Me', component: ContactMe, meta: { group: 'main' } },

  // 'compliance' = Dynamic routes for the hidden compliance pages accessible only from the footer links
  { path: '/disclaimer', name: 'Disclaimer', component: DisclaimerPage, meta: { group: 'compliance' } },
  { path: '/privacy', name: 'Privacy Policy', component: PrivacyPage, meta: { group: 'compliance' } },
  { path: '/servicesagreement', name: 'Services Agreement', component: ServicesAgreement, meta: { group: 'compliance' } },

  // 'service' = Dynamic routes for the services and Acuity pages
  { path: '/calendar', name: 'Calendar', component: CalendarPage, meta: { group: 'service' } },
  { path: '/purchase', name: 'Purchase', component: PurchasePage, meta: { group: 'service' } },

  { path: '/:pathMatch(.*)*', redirect: '/notfound' }

]


export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top smoothly
    return { top: 0, behavior: "smooth" }
  }
})