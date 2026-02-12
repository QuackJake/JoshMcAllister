<script setup>
import { onMounted } from "vue"

const CALENDLY_URL = "https://calendly.com/jake-qbushed"

onMounted(() => {
  // Load Calendly CSS (once)
  if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    document.head.appendChild(link)
  }

  // Load Calendly script (once)
  if (!window.Calendly) {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = initCalendly
    document.body.appendChild(script)
  } else {
    initCalendly()
  }

  function initCalendly() {
    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: "Schedule time with me",
      color: "#0069ff",
      textColor: "#ffffff",
      branding: true,
    })
  }
})
</script>

<template>
  <CalendlyBadge />
</template>