import Vue from 'vue'
import Vuerouter from 'vue-router'
import detailedPost from '../components/detailedPost'

Vue.use(Vuerouter)

export default new Vuerouter({
  routes: [
    { path: '/dp', component: detailedPost }
  ],
  mode: 'history'
})
