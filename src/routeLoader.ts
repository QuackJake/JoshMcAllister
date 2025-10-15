import { ref, computed } from 'vue'

// Component imports
import Home from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'
import ApproachAndServices from './pages/ApproachAndServices.vue'
import FAQ from './pages/FAQ.vue'
import ContactMe from './pages/ContactMe.vue'

import Cookies from './pages/compliance/Cookies.vue'
import Disclaimer from './pages/compliance/Disclaimer.vue'
import Privacy from './pages/compliance/Privacy.vue'
import ServicesAgreement from './pages/compliance/ServicesAgreement.vue'
import TermsAndConditions from './pages/compliance/TermsAndConditions.vue'

import Calendar from './pages/services/Calendar.vue'
import Purchase from './pages/services/Purchase.vue'
import Schedule from './pages/services/Schedule.vue'

import NotFound from './pages/NotFound.vue'

const mainRoutes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About Me', component: AboutMe},
  { path: '/approachandservices', name: 'Approach & Services', component: ApproachAndServices},
  // Commenting out, add back in later
  // { path: '/faq', name: 'FAQ', component: FAQ},
  { path: '/contact', name: 'Contact Me', component: ContactMe},
]

const complianceRoutes = [
  { path: '/cookies', name: 'Cookies', component: Cookies},
  { path: '/disclaimer', name: 'Disclaimer', component: Disclaimer},
  { path: '/privacy', name: 'Privacy Policy', component: Privacy},
  { path: '/servicesagreement', name: 'Services Agreement', component: ServicesAgreement},
  { path: '/termsandconditions', name: 'Terms & Conditions', component: TermsAndConditions},
]

const servicesRoutes = [
  { path: '/calendar', name: 'Calendar', component: Calendar},
  { path: '/purchase', name: 'Purchase', component: Purchase},
  { path: '/schedule', name: 'Schedule', component: Schedule},
]

// NotFound route object (special case)
const errorRoutes = [
  { path: '/notfound', name: 'Not Found', component: NotFound},
]

const allRoutes = [...mainRoutes, ...complianceRoutes, ...servicesRoutes, ...errorRoutes]

// Route path lookup for fast component resolution
const routesMap: Record<string, any> = {}
for (const route of allRoutes) {
  routesMap[route.path] = route.component
}

// Routing state
const currentPath = ref(window.location.hash.slice(1) || '/')

// Listen to hash changes
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash.slice(1) || '/'
})

// Get the current route object and component
const currentRoute = computed(() =>
  allRoutes.find(route => route.path === currentPath.value) || errorRoutes[0]
)
const currentView = computed(() => routesMap[currentPath.value] || NotFound)

// Navigation helper
function navigate(path: string) {
  window.location.hash = path
}

export {
  mainRoutes,
  complianceRoutes,
  servicesRoutes,
  allRoutes,
  routesMap as routes,
  currentRoute,
  currentView,
  navigate,
  NotFound
}
