<template>
  <div class="app-index">
    <my-header></my-header>
    <div>
    <div class="top-banner">
      <mt-swipe :auto="8000">
        <mt-swipe-item v-for="item of list" :key="item.id">
          <a :href="item.a_href"><img :src="item.img_url" class="banner"></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
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
    <!-- 一层 -->
    <div class="mt-5">
      <h3 class="text-left">热销单品</h3>
      <div class="d-flex mt-3">
        <img src="http://127.0.0.1:3000/imgs/c1.jpg" class="round">
        <div class="floor1 floor">
          <ul class="list-unstyled">
            <li v-for="item of floor1" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>               
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h3 class="text-left">精品推荐</h3>
      <div class="scroll d-flex mt-3">
        <div class="prev" @click="next" :class="prevDisabled?'btn-disabled':''">
          <span class="mui-icon mui-icon-back mt-4"></span>
        </div>
        <ul class="list-unstyled  d-flex" :style="ulScrollStyle">
          <li v-for="item of scroll1" :key="item.i">
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
        <div class="next" @click="prev" :class="nextDisabled?'btn-disabled':''">
          <span class="mui-icon mui-icon-forward mt-4"></span>
        </div>
      </div>
    </div>
    <div class="banner1">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item of list1" :key="item.id">
          <a :href="item.a_href"><img :src="item.img_url"></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 二层 -->
    <div class="mt-5 listshow1">
      <div class="d-flex">
        <h3 class="text-left col-1">手机</h3>
        <ul class="nav col-9">
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">HUAWEI Mate系列</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">荣耀</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">HUAWEI P系列</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">荣耀畅玩系列</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">HUAWEI nova系列</a>
          </li>
          <li class="nav-item">
          <a href="javascript:;" class="nav-link font-style">华为畅享系列</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">HUAWEI 麦芒系列</a>
          </li>
          <li class="nav-item">
          <a href="javascript:;" class="nav-link font-style">移动4G+专区</a>
          </li>
        </ul>
        <div class="col-2"><a href="javascript:;" class="text-right">查看更多
          <span class="mui-icon mui-icon-forward"></span>
        </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex"> 
            <li class="f1-img">
              <img src="http://127.0.0.1:3000/imgs/f2.1.jpg">
            </li>
            <li v-for="item of floor2" :key="item.i">
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
    <!-- 三层 -->
    <div class="mt-5 listshow2">
      <div class="d-flex">
        <h3 class="text-left col-2">笔记本电脑</h3>
        <ul class="nav ml-4 col-8">
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">平板电脑</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">笔记本电脑</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link font-style">笔记本配件</a>
          </li>
        </ul>
        <div col-2>
          <a href="javascript:;">查看更多
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f1-img">
              <img src="http://127.0.0.1:3000/imgs/f3.1.jpg">
            </li>
            <li v-for="item of floor3" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 四层 -->
    <div class="mt-5 listshow3">
      <div class="d-flex justify-content-between">
        <h3 class="text-left col-2">精品平板</h3>
        <ul class="nav col-8">
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">平板电脑</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">笔记本电脑</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">笔记本配件</a></li>
        </ul>
        <div class="float-right col-2">
          <a href="javascript:;">查看更多
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f1-img">
              <img src="http://127.0.0.1:3000/imgs/f4.1.jpg">
            </li>
            <li v-for="item of floor4" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 五层 -->
    <div class="mt-5 listshow4">
      <div class="d-flex">
        <h3 class="text-left col-2">智能穿戴</h3>
        <ul class="nav col-8">
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">手环</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">手表</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">VR</a></li>
        </ul>
        <div col-2>
          <a href="javascript:;">加载更多
           <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f2-img">
              <img src="http://127.0.0.1:3000/imgs/f5.1.jpg">
            </li>
            <li v-for="item of floor5" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="scroll1 d-flex mt-3">
      <div class="prev" @click="next" :class="prevDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-back mt-4"></span>
      </div>
      <ul class="list-unstyled  d-flex" :style="ulScrollStyle">
        <li v-for="item of scroll2" :key="item.i">
          <a :href="item.a_href">
            <div class="list-top">
              <i class="p-0"><img :src="item.img_url" class="mt-4"></i>
              <p class="p-2">{{item.content}}</p>
            </div>
            <div class="list-bottom">
              <p class="text-dark m-0 mt-2">{{item.title}}</p>
              <p class="text-danger">￥{{item.price}}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="next" @click="prev" :class="nextDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-forward mt-4"></span>
      </div>
    </div>
    <!-- 六层 -->
    <div class="mt-5 listshow5">
      <div class="d-flex">
        <h3 class="text-left">智能家居</h3>
        <ul class="nav ml-2">
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">路由器</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">子母/分布式路由</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">电力猫/wife放大器</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">随性wife</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">电视</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">照明</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">清洁</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">节能</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">环境</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">安防</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">健康</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">厨电</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">影音</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">卫浴</a></li>
        </ul>
        <div class="float-right ml-2">
          <a href="javascript:;">查看更多
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f2-img">
              <img src="http://127.0.0.1:3000/imgs/f5.1.jpg">
            </li>
            <li v-for="item of floor6" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    <div class="scroll1 d-flex mt-3">
      <div class="prev" @click="next" :class="prevDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-back mt-4"></span>
      </div>
      <ul class="list-unstyled  d-flex" :style="ulScrollStyle">
        <li v-for="item of scroll3" :key="item.i">
          <a :href="item.a_href">
            <div class="list-top">
              <i class="p-0"><img :src="item.img_url" class="mt-4"></i>
              <p class="p-2">{{item.content}}</p>
            </div>
            <div class="list-bottom">
              <p class="text-dark m-0 mt-2">{{item.title}}</p>
              <p class="text-danger">￥{{item.price}}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="next" @click="prev" :class="nextDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-forward mt-4"></span>
      </div>
    </div>
    </div>
    <div class="mt-4">
      <img src="http://127.0.0.1:3000/imgs/banner17.jpg" class="rounded">
    </div>
    <!-- 七层 -->
    <div class="mt-5 listshow6">
      <div class="d-flex">
        <h3 class="text-left">热销配件</h3>
        <ul class="nav ml-2">
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">保护壳</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">保护套</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">贴膜</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">移动电源</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">耳机</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">充电线/线材</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">自拍杆/支架</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">音响</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">U盘/存储卡</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">摄像机/镜头</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">智能硬件</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">表带</a></li>
        </ul>
        <div class="float-right ml-4">
          <a href="javascript:;">查看更多
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f2-img">
              <img src="http://127.0.0.1:3000/imgs/f7.1.jpg">
            </li>
            <li v-for="item of floor7" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>  
    </div>
    <div class="scroll1 d-flex mt-3">
      <div class="prev" @click="next" :class="prevDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-back mt-4"></span>
      </div>
      <ul class="list-unstyled  d-flex" :style="ulScrollStyle">
        <li v-for="item of scroll4" :key="item.i">
          <a :href="item.a_href">
            <div class="list-top">
              <i class="p-0"><img :src="item.img_url" class="mt-4"></i>
              <p class="p-2">{{item.content}}</p>
            </div>
            <div class="list-bottom">
              <p class="text-dark m-0 mt-2">{{item.title}}</p>
              <p class="text-danger">￥{{item.price}}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="next" @click="prev" :class="nextDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-forward mt-4"></span>
      </div>
    </div>
    <!-- 八层 -->
    <div class="mt-5 listshow7">
      <div class="d-flex">
        <h3 class="text-left">品牌配件</h3>
        <ul class="nav ml-2">
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">保护壳</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">保护套</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">贴膜</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">移动电源</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">耳机</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">充电线/线材</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">自拍杆/支架</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">音响</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">U盘/存储卡</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">摄像机/镜头</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">智能硬件</a></li>
          <li class="nav-item"><a href="javascript:;" class="nav-link font-style">表带</a></li>
        </ul>
        <div class="float-right ml-4">
          <a href="javascript:;">查看更多
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
      <div class="mt-3 d-flex">
        <div class="floor">
          <ul class="list-unstyled d-flex">
            <li class="f2-img">
              <img src="http://127.0.0.1:3000/imgs/f7.1.jpg">
            </li>
            <li v-for="item of floor8" :key="item.i">
              <a :href="item.a_href">
                <img :src="item.img_url" class="mt-4 mb-2">
                <h6 class="text-dark">{{item.title}}</h6>
                <p class="mb-2 text-secondary">{{item.content}}</p>
                <p class="text-danger">￥{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>  
    </div>
    <div class="scroll1 d-flex mt-3">
      <div class="prev" @click="next" :class="prevDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-back mt-4"></span>
      </div>
      <ul class="list-unstyled  d-flex" :style="ulScrollStyle">
        <li v-for="item of scroll5" :key="item.i">
          <a :href="item.a_href">
            <div class="list-top">
              <i class="p-0"><img :src="item.img_url" class="mt-4"></i>
              <p class="p-2">{{item.content}}</p>
            </div>
            <div class="list-bottom">
              <p class="text-dark m-0 mt-2">{{item.title}}</p>
              <p class="text-danger">￥{{item.price}}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="next" @click="prev" :class="nextDisabled?'btn-disabled':''">
        <span class="mui-icon mui-icon-forward mt-4"></span>
      </div>
    </div>
    <div class="mt-4 mb-5">
      <a href="javascript:;">
        <img src="http://127.0.0.1:3000/imgs/banner18.jpg" class="rounded">
      </a>
    </div>
   </div>
   <!-- 底部工具栏 -->
   <div class="tool">
     <ul class="float-tool list-unstyled">
       <li>
         <a href="javascript:;">
          <span class="iconfont icon-cart-normal"></span>
          <div class="shop-msg">
            <span>购物车</span>
          </div>           
         </a>
      </li>
       <li>
         <a href="javascript:;">
          <span class="iconfont icon-kefu"></span>
          <div class="kf-msg">
            <span>在线客服</span>
          </div>           
         </a>
      </li>
       <li>
         <span class="iconfont icon-bianji"></span>
         <div class="msg">
           <span>意见反馈</span>
         </div>
      </li>
       <li @click="toTop(step)" :class="{show:isActive}">
         <span class="iconfont icon-huidingbu"></span>
         <div class="top-msg">
           <span>返回顶部</span>
         </div>
      </li>
     </ul>
   </div>
   <!-- 侧面菜单栏 -->
   <div class="float-list" :class="{show:isActive}">
     <ul class="list-unstyled"> 
       <li @click="showDetails(1)"><a href="javascript:;">手机</a></li>
       <li @click="showDetails(2)"><a href="javascript:;">笔记本电脑</a></li>
       <li @click="showDetails(3)"><a href="javascript:;">精品平板</a></li>
       <li @click="showDetails(4)"><a href="javascript:;">智能穿戴</a></li>
       <li @click="showDetails(5)"><a href="javascript:;">智能家居</a></li>
       <li @click="showDetails(6)"><a href="javascript:;">热销配件</a></li>
       <li @click="showDetails(7)"><a href="javascript:;">品牌配件</a></li>
     </ul>
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
    props:{
      // 控制动画快慢
      step:{
        type:Number,
        default:50
      }
    },
    data(){
      return {
        // 轮播
        list:[],
        list1:[],
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
          '电影票优惠券使用说明',
          '使用Huawei Pay支付抢购P30新机赢蓝牙小音箱！中奖名单公布！',
          '使用Huawei Pay支付抢购P30新机赢50话费！中奖名单公布！',
          'HUAWEI P30系列首销 银行渠道6期免息',
          '消费体验有奖调研中奖名单公布',
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
        floor2:[
          {a_href:"javascript:;",title:"华为畅享9 Plus",content:"四摄全面屏",price:"1499",img_url:"http://127.0.0.1:3000/imgs/f2.2.png"},
          {a_href:"javascript:;",title:"荣耀Note10",content:"最高优惠600",price:"2599",img_url:"http://127.0.0.1:3000/imgs/f2.3.png"},
          {a_href:"javascript:;",title:"HUAWEI Mate 20 RS",content:"保时捷设计",price:"12999",img_url:"http://127.0.0.1:3000/imgs/f2.4.png"},
          {a_href:"javascript:;",title:"荣耀Magic2",content:"限时优惠300元",price:"3499",img_url:"http://127.0.0.1:3000/imgs/f2.5.png"},
          {a_href:"javascript:;",title:"HUAWEI nova3",content:"领券最高减100元",price:"2799",img_url:"http://127.0.0.1:3000/imgs/f2.6.png"},
          {a_href:"javascript:;",title:"荣耀8X Max",content:"64GB减100",price:"1499",img_url:"http://127.0.0.1:3000/imgs/f2.7.png"},
          {a_href:"javascript:;",title:"HUAWEI nova 3i",content:"享6期免息",price:"1899",img_url:"http://127.0.0.1:3000/imgs/f2.8.png"},
          {a_href:"javascript:;",title:"荣耀Play",content:"最高优惠300元",price:"1899",img_url:"http://127.0.0.1:3000/imgs/f2.9.png"},
          {a_href:"javascript:;",title:"华为畅享9",content:"64G版下单立减100",price:"1199",img_url:"http://127.0.0.1:3000/imgs/f2.10.png"},
          {a_href:"javascript:;",title:"荣耀畅玩7",content:"下单立减50元",price:"599",img_url:"http://127.0.0.1:3000/imgs/f2.11.png"},
          {a_href:"javascript:;",title:"华为畅享8e 青春",content:"5.45英寸高清全面屏",price:"799",img_url:"http://127.0.0.1:3000/imgs/f2.12.png"},
          {a_href:"javascript:;",title:"华为畅享8",content:"6期免息",price:"1199",img_url:"http://127.0.0.1:3000/imgs/f2.13.png"},
          {a_href:"javascript:;",title:"HUAWEI 麦芒7",content:"领券减200元+6期免息",price:"2199",img_url:"http://127.0.0.1:3000/imgs/f2.14.png"},
          {a_href:"javascript:;",title:"荣耀畅玩8C",content:"4GB+32GB到手价899",price:"899",img_url:"http://127.0.0.1:3000/imgs/f2.15.png"},
        ],
        floor3:[
          {a_href:"javascript:;",title:"荣耀MagicBook 2019锐龙版",content:"订金100元抵400元 赠耳机",price:"4299",img_url:"http://127.0.0.1:3000/imgs/f3.2.png"},
          {a_href:"javascript:;",title:"HUAWEI MateBook E 2019款",content:"订金100抵200+赠蓝牙鼠标",price:"3999",img_url:"http://127.0.0.1:3000/imgs/f3.3.png"},
          {a_href:"javascript:;",title:"荣耀MagicBook",content:"最高直降300元 享6期免息",price:"4699",img_url:"http://127.0.0.1:3000/imgs/f3.4.png"},
          {a_href:"javascript:;",title:"HUAWEI MateBook D",content:"限量赠华为双肩包",price:"4988",img_url:"http://127.0.0.1:3000/imgs/f3.5.png"},
          {a_href:"javascript:;",title:"HUAWEI MateBook 13",content:"稀缺货源 限量发售",price:"5699",img_url:"http://127.0.0.1:3000/imgs/f3.6.png"},
          {a_href:"javascript:;",title:"荣耀MagicBook 星云紫",content:"高颜值时尚轻薄本",price:"5699",img_url:"http://127.0.0.1:3000/imgs/f3.7.png"},
          {a_href:"javascript:;",title:"HUAWEI MateBook 14",content:"优享购免登记",price:"5699",img_url:"http://127.0.0.1:3000/imgs/f3.8.png"},
          {a_href:"javascript:;",title:"荣耀MagicBook 触控版",content:"touch触控 随心而动",price:"5699",img_url:"http://127.0.0.1:3000/imgs/f3.9.png"},
          {a_href:"javascript:;",title:"HUAWEI MateBook E",content:"限量赠配件礼包",price:"4288",img_url:"http://127.0.0.1:3000/imgs/f3.10.png"},
        ],
        floor4:[
          {a_href:"javascript:;",title:"荣耀平板5 10.1英寸",content:"最高直降200元",price:"1199",img_url:"http://127.0.0.1:3000/imgs/f4.2.png"},
          {a_href:"javascript:;",title:"华为平板 M5 青春版 10.1英寸",content:"智能语音平板",price:"2199",img_url:"http://127.0.0.1:3000/imgs/f4.3.png"},
          {a_href:"javascript:;",title:"荣耀平板5 8英寸",content:"最高直降50元",price:"1049",img_url:"http://127.0.0.1:3000/imgs/f4.4.png"},
          {a_href:"javascript:;",title:"华为畅享平板",content:"畅快追剧，大屏享受",price:"1249",img_url:"http://127.0.0.1:3000/imgs/f4.5.png"},
          {a_href:"javascript:;",title:"荣耀WaterPlay 防水影音平板",content:"订金10元抵310元",price:"1799",img_url:"http://127.0.0.1:3000/imgs/f4.6.png"},
          {a_href:"javascript:;",title:"华为平板M5 10.8英寸",content:"限量赠平板支架",price:"2488",img_url:"http://127.0.0.1:3000/imgs/f4.7.png"},
          {a_href:"javascript:;",title:"荣耀Waterplay 8英寸",content:"哈曼卡顿调音",price:"1499",img_url:"http://127.0.0.1:3000/imgs/f4.8.png"},
          {a_href:"javascript:;",title:"华为平板M5 8.4英寸",content:"哈曼卡顿调音",price:"1988",img_url:"http://127.0.0.1:3000/imgs/f4.9.png"},
          {a_href:"javascript:;",title:"荣耀畅玩平板2 9.6英寸 ",content:"限时直降50元",price:"1049",img_url:"http://127.0.0.1:3000/imgs/f4.10.png"},
        ],
        floor5:[
          {a_href:"javascript:;",title:"荣耀手表魔法系列",content:"最高直降100元 3期免息",price:"849",img_url:"http://127.0.0.1:3000/imgs/f5.1.png"},
          {a_href:"javascript:;",title:"华为手环",content:"彩屏健康手环",price:"949",img_url:"http://127.0.0.1:3000/imgs/f5.2.png"},
          {a_href:"javascript:;",title:"荣耀手表梦幻系列",content:"最高直降100元 3期免息",price:"999",img_url:"http://127.0.0.1:3000/imgs/f5.3.png"},
          {a_href:"javascript:;",title:"HUAWEI WATCH 2 Pro",content:"手机手表共享一个号码",price:"2188",img_url:"http://127.0.0.1:3000/imgs/f5.4.png"},
          {a_href:"javascript:;",title:"荣耀手环4",content:"限时直降10元",price:"189",img_url:"http://127.0.0.1:3000/imgs/f5.5.png"},
          {a_href:"javascript:;",title:"荣耀手环3 Pro",content:"独立GPS 彩屏健康手环",price:"399",img_url:"http://127.0.0.1:3000/imgs/f5.6.png"},
          {a_href:"javascript:;",title:"荣耀手环3",content:"最高直降90元",price:"109",img_url:"http://127.0.0.1:3000/imgs/f5.7.png"},
          {a_href:"javascript:;",title:"华为儿童手表3 Pro",content:"4G全网通 高清拍照",price:"988",img_url:"http://127.0.0.1:3000/imgs/f5.8.png"},
        ],
        floor6:[
          {a_href:"javascript:;",title:"荣耀路由Pro 2 ",content:"限时直降20元",price:"329",img_url:"http://127.0.0.1:3000/imgs/f6.1.png"},
          {a_href:"javascript:;",title:"华为AI音响",content:"丹拿音质 声纹识别",price:"399",img_url:"http://127.0.0.1:3000/imgs/f6.2.png"},
          {a_href:"javascript:;",title:"荣耀YOYO智能音响",content:"限时直降10元",price:"189",img_url:"http://127.0.0.1:3000/imgs/f6.3.png"},
          {a_href:"javascript:;",title:"华为路由WS5200增强版",content:"限时直降12元",price:"217",img_url:"http://127.0.0.1:3000/imgs/f6.4.png"},
          {a_href:"javascript:;",title:"荣耀路由2S",content:"限时直降20元",price:"179",img_url:"http://127.0.0.1:3000/imgs/f6.5.png"},
          {a_href:"javascript:;",title:"华为路由器WS5102",content:"限时直降15元",price:"144",img_url:"http://127.0.0.1:3000/imgs/f6.6.png"},
          {a_href:"javascript:;",title:"荣耀路由Pro",content:"限时直降79元",price:"249",img_url:"http://127.0.0.1:3000/imgs/f6.7.png"},
          {a_href:"javascript:;",title:"华为备咖存储",content:"限时直降50元",price:"649",img_url:"http://127.0.0.1:3000/imgs/f6.8.png"},
        ],
        floor7:[
          {a_href:"javascript:;",title:"荣耀FlyPods青春版 真无线耳机",content:"赠210元超值礼包",price:"399",img_url:"http://127.0.0.1:3000/imgs/f7.1.png"},
          {a_href:"javascript:;",title:"FlyPods系列无线耳机",content:"赠210元超值礼包",price:"799",img_url:"http://127.0.0.1:3000/imgs/f7.2.png"},
          {a_href:"javascript:;",title:"HUAWEI FreeBuds2系列",content:"骨声纹识别 智慧声控",price:"999",img_url:"http://127.0.0.1:3000/imgs/f7.3.png"},
          {a_href:"javascript:;",title:"荣耀只能体脂称",content:"科学指导减脂",price:"129",img_url:"http://127.0.0.1:3000/imgs/f7.4.png"},
          {a_href:"javascript:;",title:"华为安居智能摄像机",content:"360度全景视角",price:"299",img_url:"http://127.0.0.1:3000/imgs/f7.5.png"},
          {a_href:"javascript:;",title:"荣耀xSport 运动蓝牙耳机",content:"10天待机/11小时续航",price:"179",img_url:"http://127.0.0.1:3000/imgs/f7.6.png"},
          {a_href:"javascript:;",title:"荣耀移动电源2",content:"18W双向快充/新国际指标",price:"99",img_url:"http://127.0.0.1:3000/imgs/f7.7.png"},
          {a_href:"javascript:;",title:"华为40W超级快充移动电源",content:"双向40W超级快充",price:"369",img_url:"http://127.0.0.1:3000/imgs/f7.8.png"},
        ],
        floor8:[
          {a_href:"javascript:;",title:"FlyPods系列无线耳机",content:"赠210元超值礼包",price:"799",img_url:"http://127.0.0.1:3000/imgs/f8.2.png"},
          {a_href:"javascript:;",title:"HUAWEI FreeBuds2系列",content:"骨声纹识别 智慧声控",price:"999",img_url:"http://127.0.0.1:3000/imgs/f8.3.png"},
          {a_href:"javascript:;",title:"荣耀只能体脂称",content:"科学指导减脂",price:"129",img_url:"http://127.0.0.1:3000/imgs/f8.4.png"},
          {a_href:"javascript:;",title:"华为安居智能摄像机",content:"360度全景视角",price:"299",img_url:"http://127.0.0.1:3000/imgs/f8.5.png"},
          {a_href:"javascript:;",title:"荣耀xSport 运动蓝牙耳机",content:"10天待机/11小时续航",price:"179",img_url:"http://127.0.0.1:3000/imgs/f8.6.png"},
          {a_href:"javascript:;",title:"荣耀移动电源2",content:"18W双向快充/新国际指标",price:"99",img_url:"http://127.0.0.1:3000/imgs/f8.7.png"},
          {a_href:"javascript:;",title:"华为40W超级快充移动电源",content:"双向40W超级快充",price:"369",img_url:"http://127.0.0.1:3000/imgs/f8.8.png"},
          {a_href:"javascript:;",title:"华为40W超级快充移动电源",content:"双向40W超级快充",price:"369",img_url:"http://127.0.0.1:3000/imgs/f8.9.png"},
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
        ],
        scroll2:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list16.png",content:"限时直降40元",title:"荣耀小K 儿童手表",price:"259"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list17.png",content:"实时心率 彩屏触控",title:"华为手环",price:"269"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list18.png",content:"两种佩戴方式",title:"荣耀手环4 Running版",price:"99"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list19.png",content:"蓝牙通话 NFC支付",title:"HUAWEI WATCH 2",price:"1288"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list20.png",content:"OLED大屏，防尘防水",title:"荣耀畅玩手环A2",price:"99"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list21.png",content:"精准定位，清晰通话",title:"华为儿童手表3",price:"398"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list22.png",content:"低调奢华 天生不凡",title:"华为智能手表",price:"4988"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list23.png",content:"是手环，也是耳机",title:"华为手环B3 青春版",price:"469"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list24.png",content:"14天持久续航",title:"华为手环3e 跑步精灵",price:"99"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list25.png",content:"手环",title:"华为运动手环 GPS版",price:"338"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list26.png",content:"适配HUAWEI P20系列",title:"HUAWEI VR 2",price:"1999"},
        ],
        scroll3:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list27.png",content:"限时直降20元",title:"荣耀盒子Pro",price:"399"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list28.png",content:"限时直降20元",title:"华为路由器A1",price:"379"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list29.png",content:"限时直降50元",title:"荣耀存储",price:"649"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list30.png",content:"限时直降50元",title:"华为子母路由器Q1",price:"409"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list31.png",content:"限时优惠4元",title:"荣耀路由X2",price:"145"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list32.png",content:"限时直降10元",title:"华为路由WS5200",price:"189"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list33.png",content:"最高优惠100元",title:"荣耀分布式路由",price:"799"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list34.png",content:"限时直降5元",title:"华为WiFi放大器",price:"94"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list35.png",content:"限时直降10元",title:"荣耀路由X1 增强版",price:"139"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list36.png",content:"限时直降20元",title:"华为路由器WS5100",price:"139"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list37.png",content:"即插即用 自动配对",title:"荣耀WIFI穿墙宝",price:"256"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list38.png",content:"轻薄小巧 口袋WiFi",title:"华为随行WIFi 2畅享版",price:"329"},
        ],
        scroll4:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list39.png",content:"支持QI无线充电标准",title:"华为无线充电器",price:"99"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list40.png",content:"健康减脂必备",title:"华为智能体脂称",price:"169"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list41.png",content:"3种降噪模式切换",title:"华为主动降噪耳机3",price:"399"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list42.png",content:"360度全景云台",title:"荣耀小哨兵只能摄像机",price:"299"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list43.png",content:"开启自拍新时代",title:"华为无线三脚架自拍杆",price:"89"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list44.png",content:"清新画质/小巧便携",title:"荣耀MINI照片打印机",price:"599"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list45.png",content:"支持9V2A快充",title:"华为车载充电器快充版",price:"69"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list46.png",content:"物理调音黑科技",title:"荣耀引擎耳机2代",price:"89"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list47.png",content:"赠5A Type C数据线",title:"荣耀车载充电器",price:"129"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list48.png",content:"360度无界视野",title:"华为全景相机",price:"599"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list49.png",content:"AI高清夜视/看的更安心",title:"荣耀小哨兵智能摄像机",price:"199"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list50.png",content:"可测心理压力 提供放松训练",title:"华为运动心率蓝牙耳机",price:"549"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list51.png",content:"三线线控/高性价比",title:"荣耀AM116半入耳式耳机",price:"59"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list51.png",content:"4.5V5A车充",title:"华为车载充电器",price:"149"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list53.png",content:"实时心率监测",title:"荣耀心晴耳机",price:"129"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list54.png",content:"360度照片/视频/微博直播",title:"华为全景相机酷玩版",price:"599"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list55.png",content:"给您如临现场的音质体验",title:"荣耀魔声耳机",price:"229"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list56.png",content:"三挡补光特效 柔光自拍",title:"华为补光灯自拍杆",price:"139"},
        ],
        scroll5:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list57.png",content:"出色音质体验",title:"大康专用运动型蓝牙耳机",price:"128"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list58.png",content:"源自丹麦",title:"PanzerGlass mate20",price:"98"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list59.png",content:"一分钟快速降温",title:"55度moscup智能降温杯",price:"239"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list60.png",content:"一款为花粉打造的智能灯泡",title:"Sengled生智能LED灯泡",price:"39"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list61.png",content:"360度云台全景",title:"海雀智能摄像头H1",price:"249"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list62.png",content:"静谧时光 添色添香",title:"欧普香薰助眠灯",price:"189"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list63.png",content:"5种安全保护",title:"耐翔Type-C 通用U盘",price:"129"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list64.png",content:"手机远程控制",title:"欧瑞博智能插座S30c",price:"47"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list65.png",content:"炖煮兼用，钛会养生",title:"Amos养生壶",price:"349"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list66.png",content:"智能Type-C拓展 小巧便携",title:"绿联高清投屏转换器",price:"168"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list67.png",content:"暖暖的心意",title:"欧普吹控灯(白色)",price:"6 9"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list68.png",content:"智慧湿拖 高效覆盖",title:"科沃斯智能扫地机器人",price:"2799"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list69.png",content:"保障居家健康",title:"720空气质量监测仪环境",price:"429"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list70.png",content:"强效除霾 降醛灭菌",title:"720全智能净化器",price:"2149"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list71.png",content:"多设备通用办公键盘",title:"BOW三折蓝牙背光键盘",price:"299"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list71.png",content:"释放你的双手",title:"缤特力 商务蓝牙耳机",price:"368"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list71.png",content:"超便捷的果蔬料理机",title:"魔飞便携式榨汁机",price:"328"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/list71.png",content:"手机轻松扩容，高效传输",title:"耐翔手机扩容U盘 安卓版",price:"65"},
        ],
        // 专门控制scroll下list
        ulScrollStyle:{
          "margin-left":0,
        },
        // 记录ul已经左移的li的次数
        moved:0,
        showIndex:null,
      };
    },
    // 计算属性
    computed: {
      text () {
        return {
          id: this.number,
          val: this.textArr[this.number],
        }
      },
      //左右箭头禁用
      prevDisabled(){
        return this.moved==0;
      },
      nextDisabled(){
        return this.moved>=this.scroll1.length/5-1;
      }
    },
    created(){
      this.bannerList();
      this.startMove(); 
      this.bannerList1();
      // 返回顶部
      var vm=this;
      window.onscroll=function(){
        if(document.documentElement.scrollTop>2383){
          vm.isActive=true;
        }else{
          vm.isActive=false;
        }
      }
    },
    methods:{
      bannerList(){
        this.axios.get("http://127.0.0.1:3000/bannerlist").then(result=>{
          this.list=result.data.data.splice(0,8);
        })
      },
      bannerList1(){
        this.axios.get("http://127.0.0.1:3000/bannerList").then(result=>{
          this.list1=result.data.data.splice(8,15);
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
      prev(){
        // 如果右边按钮没有禁用
        if(this.nextDisabled==false){
          this.moved++;
          this.ulScrollStyle["margin-left"]=this.moved*-1200+"px";
        } 
      },
      next(){
        // 如果左边按钮没有禁用
        if(this.prevDisabled==false){
          this.moved--;
          this.ulScrollStyle["margin-left"]=this.moved*-1200+"px";
        }
      },
      // 返回顶部
      toTop(i){
        // 参数i表示间隔幅度大小；来控制速度
        //console.log(i);
      document.documentElement.scrollTop-=i;
       if(document.documentElement.scrollTop>0){
         var t=setTimeout(()=>this.toTop(i),10);
       }else{
         clearTimeout(t);
       }
      },
      // 右侧悬浮菜单栏滑动跟随
      showDetails(num){
        var el=document.getElementsByClassName(`listshow${num}`)[0];
        console.log(el.offsetTop);
        if(this.showIndex==num){
          this.showIndex=null;
        }else{
          this.showIndex=num;
        }
        this.$nextTick(function(){
          window.scrollTo({"behavior":"smooth","top":el.offsetTop});
        })
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
  .app-index{
    background-color:#fff;
    width:1920px;
  }
  .main a{
    text-decoration:none;
    color:#595454;
  }
  .main a:hover{
    color:#CF0A2C;
  }
  .main{width:1200px;}
  .font-style{
    font-size:.75rem;
  }
  /* 轮播样式 */
  .top-banner .mint-swipe{
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
  #tab:hover .tabNav{
    border-radius:10px 0 0 10px;
  }
  .tab-bar span:hover{
    color:#CF0A2C;
  }
  .tab-bar li:hover{
    background-color: #fff;
    border-radius:10px;
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
    box-shadow:0px 0px 5px 5px #ddd;
  }
   .nav-item a{
    text-decoration:none;
    color:#000;
  }
 .nav-item img{
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
  .textBox .text{
    overflow: hidden;  /*溢出隐藏*/
    text-overflow: ellipsis; /*以省略号...显示*/
    white-space: nowrap;  /*强制不换行*/
  }
  .text-truncate{
    display:block; 
    overflow: hidden;
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
  /* 楼层 */
  .floor li{
    width:230px;
    height:290px;
    border-radius:8px;
    background-color:#f9f9f9;
    margin:6px 6px 6px 6px;
  }
  .floor ul>li img{
    width:150px;
    height:150px;;
  }
  .floor li:hover{
     background:#fff;
     box-shadow:0px 5px 5px 5px #ddd;
   }
  /* 一层 */
 .floor1 ul{
    display: flex;
    width:968px;
    height:592px;
    flex-wrap:wrap;
    }
   /* 左右切换 */
   .scroll{
     overflow:hidden;
     position:relative;
   }
   .scroll ul li{
     margin:5px;
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
   .scroll .prev,.scroll .next{
     width:36px;
     height:72px;
     position:absolute;
     background:rgba(0,0,0,0.06);
     top:88px;
   }
  /* 禁用样式 */
   .scroll .btn-disabled{
     display:none;
   }
   .scroll .prev{
     left:5px;
     border-radius:0 8px 8px 0;
   }
   .scroll .next{
      right:5px;
      border-radius: 8px 0 0 8px;
   }
   .prev:hover,.next:hover{
     background-color:#ddd;
   }
   /* 中间轮播 */
    .banner1 .mint-swipe{
     height:120px;
     margin:4px 0;
   }
  .banner1 .mint-swipe img{
    border-radius:8px;
  }
  /* 第二层 */
   .floor img{
    width:150px;
    height:150px;
  }
   .f1-img img{
    width:230px !important;
    height:290px !important;
    border-radius:5px;
  }
   .floor ul{
    flex-wrap:wrap;
  }
  .floor ul li{
    margin:5px;
  }
 .f2-img{
    width:470px !important;
    height:290px !important;
  }
 .f2-img img{
    width:470px !important;
    height:290px !important;
    border-radius:5px;
  }

   /* 左右切换 小图*/
   .scroll1{
     overflow:hidden;
     position:relative;
   }
    .scroll1 ul li{
     margin:5px;
   }
   .scroll1 a{
     display:block;
     width:190px;
     height:240px;
   }
    .scroll1 .list-top{
      height:190px;
    }
   .scroll1 i{
      display:block;
      height:158px;
      background:#f9f9f9;
      border-radius:8px 8px 0 0;
    }
   .scroll1 img{
     width:120px;
     height:120px;
   }
   .scroll1 .list-top p{
     background-color:#ddd;
     border-radius:0 0 8px 8px;
   }
   .scroll1 .btn-disabled{
     display:none;
   }
   .scroll1 .prev{
     left:5px;
     border-radius:0 8px 8px 0;
   }
   .scroll1 .next{
      right:5px;
      border-radius: 8px 0 0 8px;
   }
  .scroll1 .prev,.next{
     width:36px;
     height:72px;
     position:absolute;
     background:rgba(0,0,0,0.06);
     top:55px;
   }
   /* 底部工具栏 */
   .float-tool a{
     text-decoration:none;
     color:#595454
   }
   .float-tool{
    color:#595454;
    position:fixed; 
    right:10px;
    bottom:10px;
   }
   .float-tool li{
    position: relative;
    margin-bottom:2px;
    width:35px;
    height:35px;
    cursor:pointer;
   }
   .float-tool li:hover div{
     display:block;
   }
  .float-tool li div{
    display:none;
    position:absolute;
    right:40px;
    width:80px;
    height:30px;
    line-height:30px;
    font-size:12px;
    background-color:#fff;
  }
   .shop-msg{
     top:-5px;
   }
   .kf-msg{
     top:-8px;
   }
   .msg{
     top:-9px;
   }
   .top-msg{
     top:-9px;
   }
   .float-tool li:last-child{
     display:none;
   }
   .show{
     display:block !important;
   }
   /* 悬浮菜单 */
    .float-list{
     position:fixed;
     right:10px;
     top:500px;
     width:100px;
     color:#595454;
     border-radius:5px;
     display:none;
   }
   .float-list a{
     text-decoration:none;
     color:#595454;
     font-size:14px;
   }
  .float-list li{
     width:100px;
     height:30px;
     margin:4px;
     line-height:30px;
   }
   .float-list li:hover{
     background:#ddd;
   }
</style>