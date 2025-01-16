<template>
	<main class="edited-view">
		<h2>📝 Змінені курси валют</h2>

		<p v-if="currencies.length === 0">Немає змінених валют...</p>

		<!-- Використання компонента CurrenciesList -->
		<CurrenciesList
			v-else
			:currencies="currencies"
			:current-page="currentPage"
			:items-per-page="itemsPerPage"
			@update:current-page="currentPage = $event"
		/>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CurrenciesList from '@/components/CurrenciesList.vue'

// Стан сторінки
const currencies = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(10)

// Завантаження змінених валют із localStorage
const STORAGE_KEY_EDITED = 'currency_edited'

onMounted(() => {
	const editedCurrencies =
		JSON.parse(localStorage.getItem(STORAGE_KEY_EDITED)) || {}
	currencies.value = Object.values(editedCurrencies) // Перетворюємо об'єкт у масив
})
</script>

<style lang="scss" scoped>
.edited-view {
	h2 {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	p {
		text-align: center;
		font-size: 1rem;
		color: #666;
		margin-top: 1rem;
	}
}
</style>
