<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Find answers to common questions about our consulting services and how we can help your business grow.
      </p>
    </div>

    <!-- FAQ Items -->
    <div class="space-y-4">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
      >
        <!-- Question Header -->
        <button
          @click="toggleFaq(index)"
          class="w-full px-6 py-5 text-left flex items-center justify-between duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          :aria-expanded="openFaqs.includes(index)"
        >
          <h3 class="text-lg font-semibold text-gray-900 pr-4">
            {{ faq.question }}
          </h3>
          <div class="flex-shrink-0">
            <svg 
              :class="['w-5 h-5 text-gray-500 transition-transform duration-200', openFaqs.includes(index) ? 'rotate-180' : '']"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <!-- Answer Content -->
        <div 
          v-show="openFaqs.includes(index)"
          class="px-6 pb-5 text-left text-gray-700 leading-relaxed"
        >
          <div class="pt-2 border-t border-gray-100">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="mt-12 text-center bg-gray-50 rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">
        Still have questions?
      </h2>
      <p class="text-gray-600 mb-6">
        We're here to help. Get in touch with our team for personalized assistance.
      </p>
      <button @click="navigate('/contact')" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Contact Us Today
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigate } from '../routeLoader'

const openFaqs = ref([])

const faqs = ref([
  {
    question: "What types of consulting services do you offer?",
    answer: "We provide comprehensive business consulting services including strategic planning, operational optimization, digital transformation, market analysis, and organizational development. Our expertise spans across various industries and business sizes."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "Project duration varies based on scope and complexity. Short-term engagements may last 4-8 weeks, while comprehensive transformations can extend 6-12 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including project-based fees, hourly rates, and retainer agreements. Pricing depends on project scope, timeline, and required expertise. We provide transparent quotes with no hidden costs."
  },
  {
    question: "Do you work with small businesses or only large corporations?",
    answer: "We work with businesses of all sizes, from startups and small businesses to Fortune 500 companies. Our approach is tailored to each client's specific needs, resources, and growth stage."
  },
  {
    question: "What makes your consulting approach different?",
    answer: "Our methodology combines data-driven insights with practical implementation strategies. We focus on sustainable solutions that deliver measurable results, and we work closely with your team to ensure knowledge transfer and long-term success."
  },
  {
    question: "How do you measure the success of a consulting project?",
    answer: "Success metrics are defined collaboratively at project onset and may include KPIs like revenue growth, cost reduction, efficiency improvements, or market share gains. We provide regular progress reports and final impact assessments."
  },
  {
    question: "Can you provide references from previous clients?",
    answer: "Yes, we can provide case studies and references from previous clients who have agreed to share their experiences. We respect client confidentiality and will only share information with proper authorization."
  },
  {
    question: "What is the first step to get started?",
    answer: "The process begins with a complimentary consultation where we discuss your challenges, goals, and potential solutions. This allows us to understand your needs and propose a customized approach for your specific situation."
  }
])

const toggleFaq = (index) => {
  const faqIndex = openFaqs.value.indexOf(index)
  if (faqIndex > -1) {
    openFaqs.value.splice(faqIndex, 1)
  } else {
    openFaqs.value.push(index)
  }
}
</script>