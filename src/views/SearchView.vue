<template>
	<main>
		<h2>Офіційний курс гривні щодо іноземних валют 📅</h2>
		<!-- Пошук за датою -->
		<p>
			🔍 пошук за датою:
			<input
				type="date"
				:value="dateInput"
				@input="updateDate($event.target.value)"
			/>
		</p>

		<!-- Виведення списку валют -->
		<CurrenciesList
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
import CurrenciesList from '@/components/CurrenciesList.vue'
import date4input from '@/utils/date4input'

// Стан
const currencies = ref([])
const date = ref(null)
const currentPage = ref(1)
const itemsPerPage = 10
const dateInput = ref(date4input(new Date())) // Формат дати для input

// Завантаження валют
const loadCurrencies = async selectedDate => {
	try {
		date.value = new Date(selectedDate) // Встановлюємо вибрану дату
		const apiDate = date4api(date.value) // Формат дати для API

		const cachedData = localStorage.getItem(apiDate) // Перевіряємо наявність даних у кеші

		if (cachedData) {
			currencies.value = JSON.parse(cachedData) // Якщо дані є, використовуємо кеш
			console.log('Дані завантажені з кешу.')
		} else {
			const data = await fetchCurrencies(apiDate) // Якщо ні — завантажуємо з API
			currencies.value = data
			// Зберігаємо в кеш
			localStorage.setItem(apiDate, JSON.stringify(data))
			console.log('Дані завантажені з API.')
		}

		// Скидаємо сторінку на першу після завантаження нових даних
		currentPage.value = 1
	} catch (error) {
		console.error('Помилка при завантаженні даних:', error)
	}
}

// Оновлення дати
const updateDate = newDate => {
	console.log('Вибрана дата:', newDate)
	const parsedDate = new Date(newDate) // Перетворення дати з input
	dateInput.value = date4input(parsedDate) // Форматування дати для input
	loadCurrencies(parsedDate) // Завантаження валют для вибраної дати
}

// Завантаження даних при монтуванні компонента
onMounted(() => {
	loadCurrencies(dateInput.value) // Завантаження валют для поточної дати
})
</script>

<style lang="scss" scoped>
main {
	p {
		font-style: italic;
		color: #888;
	}

	input[type='date'] {
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
}
</style>
