<template>
  <header class="container-fluid">
    <img src="imgs/top.jpg" alt="top">
    <div class="container">
      <ul class="breadcrumb bg-transparent p-2">
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">首页</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">华为官网</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">荣耀官网</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">花粉俱乐部</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">V码(优购码)</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">企业购</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">Select Region</a></li>  
          <li class="breadcrumb-item dropdown pr-5">
            <a href="javascript:;" class="font-style">更多精彩
             <span class="mui-icon mui-icon-arrowdown"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="javascript:;" class="dropdown-item">EUMI</a></li>
              <li><a href="javascript:;" class="dropdown-item">应用市场</a></li>
              <li><a href="javascript:;" class="dropdown-item">华为终端云空间</a></li>
              <li><a href="javascript:;" class="dropdown-item">开发者联盟</a></li>
            </ul>
          </li>
        <li class="pl-5"><a href="javascript:;" class="font-style">请登录</a></li>
        <li class="breadcrumb-item pl-2"><a href="javascript:;" class="font-style">注册</a></li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">我的订单</a></li>
        <li class="breadcrumb-item dropdown">
          <a href="javascript:;" class="font-style">客户服务
          <span class="dropdown-toggle"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="javascript:;" class="dropdown-item">服务中心</a></li>
            <li><a href="javascript:;" class="dropdown-item">联系客服</a></li>
          </ul>
        </li>
        <li class="breadcrumb-item">
          <a href="javascript:;" class="font-style">网站导航
            <span class="dropdown-toggle"></span>
          </a>
        </li>
        <li class="breadcrumb-item dropdown">
          <a href="javascript:;" class="font-style">手机版
           <span class="dropdown-toggle"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="javascript:;" class="dropdown-item">
              <img src="imgs/m1.png" alt="">
              </a></li>
          </ul>
        </li>
        <li class="breadcrumb-item"><a href="javascript:;" class="font-style">购物车</a></li>
      </ul>         
    </div>
  </header> 
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods: {
    
    },
  }
</script>
<style scoped>
  a{text-decoration:none;}
  header{
    background-color:#f9f9f9;
  }
  .font-style{
    font-size:12px;
    color:#a4a4a4;
  }
  .breadcrumb-item + .breadcrumb-item::before{
    content:"|";
    color:#a4a4a4;
  }
  header ul a:hover{
    color:#CF0A2C;
  }
  .dropdown:hover .dropdown-menu{
    display:block;
  }
 .dropdown-menu{
    min-width:5rem;
    padding:0.4rem 0 0.8rem 0;
    font-size:10px;
    text-align: center;
    border-radius:0.3rem;
  }
  li.pr-5 .mui-icon{
    font-size:10px;
  }
</style>
