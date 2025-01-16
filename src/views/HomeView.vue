<template>
  <main>
    <h2>
      Головна
    </h2>

    <ol v-if="currencies && currencies.length">
      <li v-for="({ txt, cc, rate }, i) in currencies" :key="i">
        {{ cc }} | {{ txt }} | {{ rate }}
      </li>
    </ol>

    <p v-else>
      Завантаження даних...
    </p>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

// API URL (змінна середовища)
const API = import.meta.env.VITE_API_URL;

// Стан для зберігання валют
const currencies = ref([]);

// Ключ для localStorage
const LOCAL_STORAGE_KEY = 'currencies';

// Функція для завантаження даних з API або з кешу
const fetchCurrencies = async () => {
  // Перевіряємо, чи є дані у localStorage
  const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  const cachedDate = localStorage.getItem('currencies_date');

  // Сьогоднішня дата в форматі YYYYMMDD
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  // Якщо є кешовані дані за сьогодні, використовуємо їх
  if (cachedData && cachedDate === today) {
    currencies.value = JSON.parse(cachedData);
    console.log('Дані завантажені з кешу.');
  } else {
    // Інакше робимо запит до API
    try {
      const response = await axios.get(`${API}exchange?json`);
      currencies.value = response.data;

      // Зберігаємо дані у localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currencies.value));
      localStorage.setItem('currencies_date', today);

      console.log('Дані завантажені з API.');
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
  }
};

// Завантаження даних при монтуванні
onMounted(() => {
  fetchCurrencies();
});
</script>

<style lang="scss" scoped>
main {
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  ol {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
