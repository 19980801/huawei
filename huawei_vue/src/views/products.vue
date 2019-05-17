<template>
  <div>
    <my-header></my-header>
    <section class="container">
      <ul class="list-unstyled m-0 text-left" v-if="ishave">
        <li class="row border" v-for="item in list" :key="item.i">
          <div class="col-3">
            <img src="http://127.0.0.1:3000/imgs/f3.2.png">
          </div>
          <div class="col-9 mt-5">
            <h4 class="font-weight-bold">{{item.title}}</h4>
            <p class="price mt-4">￥{{item.price}}</p>
            <p class="mt-2">{{item.spec}}</p>
            <span>{{item.category}}</span>
          </div>
        </li>
      </ul>
      <div v-else>
        抱歉，没有找到
        <span class="text-danger font-weight-bold">{{this.key}}</span>
        的相关商品，为您推荐以下商品！
        <ul class="list-unstyled d-flex floor">
          <li v-for="item of floor1" :key="item.i" >
            <a :href="item.a_href">
              <img :src="item.img_url" class="mt-4 mb-2">
              <h6 class="text-dark">{{item.title}}</h6>
              <p class="mb-2 text-secondary">{{item.content}}</p>
              <p class="text-danger">￥{{item.price}}</p>               
            </a>
          </li>
        </ul>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from "@/components/header.vue";
  import myFooter from "@/components/footer.vue";
export default {
  data(){
    return{
      key:"",
      list:[],
      ishave:true,
        floor1:[
          {a_href:"javascript:;",title:"荣耀8X",content:"64GB降100 老用户再送数据线",price:"1299",img_url:"http://127.0.0.1:3000/imgs/f1.png"},
          {a_href:"javascript:;",title:"华为MATE 20 Pro",content:"赠送好礼享6期免息",price:"5499",img_url:"http://127.0.0.1:3000/imgs/f2.png"},
          {a_href:"javascript:;",title:"荣耀10青春版",content:"4+64GB减100 老用户再送数据线",price:"1299",img_url:"http://127.0.0.1:3000/imgs/f3.png"},
          {a_href:"javascript:;",title:"HUAWEI nova 4e",content:"晒单限量赠礼包",price:"1999",img_url:"http://127.0.0.1:3000/imgs/f4.png"},
          {a_href:"javascript:;",title:"荣耀10",content:"最高优惠250元",price:"2199",img_url:"http://127.0.0.1:3000/imgs/f5.png"},
          {a_href:"javascript:;",title:"华为畅享9S",content:"2400万超广角AI三摄",price:"1499",img_url:"http://127.0.0.1:3000/imgs/f6.png"},
          {a_href:"javascript:;",title:"荣耀畅玩8C",content:"4GB+32GB到手价899",price:"899",img_url:"http://127.0.0.1:3000/imgs/f7.png"},
          {a_href:"javascript:;",title:"HUAWEI P20 Pro",content:"下单减400",price:"4899",img_url:"http://127.0.0.1:3000/imgs/f8.png"},
        ],

    }
  },
  created() {
    this.key=this.$route.params.key;
  },
  methods: {
    search(){
      if(this.key){
        this.axios.get("http://127.0.0.1:3000/search?key="+this.key).then(res=>{
          if(res.data.code==1){
            console.log(res.data);
            this.list=res.data.data;
          }else{
            this.ishave=false;
          }
        })
      }
    }
  },
  watch:{
    key(){
      this.search();
    }
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>
<style scoped>
  a{
    text-decoration:none;
  }
  section ul>li img{
    width:250px;
    height:250px;
  }
  section{
    margin:20px auto;
  }
  h4{
    flex-wrap:wrap; 
  }
  .price{
    font-size:20px;
    font-weight:bold;
    color:#CF0A2C; 
    margin-top:100px;
  }
  .floor{
    flex-wrap:wrap;
  }
  .floor>li{
    width:242px;
    /* height:290px; */
    background-color:#fff;
    margin:10px;
  }
  .floor img{
    width:200px;
    height:200px;
  }
  .floor li:hover{
    box-shadow:0px 5px 5px 5px #ddd;
  }
</style>
