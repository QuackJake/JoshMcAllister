<script setup>
import { ref, computed } from 'vue'

const form = ref({
  email: '',
  description: ''
})
const emit = defineEmits(['submit'])

// Simple validation: check if email and description are non-empty
const isValid = computed(() => {
  return form.value.email.trim() !== '' && form.value.description.trim() !== ''
})

const submit = () => {
  if (!isValid.value) {
    // Optionally alert user or just prevent submit
    alert('Please fill in both email and description.')
    return
  }
  emit('submit', { ...form.value })
  console.log(form.value)
}
</script>

<template>
  <form @submit.prevent="submit" class="text-black bg-amber-500 p-4 space-y-4">
    <input
      type="email"
      v-model="form.email"
      class="bg-white p-2 border rounded w-full"
      placeholder="Email"
      required
    />
    <textarea
      v-model="form.description"
      class="bg-white p-2 border rounded w-full"
      placeholder="Description"
      required
    ></textarea>
    <button
      type="submit"
      class="bg-white text-black px-4 py-2 rounded disabled:opacity-50"
      :disabled="!isValid"
    >
      Submit
    </button>
  </form>
</template>
