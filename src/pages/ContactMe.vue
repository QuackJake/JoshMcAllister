<!-- Form.vue -->
<script setup>
import { ref } from 'vue'
// import { mount } from '@vue/test-utils'
import FormComponent from '../components/FormComponent.vue'

// test('submits a form', async () => {
// //   const wrapper = mount(FormComponent)

//   await wrapper.find('input[type=email]').setValue('name@mail.com')
//   await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
//   await wrapper.find('select').setValue('moscow')
//   await wrapper.find('input[type=checkbox]').setValue()
//   await wrapper.find('input[type=radio][value=monthly]').setValue()
// })
</script>

<template>
  <div>
    <FormComponent class="text-black"/>
  </div>
</template>