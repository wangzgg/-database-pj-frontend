import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require("./mock.js")
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from './axios'
Vue.prototype.$axios = axios //
Vue.prototype.$base='assets/'
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import md5 from 'js-md5'

Vue.prototype.$md5 = md5

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

