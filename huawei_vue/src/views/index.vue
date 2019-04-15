<template>
  <div class="app-index">
    <my-header></my-header>
    <main>
    <mt-swipe :auto="10000" id="banner">
      <mt-swipe-item v-for="item of list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
   <div class="container">
    <div id="tab">
      <div class="tab-bar">
        <ul class="list-unstyled">
          <li v-for="(item,i) of bar" :key="item.i" @click="tab(i)" :class="{active:i==curId}">
            <div>
              <h4>{{item.title}}</h4> 
              <span>{{item.kind}}</span>
            </div> 
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <ul class="list-unstyled d-flex">
          <li v-for="content in contents1" :key="content.i">
            <img :src="content.img_url">
            <span>{{content.name}}</span>
          </li>
        </ul>
      </div>
    </div>
   </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>
<script>
  //1. 先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
  import myHeader from "@/components/header.vue";
  import myFooter from "@/components/footer.vue";
  export default {
    data(){
      return {
        // 轮播
        list:[],
        // 选项卡
        curId:0,
        bar:[
          {title:"手机",kind:"荣耀 HUAWEI P系列"},
          {title:"笔记本&平板",kind:"平板电脑 笔记本电脑"},
          {title:"智能穿戴",kind:"手环 手表 VR"},
          {title:"智能家居",kind:"路由器 电视盒子 照明"},
          {title:"热销配件",kind:"保护壳 移动电源 耳机"},
          {title:"增值服务&其他",kind:"智能计算 增值卡"},
        ],
        contents1:[
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
        ],
        contents2:[
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
          {name:"荣耀1",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
        ]
      }
    },
    created(){
      this.bannerList();
    },
    methods:{
      bannerList(){
        this.axios.get("http://127.0.0.1:3000/bannerlist").then(result=>{
          console.log(result.data.data);
          this.list=result.data.data;
        })
      },
      tab(i){
        this.curId=i;
      }
    },
    //2.将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myFooter,
    }
  }
</script>
<style scoped>
  /* 轮播样式 */
  .mint-swipe{
    height:476px;
  }
  /* 选项卡 */
  #tab {
    /* width: 400px; */
    border: 1px solid #ccc;
    margin: 60px auto 0;
    display: flex;
  }
  .tab-bar {
    width:200px;
    background-color: #ccc;
  }
  .tab-bar .active {
    background-color: #0099ff;
  }
  .tab-con div {
    text-align: left;
    height: 100px;
  }
</style>