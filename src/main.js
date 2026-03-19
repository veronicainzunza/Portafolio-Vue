import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//css de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//css propio
//import './assets/css/main.css'

//js de bootstrap
import 'bootstrap'

createApp(App)
    .use(router)
    .mount('#app')

