<template>
	<div v-if="totalPages > 1" class="PaginatorElement">
		<button
			:disabled="currentPage === 1"
			@click="$emit('update:currentPage', currentPage - 1)"
		>
			⇤ Попередня
		</button>
		<span>Сторінка {{ currentPage }} з {{ totalPages }}</span>
		<button
			:disabled="currentPage === totalPages"
			@click="$emit('update:currentPage', currentPage + 1)"
		>
			Наступна ⇥
		</button>
	</div>
</template>

<script setup>
defineProps({
	currentPage: {
		type: Number,
		required: true,
	},
	totalPages: {
		type: Number,
		required: true,
	},
})

defineEmits(['update:currentPage'])
</script>

<style scoped>
.PaginatorElement {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: min(3.5vmin, 1rem);

	button {
		padding: 0.5rem 1rem;
		background: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;

		&:disabled {
			background: #ccc;
			cursor: not-allowed;
		}
	}

	span {
		font-weight: bold;
		min-width: 10.5ch;
	}
}
</style>
