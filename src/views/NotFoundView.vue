<template>
	<main class="not-found">
		<h2>🚧 404 | Сторінка не знайдена</h2>
		<button @click="goBack">ПОВЕРНУТИСЯ</button>
	</main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
	router.go(-1)
}
</script>
