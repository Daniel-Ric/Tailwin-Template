<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/global/Navbar.vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Beim Laden überprüfen, ob Dark Mode aktiviert ist
onMounted(() => {
  darkMode.value = document.documentElement.classList.contains('dark');
});
</script>

<template>
  <div :class="darkMode ? 'dark' : ''">
    <Navbar :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
    <div class="bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors duration-300">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* Du kannst hier globales Styling hinzufügen, wenn nötig */
</style>
