import { createApp } from 'vue'
// import './style.css'
import './index.css'
import App from './App.vue'

import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: "G-VGDKRYEE2D" }
}).mount('#app')
