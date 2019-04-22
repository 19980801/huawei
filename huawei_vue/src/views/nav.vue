<template>
<div>
  <ul class="float-tool">
    <li class="hasChild">
      <span class="tool-icon icon0"></span>
      <span>联系电话</span>
      <div class="txtbox">
        <span>请拨 102-0012-9242</span>
      </div>
    </li>
    <li>
      <span class="tool-icon icon1"></span>
      <span>QQ 客服</span>
    </li>
    <li class="hasChild">
      <span class="tool-icon icon2"></span>
      <span>APP下载</span>
      <div class="picbox">
        <img src="http://127.0.0.1:3000/imgs/m1.png" alt="微信二维码">
      </div>
    </li>
    <li class="hasChild">
      <span class="tool-icon icon3"></span>
      <span>关注微信</span>
      <div class="picbox">
        <img src="http://127.0.0.1:3000/imgs/m1.png" alt="微信二维码">
      </div>
    </li>
    <li onclick="window.scrollTo(0, 0)">
      <span class="tool-icon icon4"></span>
      <span>返回顶部</span>
    </li>
  </ul>
</div>

</template>
<style scoped>
.float-tool{
  position: fixed;
  right:10px;
  bottom: 10px;
  z-index: 99;
  width: 55px;
  font-size: 12px;
}

  li{
    position: relative;
    margin-bottom: 5px;
    width: 55px;
    height: 55px;
    text-align: center;
    color: #FFF;
    background-color: #6b4ec2;
    cursor: pointer;
  }

     li.hasChild:hover > div{
       display: block;
     }
    
.tool-icon{
  display: block;
  width: 55px;
  height: 35px;
  background: url(http://127.0.0.1:3000/imgs/banner1,jpg) no-repeat;
}

.icon0{
  background-position: center -153px;
}
  
.icon1{
  background-position: center 5px;
}
  
.icon2{
   background-position: center -50px;
}
 
.icon3{
   background-position: center -102px;
}
 
.icon4{
  background-position: center -312px;
}
  
.txtbox{
    display: none;
  position: absolute;
  top: 0px;
  right: 65px;
  width: 150px;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  padding: 5px;
  background-color: #6b4ec2;
}

  .textbox:after{
       display: block;
    position: absolute;
    right: -5px;
    top: 22px;
    content: "";
    width: 0;
    height: 0;
    border-width: 7px 0 7px 7px;
    border-style: solid;
    border-color: transparent transparent transparent #6b4ec2 ;
  }

.picbox{
    display: none;
  position: absolute;
  top: -30px;
  right: 65px;
  width: 100px;
  height: 100px;
  padding: 5px;
  background-color: #6b4ec2;
}

  .picbox img{
    width: 100%;
    height: 100%;
  }
 
  .picbox img:after{
    display: block;
    position: absolute;
    right: -5px;
    top: 50px;
    content:"";
    width: 0;
    height: 0;
    border-width: 7px 0 7px 7px;
    border-style: solid;
    border-color: transparent transparent transparent #6b4ec2;
  }
</style>