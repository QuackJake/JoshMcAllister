<script setup>
import ServiceCard from '@/components/cards/ServiceCard.vue';
import assets from '@/assets/assets';
import ContactMeCTA from '@/components/common/ContactMeCTA.vue';
import ButtonWithArrow from "@/components/common/ButtonWithArrow.vue";

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

const features = [
  {
    title: "Goal Clarity",
    description:
      "Identify your priorities and create a roadmap to meet them effectively.",
  },
  {
    title: "Strategic Planning",
    description:
      "Get expert advice on application strategy, essay guidance, and decision-making.",
  },
  {
    title: "Comprehensive Success",
    description:
      "Combine multiple sessions and services to cover every aspect of the process.",
  },
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

    <main class="max-w-6xl mx-auto px-4">
      <!-- Bundles -->
      <div class="max-w-4xl mx-auto mb-6">
        <ServiceCard
          title="Bundles and Packages"
          :show-price="false"
          description="Individual services include one personalized session each, while the bundled package provides multiple meetings to ensure a comprehensive, full experience."
          :features="enterpriseServiceFeatures"
          featured
        />
      </div>

      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        <ServiceCard
          title="Junior-Year"
          price="75"
          period="hour"
          :show-price="true"
          description="Junior-Year Services focus on exploration, planning academics/extracurriculars, and creating a personalized college roadmap."
          :features="juniorYearFeatures"
          button-text="Choose Plan"
          to="/junior"
        />

        <ServiceCard
          title="Senior-Year"
          price="75"
          period="hour"
          :show-price="true"
          description="Senior-Year services focus on finalizing applications, essays, and college choices with personalized guidance and support."
          :features="seniorYearFeatures"
          button-text="Get Started"
          to="/senior"
        />
      </div>
      <div class="max-w-4xl mx-auto text-center mt-8">
        <p class="text-lg text-muted-foreground mb-4">
          Ready to take the next step? Schedule your initial consultation and get personalized guidance for your college journey.
        </p>
        <ButtonWithArrow
          text="Schedule Your Initial Consultation"
          to="/calendar"
          class="mx-auto"
        />
      </div>

    </main>

    <div class="h-[2px] bg-black w-3/4 mx-auto my-16" /> <!-- horizontal line -->

    <!-- Features Highlight -->
    <div>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-bold mb-12">
          Results Tailored for Each Step
        </h2>

        <div class="grid md:grid-cols-3 gap-12">
          <div
            v-for="feature in features"
            :key="feature.title"
          >
            <div
              class="rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <img
                :src="assets.test_logo"
                alt=""
                class="w-16 h-16"
              >
            </div>

            <h3 class="font-semibold mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-muted-foreground">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="hr-line">

  <ContactMeCTA />
</template>
