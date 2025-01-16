<template>
	<main>
		<h2>Офіційний курс гривні щодо іноземних валют 📊</h2>
		<p v-if="date">на дату: {{ date2show(date) }}</p>

		<!-- Використовуємо компонент CurrenciesList -->
		<CurrenciesList
			:currencies="currencies"
			:current-page="currentPage"
			:items-per-page="itemsPerPage"
			@update:current-page="currentPage = $event"
		/>
	</main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import fetchCurrencies from '@/utils/api'
import date2show from '@/utils/date2show'
import date4api from '@/utils/date4api'
import CurrenciesList from '@/components/CurrenciesList.vue'

// Стан
const currencies = ref([])
const date = ref(null)
const currentPage = ref(1)
const itemsPerPage = 10

// Завантаження валют
const loadCurrencies = async () => {
	try {
		date.value = new Date() // Поточна дата
		const today = date4api(date.value)

		const cachedData = localStorage.getItem(today)

		if (cachedData) {
			currencies.value = JSON.parse(cachedData)
			console.log('Дані завантажені з кешу.')
		} else {
			const data = await fetchCurrencies()
			currencies.value = data

			// Зберігаємо в кеш
			localStorage.setItem(today, JSON.stringify(data))

			console.log('Дані завантажені з API.')
		}

		// Скидаємо сторінку на першу після завантаження
		currentPage.value = 1
	} catch (error) {
		console.error('Помилка при завантаженні даних:', error)
	}
}

// Завантаження при монтуванні
onMounted(() => {
	loadCurrencies()
})
</script>

<style lang="scss" scoped>
main {
	p {
		font-style: italic;
		color: #888;
	}

	ol {
		list-style: none;

		li {
			margin-bottom: 0.5rem;
			font-size: 1rem;
			font-weight: bold;
		}
	}
}
</style>
