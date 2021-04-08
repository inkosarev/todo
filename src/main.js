import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(router)
Vue.config.productionTip = false

store.dispatch('loadTasks')

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
