import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载 路由实例
  router: router
}).$mount('#app')
