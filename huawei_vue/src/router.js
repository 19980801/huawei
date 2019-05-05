import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Hw from './views/hw'
import Reg from './views/reg'
import Login from './views/login'
import Header from './components/header'
import Footer from './components/footer'
import products from './views/products'
import details from './views/details'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index", component:Index},
    {path:"/hw", component:Hw},
    {path:"/reg", component:Reg},
    {path:"/login", component:Login},
    {path:"/header", component:Header},
    {path:"/footer", component:Footer},
    {path:'/products',component:products},
    {path:'/details',component:details},
  ]
})
