<template>
  <div>
    <my-header></my-header>
    <nav class="container bg-white text-left">
      <h4 class="p-4 text-dark font-weight-bold">收货地址</h4>
      <ul class="list-unstyled pb-2">
        <li class="border">
          <div class="d-flex justify-content-around mt-3">
            <span class="iconfont icon-bianji1">编辑</span>
            <span class="iconfont icon-icon--">删除</span>
            <h4>杨茜茜</h4>
            <h4>18224565842</h4>
          </div>
          <div class="d-flex justify-content-around">
            <h4>收货地址</h4>
            <h4>河南省郑州市金佛撒服气阿诺我去</h4>
          </div>
        </li>  
        <li class="text-center border" @click="add">新增收货地址</li>
      </ul>
    </nav>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";
export default {
  data(){
    return{
    }
  },
  methods: {
    add(){
      
    }
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>
<style scoped>
  nav ul li{
    position:relative;
    height:100px;
    line-height:100px;
    margin:10px 0;
  }
  nav ul>li span.iconfont:first-child{
    position:absolute;
    bottom:-35px;
    right:80px;
    font-size:15px;
    color:red;
  }
  nav ul>li span.iconfont:nth-child(2){
    position:absolute;
    bottom:-35px;
    right:15px;
    font-size:15px;
    color:red;
  }
  .select{
    border:2px solid red;
  }
</style>