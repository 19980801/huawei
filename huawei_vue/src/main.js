import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 导入 MUI 的样式表
import './lib/mui/css/mui.css'
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
// 引入iconfont图标
import './assets/iconfont/iconfont.css'

import 'mint-ui/lib/style.css'
// 
import MintUI from "mint-ui";
Vue.use(MintUI);
Vue.config.productionTip = false
//让axios的请求携带验证信息到服务端
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

Vue.directive('anchor',{
  inserted : function(el,binding){
    el.onclick = function(){
     document.documentElement.scrollTop = $('#anchor-'+binding.value).offset().top
    }
  }
});
Vue.directive('move',function(a){
  a.onmousedown=function(e){
    var clientX=e.clientX
    var clientY=e.clientY
    document.onmousemove=function(e){
      var left=e.clientX-clientX;
      var top=e.clientY-clientY;
      a.style.left=left+'px';
      a.style.top=top+'px';       
    }
    document.onmouseup=function(){
      document.onmousemove=0;
      document.onmousedown=0;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
