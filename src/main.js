import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import router from './router'
import 'reset-css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
