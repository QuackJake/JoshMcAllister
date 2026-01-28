<script setup>
import ServiceCard from "../components/tiles/ServiceCard.vue";
import assets from '../assets/assets';

import { useRouter } from 'vue-router'

const juniorYearFeatures = [
  "College and Interest discovery",
  "Academic and Extracurricular planning",
  "College Essay brainstorming",
  "Accurate testing timelines",
  "A list of Preliminary Colleges",
];

const seniorYearFeatures = [
  "Finalize college lists and applications",
  "Refine essays and personal statements",
  "Get personalized scholarship and aid support",
  "Track applications, interviews, and deadlines",
  "Build confidence in college decisions",
];

const enterpriseServiceFeatures = [
  "Unlimited pages and custom architecture",
  "Dedicated account manager",
  "Custom API integrations",
  "Advanced security features",
  "24/7 priority support",
  "SLA guarantees",
];
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="pt-16 pb-12 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">
        My Services
      </h1>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
        Choose the perfect plan for your business. Compare our Standard and Professional services, or explore our Enterprise solutions.
      </p>
    </header>

    <!-- Main -->
    <main class="max-w-6xl mx-auto px-4 pb-20">

      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        
        <ServiceCard
          title="Junior-Year"
          price="499"
          period="meeting"
          :showPrice="true"
          description="Junior-Year Services focus on exploration, planning academics/extracurriculars, and creating a personalized college roadmap."
          :features="juniorYearFeatures"
          buttonText="Choose Plan"
          to="/junior"
        >
        </ServiceCard>

        <ServiceCard
          title="Senior-Year"
          price="999"
          period="meeting"
          :showPrice="true"
          description="Senior-Year services focus on finalizing applications, essays, and college choices with personalized guidance and support."
          :features="seniorYearFeatures"
          buttonText="Get Started"
          to="/senior"
        >
        </ServiceCard>
      </div>

      <!-- Bundles -->
      <div class="max-w-4xl mx-auto">
        <ServiceCard
          title="Bundles and Packages"
          :showPrice="false"
          description="Individual services include one personalized session each, while the bundled package provides multiple meetings to ensure a comprehensive, full experience."
          :features="enterpriseServiceFeatures"
          buttonText="Contact Me"
          to="/calendar"
        >
        </ServiceCard>
      </div>
    </main>

    <!-- Features Highlight -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-bold mb-12">
          Results Tailored for Each Step
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="w-16 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <img
                :src="assets.test_logo"
                alt=""
              />
            </div>
            <h3 class="font-semibold mb-2">Goal Clarity</h3>
            <p class="text-muted-foreground ">Identify your priorities and create a roadmap to meet them effectively..</p>
          </div>

          <div>
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <img
                :src="assets.test_logo"
                alt=""
              />
            </div>
            <h3 class="font-semibold mb-2">Strategic Planning</h3>
            <p class="text-muted-foreground">Get expert advice on application strategy, essay guidance, and decision-making.</p>
          </div>

          <div>
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <img
                :src="assets.test_logo"
                alt=""
              />
            </div>
            <h3 class="font-semibold mb-2">Comprehensive Success</h3>
            <p class="text-muted-foreground">Combine multiple sessions and services to cover every aspect of the process.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
