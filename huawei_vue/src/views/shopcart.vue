<template>
  <div>
    <my-header></my-header>
    <section class="container mb-5" v-if="show">
      <nav>
        <ul class="list-unstyled">
          <li @click="selectAll"><input type="checkbox" :checked="allcb"><label for="checkbox">全选</label></li>
          <li>商品</li>
          <li>单价</li>
          <li>数量</li>
          <li>小计</li>
          <li>操作</li>
        </ul>
      </nav>
      <div class="content">
        <ul class="list-unstyled bg-white">
          <li class="d-flex items" v-for="(item,i) of list" :key="i">
            <div class="d-flex">
              <li><input type="checkbox" :checked="item.cb" @change="cbchange" :data-i="i"></li>
              <li><img src="http://127.0.0.1:3000/img/product/md/57b12a31N8f4f75a3.jpg"></li>
              <li class="title">{{item.ctitle}}</li>
              <li class="price">￥{{item.price.toFixed(2)}}</li>
              <li class="number">
                <button :data-rid="item.rid" @click="down">-</button>
                <input type="text" :value="item.count">
                <button :data-rid="item.rid" @click="add">+</button>
              </li>
              <li class="add" v-text="'￥'+(item.price*item.count).toFixed(2)"></li>
              <li class="del" @click="removeItem" :data-rid="item.rid">删除</li>
            </div>
          </li>
        </ul>
        <div class="bg-white foot">
          <ul class="list-unstyled d-flex">
            <li @click="selectAll"><input type="checkbox" class="m-2" :checked="allcb"><label for="checkbox">全选</label></li>
            <li @click="selectDel">删除选中商品</li>
            <li>总计&nbsp;&nbsp;已选中
              <span>{{n}}</span>
              商品</li>
            <li>￥{{total.toFixed(2)}}</li>
            <li>立即结算</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="empty bg-white container mt-4 mb-4" v-else>
      <div class="p-5">
        <img src="http://127.0.0.1:3000/imgs/cart.png">
        <h4 class="font-weight-bold">您的购物车里什么都没有</h4>
        <router-link to="index">去逛逛</router-link>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";
export default {
  data(){
    return{
      list:[],
      allcb:"",
      n:0,
      show:""
    }
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore(){
      this.axios.get("http://127.0.0.1:3000/cartlist").then(res=>{
        if(res.data.code==1){
          this.show=true
          // 为数组元素添加cb属性表示复选框的选中状态
          var rows=res.data.data;
          for(var item of rows){
            item.cb=false;
          }
          this.list=rows;
        }else{
          this.show=false;
        }
      })
    },
    removeItem(e){
      if(confirm("确认删除?")){
        var rid=e.target.dataset.rid;
        this.axios.get("http://127.0.0.1:3000/removecart",{
          params:{
            rid,
          }
        }).then(res=>{
          alert(res.data.msg);
          this.loadMore();
        }) 
      }
    },
    // 删除选中的商品
    selectDel(){
      if(confirm("确认删除选中商品?")){
        // 获取选中商品
        var rids="";
        console.log(this.list);
        for(var item of this.list){
          if(item.cb){
            rids+=item.rid+',';
          }
        }
        // 如果没有选中停止删除操作
        if(rids.length==0){
          alert("请选中您要删除的商品");
          return;
        }
        // 截取后面的，
        rids=rids.substring(0,rids.length-1);
        console.log(rids);
        this.axios.get("http://127.0.0.1:3000/del?rids="+rids).then(res=>{
          alert(res.data.msg);
          this.loadMore();
        })
      }
    },
    // 单选
    cbchange(e){
      var cb=e.target.checked;
      var i=e.target.dataset.i;
      this.list[i].cb=cb;
      // 修改全选状态
      var count=0;
      for(var item of this.list){
        if(item.cb){
          count++;
          this.n=count;
        }
      }
      if(count==this.list.length){
        this.allcb=true;
        this.n=count;
      }else{
        this.allcb=false;
      }
    },
    // 全选
    selectAll(e){
      // 获取当前元素选中状态
      var cb=e.target.checked;
      // 获取当前元素下标
      for(var item of this.list){
        item.cb=cb;
      }
      this.allcb=cb;
      this.n=this.list.length;
    },
    // 数量加减
    down(e){
      var rid=e.target.dataset.rid;
      this.axios.get("http://127.0.0.1:3000/down",{
        params:{rid}
      }).then(res=>{
        if(res.data.code==1){
          this.loadMore();
        }
      })
    },
    add(e){
      var rid=e.target.dataset.rid;
      this.axios.get("http://127.0.0.1:3000/add",{
        params:{rid}
      }).then(res=>{
        if(res.data.code==1){
          this.loadMore();
        }
      })
    }
  },
  computed:{
    total(){
      var total=0;
      for(var i=0;i<this.list.length;i++){
        var item=this.list[i];
        if(item.cb){
          total+=item.price*item.count;
        }
      }
      return total;
    }
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>
<style scoped>
  section nav{
    height:40px;
    line-height:40px;
    font-size:14px;
    background-color:#F9F9F9;
  }
  section input[type="checkbox"]{
    width:15px;
    height:15px;
    margin-right:10px;
  }
  nav ul li{
    float:left;
    list-style:none;
    margin-left:20px;
  }
  nav ul li:nth-child(2){
    margin-left:150px;
  }
  nav ul li:nth-child(3){
    margin-left:410px;
  }
  nav ul li:nth-child(4){
    margin-left:103px;
  }
  nav ul li:nth-child(5){
    margin-left:104px;
  }
  nav li:nth-child(6){
    margin-left:90px;
  }
  nav ul li:last-child{
    margin-left:82px;
  }
  .content{
    clear:both;
  }
  .content img{
    width:100px;
    height:100px;
  } 
  .content input[type="checkbox"]{
    margin-top:40px;  
  }
  .content .items input[type="text"]{
    width:40px;
    height:33px;
    text-align:center;
  }
  .content ul>li{
    position:relative;
  }
  .title{
    width:420px;
    margin-top:30px;
  }
  .price{
    margin-left:80px;
    margin-top:30px;
  }
  .number{
    margin-left:55px;
    margin-top:30px;
  }
  .add{
    margin-left:40px;
    margin-top:30px;
    color:#CA141D;
    font-weight:bold;
  }
  .del{
    position:absolute;
    right:35px;
    margin-top:30px;
    background-color:#CA141D;
    height:30px;
    width:50px;
    color:#fff;
    line-height:30px;
    font-size:12px;
  }
  .foot{
    height:60px;
    line-height:60px;
    position: relative;
  }
  .foot ul>li:nth-child(2){
    width:100px;
    height:30px;
    line-height:30px;
    color:#fff;
    background-color:#CA141D;
    font-size:12px;
    margin-left:20px;
    margin-top:15px;
  }
  .foot ul>li:nth-child(3){
    margin-left:500px;
    font-size:14px;
    font-weight:bold;
  }
  .foot ul>li:nth-child(4){
    margin-left:90px;
    color:#CA141D;
    font-weight:bold;
  }
  .foot ul>li:last-child{
    position:absolute;
    right:0px;
    height:60px;
    color:#fff;
    width:100px;
    margin-left:48px;
    background-color:#CA141D;
  }
  .foot span{
    color:#CA141D;
    font-size:18px;
    font-weight:bold;
  }
  .empty a{
    display:block;
    margin:0;
    width:150px;
    height:50px;
    line-height:50px;
    color:#fff;
    background-color:#CA141D;
    margin-left:435px;
    margin-top:50px;
    text-decoration:none;
  }
</style>