import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { gsap } from "gsap";

// Importiere FontAwesome Core und Icon Sets
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons zur Bibliothek hinzufügen
library.add(faSun, faMoon)

const app = createApp(App)

// FontAwesome-Komponente global registrieren
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
