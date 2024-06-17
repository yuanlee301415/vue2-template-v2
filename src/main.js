import Vue from 'vue'
import 'normalize.css'

import store from './store'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
