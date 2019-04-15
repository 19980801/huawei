import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Details from './views/details'
import Login from './views/login'
import NotFound from './views/notFound'
import Products from './views/products'
import Tab from './views/tab'
import Tab1 from './views/tab.1'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/products/:kwords",component:Products,props:true},
    {path:"/login",component:Login},
    {path:"/tab",component:Tab},
    {path:"/tab1",component:Tab1},
    {path:"*", component:NotFound},
  ]
})
