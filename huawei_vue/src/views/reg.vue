<template>
  <div>
    <header class="d-flex justify-content-around">
      <img src="http://127.0.0.1:3000/imgs/reg-logo.png">
      <h4 class="mt-2">华为商城</h4>
    </header>
    <section>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#pill1" data-toggle="pill" class="nav-link active">
          <span class="iconfont icon-phone-o"></span>
          手机号
          </a>
        </li>
        <li class="nav-item">
          <a href="#pill2" data-toggle="pill" class="nav-link">
          <span class="iconfont icon-mail"></span>
          电子邮箱
          </a>
        </li>
        <li class="mt-2">已有账号<a href="#">登录</a></li>
      </ul>
      <!-- 内容 -->
      <div class="tab-content">
        <div id="pill1" class="tab-pane active">
          <form action=""></form>
          <div class="text d-flex">
            <div class="text-left text-center">国家/地区</div>
            <div class="text-right">            
              <input type="text" class="input" placeholder="请输入手机号">
  
            </div>

          </div>
        </div>
        <div id="pill2" class="tab-pane">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
  header{
    background-color:#000;
    padding:15px 0;
    color:#fff;
  }
  section{
    width:960px;
    height:782px;
    margin:60px auto;
  }
  section .tab-content{
    width:960px;
    height:598px;
    background-color:#fff;
    padding:20px 270px;
  }
  section .tab-content .text{
    width:420px;
    height:44px;
    background:#f7f7f7;
    border-radius:25px;
    line-height:44px;
    border:1px solid #ddd;
    font-size:14px;
    margin-top:8px;
  }
  .tab-pane .text>.text-left{
    width:123px;
    border-right:1px solid #ddd;
  }
  .text-right{
    width:250px;
  }
  .text .input{
    width:260px;
    border:0;
    background-color:transparent;
  }
  .text .text-right{
    position: relative;
  }

</style>