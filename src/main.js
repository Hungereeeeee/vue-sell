// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods, name: 'goods'},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
router.push('goods')


