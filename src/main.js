import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// iconos
import 'bootstrap-icons/font/bootstrap-icons.css'

// js de bootstrap
import 'bootstrap'

createApp(App)
    .use(router)
    .mount('#app')

