<template>
  <footer class="app-footer">
    <ul class="d-flex list-unstyled pb-5">
      <li><a href="">成为作者</a>
      <li><a href="">意见反馈</a>
      <li><a href="">电脑端</a>
    </ul>
    <div class="scroll" :class="{show:isActive}">
      <div id="toTop" class="left" @click="toTop(step)"></div>
    </div>
    <div class="buttom"><a href="javascript:;"></a></div> 
  </footer>
</template>
<script>
  export default {
    props:{
      step:{   //此数据是控制动画快慢的
        type:Number,
        default:200
      }
    },
  data(){
    return{ isActive:false,}
  },
  methods: {
    toTop(i){
      //参数i表示间隔的幅度大小，以此来控制速度
       document.documentElement.scrollTop-=i;
      if (document.documentElement.scrollTop>0) {
        var c=setTimeout(()=>this.toTop(i),200);
      }else {clearTimeout(c);}
    },
  //   toBottom(i){
  //     var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
  //     var scrollHeight=document.documentElement.scrollHeight;
  //     var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
  //     document.documentElement.scrollTop+=i;
  //     if (document.documentElement.scrollTop<height) {
  //     var c=setTimeout(()=>this.toBottom(i),16);
  //     }else {clearTimeout(c);}
  //   }
  // },
  created(){
    var vm=this;
    window.onscroll=function(){
      if (document.documentElement.scrollTop>60) {
        vm.isActive=true;
      }else {vm.isActive=false;}
    }
  }
}
