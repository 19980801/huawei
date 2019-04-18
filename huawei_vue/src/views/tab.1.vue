<template>
<div>
  <div class="menuList">
    <ul>
      <li v-for="(item,index) in tabbarlist" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
        <span>{{item.title}}</span>
        <span>{{item.kind1}}</span>
        <span>{{item.kind2}}</span>
        <span>{{item.kind3}}</span>
      </li>
    </ul>
 </div>
  <div class="tabCon">
    <div v-for='(itemCon,index) in tablist' :key="index" v-show="index == num">{{itemCon}}</div>
 </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        num:0,
        tabbarlist:[
          {title:"手机",kind1:"荣耀",kind2:"HUAWEI P系列"},
          {title:"笔记本&平板",kind1:"平板电脑",kind2:"笔记本电脑"},
          {title:"智能穿戴",kind1:"手环",kind2:"手表",kind3:"VR"},
          {title:"智能家居",kind1:"路由器",kind2:"电视盒子",kind3:"照明"},
          {title:"增值服务&其他",kind1:"智能计算",kind2:"增值卡"},
        ],
        tablist:[
          {tabcontent:[
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
          {tabcontent:[
              {tab:"平板电脑",img_url:"http://127.0.0.1:3000/imgs/tab9.png"},
              {tab:"笔记本电脑",img_url:"http://127.0.0.1:3000/imgs/tab10.png"},
              {tab:"笔记本配置",img_url:"http://127.0.0.1:3000/imgs/tab11.png"},
            ]       
          },
          {tabcontent:[
              {tab:"手环",img_url:"http://127.0.0.1:3000/imgs/tab12.png"},
              {tab:"手表",img_url:"http://127.0.0.1:3000/imgs/tab13.png"},
              {tab:"VR",img_url:"http://127.0.0.1:3000/imgs/tab14.png"},
            ] 
          },
          {tabcontent:[
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
          {tabcontent:[
              {tab:"保护壳",img_url:"http://127.0.0.1:3000/imgs/tab30.png"},
              {tab:"移动电源",img_url:"http://127.0.0.1:3000/imgs/tab31.jpg"},
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
          {tabcontent:[
              {tab:"智能计算",img_url:"http://127.0.0.1:3000/imgs/tab45.png"},
              {tab:"增值卡",img_url:"http://127.0.0.1:3000/imgs/tab46.png"}
            ]
          },
        ],
      }
    },

    methods: {
      tab (i) {
        this.curId = i;
      }
    }
  }
</script>

<style scoped>
 body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #58596b;
 }
 .active {
  color: #fff;
  background: #e74c3c;
 }
 #app {
  width: 800px;
  height: 400px;
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
 }
 .menuList {
  width: 800px;
  height: 60px;
  background-color: #33344a;
 }
 ul {
  width: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #717181;
  font-size: 16px;
  line-height: 60px;
 }
 ul li {
  flex: 1;
  text-align: center;
  cursor: pointer;
 }
 .tabCon {
  width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
  background-color: #fff;
 }

</style>
