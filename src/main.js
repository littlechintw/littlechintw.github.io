import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

import { createGtag } from 'vue-gtag'

const gtag = createGtag({ tagId: 'G-VGDKRYEE2D' })

createApp(App).use(gtag).mount('#app')
