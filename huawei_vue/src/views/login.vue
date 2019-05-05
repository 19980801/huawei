<template>
  <div class="login">
    <header class="container">
      <img src="http://127.0.0.1:3000/imgs/logo.png">
      <span class="font-weight-bold">华为商城</span>
    </header>
    <div class="msg">①依据《网络安全法》，为保障您的帐号安全与正常使用，请尽快绑定您的手机号，感谢您的理解及支持！</div>
    <section>
      <img src="http://127.0.0.1:3000/imgs/login-bg.png">
      <div class="modal-container">
        <div class="modal-body">
          <h4 class="text-danger">账号登录</h4>
          <form action="#" method="get">
            <div class="mt-5">
              <input type="text" placeholder="手机号/邮件地址/华为账号" v-model="uname" required>
              <input type="password" placeholder="密码" v-model="upwd" required>
            </div>
          </form>
          <div class="mt-4"><input type="submit" value="登录" @click="login"></div>
          <div class="text-left mt-3"><input type="checkbox">记住账号</div>
          <div class="mt-2">
            <span class="font-style mr-2"><a href="#" class="text-info">注册账号</a></span>
            <span>|</span>
            <span class="font-style ml-2"><a href="#" class="text-info">忘记密码?</a></span>
          </div>
        </div>
        <div class="modal-foot">
          <span class="cont font-style">其他登录方式</span>
          <div class="mt-4 icon justify-content-center">
            <a href="javascript:;"><span class="iconfont icon-qq"></span></a>
            <a href="javascript:;"><span class="iconfont icon-icon34"></span></a>
            <a href="javascript:;"><span class="iconfont icon-weixin1"></span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:"",
    }
  },
  methods:{
    login(){
      var uname=this.uname;
      var upwd=this.upwd;
      this.axios.get("http://127.0.0.1:3000/login",{
        params:{
          uname,
          upwd,
        }
      }).then(result=>{
        if(result.data.code==1){
          setTimeout(() => {
            location.href="#/index";
          },900);
        }else{
          alert("用户名或密码错误!请重新输入!");
        }
      })
    },
  }
}
</script>
<style scoped>
  .login{
    width:100%;
  }
  header{
    margin:20px;
  }
  header img{
    width:140px;
    height:40px;
    margin:0 20px;
  }
  .msg{
    background-color: #FFFBE4;
    font-size:12px;
    padding:15px;
  }
  section{
    background-color:#081638;
  }
  section img{
    height:590px;
  }
  .modal-container{
    width:380px;
    height:530px;
    background:#fff;
    position:absolute;
    top:10rem;
    right:20rem;
  }
  .modal-body input{
    border:0;               
    border-bottom:1px solid #ddd;
  }
  input[type='submit']{
    background-color:#a51b1b;
    border:0;
    width:328px;
    height:44px;
    border-radius:30px;
  }
  .modal-foot{
    margin-top:80px;
  }
  .modal-foot .cont:before,.modal-foot .cont::after{
    content:"——————";
    color:#a4a4a4;
    padding:0 10px;
  }
  .modal-foot .icon .iconfont{
    font-size:25px;
  }
  .cont{
    font-size:12px;
  }
  .modal-foot .icon>a{
    display:inline-block;
    margin-right:10px;
    width:42px;
    height:42px;
    background-color:#999;
    line-height:42px;
    border-radius:50%;
    color:#fff;
    text-decoration:none;
  } 
  .modal-foot .icon>a:nth-child(1):hover{
    background-color:#2F98EA;
  }
  .modal-foot .icon>a:nth-child(2):hover{
    background-color:#2F98EA;
  }
  .modal-foot .icon>a:nth-child(3):hover{
    background-color:#21C121;
  }
</style>
