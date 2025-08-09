// src/router/routes.ts

import Home from '../pages/HomePage.vue';
import AboutMe from '../pages/AboutMe.vue';
import ApproachAndServices from '../pages/ApproachAndServices.vue';
import FAQ from '../pages/FAQ.vue';
import ContactMe from '../pages/ContactMe.vue';

import Cookies from '../pages/compliance/Cookies.vue';
import Disclaimer from '../pages/compliance/Disclaimer.vue';
import Privacy from '../pages/compliance/Privacy.vue';
import ServicesAgreement from '../pages/compliance/ServicesAgreement.vue';
import TermsAndConditions from '../pages/compliance/TermsAndConditions.vue';
import NotFound from '../pages/NotFound.vue';

const routes: Record<string, any> = {
  '/': Home,
  '/about': AboutMe,
  '/approachandservices': ApproachAndServices,
  '/faq': FAQ,
  '/contact': ContactMe,
  '/cookies': Cookies,
  '/disclaimer': Disclaimer,
  '/privacy': Privacy,
  '/servicesagreement': ServicesAgreement,
  '/termsandconditions': TermsAndConditions,
  '/notfound': NotFound,
};

export { routes, NotFound };