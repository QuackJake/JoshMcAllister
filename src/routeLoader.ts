import { ref, computed } from 'vue'

// Pages
import Home from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'
import ApproachAndServices from './pages/ApproachAndServices.vue'
import FAQ from './pages/FAQ.vue'
import ContactMe from './pages/ContactMe.vue'

// Compliance
import Cookies from './pages/compliance/Cookies.vue'
import Disclaimer from './pages/compliance/Disclaimer.vue'
import Privacy from './pages/compliance/Privacy.vue'
import ServicesAgreement from './pages/compliance/ServicesAgreement.vue'
import TermsAndConditions from './pages/compliance/TermsAndConditions.vue'

//services
import Calendar from './pages/services/Calendar.vue'
import Purchase from './pages/services/Purchase.vue'
import Schedule from './pages/services/Schedule.vue'

import NotFound from './pages/NotFound.vue'

// Routes definition
const routes: Record<string, any> = {
  //main pages
  '/': Home,
  '/about': AboutMe,
  '/approachandservices': ApproachAndServices,
  '/faq': FAQ,
  '/contact': ContactMe,
  //compliance
  '/cookies': Cookies,
  '/disclaimer': Disclaimer,
  '/privacy': Privacy,
  '/servicesagreement': ServicesAgreement,
  '/termsandconditions': TermsAndConditions,
  //services
  '/calendar': Calendar,
  '/purchase': Purchase,
  '/schedule': Schedule,
  //error pages
  '/notfound': NotFound,
}

// Routing state
const currentPath = ref(window.location.hash.slice(1) || '/')

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash.slice(1) || '/'
})

// Get the current component
const currentView = computed(() => routes[currentPath.value] || NotFound)

// Navigation helper
function navigate(path: string) {
  window.location.hash = path
}

export { routes, currentView, navigate, NotFound }
