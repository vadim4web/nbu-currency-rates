import { defineStore } from 'pinia';

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currencies: [], // Список валют, отриманих з API
    editedCurrencies: {}, // Збережені локально змінені курси валют
  }),
  actions: {
    // Оновлення списку валют
    setCurrencies(currencies) {
      this.currencies = currencies;
    },

    // Додавання або редагування валюти
    editCurrency(code, newRate) {
      this.editedCurrencies[code] = newRate;
      this.saveToLocalStorage();
    },

    // Завантаження даних із localStorage
    loadFromLocalStorage() {
      const saved = localStorage.getItem('editedCurrencies');
      if (saved) {
        this.editedCurrencies = JSON.parse(saved);
      }
    },

    // Збереження даних у localStorage
    saveToLocalStorage() {
      localStorage.setItem('editedCurrencies', JSON.stringify(this.editedCurrencies));
    },
  },
});
