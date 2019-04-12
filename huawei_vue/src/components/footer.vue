<template>
  <footer>
    <div class="container">
      <div class="navbar-expand p-4 border-bottom">  
        <ul class="navbar-nav">
          <li class="nav-item col-3 d-flex">
            <img src="http://127.0.0.1:3000/imgs/foot1.png">
            <h4>百强企业 品质保障</h4>
          </li>
          <li class="nav-item col-3 d-flex">
            <img src="http://127.0.0.1:3000/imgs/foot2.png">
            <h4>百强企业 品质保障</h4>
          </li>
          <li class="nav-item col-3 d-flex">
            <img src="http://127.0.0.1:3000/imgs/foot3.png">
            <h4>百强企业 品质保障</h4>
          </li>
          <li class="nav-item col-3 d-flex">
            <img src="http://127.0.0.1:3000/imgs/foot4.png">
            <h4>百强企业 品质保障</h4>
          </li> 
        </ul>
      </div>
     <div class="row mt-4">
       <div class="col-10 border-right">
         <div class="row">
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">购物相关</h5></li>
               <li><a class="font-style">购物指南</a></li>
               <li><a class="font-style">配送方式</a></li>
               <li><a class="font-style">支付方式</a></li>
               <li><a class="font-style">常见问题</a></li> 
             </ul>
           </div>
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">保修与退换货</h5></li>
               <li><a class="font-style">退换货政策</a></li>
               <li><a class="font-style">退换货流程</a></li>
               <li><a class="font-style">保修状态查询</a></li>
               <li><a class="font-style">保修政策</a></li>
             </ul>
           </div>
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">维修与技术支持</h5></li>
               <li><a class="font-style">售后网点</a></li>
               <li><a class="font-style">预约维修</a></li>
               <li><a class="font-style">手机寄修</a></li>
               <li><a class="font-style">备件价格查询</a></li>
               <li><a class="font-style">上门服务</a></li>
             </ul>
           </div>
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">特色服务</h5></li>
               <li><a class="font-style">防伪查询</a></li>
               <li><a class="font-style">补购保障</a></li>
               <li><a class="font-style">以旧换新</a></li>
               <li><a class="font-style">礼品包装</a></li>
             </ul>
           </div>
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">关于我们</h5></li>
               <li><a class="font-style">公司介绍</a></li>
               <li><a class="font-style">华为商城介绍</a></li>
               <li><a class="font-style">华为线下门店</a></li>
               <li><a class="font-style">荣耀线下门店</a></li>
               <li><a class="font-style">诚招英才</a></li>
               <li><a class="font-style">意见反馈</a></li>
             </ul>
           </div>
           <div class="col-2">
             <ul class="list-unstyled">
               <li><h5 class="font-weight-bold text-dark mb-2">友情链接
                 <span class="mui-icon mui-icon-back"></span>
                 <span class="mui-icon mui-icon-forward"></span>  
               </h5>
               </li>
               <li><a class="font-style">公司介绍</a></li>
               <li><a class="font-style">华为商城介绍</a></li>
               <li><a class="font-style">华为线下门店</a></li>
               <li><a class="font-style">荣耀线下门店</a></li>
               <li><a class="font-style">诚招英才</a></li>
               <li><a class="font-style">意见反馈</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div class="col-2">
         <div class="foot">
            <h4 class="font-weight-bold">400-088-6888</h4>
            <span class="font-style">7x24小时客服热线</span>
            <p href="javascript:;" class="btn btn-dark">
              <span class="mui-icon-extra mui-icon-extra-custom"></span>
              <span>在线客服</span>
            </p>
           <p>关注Vmall</p>
           <span class="mui-icon mui-icon-weixin"></span>
           <span class="iconfont icon-toutiao"></span>
           <span class="mui-icon mui-icon-weibo"></span>
           <span class="iconfont icon-huawei"></span>
         </div>
       </div>
     </div>
    </div>  
  </footer>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  footer{
    background:#f9f9f9;
  }
  .font-style{
    font-size:12px;
  }
  .mui-icon{
    font-size:14px;
  }
  .foot span{
    padding:4px;
  }
  div.row div.col-2 a:hover{
    color:#CF0A2C;
  }
</style>