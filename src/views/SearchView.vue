<template>
  <main>
    <h2>пошук:</h2>
    <Datepicker v-model="date" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
</script>

<style lang="scss" scoped>

</style>