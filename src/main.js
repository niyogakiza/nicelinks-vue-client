// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router.js'
import Filters from './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// Router
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: Routes
})

import Icon from 'components/Icon/Icon.vue'
Vue.component('icon', Icon)

// Public Filter
for (let key in Filters) {
  Vue.filter(key, Filters[key])
}

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')