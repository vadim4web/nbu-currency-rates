<template>
	<header-view />
	<router-view />
	<footer-view />
</template>

<script setup>
import HeaderView from './components/HeaderComponent.vue'
import FooterView from './components/FooterComponent.vue'
</script>
