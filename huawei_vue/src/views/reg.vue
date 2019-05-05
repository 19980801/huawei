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
        <li class="mt-2">已有账号<router-link to="login">登录</router-link></li>
      </ul>
      <!-- 内容 -->
      <div class="tab-content">
        <div id="pill1" class="tab-pane active">
          <form action="#" method="get">
            <div class="text d-flex">
              <div class="text-left text-center">姓名</div>
              <div class="text-right">            
                <input type="text" class="input" placeholder="请输入姓名" v-model="uname">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">国家/地区</div>
              <div class="text-right">     
                <select v-model="city">
                  <option v-for="item of option1" :key="item.i" >{{item.text}}</option>
                </select>       
                <input type="text" class="input" :value="option1.value">
                <span class="iconfont icon-xiaosanjiao-"></span>
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">
                <select >
                  <option v-for="item of option2" :key="item.i">{{item.text}}</option>
                </select>       
                <input type="text" class="input" :value="option2.value">
                <span class="iconfont icon-xiaosanjiao-"></span>
              </div>
              <div class="text-right">     
                <input type="text" placeholder="请输入手机号" class="input" v-model="phone">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">
                <span>密码</span>
              </div>
              <div class="text-right">     
                <input type="password" placeholder="请输入密码" class="input" v-model="upwd">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">
                <span>确认密码</span>
              </div>
              <div class="text-right">     
                <input type="password" placeholder="请再次输入密码" class="input" v-model="upwd2">
              </div>
            </div>
          </form>
            <div class="text d-flex">
              <div class="text-left text-center">
                <span>请输入验证码</span>
              </div>
              <div class="text-right">     
                <input type="text" placeholder="请输入验证码" class="input" v-model="codevalue">
              </div>
              <div class="code">
                <my-text :identifyCode="identifyCode"></my-text>
                <span @click="refreshCode">看不清，换一张</span>
              </div>
            </div>
            <input type="submit" value="注册" @click="submit">
        </div>
        <div id="pill2" class="tab-pane">
          <form action="#" method="get">
            <div class="text d-flex">
              <div class="text-left text-center">姓名</div>
              <div class="text-right">            
                <input type="text" class="input" placeholder="请输入姓名" v-model="uname">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">国家/地区</div>
              <div class="text-right">     
                <select v-model="city">
                  <option v-for="item of option1" :key="item.i" >{{item.text}}</option>
                </select>       
                <input type="text" class="input" :value="option1.value">
                <span class="iconfont icon-xiaosanjiao-"></span>
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">
                <select >
                  <option v-for="item of option2" :key="item.i">{{item.text}}</option>
                </select>       
                <input type="text" class="input" :value="option2.value">
                <span class="iconfont icon-xiaosanjiao-"></span>
              </div>
              <div class="text-right">     
                <input type="text" placeholder="请输入手机号" class="input" v-model="phone">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">邮箱地址</div>
              <div class="text-right">     
                <input type="text" placeholder="请输邮箱地址" class="input" v-model="email">
              </div>
            </div>  
            <div class="text d-flex">
              <div class="text-left text-center">
                <span>密码</span>
              </div>
              <div class="text-right">     
                <input type="password" placeholder="请输入密码" class="input" v-model="upwd">
              </div>
            </div>
            <div class="text d-flex">
              <div class="text-left text-center">
                <span>确认密码</span>
              </div>
              <div class="text-right">     
                <input type="password" placeholder="请再次输入密码" class="input" v-model="upwd2">
              </div>
            </div>
          </form>
          <div class="text d-flex">
            <div class="text-left text-center">
              <span>请输入验证码</span>
            </div>
            <div class="text-right">     
              <input type="text" placeholder="请输入验证码" class="input" v-model="codevalue">
            </div>
            <div class="code">
              <my-text1 :identifyCode="identifyCode"></my-text1>
              <span @click="refreshCode">看不清，换一张</span>
            </div>
          </div>
          <input type="submit" value="注册" @click="submit1">
        </div>
      </div>
      <div class="border-bottom mt-5"></div>
    </section>
  </div>
</template>
<script>
import myText from "@/components/text.vue"
import myText1 from "@/components/text1.vue"
export default {
  data(){
    return{
      option1:[
        {text:"阿富汗",value:"阿富汗"},
        {text:"埃及",value:"埃及"},
        {text:"澳大利亚",value:"澳大利亚"},
        {text:"巴西",value:"巴西"},
        {text:"比利时",value:"比利时"},
        {text:"德国",value:"德国"},
        {text:"俄罗斯",value:"俄罗斯"},
        {text:"法国",value:"法国"},
        {text:"日本",value:"日本"},
        {text:"中国",value:"中国"},
        {text:"中国澳门特别行政区",value:"中国澳门特别行政区"},
        {text:"中国台湾",value:"中国台湾"},
        {text:"中国香港特别行政区",value:"中国香港特别行政区"},
      ],
      option2:[
        {text:"+93(阿富汗)",value:"+93(阿富汗)"},
        {text:"+20(埃及)",value:"+20(埃及)"},
        {text:"+61(澳大利亚)",value:"+61(澳大利亚)"},
        {text:"+55(巴西)",value:"+55(巴西)"},
        {text:"+32(比利时)",value:"+32(比利时)"},
        {text:"+49(德国)",value:"+49(德国)"},
        {text:"+7(俄罗斯)",value:"+7(俄罗斯)"},
        {text:"+33(法国)",value:"+33(法国)"},
        {text:"+81(日本)",value:"+81(日本)"},
        {text:"+86(中国)",value:"+86(中国)"},
        {text:"+853(中国澳门特别行政区)",value:"+853(中国澳门特别行政区)"},
        {text:"+886(中国台湾)",value:"+886(中国台湾)"},
        {text:"+852(中国香港特别行政区)",value:"+852(中国香港特别行政区)"},
      ],
      // 验证码
      identifyCodes: "1234567890",
      identifyCode: "",
      codevalue:"",
      //注册
      uname:"",
      phone:"",
      upwd:"",
      upwd2:"",
      city:"",
      email:"",
    }
  },
  created() {

  },
   mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes,4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() { 
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },   
    makeCode(o,l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    submit(){
      // 验证验证码是否正确
      if(this.codevalue==this.identifyCode){
        var uname=this.uname;
        var phone=this.phone;
        var upwd=this.upwd;
        var upwd2=this.upwd;
        var city=this.city;
        this.axios.get("http://127.0.0.1:3000/reg",{
          params:{
            uname,phone,upwd,upwd2,city
          }
        }).then(result=>{
          if(result.data.code==1){
            setTimeout(() => {
              location.href="#/login";
            },900);
          }
        })
      }else{
        alert("验证码错误，请重新输入");
      }
    },
    submit1(){
      if(this.codevalue==this.identifyCode){
        var uname=this.uname;
        var phone=this.phone;
        var upwd=this.upwd;
        var upwd2=this.upwd;
        var city=this.city;
        var email=this.email;
        this.axios.post("http://127.0.0.1:3000/reg",{
          params:{
            uname,phone,upwd,upwd2,city,email
          }
        }).then(result=>{
          console.log(result);
        })
      }else{
        alert("验证码错误，请重新输入");
      }
    }
  },
  components:{  
    myText,
    myText1,
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
    height:620px;
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
    margin-top:20px;
    position:relative;
  }
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #a51b1b;
  border-radius:0px;
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
  select{
    background-color:transparent;
  }
  .text-right span.iconfont{
    font-size:20px;
    position:absolute;
    top:0;
  } 
  .text-left span.iconfont{
    font-size:20px;
    position:absolute;
    top:0;
    left:90px;
  } 
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
  position:absolute;
  top:-400px;
  right:-120px;
}
  input[type='submit']{
    background-color:#a51b1b;
    border:0;
    width:328px;
    height:44px;
    border-radius:30px;
    margin-top:50px;
  }
  input[type=text]{
    font-size:14px;
  }
  input[type=password]{
    font-size:14px;
  }
</style>