// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import loadingPlugin from './assets/method/alert.js'
import message from './assets/message/index.js'
import bird from './assets/bird'

// import loadingPlugin from './assets/method/alert.js'
// console.log(loadingPlugin)

Vue.config.productionTip = false
Vue.use(loadingPlugin)
Vue.use(message)
Vue.use(bird)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
