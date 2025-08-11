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
  <form @submit="onSubmit" class="max-w-md mx-auto p-4">
    <div class="mb-4">
      <label for="name" class="block font-semibold mb-1">Name</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        placeholder="Your name"
        class="border p-2 w-full"
      />
      <p v-if="errors.name" class="text-red-600 text-sm">{{ errors.name }}</p>
    </div>

    <div class="mb-4">
      <label for="email" class="block font-semibold mb-1">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="Your email"
        class="border p-2 w-full"
      />
      <p v-if="errors.email" class="text-red-600 text-sm">{{ errors.email }}</p>
    </div>

    <div class="mb-4">
      <label for="message" class="block font-semibold mb-1">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        placeholder="Your message"
        rows="5"
        class="border p-2 w-full"
      ></textarea>
      <p v-if="errors.message" class="text-red-600 text-sm">{{ errors.message }}</p>
    </div>

    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      Send
    </button>
  </form>
</template>
