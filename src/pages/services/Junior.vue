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
        Junior-Year Services
    </section>

    <div class="calendly-wrapper">
        <div
        ref="calendly"
        class="calendly-inline-widget"
        data-url="https://calendly.com/jake-qbushed/test-2"
        style="min-width:320px;height:700px;"
        ></div>
    </div>
</template>

<style scoped>
    .calendly-wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    }
</style>