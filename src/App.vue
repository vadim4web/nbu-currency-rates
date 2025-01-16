<template>
  <header>
    <nav>
      <menu>
        <li><router-link to="/">головна</router-link></li>
        <li><router-link to="/edited">змінені</router-link></li>
        <li><router-link to="/search">пошук</router-link></li>
      </menu>
    </nav>
  </header>
  <router-view />
  <footer>
    &copy; 2025 <a href="https://vadim4web.github.io">VIDIM4WEB</a>
  </footer>
</template>

<script setup></script>

<style scoped></style>
