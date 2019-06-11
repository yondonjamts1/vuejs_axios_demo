import Vue from 'vue'
import Appl from './Appl.vue'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Appl)
}).$mount('#appl')
