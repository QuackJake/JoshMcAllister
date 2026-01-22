<script setup lang="ts">
    import { onMounted, ref } from 'vue'

    const calendly = ref<HTMLElement | null>(null)

    function loadCalendlyScript() {
    if (window && (window as any).Calendly) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    }

    onMounted(() => {
    loadCalendlyScript()
    })
</script>

<template> 
    <section>
        My Approach and Services
    </section>

    <!-- Calendly Example -->
    <div class="calendly-wrapper">
        <div
        ref="calendly"
        class="calendly-inline-widget"
        data-url="https://calendly.com/jake-qbushed"
        style="min-width:320px;height:700px;"
        ></div>
    </div>

    <!-- Acuity Example -->
    <!-- <iframe 
        src="https://app.acuityscheduling.com/schedule.php?owner=33300429&ref=embedded_csp"  
        title="Schedule Appointment" 
        width="100%" 
        height="800" 
        frameBorder="0" 
        allow="payment">
    </iframe> -->
</template>

<style scoped>
    .calendly-wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    }
</style>