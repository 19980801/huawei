<template>
  <header>
    <div v-show="show">
      <img src="http://127.0.0.1:3000/imgs/top.jpg" alt="top" class="img_top">
      <img src="http://127.0.0.1:3000/imgs/close.png" class="close" @click="close">
    </div>
    <div class="top">
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
          <li class="pl-2"><a href="javascript:;" class="font-style">请登录</a></li>
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
          <li class="breadcrumb-item dropdown">
            <a href="javascript:;" class="font-style">网站导航
              <span class="dropdown-toggle"></span>
            </a>
            <ul class="dropdown-menu">
              <div class="d-flex">
                <li class="home_bg mt-5 ml-3">
                  <a href="javascript:;">
                    <img src="http://127.0.0.1:3000/imgs/home.png" class="mt-2">
                  </a>
                  <h6 class="mt-3">商城首页</h6>
                </li>
                <div>
                  <li><a href="javascript:;" class="dropdown-item"><h5 class="text-dark font-weight-bold">频道</h5></a></li>
                  <li><a href="javascript:;" class="dropdown-item">华为专区</a></li>
                  <li><a href="javascript:;" class="dropdown-item">荣耀专区</a></li>
                  <li><a href="javascript:;" class="dropdown-item">企业购</a></li>
                </div>
                <div>
                  <li><a href="javascript:;" class="dropdown-item"><h5 class="text-dark font-weight-bold">产品</h5></a></li>
                  <li><a href="javascript:;" class="dropdown-item">手机</a></li>
                  <li><a href="javascript:;" class="dropdown-item">平板&电脑</a></li>
                  <li><a href="javascript:;" class="dropdown-item">智能穿戴</a></li>
                  <li><a href="javascript:;" class="dropdown-item">智能家居</a></li>
                  <li><a href="javascript:;" class="dropdown-item">通用配件</a></li>
                  <li><a href="javascript:;" class="dropdown-item">专属配件</a></li>
                </div>
                <div>
                  <li><a href="javascript:;" class="dropdown-item"><h5 class="text-dark font-weight-bold">增值服务</h5></a></li>
                  <li><a href="javascript:;" class="dropdown-item">以旧换新</a></li>
                  <li><a href="javascript:;" class="dropdown-item">礼品包装</a></li>
                  <li><a href="javascript:;" class="dropdown-item">补购保障</a></li>
                  <li><a href="javascript:;" class="dropdown-item">一口价换电池</a></li>
                </div>
                <div>
                  <li><a href="javascript" class="dropdown-item"><h5 class="text-dark font-weight-bold">会员</h5></a></li>
                  <li><a href="javascript" class="dropdown-item">会员频道</a></li>
                </div>
              </div>
            </ul>
          </li>
          <li class="breadcrumb-item dropdown">
            <a href="javascript:;" class="font-style">手机版
            <span class="dropdown-toggle"></span>
            </a>
            <ul class="dropdown-menu">
              <div class="media">
                <li>
                  <a href="javascript:;" class="dropdown-item">
                    <img src="http://127.0.0.1:3000/imgs/m1.png">
                  </a>
                  <div class="media-body">
                    <h5 class="font-weight-bold">华为商城APP</h5>
                    <p class="text-danger font-style m-0">新人专享好礼</p>
                    <p class="text-danger font-style m-0">最高5000积分</p>
                  </div>
                </li>
              </div>
              <div class="dropdown-divider m-0"></div>
              <div class="media">
                <li>
                  <a href="javascript:;" class="dropdown-item">
                    <img src="http://127.0.0.1:3000/imgs/m1.png">
                  </a>
                  <div class="media-body">
                    <h5 class="font-weight-bold">华为商城公众号</h5>
                    <p class="font-style m-0">微信扫一扫</p>
                  </div>
                </li>
              </div>
              <div class="dropdown-divider m-0"></div>
              <div class="media">
                <li>
                  <a href="javascript:;" class="dropdown-item">
                    <img src="http://127.0.0.1:3000/imgs/m1.png">
                  </a>
                  <div class="media-body">
                    <h5 class="font-weight-bold">华为商城微信小程序</h5>
                  </div>
                </li> 
              </div>
            </ul>
          </li>
          <li class="breadcrumb-item dropdown">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
            <a href="javascript:;" class="font-style">购物车(0)
              <ul class="dropdown-menu">
                <li class="dropdown-item">
                  <a href="javascript:;">
                    <img src="http://127.0.0.1:3000/imgs/cart.png">
                  </a>
                </li>
                <p>您的购物车是空的，赶紧选购吧~</p>
              </ul>
            </a>
          </li>
        </ul>         
      </div>
    </div>
    <section class="container p-2 d-flex">
      <div class="logo">
        <a href="javascript:;">
          <img src="http://127.0.0.1:3000/imgs/logo.png" class="img_logo">
        </a> 
      </div>
      <div class="navbar navbar-expand">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><img src="http://127.0.0.1:3000/imgs/huawei.png"></a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><img src="http://127.0.0.1:3000/imgs/hovor.png"></a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><span>Mate20系列</span></a>
          </li>  
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><span>荣耀10</span></a>
          </li>  
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><span>华为P30</span></a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link"><span>荣耀V20</span></a>
          </li>          
        </ul>
      </div>
      <div class="right ml-5">
        <input type="text" class="search" v-model="kwords"> 
        <span class="mui-icon mui-icon-search" @click="search"></span>
      </div>
    </section>
  </header> 
</template>
<script>
  export default {
    data(){
      return{
        show:true,
        kwords:"",
      }
    },
    methods:{
      close(){
        this.show=false;
      },
      search(){
        console.log(this.kwords);
      }
    },
    watch: {
      kwords(){
        this.search();
      }
    },
  }
</script>
<style scoped>
  a{
    text-decoration:none;
    color:#333;  
  }
  header{
    background:#fff; 
    width:1920px;
    margin:0 auto;
  }
  header .top{
    background-color:#f9f9f9;
  }
  header .close{
    position: relative;
    top:-75px;
    right:340px;
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
  .mui-media img{
    width:100px;
    height:100px;
  }
  .img_style{
    width:10px;
    height:10px;
  }
  .mui-icon-extra{
    font-size:12px;
  }
  .img_logo{
    width:205px;
    float:left;
    margin-top:8px;
  }
  .home_bg{
    background:#f9f9f9;
    width:50px;
    height:50px;
    border-radius:50%;
  }
  div.navbar ul img{
    width:75px;
  }
  div.right{
    position:relative;
  }
  div.right .search{
    outline:none;
    border:0;
    border-radius:16px;
    height:30px;
    margin-top:15px;
    background:#f0f0f0;
    text-indent:15px;
    line-height:30px;
  }
  div.right span{
    position:absolute;
    top:18px;
    right:10px;
  }
</style>
