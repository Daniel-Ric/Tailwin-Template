<template>
  <!-- Sticky Navbar -->
  <nav class="bg-white dark:bg-black shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-70">
    <div class="px-4 py-2 flex justify-between items-center w-full">
      <div class="text-xl font-bold text-gray-700 dark:text-gray-300">
        NAVBAR
      </div>

      <div
          ref="hamburger"
          @click="toggleSidebar"
          class="lg:hidden flex flex-col space-y-1 cursor-pointer"
      >
        <span class="block w-8 h-1 bg-gray-700 dark:bg-gray-300 transition-transform"></span>
        <span class="block w-8 h-1 bg-gray-700 dark:bg-gray-300 transition-transform"></span>
        <span class="block w-8 h-1 bg-gray-700 dark:bg-gray-300 transition-transform"></span>
      </div>

      <!-- Right side: Links & Dark/Light Mode Switch for larger screens -->
      <div class="hidden lg:flex items-center space-x-6">
        <RouterLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          Home
        </RouterLink>
        <RouterLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          About
        </RouterLink>
        <RouterLink to="/services" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          Services
        </RouterLink>

        <button @click="toggleDarkMode" class="text-gray-700 dark:text-gray-300 focus:outline-none">
          <font-awesome-icon :icon="isDarkMode ? 'sun' : 'moon'" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Sidebar with GSAP animation - Move this outside of the <nav> element -->
  <div v-if="isSidebarOpen" class="fixed inset-0 z-40 bg-black opacity-50" @click="toggleSidebar"></div>

  <div ref="sidebar" class="fixed top-0 left-0 z-50 w-64 bg-white dark:bg-black h-full p-6 shadow-lg transform -translate-x-full">
    <button @click="toggleSidebar" class="text-gray-700 dark:text-gray-300 mb-8">
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>

    <nav class="space-y-4">
      <RouterLink to="/" @click="toggleSidebar" class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
        <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
        Home
      </RouterLink>
      <RouterLink to="/about" @click="toggleSidebar" class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
        <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2" />
        About
      </RouterLink>
      <RouterLink to="/services" @click="toggleSidebar" class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
        <font-awesome-icon :icon="['fas', 'cogs']" class="mr-2" />
        Services
      </RouterLink>
    </nav>

    <div class="mt-6">
      <button @click="toggleDarkMode" class="text-gray-700 dark:text-gray-300 focus:outline-none flex items-center">
        <font-awesome-icon :icon="isDarkMode ? 'sun' : 'moon'" />
        <span class="ml-2">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { faSun, faMoon, faHome, faInfoCircle, faCogs, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSun, faMoon, faHome, faInfoCircle, faCogs, faTimes);

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  data() {
    return {
      isDarkMode: false,
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;

      if (this.isSidebarOpen) {
        this.animateSidebarIn();
      } else {
        this.animateSidebarOut();
      }
    },
    animateSidebarIn() {
      gsap.to(this.$refs.sidebar, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(this.$refs.hamburger.children, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    animateSidebarOut() {
      gsap.to(this.$refs.sidebar, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(this.$refs.hamburger.children, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.in",
      });
    },
  },
};
</script>

<style>
/* Optional: Hier kannst du weitere Styles für die Transition hinzufügen */
</style>
