import { createApp } from 'vue'
import App from './App.vue'
import header from './components/header/index.vue'
import './style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faCartShopping, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeart, faCartShopping, faBars, faMagnifyingGlass)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('comp-header', header)


app.mount('#app')
