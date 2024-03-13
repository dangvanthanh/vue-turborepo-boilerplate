<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import { useValidation } from '../composables'

const validationSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Please enter a valid email address'),
})

const form = ref({ name: '', email: '' })

const { validate, errors, isValid, getError, scrollToError } = useValidation(
	validationSchema,
	form,
	{ mode: 'lazy' },
)

const handleSubmit = async () => {
	await validate()

	if (isValid.value) {
		console.log('Form is validation!')
	} else {
		console.error('Form is invalid!')
		scrollToError()
	}
}
</script>

<template>
  <section>
    <h1>Contact Us</h1>
    <div>{{ errors }}</div>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" />
      <span>{{ getError('name') }}</span>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="form.email" />
      <span>{{ getError('email') }}</span>
    </div>
    <button @click="handleSubmit">Send</button>
  </section>
</template>
