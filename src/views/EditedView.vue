<template>
	<main class="edited-view">
		<h2>Змінені курси валют 📝</h2>

		<p v-if="currencies.length === 0">Немає змінених валют...</p>

		<currencies-list-component
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
import CurrenciesListComponent from '@/components/CurrenciesListComponent.vue'

const currencies = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(10)

const STORAGE_KEY_EDITED = 'currency_edited'

onMounted(() => {
	const editedCurrencies =
		JSON.parse(localStorage.getItem(STORAGE_KEY_EDITED)) || {}
	currencies.value = Object.values(editedCurrencies)
})
</script>
