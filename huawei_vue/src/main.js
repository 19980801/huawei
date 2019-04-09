import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//等效于node中的const axios=require("axios")

Vue.config.productionTip = false
//让axios的请求携带验证信息到服务端
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
//xxx.vue中： this.axios.get(...)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
