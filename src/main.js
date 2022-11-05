import { createApp } from 'vue'
import App from './App.vue'
import header from './components/header/index.vue'
import './style.css'

const app = createApp(App)

app.component('comp-header', header)


app.mount('#app')
