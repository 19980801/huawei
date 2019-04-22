import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Details from './views/details'
import Login from './views/login'
import Products from './views/products'
import Nav from './views/nav'
import List from './views/list'
import List1 from './views/list1'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/products/:kwords",component:Products,props:true},
    {path:"/login",component:Login},
    {path:"/nav",component:Nav},
    {path:"/list",component:List},
    {path:"/list1",component:List1},
  ]
})
