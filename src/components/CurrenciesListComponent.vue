<template>
	<section class="currencies-list">
		<ol v-if="pagedCurrencies.length" class="currency-items">
			<li
				v-for="(C, i) in pagedCurrencies"
				:key="i"
				:data-attr-path="date2edit(C)"
				:data-currency="JSON.stringify(C)"
			>
				<span class="currency-info">
					<strong
						class="currency-code"
						:data-date="C.exchangedate"
						:data-flag="getFlag(C.cc)">{{
						C.cc
					}}
				</strong>
					| <span class="currency-name" :title="C.txt">{{ C.txt }}</span> |
					<span class="currency-rate" :title="C.rate">{{
						C.rate.toFixed(4)
					}}</span>
				</span>

				<button class="btn edit" title="Змінити" @click="startEdit(C)">
					📝
				</button>
			</li>
		</ol>

		<p v-else>Завантаження даних...</p>

		<paginator-component
			:current-page="currentPage"
			:total-pages="totalPages"
			@update:current-page="$emit('update:currentPage', $event)"
		/>
	</section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import date2edit from '@/utils/date2edit'
import PaginatorComponent from '@/components/PaginatorComponent.vue'

const { currencies, currentPage, itemsPerPage } = defineProps({
	currencies: {
		type: Array,
		required: true,
	},
	currentPage: {
		type: Number,
		required: true,
	},
	itemsPerPage: {
		type: Number,
		default: 10,
	},
})

defineEmits(['update:currentPage'])

const router = useRouter()
const STORAGE_KEY_ORIGINAL = 'currency_original'

const pagedCurrencies = computed(() => {
	const start = (currentPage - 1) * itemsPerPage
	return currencies.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => {
	return Math.ceil(currencies.length / itemsPerPage)
})

const startEdit = currency => {
	localStorage.setItem(STORAGE_KEY_ORIGINAL, JSON.stringify(currency))
	const key = date2edit(currency)
	router.push(`/edit/${key}`)
}

const getFlag = code => String.fromCodePoint(...code.slice(0, 2).split('').map(ch => ch.charCodeAt(0) + 0x1f1a5))
</script>

<style lang="scss" scoped>
.currencies-list {
	margin-top: 0.5rem;
	max-width: 95vw;

	.currency-items {
		list-style: none;
		padding: 0;

		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem 3.5rem 0.5rem 0.5rem;
			margin-bottom: 0.5rem;
			border-radius: 8px;
			border: 1px solid #ddd;
			position: relative;

			&:hover {
				background: #f1f1f180;
			}

			.currency-info {
				font-size: 1rem;
				display: flex;
				gap: 0.5rem;
			}

			.currency-code {
				width: 3.5ch;
				position: relative;
				height: 100%;
				align-self: flex-start;
				align-content: flex-start;
				line-height: 1.5ch;
				background: linear-gradient(90deg, #ff000080, #00800080, #0000ff80);
			}

			.currency-code::before {
				position: absolute;
				bottom: -2ch;
				left: -0.5ch;
				content: attr(data-date);
				line-height: 1ch;
				font-size: 0.55rem;
				font-weight: normal;
				font-style: italic;
				background: linear-gradient(90deg, #ff000080, #00800080, #0000ff80);
			}

			.currency-code::after {
				position: absolute;
				top: 0.25ch;
				left: -0.25ch;
				content: attr(data-flag);
				line-height: 1ch;
				font-size: 3.5ch;
				font-family: "Noto Color Emoji", serif;
				font-weight: 400;
				font-style: normal;
				z-index: -1;
			}

			.currency-name {
				width: max(150px, 35vw);
				max-width: 35vw;
			}

			.currency-rate {
				width: 9ch;
				max-width: 9ch;
			}

			.currency-name,
			.currency-rate {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.btn {
				position: absolute;
				right: 0;
				height: 100%;
				padding: 0.4rem 0.8rem;
				border: none;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-top-right-radius: 8px;
				border-bottom-right-radius: 8px;
				background-color: #007bff;
				color: #fff;
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #0056b3;
				}
			}
		}
	}
}
</style>
