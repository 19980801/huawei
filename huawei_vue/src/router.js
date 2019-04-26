import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Hw from './views/hw'
import Reg from './views/reg'
import Login from './views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index", component:Index},
    {path:"/hw", component:Hw},
    {path:"/reg", component:Reg},
    {path:"/login", component:Login},
  ]
})
