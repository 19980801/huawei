<template>
  <div class="app-index">
    <my-header></my-header>
    <div>
    <mt-swipe :auto="1000" id="banner">
      <mt-swipe-item v-for="item of list" :key="item.id">
        <img :src="item.img_url" class="banner">
      </mt-swipe-item>
    </mt-swipe>
   <div class="container">
    <div id="tab"  @mouseleave="tabHide()">
      <div class="tabNav">
        <div class="tab-bar">
          <ul class="list-unstyled">
            <li v-for="(item,i) of tablist" :key="i" @mouseenter="tabChange(i)" :class="{active:i==isActive}" class="p-2">
              <h4>{{item.title}}</h4> 
              <span class="font-style pr-2">{{item.kind1}}</span>
              <span class="font-style pr-2">{{item.kind2}}</span>
              <span class="font-style">{{item.kind3}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="tabs-content">
        <div class="content" v-for="(item1,i) of tablist" :key="i" v-show="i==isActive" v-if="tabcontentShow">
          <a v-for="item2 of item1.tabcontent" href="javascript:;" :key="item2.i" >
            <div class="d-flex p-2">
              <img :src="item2.img_url">
              <h4 class="tab-font mt-3">{{item2.tab}}</h4> 
            </div>  
          </a>
        </div>
      </div>
    </div> 
   </div>
   <div class="main m-auto">
    <div class="navbar navbar-expand bg-white">
      <ul class="navbar-nav">
        <div class="border-right pr-5 mt-2">
          <li class="nav-item">
            <div class="nav-link d-flex">
              <img src="http://127.0.0.1:3000/imgs/loger.png">
              <div class="left">
                <p>您好!请
                  <a href="javascript:;">登录</a>
                  <a href="javascript:;">注册</a>
                </p>
                <a href="javascript:;" class="a_border"><span class="font-style p-2">新人福利</span></a>
                <a href="javascript:;" class="a_btn"><span class="font-style">会员频道</span></a>
              </div>
            </div>
          </li>
        </div>
        <div class="mt-2">
          <ul class="nav ml-5">
            <li class="nav-item pr-3">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav1.png">
                <p>企业购特惠</p>
              </a>
            </li>
            <li class="nav-item pr-3">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav2.png">
                <p>以旧换新</p>
              </a>
            </li>
            <li class="nav-item pr-3">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav3.png">
                <p>会员领券</p>
              </a>
            </li>
            <li class="nav-item pr-3">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav4.png">
                <p>新品优享购</p>
              </a>
            </li>
            <li class="nav-item pr-3">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav5.png">
                <p>荣耀数码</p>
              </a>
            </li>
            <li class="nav-item pr-5">
              <a href="javascript:;" class="nav-link">
                <img src="http://127.0.0.1:3000/imgs/nav6.png">
                <p>华为数码</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="pl-3 border-left mt-2">
          <div class="d-flex border-bottom">
            <h5 class="mr-4 font-weight-bold text-dark">公告</h5>
            <div class="textBox">
              <transition name="slide">
                <a href="javascript:;" class="text-truncate"><p class="text" :key="text.id">{{text.val}}</p></a>
              </transition>
            </div>
          </div>
          <div class="d-flex justify-content-around mt-2">
            <li>
              <img src="http://127.0.0.1:3000/imgs/t1.png">
              <a href="javascript:;" class="font-style">代购码</a>
            </li>
            <li>
              <img src="http://127.0.0.1:3000/imgs/t2.png">
              <a href="javascript:;" class="font-style">实名认证</a>
            </li>
            <li>
              <img src="http://127.0.0.1:3000/imgs/t3.png" alt="">
              <a href="javascript:;" class="font-style">补购保障</a>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <div class="d-flex mt-4">
      <div class="col-3 pl-0"><img src="http://127.0.0.1:3000/imgs/nav1.jpg"></div>    
      <div class="col-3 pl-1"><img src="http://127.0.0.1:3000/imgs/nav2.jpg"></div>    
      <div class="col-3 pl-1 pr-1"><img src="http://127.0.0.1:3000/imgs/nav3.jpg"></div>    
      <div class="col-3 pl-1 pr-0"><img src="http://127.0.0.1:3000/imgs/nav4.jpg"></div>    
    </div>
    <div class="mt-5">
      <h3 class="text-left">热销单品</h3>
      <div class="d-flex mt-3">
        <img src="http://127.0.0.1:3000/imgs/c1.jpg" class="round">
        <div class="floor1">
          <ul class="list-unstyled">
            <li v-for="item of floor1" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="mb-2 text-danger">￥{{item.price}}</p>               
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h3 class="text-left">精品推荐</h3>
      <div class="scroll d-flex mt-3">
        <div class="prev" @click="prev">
          <span class="mui-icon mui-icon-back mt-4"></span>
        </div>
        <ul class="list-unstyled">
          <li v-for="item of scroll1" :key="item.i" class="mr-2">
            <a :href="item.a_href">
              <div class="list-top">
                <i class="p-0"><img :src="item.img_url" class="mt-4"></i>
                <p class="p-2">{{item.content}}</p>
              </div>
              <div class="list-bottom">
                <p class="text-dark m-0">{{item.title}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </div>
            </a>
          </li>
        </ul>
        <div class="next" @click="next">
          <span class="mui-icon mui-icon-forward mt-4"></span>
        </div>
      </div>
    </div>
   </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  //1. 先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
  import myHeader from "@/components/header.vue";
  import myFooter from "@/components/footer.vue";
  export default {
    name: 'scroll',
    data(){
      return {
        // 轮播
        list:[],
        // 选项卡
        tablist:[
          {title:"手机",kind1:"荣耀",kind2:"HUAWEI P系列",tabcontent:[
              {tab:"荣耀",img_url:"http://127.0.0.1:3000/imgs/tab1.png"},
              {tab:"华为P系列",img_url:"http://127.0.0.1:3000/imgs/tab2.png"},
              {tab:"HUAWEI Mate系列",img_url:"http://127.0.0.1:3000/imgs/tab3.png"},
              {tab:"荣耀畅玩系列",img_url:"http://127.0.0.1:3000/imgs/tab4.png"},
              {tab:"华为 nova系列",img_url:"http://127.0.0.1:3000/imgs/tab5.png"},
              {tab:"华为畅享系列",img_url:"http://127.0.0.1:3000/imgs/tab6.png"},
              {tab:"华为麦芒系列",img_url:"http://127.0.0.1:3000/imgs/tab7.png"},
              {tab:"移动4G+专区",img_url:"http://127.0.0.1:3000/imgs/tab8.png"},
            ]
          },
          {title:"笔记本&平板",kind1:"平板电脑",kind2:"笔记本电脑",tabcontent:[
              {tab:"平板电脑",img_url:"http://127.0.0.1:3000/imgs/tab9.png"},
              {tab:"笔记本电脑",img_url:"http://127.0.0.1:3000/imgs/tab10.png"},
              {tab:"笔记本配置",img_url:"http://127.0.0.1:3000/imgs/tab11.png"},
            ]       
          },
          {title:"智能穿戴",kind1:"手环",kind2:"手表",kind3:"VR",tabcontent:[
              {tab:"手环",img_url:"http://127.0.0.1:3000/imgs/tab12.png"},
              {tab:"手表",img_url:"http://127.0.0.1:3000/imgs/tab13.png"},
              {tab:"VR",img_url:"http://127.0.0.1:3000/imgs/tab14.png"},
            ] 
          },
          {title:"智能家居",kind1:"路由器",kind2:"电视盒子",kind3:"照明",tabcontent:[
              {tab:"路由器",img_url:"http://127.0.0.1:3000/imgs/tab15.png"},
              {tab:"电视盒子",img_url:"http://127.0.0.1:3000/imgs/tab16.png"},
              {tab:"照明",img_url:"http://127.0.0.1:3000/imgs/tab17.png"},
              {tab:"清洁",img_url:"http://127.0.0.1:3000/imgs/tab18.png"},
              {tab:"子母/分布式路由",img_url:"http://127.0.0.1:3000/imgs/tab19.png"},
              {tab:"电力猫/wife放大器",img_url:"http://127.0.0.1:3000/imgs/tab20.png"},
              {tab:"随性wife",img_url:"http://127.0.0.1:3000/imgs/tab21.png"},
              {tab:"节能",img_url:"http://127.0.0.1:3000/imgs/tab22.png"},
              {tab:"环境",img_url:"http://127.0.0.1:3000/imgs/tab23.png"},
              {tab:"安防",img_url:"http://127.0.0.1:3000/imgs/tab24.png"},
              {tab:"健康",img_url:"http://127.0.0.1:3000/imgs/tab25.png"},
              {tab:"厨电",img_url:"http://127.0.0.1:3000/imgs/tab26.png"},
              {tab:"影音",img_url:"http://127.0.0.1:3000/imgs/tab27.png"},
              {tab:"卫浴",img_url:"http://127.0.0.1:3000/imgs/tab28.png"},
              {tab:"其他",img_url:"http://127.0.0.1:3000/imgs/tab29.png"},
            ]
          },
          {title:"热销配件",kind1:"保护壳",kind2:"移动电源",kind3:"耳机",tabcontent:[
              {tab:"保护壳",img_url:"http://127.0.0.1:3000/imgs/tab30.png"},
              {tab:"移动电源",img_url:"http://127.0.0.1:3000/imgs/tab30.png"},
              {tab:"耳机",img_url:"http://127.0.0.1:3000/imgs/tab32.png"},
              {tab:"保护套",img_url:"http://127.0.0.1:3000/imgs/tab33.png"},
              {tab:"贴膜",img_url:"http://127.0.0.1:3000/imgs/tab34.png"},
              {tab:"音响",img_url:"http://127.0.0.1:3000/imgs/tab35.png"},
              {tab:"自拍杆/支架",img_url:"http://127.0.0.1:3000/imgs/tab36.png"},
              {tab:"充电器/线材",img_url:"http://127.0.0.1:3000/imgs/tab37.png"},
              {tab:"U盘/存储卡",img_url:"http://127.0.0.1:3000/imgs/tab38.png"},
              {tab:"摄像机/镜头",img_url:"http://127.0.0.1:3000/imgs/tab39.png"},
              {tab:"智能硬件",img_url:"http://127.0.0.1:3000/imgs/tab40.png"},
              {tab:"表带",img_url:"http://127.0.0.1:3000/imgs/tab41.png"},
              {tab:"生活周边",img_url:"http://127.0.0.1:3000/imgs/tab42.png"},
              {tab:"盒子专属配件",img_url:"http://127.0.0.1:3000/imgs/tab43.png"},
              {tab:"触控笔/取卡针",img_url:"http://127.0.0.1:3000/imgs/tab44.png"},
            ]
          },
          {title:"增值服务&其他",kind1:"智能计算",kind2:"增值卡",tabcontent:[
              {tab:"智能计算",img_url:"http://127.0.0.1:3000/imgs/tab45.png"},
              {tab:"增值卡",img_url:"http://127.0.0.1:3000/imgs/tab46.png"}
            ]
          },
        ],
        tabcontentShow:false,
        // tabcontent:'',
        isActive:false,
        textArr:[
          '1 第一条公告',
          '2 第二条公告第二条公告',
          '3 第三条公告第三条公告第三条公告lksaujfasf',
          '4 第三条公告第三条公告第三条公告fa;skf;sakfsajfa',
          '5 第三条公告第三条公告第三条公告alsfjafsajf',
        ],
        number:0,
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
        scroll1:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list1.png",content:"新品首发 限时直降300元",title:"荣耀MagicBook 2019瑞龙版",price:"3999"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list2.png",content:"稀缺货源+享6期免息",title:"HUAWEI MateBook X Pro 2019款",price:"7999"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list3.png",content:"订金9抵109",title:"【订金】荣耀手表梦幻系列",price:"999"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list4.png",content:"订金50抵150",title:"HUAWEI WATCH GT 雅致款",price:"1388"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list5.png",content:"最高直降200元",title:"荣耀平板5 10.1英寸",price:"1199"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list6.png",content:"晒单赢好礼",title:"华为畅享9e",price:"999"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list7.png",content:"爆款限时优惠10元",title:"荣耀手环4",price:"189"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list8.png",content:"赠超值礼包",title:"HUAWEI FreeBuds 2无线耳机",price:"769"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list9.png",content:"最高直降100",title:"荣耀手表魔法系列",price:"849"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list10.png",content:"享3期免息，晒单评价赢好礼",title:"华为平板M5 青春版 8.0英寸",price:"1199"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list11.png",content:"双击触控,降噪通话",title:"FlyPods无线耳机青春版",price:"369"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list12.png",content:"新品上市 晒单赢好礼",title:"华为手环3 Pro",price:"399"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list13.png",content:"最高直降100元",title:"荣耀平板5 8英寸",price:"999"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list14.png",content:"360度全景云台",title:"荣耀小哨兵智能摄像机 云台版",price:"299"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list15.png",content:"新品上市 享3期免息",title:"华为路由 Q2 Pro",price:"769"},
        ]
      };
    },
    computed: {
      text () {
        return {
          id: this.number,
          val: this.textArr[this.number]
        }
      }
    },
    created(){
      this.bannerList();
      this.startMove();
    },
    methods:{
      bannerList(){
        this.axios.get("http://127.0.0.1:3000/bannerlist").then(result=>{
          console.log(result.data.data);
          this.list=result.data.data;
        })
      },
      //鼠标隐藏加入class
      tabHide() {
        this.tabcontentShow = false;
      },
      tabChange(i) {
        this.tabcontentShow = true;
        this.isActive = i;
      },
      startMove () {
        // eslint-disable-next-line
        var timer = setTimeout(() => {
          if (this.number === 4) {
            this.number = 0;
          } else {
            this.number += 1;
          }
          this.startMove();
        }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
      },
      // 左右箭头
    },
    //2.将header.vue设置为当前组件的子组件
    components:{  
      myHeader,
      myFooter,
    } 
  }
</script>
<style scoped>
  .main a{
    text-decoration:none;
    color:#595454;
  }
  .main{width:1200px;}
  .font-style{
    font-size:.75rem;
  }
  /* 轮播样式 */
  .mint-swipe{
    height:550px;
  }
  .banner{
    overflow:hidden;
  }
  /* 选项卡 */
  .tab-font{
    font-size:14px;
  }
  #tab{
    display:flex;
    position:absolute;
    top:300px;
  }
  .tabNav{
    width:200px;
    height:410px;
    background-color: #F8FAFE;
    border-radius:10px;
  }
  .tab-bar span:hover{
    color:#CF0A2C;
  }
  .tab-bar li:hover{
    background-color: #fff;
  }
  .tabs-content a div:hover{
    background:#DFDFDF;
    border-radius:10px;
  }
  .tabs-content a{
    text-decoration:none;
    color:#000;
    width:200px;
    height:100px;
    padding:10px;
  }
   .tabs-content a img{
     width:60px;
     height:50px;
   }
  .tabs-content a:hover{
    text-decoration:none;
  }
  .tabs-content .content{
    display:flex;
    flex-wrap:wrap;
    width:800px;
    height:100%;
    border-radius:0 10px 10px 0;
    background-color:#F8FAFE;
  }
  /* navbar */
  .navbar{
    border-radius:10px;
  }
  .nav-item a{
    text-decoration:none;
    color:#000;
  }
  .navbar .nav-item img{
    width:52px;
    height:52px;
  }
  .a_border{
    border:1px solid #CF0A2C;
    border-radius:5px;
  }
  .a_border span{
    color:#CF0A2C;
  }
  .left .a_btn{
    display:inline-block;
    line-height:22px;
    text-align:center;
    background:#595454;
    color:#fde4b3;
    width:68px;
    height:22px;
    margin-left:4px;
    border-radius:5px;
  }
  .left a:hover{
    color:#CF0A2C;
  }
  .left p a:first-child:after{
    content:"/";
  }
  .nav .nav-item img{
    width:40px;
    height:40px;
  }
  .nav .nav-item p:hover{
    color:#CF0A2C;
  }
  /* 向上滚动文字 */
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
  .textBox {
    width:150px;
    height:40px;
    overflow: hidden;
    text-align: center
  }
  .textBox a{
    text-decoration:none;
  }
  .textBox a p:hover{
    color:#CF0A2C;
  }
  .text-truncate{
    display:block; 
    overflow: hidden;
    /* 超出文本用省略号代替 */
    text-overflow: ellipsis;
    width:150px;
  }
  .d-flex.justify-content-around a{
    text-decoration:none;
    color:#8F8F94;  
  }
  .d-flex.justify-content-around a:hover{
    color:#CF0A2C;
  }
  .d-flex div.col-3 img{
    border-radius:10px;
  }
  /* 圆角 */
  .round{border-radius:8px;}
  /* floor1 */
  .floor{
    width:940px;
    }
  .floor1 ul{
    display: flex;
    width:968px;
    height:592px;
    flex-wrap:wrap;
    }
  .floor1 li{
    width:230px;
    height:290px;
    border-radius:8px;
    background-color:#f9f9f9;
    margin:6px 6px 6px 6px;
  }
  .floor1 ul>li img{
    width:150px;
    height:150px;;
  }
   .floor1 li:hover{
     background:#fff;
     box-shadow:0px 5px 5px 5px #ddd;
   }
   /* 左右切换 */
   .scroll ul{
     width:1200px;
     display:flex;
   }
   .scroll a{
     display:block;
     width:230px;
     height:295px;
   }
    .scroll .list-top{
      height:251px;
    }
    .scroll i{
      display:block;
      height:215px;
      background:#f9f9f9;
      border-radius:8px 8px 0 0;
    }
   .scroll img{
     width:150px;
     height:150px;
   }
   .scroll .list-top p{
     margin:0;
     background-color:#ddd;
     border-radius:0 0 8px 8px;
   }
   .list-top:hover{
     box-shadow:0px 4px 4px 4px #ddd;
     border-radius:0 0 8px 8px;
   }
   /* 左右箭头 */
   .scroll{position: relative;}
   .prev,.next{
     width:36px;
     height:72px;
     position:absolute;
     background:rgba(0,0,0,0.06);
     top:80px;
   }
   .next{
     right:18px;
   }
   .prev,.next:hover{
     background-color:#ddd;
   }
</style>