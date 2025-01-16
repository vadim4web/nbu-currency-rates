<template>
	<main>
		<h2>Офіційний курс гривні щодо іноземних валют 📅</h2>

		<p>
			🔍 пошук за датою:
			<input
				type="date"
				:value="dateInput"
				@input="updateDate($event.target.value)"
			/>
		</p>


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
import CurrenciesListComponent from '@/components/CurrenciesListComponent.vue'
import fetchCurrencies from '@/utils/api'
import date4api from '@/utils/date4api'
import date4input from '@/utils/date4input'

const currencies = ref([])
const date = ref(null)
const currentPage = ref(1)
const itemsPerPage = 10
const dateInput = ref(date4input(new Date()))

const loadCurrencies = async selectedDate => {
	try {
		date.value = new Date(selectedDate)
		const apiDate = date4api(date.value)
		const cachedData = localStorage.getItem(apiDate)

		if (cachedData) {
			currencies.value = JSON.parse(cachedData)
			console.log('Дані завантажені з кешу.')
		} else {
			const data = await fetchCurrencies(apiDate)
			currencies.value = data
			localStorage.setItem(apiDate, JSON.stringify(data))
			console.log('Дані завантажені з API.')
		}

		currentPage.value = 1
	} catch (error) {
		console.error('Помилка при завантаженні даних:', error)
	}
}

const updateDate = newDate => {
	console.log('Вибрана дата:', newDate)
	const parsedDate = new Date(newDate)
	dateInput.value = date4input(parsedDate)
	loadCurrencies(parsedDate)
}

onMounted(() => loadCurrencies(dateInput.value))
</script>

<style lang="scss" scoped>
main input[type='date'] {
  margin-left: 0.5rem;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
}
</style>
