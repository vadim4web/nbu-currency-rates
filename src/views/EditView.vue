<template>
	<main class="edit-view">
		<h2>Змінити запис про валюту ✏️</h2>

		<form class="edit-form" @submit.prevent="saveCurrency">
			<fieldset>
				<legend>Інформація ℹ️</legend>

				<label :data-date="currency.exchangedate" for="cc">Код валюти</label>
				<input id="cc" v-model="currency.cc" disabled readonly type="text" />

				<label for="txt">Назва валюти</label>
				<input id="txt" v-model="currency.txt" type="text" />

				<label for="rate">Курс</label>
				<input id="rate" v-model="currency.rate" step="0.0001" type="number" />
			</fieldset>

			<fieldset class="actions">
				<legend>Дії 🛠️</legend>

				<button class="btn save" type="submit">Зберегти<br />💾</button>
				<button class="btn cancel" type="button" @click="emptyTempAndBack">
					Відмінити<br />❌
				</button>
				<button class="btn delete" type="button" @click="deleteCurrency">
					Видалити<br />🗑️
				</button>
			</fieldset>
		</form>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currency = ref({
	cc: '',
	txt: '',
	rate: '',
	exchangedate: '',
})

const STORAGE_KEY_ORIGINAL = 'currency_original'
const STORAGE_KEY_EDITED = 'currency_edited'

onMounted(() => {
	const currencyData = JSON.parse(localStorage.getItem(STORAGE_KEY_ORIGINAL))
	if (currencyData) {
		currency.value = { ...currencyData }
	}
})

const emptyTempAndBack = () => {
  localStorage.removeItem(STORAGE_KEY_ORIGINAL)
	router.go(-1)
}

const saveCurrency = () => {
	const editedCurrencies =
		JSON.parse(localStorage.getItem(STORAGE_KEY_EDITED)) || {}
	editedCurrencies[route.params.id] = currency.value
	localStorage.setItem(STORAGE_KEY_EDITED, JSON.stringify(editedCurrencies))
  emptyTempAndBack()
}

const deleteCurrency = () => {
	const editedCurrencies =
		JSON.parse(localStorage.getItem(STORAGE_KEY_EDITED)) || {}
	delete editedCurrencies[route.params.id]
	localStorage.setItem(STORAGE_KEY_EDITED, JSON.stringify(editedCurrencies))
  emptyTempAndBack()
}
</script>

<style scoped>
.edit-view {
	padding: 2.5rem;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.edit-form {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

fieldset {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 1rem;
}

legend {
	padding: 0 0.5rem;
	font-weight: bold;
}

label {
	display: block;
	margin-bottom: 0.5rem;
	font-weight: bold;
}

label[for='cc'] {
	position: relative;
}

label[for='cc']::before {
	position: absolute;
	top: 0.25rem;
	left: 0;
	content: attr(data-date);
	font-size: 0.75rem;
	font-style: italic;
	font-weight: normal;
}

input {
	width: 100%;
	padding: 0.5rem;
	margin-bottom: 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
}

.actions {
	display: flex;
	gap: 1rem;
}

.btn {
	flex: 1;
	padding: 1rem;
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;
	transition: background 0.3s ease;
}

.save {
	background: #4caf50;
	color: #fff;
}

.save:hover {
	background: #45a049;
}

.cancel {
	background: #f44336;
	color: #fff;
}

.cancel:hover {
	background: #e53935;
}

.delete {
	background: #ff9800;
	color: #fff;
}

.delete:hover {
	background: #fb8c00;
}
</style>
