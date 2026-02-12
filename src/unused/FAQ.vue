<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- Header -->
    <header class="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div class="mx-auto max-w-7xl px-6 py-8">
        <h1 class="text-4xl font-bold text-slate-900">
          Frequently Asked Questions
        </h1>
        <p class="mt-2 text-slate-600">
          Find answers to common questions about our services
        </p>
      </div>
    </header>

    <!-- FAQ Grid -->
    <main class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          :class="[
            'relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-in-out cursor-pointer hover:shadow-md',
            expandedIndex === index ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'
          ]"
          :style="expandedIndex === index ? {} : { aspectRatio: '2/3' }"
          @click="toggleFaq(index)"
        >
          <!-- Collapsed View -->
          <div
            :class="[
              'flex h-full flex-col justify-between p-6 transition-opacity duration-300',
              expandedIndex === index ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'
            ]"
          >
            <div>
              <div
                :class="[
                  'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white',
                  faq.color
                ]"
              >
                <component
                  :is="faq.icon"
                  class="h-6 w-6"
                />
              </div>
              <h3 class="text-lg font-semibold text-slate-900 leading-snug">
                {{ faq.question }}
              </h3>
            </div>
            <div class="flex items-center text-sm font-medium text-slate-500">
              <span>Click to expand</span>
              <svg
                class="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <!-- Expanded View -->
          <div
            :class="[
              'flex h-full flex-col p-6 transition-opacity duration-300',
              expandedIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'
            ]"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                :class="[
                  'inline-flex h-12 w-12 items-center justify-center rounded-xl text-white flex-shrink-0',
                  faq.color
                ]"
              >
                <component
                  :is="faq.icon"
                  class="h-6 w-6"
                />
              </div>
              <button
                class="ml-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                @click.stop="toggleFaq(index)"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4 leading-snug">
              {{ faq.question }}
            </h3>
            <p class="text-slate-600 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

// Icon components as functional components
const QuestionMarkCircle = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const CreditCard = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' })
])

const Truck = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' })
])

const Shield = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const Refresh = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' })
])

const Users = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' })
])

const Clock = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const Chat = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
])

interface FAQ {
  question: string
  answer: string
  icon: object
  color: string
}

const faqs = ref<FAQ[]>([
  {
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply sign up for an account, complete your profile, and you\'ll have immediate access to all our features. Our onboarding wizard will guide you through the initial setup process step by step.',
    icon: QuestionMarkCircle,
    color: 'bg-blue-500'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal, Apple Pay, and Google Pay for your convenience. All transactions are secured with industry-standard encryption.',
    icon: CreditCard,
    color: 'bg-emerald-500'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 5-7 business days. Express shipping is available and delivers within 2-3 business days. International orders may take 10-14 business days depending on your location. You\'ll receive tracking information once your order ships.',
    icon: Truck,
    color: 'bg-amber-500'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level 256-bit SSL encryption to protect your data. Our servers are monitored 24/7, and we comply with GDPR and other international data protection regulations. We never share your personal information with third parties.',
    icon: Shield,
    color: 'bg-purple-500'
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee on all purchases. If you\'re not completely satisfied, contact our support team for a full refund. Digital products are refundable within 14 days if you haven\'t accessed the content.',
    icon: Refresh,
    color: 'bg-rose-500'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate any charges. There are no penalties for changing plans, and you can switch as often as needed.',
    icon: Users,
    color: 'bg-cyan-500'
  },
  {
    question: 'What are your support hours?',
    answer: 'Our support team is available Monday through Friday, 9 AM to 6 PM EST. We also offer 24/7 email support with responses typically within 2 hours. Premium plan members have access to priority support with faster response times.',
    icon: Clock,
    color: 'bg-indigo-500'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via email at support@example.com, through our live chat feature available in your dashboard, or by phone at 1-800-SUPPORT. We also have an extensive knowledge base with articles and video tutorials.',
    icon: Chat,
    color: 'bg-teal-500'
  }
])

const expandedIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>