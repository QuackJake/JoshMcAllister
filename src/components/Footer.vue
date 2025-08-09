<script setup lang="ts">

</script>

<template>
  <footer class="bg-gray-800 text-white py-4 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm p-4">
      <ul class="flex justify-center list-none gap-8 mb-6">
        <li>
          <a href='#/cookies' class="menu-item">
            Cookies Policy
          </a>
        </li>

        <li>
          <a href="#/disclaimer" class="menu-item">
            Disclaimer
          </a>
        </li>

        <li>
          <a href="#/privacy" class="menu-item">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="#/servicesagreement" class="menu-item">
            Services Agreements
          </a>
        </li>

        <li>
          <a href="#/termsandconditions" class="menu-item">
            Terms & Conditions
          </a>
        </li>
      </ul>
      <p class="text-gray-500">
        © {{ new Date().getFullYear() }} [BUSINESS NAME]. All rights reserved.
      </p>

    </div>
  </footer>
</template>
