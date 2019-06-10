import Vue from 'vue'
import Appl from './Appl.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Appl)
}).$mount('#appl')
