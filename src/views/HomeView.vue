<template>
	<main>
		<h2>Офіційний курс гривні щодо іноземних валют 📊</h2>
		<p v-if="date">на дату: {{ date2show(date) }}</p>

		<currencies-list-component
			:currencies="currencies"
			:current-page="currentPage"
			:items-per-page="itemsPerPage"
			@update:current-page="currentPage = $event"
		/>
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import fetchCurrencies from '@/utils/api'
import date2show from '@/utils/date2show'
import date4api from '@/utils/date4api'
import CurrenciesListComponent from '@/components/CurrenciesListComponent.vue'

const currencies = ref([])
const date = ref(null)
const currentPage = ref(1)
const itemsPerPage = 10

const loadCurrencies = async () => {
	try {
		date.value = new Date()
		const today = date4api(date.value)
		const cachedData = localStorage.getItem(today)

		if (cachedData) {
			currencies.value = JSON.parse(cachedData)
		} else {
			const data = await fetchCurrencies()
			currencies.value = data
			localStorage.setItem(today, JSON.stringify(data))
		}

		currentPage.value = 1
	} catch (error) {
		console.error('Помилка при завантаженні даних:', error)
	}
}

onMounted(() => loadCurrencies())
</script>
