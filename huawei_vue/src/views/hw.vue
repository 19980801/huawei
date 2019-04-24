<template>
  <div>
    <header class="container-fluid">
      <div id="parent">
        <div class="card">
          <div class="card-header bg-dark text-white" @click="top">
            <a href="#cols1" class="card-link text-white" data-toggle="collapse">消费者业务清单</a>
            <span class="mui-icon mui-icon-arrowdown"  v-show="showDown"></span>
            <span class="mui-icon mui-icon-arrowup"  v-show="showTop"></span>
          </div>
            <div id="cols1" class="collapse" data-parent="#parent">
              <div class="card-body">
                <ul class="list-unstyled p-5">
                  <div class="col-md-3 col-sm-12">
                    <li>
                      <span>个人用户</span>
                      <p>手机，PC和平板，穿戴设备等个人及家用产品</p>
                    </li>
                  </div>
                  <div class="col-md-3 col-sm-12">
                  <li>
                    <a href="javascript:;">集团网站
                    <span class="mui-icon mui-icon-arrowright"></span>
                    </a>
                    <p>公司信息，社会责任，新闻，展会活动，行业洞察等等</p>
                  </li>                    
                  </div>
                  <div class="col-md-3 col-sm-12">
                  <li> 
                    <a href="javascript:;">企业用户
                      <span class="mui-icon mui-icon-arrowright"></span>
                    </a>
                    <p>企业商用产品、解决方案和云服务</p>
                  </li>                    
                  </div>
                  <div class="col-md-3 col-sm-12">
                  <li>
                    <a href="javascript:;">运行商用户
                      <span class="mui-icon mui-icon-arrowright"></span>
                    </a>
                    <p>运行商网络解决方案、产品及服务</p>
                  </li>                    
                  </div>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div class="navbar navbar-expand-md navbar-light bg-light border-bottom">
        <a href="#/index" class="navbar-brand"><img src="http://127.0.0.1:3000/imgs/logo.png"></a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#content">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="content">
          <ul class="navbar-nav">
            <li class="nav-item" data-toggle="collapse" data-target="#a1">
              智能手机
              <span class="iconfont icon-down"></span>
              <div id="a1" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top1.png">
                      <p>HUAWEI P30 Pro</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top2.png">
                      <p>HUAWEI Mat20 Pro</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top3.png">
                      <p>HUAWEI nova4</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top4.png">
                      <p>华为畅享 9S</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw1.png">
                      <p>查看全部智能手机</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a2">
              笔记本
              <span class="iconfont icon-down"></span>
              <div id="a2" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top5.png">
                      <p>HUAWEI MateBook X Pro2019款</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top6.png">
                      <p>HUAWEI MateBook14</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top7.png">
                      <p>HUAWEI MateBookE</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top8.png">
                      <p>HUAWEI MateBook13</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw2.png">
                      <p>查看全部笔记本</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a3">
              平板
              <span class="iconfont icon-down"></span>
              <div id="a3" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top9.png">
                      <p>华为平板 M5青春版 8.0英寸</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top10.png">
                      <p>华为平板 M5青春版 10.1英寸</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top11.png">
                      <p>华为平板 8.4英寸</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top12.png">
                      <p>华为平板 M5 10.8英寸</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw3.png">
                      <p>查看全部平板</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a4">
              智能穿戴
              <span class="iconfont icon-down"></span>
              <div id="a4" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top13.png">
                      <p>HUAWEI WATCH GT</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top14.png">
                      <p>华为手环3</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top15.png">
                      <p>HUAWEI WATCH 2Pro</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top16.png">
                      <p>华为儿童手表</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw4.png">
                      <p>查看全部穿戴设备</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a5">
              智能家居
              <span class="iconfont icon-down"></span>
              <div id="a5" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top17.png">
                      <p>华为路由Q2 Pro字母装</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top18.png">
                      <p>华为AI音箱</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top19.png">
                      <p>华为路由A1</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top20.png">
                      <p>华为电力猫PT500</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw5.png">
                      <p>查看全部智能家居</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a6">
              更多产品
              <span class="iconfont icon-down"></span>
              <div id="a6" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top21.png">
                      <p>华为随性WiFi 2Pro</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top22.png">
                      <p>华为随性WiFi 2Mini</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top23.png">
                      <p>HUAWEI FreeBuds 2Pro无线耳机</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw-top24.png">
                      <p>HUAWEI FreeLace无线耳机</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw7.png">
                      <p>查看更多</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse" data-target="#a7">
              软件应用
              <span class="iconfont icon-down"></span>
              <div id="a7" class="nav-content collapse" v-show="show">
                <img src="http://127.0.0.1:3000/imgs/close2.png" class="close" @click="close">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="javascrip:;">
                      <img src="http://127.0.0.1:3000/imgs/hw6.png">
                      <p>终端云服务</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://127.0.0.1:3000/imgs/hw7.png">
                      <p>EUMI产品</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascritp:;">
                      <img src="http://127.0.0.1:3000/imgs/hw8.png">
                      <p>PC软件</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" data-toggle="collapse">
              <a href="javascript:;" class="text-dark">服务与支持</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section>
      <div class="mt-5">
        <ul class="list-unstyled">
          <li>
            <img src="http://127.0.0.1:3000/imgs/hw1.jpg" class="img-fluid">
            <div class="btn btn1"><a href="javascript:;">HUAWEI P30</a></div>
            <div class="btn btn2"><a href="javascript:;">HUAWEI P30 Pro</a></div>
          </li>
          <li class="mt-2"><img src="http://127.0.0.1:3000/imgs/hw2.jpg" class="img-fluid"></li>
          <li class="mt-2">
            <img src="http://127.0.0.1:3000/imgs/hw3-i.png" class="img-fluid">
            <div class="btn btn3"><a href="javascript:;">HUAWEI Mate20</a></div>
            <div class="btn btn4"><a href="javascript:;">HUAWEI Mate20 Pro</a></div>
          </li>
          <li class="mt-2"><img src="http://127.0.0.1:3000/imgs/hw4.jpg" class="img-fluid"></li>
          <li class="mt-2"><img src="http://127.0.0.1:3000/imgs/hw5.jpg" class="img-fluid"></li>
        </ul>
        <div class="row mt-2">
          <div class="col-6 pr-2"><img src="http://127.0.0.1:3000/imgs/hw6.jpg" class="img-fluid"></div>
          <div class="col-6 pl-2"><img src="http://127.0.0.1:3000/imgs/hw7.jpg" class="img-fluid"></div>
        </div>
        <div class="row mt-2">
          <div class="col-6 pr-2"><img src="http://127.0.0.1:3000/imgs/hw8.jpg" class="img-fluid"></div>
          <div class="col-6 pl-2"><img src="http://127.0.0.1:3000/imgs/hw9.jpg" class="img-fluid"></div>
        </div>
        <div class="row mt-2">
          <div class="col-6 pr-2"><img src="http://127.0.0.1:3000/imgs/hw10.jpg" class="img-fluid"></div>
          <div class="col-6 pl-2"><img src="http://127.0.0.1:3000/imgs/hw11.jpg" class="img-fluid"></div>
        </div>
        <div class="row mt-2">
          <div class="col-6 pr-2"><img src="http://127.0.0.1:3000/imgs/hw12.jpg" class="img-fluid"></div>
          <div class="col-6 pl-2"><img src="http://127.0.0.1:3000/imgs/hw10.jpg" class="img-fluid"></div>
        </div>
      </div>
    </section> 
    <footer class="bg-light mt-4">
      <div class="row text-left ml-5 justify-content-between border-bottom pb-4">
        <div class="col-md-5 col-sm-12 mt-4">
          <div>
            <span class="iconfont icon-phone"></span>
            <span class="font-weight-bold ml-2 mr-4">客服热线 7*24小时</span>
            <span>400-830-8300 / 800-830-8300（座机）</span>
          </div>
          <div>
            <span class="iconfont icon-phone"></span>
            <span class="font-weight-bold ml-2 mr-4">保时捷设计专属热线 7*24小时</span>
            <span>400-930-9300</span>
          </div>
        </div>
        <div class="col-md-6 cl-sm-12 mt-4 foot-list">
          <ul class="list-unstyled d-flex">
            <li class="mr-4">
              <a href="javascript:;">
                <span class="iconfont icon-icon-wechat pr-2"></span>
                <span>微信客服</span>
              </a>
              <div class="wx">
                <img src="http://127.0.0.1:3000/imgs/m1.png">
              </div>
            </li>
            <li class="mr-4">
              <a href="javascript:;">
                <span class="iconfont icon-xiaoxi-copy pr-2"></span>
                <span>在线客服</span>
              </a>
            </li>
            <li class="mr-4">
              <a href="javascript:;">
                <span class="iconfont icon-shangdian pr-2"></span>
                <span>零售店查询</span>
              </a>
            </li>
            <li class="mr-4">
              <a href="javascript:;">
                <span class="iconfont icon-dituicon pr-2"></span>
                <span>服务中心查询</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-2 row border-bottom pb-4">
        <div class="row col-md-10 col-sm-12">
          <ul class="col-md-2 col-sm-12 foot-menu mt-2 list-unstyled">
            <h4 class="font-weight-bold">购买产品</h4>
            <div class="mt-2">
              <li><a href="javascript:;">智能手机</a></li>
              <li><a href="javascript:;">笔记本</a></li>
              <li><a href="javascript:;">平板</a></li>
              <li><a href="javascript:;">智能穿戴</a></li>
              <li><a href="javascript:;">智能家居</a></li>
              <li><a href="javascript:;">移动宽带</a></li>
              <li><a href="javascript:;">配件</a></li>
            </div>
          </ul>
          <ul class="col-md-2 col-sm-12 foot-menu mt-2 list-unstyled">
            <h4 class="font-weight-bold">服务与支持</h4>
            <div class="mt-2">
              <li><a href="javascript:;">调查问卷</a></li>
              <li><a href="javascript:;">保修政策</a></li>
              <li><a href="javascript:;">预约服务</a></li>
              <li><a href="javascript:;">寄修服务</a></li>
              <li><a href="javascript:;">保修状态查询</a></li>
              <li><a href="javascript:;">维修设备价格</a></li>
              <li><a href="javascript:;">联系我们</a></li>
            </div>
          </ul>
          <ul class="col-md-2 col-sm-12 foot-menu mt-2 list-unstyled">
            <h4 class="font-weight-bold">应用与下载</h4>
            <div class="mt-2">
              <li><a href="javascript:;">预置应用公示</a></li>
              <li><a href="javascript:;">店面元素下载</a></li>
            </div>
          </ul>
          <ul class="col-md-2 col-sm-12 foot-menu mt-2 list-unstyled">
            <h4 class="font-weight-bold">新闻中心</h4>
            <div class="mt-2">
              <li><a href="javascript:;">华为新闻</a></li>
              <li><a href="javascript:;">华为视频</a></li>
            </div>
          </ul>
          <ul class="col-md-2 col-sm-12 foot-menu mt-2 list-unstyled">
            <h4 class="font-weight-bold">关于我们</h4>
            <div class="mt-2">
              <li><a href="javascript:;">关于我们</a></li>
              <li><a href="javascript:;">华为商城</a></li>
              <li><a href="javascript:;">企业业务</a></li>
              <li><a href="javascript:;">运营商网络</a></li>
              <li><a href="javascript:;">华为海洋</a></li>
              <li><a href="javascript:;">华为集团</a></li>
              <li><a href="javascript:;">加入华为</a></li>
              <li><a href="javascript:;">成为合作伙伴</a></li>
            </div>
          </ul>
        </div>
        <div class="row col-md-2 col-sm-12 border-left mt-2 pl-5">
          <ul class="list-unstyled">
            <li class="font">访问花粉俱乐部</li>
            <li class="text-left mt-2"><span class="iconfont icon-lianhua"></span></li>
            <li class="mt-2 font">关注花粉俱乐部</li>
            <li class="mt-2 text-left">
              <span class="iconfont icon-weixin mr-4 wx-show"></span>
              <span class="iconfont icon-weibo"></span>
            </li>
            <li class="font mt-2 text-left">关注我们</li>
            <li class="font mt-2 text-left">
              <span class="iconfont icon-weixin mr-4 wx-show"></span>
              <span class="iconfont icon-weibo"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-2">
        <ul class="mt-4 d-flex list-unstyled justify-content-center">
          <li class="ml-5 mb-2"><a href="javascript:;">网站地图</a></li>
          <li class="ml-5 mb-2"><a href="javascript:;">使用条款</a></li>
          <li class="ml-5 mb-2"><a href="javascript:;">隐私</a></li>
          <li class="ml-5 mb-2"><a href="javascript:;">关于cookies</a></li>
          <li class="ml-5 mb-2"><a href="javascript:;">法律信息</a></li>
        </ul>
        <p>版权所有 © 华为技术有限公司 1998-2019。保留一切权利。 粤A2-20044005号</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      //下拉箭头
      showTop:false,
      showDown:true,
      topList:[
        {name:"智能手机",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top1.png",title:"HUAWEI P30 Pro"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top2.png",title:"HUAWEI Mat20 Pro"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top3.png",title:"HUAWEI nova4"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top4.png",title:"华为畅享 9S"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw1.png",title:"查看全部智能手机"}
        ]},
        {name:"笔记本",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top5.png",title:"HUAWEI MateBook X Pro2019款"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top6.png",title:"HUAWEI MateBook14"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top7.png",title:"HUAWEI MateBookE"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top8.png",title:"HUAWEI MateBook13"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw2.png",title:"查看全部笔记本"},
        ]},
        {name:"平板",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top9.png",title:"华为平板 M5青春版 8.0英寸"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top10.png",title:"华为平板 M5青春版 10.1英寸"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top11.png",title:"华为平板 8.4英寸"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top12.png",title:"华为平板 M5 10.8英寸"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw3.png",title:"查看全部平板"},
        ]},
        {name:"智能穿戴",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top13.png",title:"HUAWEI WATCH GT"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top14.png",title:"华为手环3 "},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top15.png",title:"HUAWEI WATCH 2Pro"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top16.png",title:"华为儿童手表"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw4.png",title:"查看全部穿戴设备"},
        ]},
        {name:"智能家居",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top17.png",title:"华为路由Q2 Pro字母装"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top18.png",title:"华为AI音箱"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top19.png",title:"华为路由A1"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top20.png",title:"华为电力猫PT500"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw5.png",title:"查看全部智能家居"},
        ]},
        {name:"更多产品",content:[
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top21.png",title:"华为随性WiFi 2Pro"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top22.png",title:"华为随性WiFi 2Mini"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top23.png",title:"HUAWEI FreeBuds 2Pro无线耳机"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw-top24.png",title:"HUAWEI FreeLace无线耳机"},
          {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw7.png",title:"查看更多"},
        ]},
        {name:"软件应用",content:[
           {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw6.png",title:"终端云服务"},
           {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw7.png",title:"EUMI产品"},
           {a_href:"javascript:;",img_url:"http://127.0.0.1:3000/imgs/hw8.png",title:"PC软件  "},
        ]}
      ],
      tabcontentShow:false,
      // tabcontent:'',
      isActive:false,
      show:true,
    }
  },
  methods: {
    top(){
      this.showDown=!this.showDown,
      this.showTop=!this.showTop
    },
    tabHide() {
      this.tabcontentShow =true;
    },
    tabChange(i) {
      this.tabcontentShow = true;
      this.isActive = i;
    },
    close(){
      this.show=false
    }
  },
}
</script>
<style scoped>
  *{margin:0;padding:0;}
  div{color:#000}
  div a{
    text-decoration:none;
    color:#000;
  }
  div a:hover{
    text-decoration:none;
  }
  header{
    position:fixed;
    z-index:2;
  }
  .font{
    font-size:14px;
  }
  /* 顶部折叠 */
  #parent .card>div:first-child{
    font-size:12px;
    padding-left:5rem;
    text-align:left;
  }
  #parent .mui-icon{
    font-size:12px;
    font-weight:bolder;
  }
  /* 小三角 */
  #cols1 li>a{
    color:#F66F6A; 
    font-weight:bolder;
  }
  #cols1 li>a:hover span{
   transition:1s;
   transform: translate(25px);
  }
  .nav-content ul>li p:hover{
    color:#E50112;
    text-decoration:underline;
  }
  /* logo */
  .navbar a.navbar-brand img{
    width:200px;
    padding:20px;
    margin:0 60px;
  }
  #content ul.navbar-nav li:hover{
    color:brown;
  }
  /* section */
  section::before{
    content:"";
    display:table;
  }
  /* footer */
  footer .iconfont.icon-phone{
    font-size:20px;
  }
  .foot-list ul>li:hover span{
    color:brown;
  }
  .wx{
    display:none;
    position: absolute;
    top:-95px;
    left:8px;
  }
  .foot-list ul>li:first-child:hover .wx{
    display:block;
  }
  .foot-menu li{
    font-size:14px;
  }
  .foot-menu li:hover a{
    color:#E50112;
  }
  .wx-show:hover .wx1{
    display:block;
  }
  .btn{
    border:2px solid #000;
    border-radius:5px;
    height:45px;
    line-height:45px;
  }
  .btn a{
    padding:10px;
  }
  .btn:hover{
    border-color:#E50112;
  }
  .btn:hover a{
    color:#E50112;
  }
/* pc width>=992px */
@media screen and (min-width:992px){
  /* 顶部手风琴 */
  #cols1 ul{
    display:flex;
  }
  #content .nav-content{
    width:100%;
    background-color:#fff;
    border:1px solid #ddd;
    position:absolute;
    top:68px;
    left:0;
    box-shadow:0 5px 11px 0 rgba(0,0,0,0.4);
  }
  .nav-content img{
    width:160px;
    height:120px;
    margin:20px;
  }
  .nav-content>ul>li:last-child img{
    width:128px;  
  }
  .nav-content ul{
    margin:100px 200px;
  }
  .nav-content ul li{
    margin:0 40px;  
  }
  #a7 ul>li{
    margin-left:100px;
  }
  #content ul.navbar-nav li{
    margin-right:40px;
  }
  /* 关闭 */
  .nav-content .close{
    width:16px;
    height:16px;
    position:absolute;
    top:20px;
    right:200px;
    font-weight:bolder;
  }
  /* btn */
  .btn1{
    position:absolute;
    top:400px;
    right:550px;
  }
  .btn2{
    position:absolute;
    top:400px;
    right:360px;
  }
  .btn3{
    position:absolute;
    top:1720px;
    right:550px;
  }
  .btn4{
    position:absolute;
    top:1720px;
    right:360px;
  }
}
/* pad 768px<=width<=991px */
@media screen and (min-width:768px) and (max-width:991px){
  #cols1 ul{
    display:flex;
  }
  #content .nav-content ul{
    flex-flow:wrap; 
    margin-top:40px;
    padding:50px 0;
  }
  .nav-content li img{
    width:160px;
    height:120px;
  }
  #content .nav-content{
    width:100%;
    background-color:#fff;
    border:1px solid #ddd;
    position:absolute;
    top:68px;
    left:0;
    box-shadow:0 5px 11px 0 rgba(0,0,0,0.4);
  }
  .nav-content>ul>li:last-child img{
    width:128px;  
  }
  /* 关闭 */
  .nav-content .close{
    width:16px;
    height:16px;
    position:absolute;
    top:20px;
    right:20px;
    font-weight:bolder;
  }
  /* btn */
  .btn1{
    position:absolute;
    top:220px;
    right:250px;
  }
  .btn2{
    position:absolute;
    top:220px;
    right:80px;
  }
  .btn3{
    position:absolute;
    top:950px;
    right:250px;
  }
  .btn4{
    position:absolute;
    top:950px;
    right:60px;
  }
}
/* phone width<=767px */
@media screen and (max-width:767px) and (min-width:426px){
  #cols1 ul>div{
    border-bottom:1px solid #000;
    margin-top:10px;
  }
  .nav-content li img{
    width:160px;
    height:120px;
  }
  #content .nav-content ul{
    flex-flow:wrap; 
    margin-top:40px;
  }
  #content .nav-content ul li{
    width:50%;
    height:200px;
  }
  /* 关闭 */
  .nav-content .close{
    display:none;
  }
  .nav-content>ul>li:last-child img{
    width:128px;  
  }
  /* btn */
  .btn1{
    position:absolute;
    top:220px;
    right:250px;
  }
  .btn2{
    position:absolute;
    top:220px;
    right:80px;
  }
  .btn3{
    position:absolute;
    top:750px;
    right:250px;
  }
  .btn4{
    position:absolute;
    top:750px;
    right:60px;
  }
}
</style>