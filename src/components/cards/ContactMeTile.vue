<script setup>
  import { ref } from 'vue';

  const form = ref({
    name: '',
    email: '',
    message: ''
  });

  const errors = ref({});

  const validate = () => {
    errors.value = {};

    if (!form.value.name.trim()) {
      errors.value.name = 'Name is required.';
    } else if (form.value.name.length < 2) {
      errors.value.name = 'Name must be at least 2 characters.';
    }

    if (!form.value.email.trim()) {
      errors.value.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
      errors.value.email = 'Email is invalid.';
    }

    if (!form.value.message.trim()) {
      errors.value.message = 'Message is required.';
    } else if (form.value.message.length < 10) {
      errors.value.message = 'Message must be at least 10 characters.';
    }

    return Object.keys(errors.value).length === 0;
  };

  const sendForm = async () => {
    if (!validate()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
      });

      const data = await response.json();
      console.log('Server Response:', data);
    } catch (error) {
      console.error('Network or server error:', error);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    sendForm();
  };
</script>

<template>
  <form
    class="max-w-2xl h-auto mx-auto p-4 space-y-3 bg-gray-50 rounded-lg shadow-sm"
    @submit.prevent="onSubmit"
  >
    <input
      id="name"
      v-model="form.name"
      type="text"
      placeholder="Name"
      class="border p-2 w-full rounded"
    >
    <p
      v-if="errors.name"
      class="text-red-600 text-xs"
    >
      {{ errors.name }}
    </p>

    <input
      id="email"
      v-model="form.email"
      type="email"
      placeholder="Email"
      class="border p-2 w-full rounded"
    >
    <p
      v-if="errors.email"
      class="text-red-600 text-xs"
    >
      {{ errors.email }}
    </p>

    <textarea
      id="message"
      v-model="form.message"
      placeholder="Message"
      rows="3"
      class="border p-2 w-full rounded"
    />
    <p
      v-if="errors.message"
      class="text-red-600 text-xs m-y-0"
    >
      {{ errors.message }}
    </p>

    <button
      type="submit"
      class="w-full"
    >
      Send Message
    </button>
  </form>
</template>