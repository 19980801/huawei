<template>
	<div class="details">
		<my-header></my-header>
		<main id="main" class="container">
			<nav aria-label="breadcrumb">
        <ol class="breadcrumb small bg-transparent">
          <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">首页</a></li>
          <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">商品详情</a></li>
        </ol>
      </nav>
			<div class="row mt-2 text-left">
        <div class="left p-0 text-center">
					<img :src="mImgSrc">
          <div id="mask" v-show="show" :style="maskStyle"></div> 
          <div id="super-mask" @mouseover="display" @mouseout="hide" @mousemove="move($event)"></div>
					<!-- $开头的都是vue内置的对象 -->
          <div id="div-lg" v-show="show" :style="lgDivStyle"></div>
					<div>
						<img src="http://127.0.0.1:3000/img/product_detail/hover-prev.png" class="btn float-left btn-light" :class="btnLeftDisabled==true?'disabled':''" @click="moveRight">
							<div class="d-inline-block pt-2 mx-0 sm_img">
								<ul class="list-unstyled d-flex" :style="ulImgsStyle">
									<li class="float-left p-1" v-for="(item,i) of pics" :key="i">
										<!-- vue加()代表函数调用 -->
										<img :src="'http://127.0.0.1:3000/'+item.sm" @mouseenter="changeImg(i)">
									</li>
								</ul>
							</div>
						<img src="http://127.0.0.1:3000/img/product_detail/hover-next.png" class="btn float-right btn-light" :class="btnRightDisabled==true?'disabled':''" @click="moveLeft">
					</div>
        </div>
				<div class="right col mt-5 ml-2">
					<h4 v-text="product.title" class="font-weight-bold text-dark"></h4>
					<h6 class="mt-2"><a href="javascript:;" class="small text-dark" v-text="product.subtitle"></a></h6>
					<div class="alert small mt-2" role="alert">
            <div>
              <span>学员售价：</span>
              <h2 class="d-inline text-danger font-weight-bold" v-text="`￥${product.price.toFixed(2)}`"></h2>
            </div>
            <div>
              <span>服务承诺:</span>
              <span v-text="product.promise"></span>
            </div>
          </div>
					<div class="mt-2">
            <h5 class="text-dark font-weight-bold">规格:</h5>
            <div>
              <router-link :to="`/details/${item.lid}`" class="btn btn-sm btn-outline-danger mr-2 mb-2" v-for="item in specs" :key="item.i" :class="lid==item.lid?'active':''">{{item.spec}}</router-link>
            </div>
          </div>
					<div class="mt-2">
						<h5 class="font-weight-bold text-dark">数量:</h5>
						<div>
							<button class="btn btn-light" @click="subtract">-</button>
							<input class="number" value="1" v-model="n">
							<button class="btn btn-light" @click="add">+</button>
						</div>
					</div>
					<div class="mt-3">
						<a class="btn btn-danger mr-4" href="javascript:;">立即购买</a>
            <a class="btn btn-primary" href="javascript:;" @click="addcart">加入购物车</a>
					</div>
				</div>
			</div>
		</main>
		<section class="mt-4 container pb-5">
			<h4 class="font-weight-bold text-left">用户评论</h4>
			<ul class="list-unstyled text-left mt-5 mb-5">
				<li class="d-flex mt-2 mb-2" v-for="item of commentList" :key="item.i">
					<div class="col-2 text-center">
						<img src="http://127.0.0.1:3000/imgs/loger.png" class="user">
						<p class="username">{{item.uname}}</p>
					</div>
					<div class="content col-10">
						<p class="float-right">{{item.ctime}}</p>
						<div class="star">
							<div class="star-after">★★★★★</div>
							<div class="star-before" :style="{width:item.point+'%'}">★★★★★</div>	
						</div>
						<p>快快快，发货速度快，快递配送快，电脑反应快！非常满意的购物，晚上下单，早上收货！唯一遗憾，没买到3700U</p>
						<ul class="list-unstyled d-flex">
							<li class="p-1"><img src="http://127.0.0.1:3000/imgs/f2.10.png"></li>
							<li class="p-1"><img src="http://127.0.0.1:3000/imgs/f2.10.png"></li>
						</ul>
					</div>
				</li>
			</ul>
			<ul class="pagination float-right d-flex">
				<li class="page-item" :class="pno=='0'?'disabled':''" @click="down"><a href="javascript:;" class="page-link">上一页</a></li>
				<li class="page-item" v-for="i of pageCount" :key="i" :class="i==parseInt(pno)?'active':''" @click="loadPage(i)"><a href="javascript:;" class="page-link" v-text="i"></a></li>
				<li class="page-item" :class="pno==pageCount?'disabled':''" @click="next"><a href="javascript:;" class="page-link">下一页</a></li>
    	</ul>
		</section>
		<my-footer></my-footer>
	</div>
</template>
<script>
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";
export default {
	// 接收参数 {path:"/details/:lid..."}
	props:["lid"],
	data(){
		return{
			n:1,
			// 解决toFixed报错
			product:{price:0},
			specs:[],
			pics:[],
			// 小图片左右移动
			ulImgsStyle:{
				width:0,
				"margin-left":0
			},
			// 记录左移次数
			moved:0,
			show:false ,
			// 放大镜移动
			mImgSrc:"",
			// lgdiv的背景图片和定位
			lgDivStyle:{
				"background-image":"",
				"background-position":"0px 0px"
			},
			// mask位置移动
			maskStyle:{	
				left:0,
				top:0,
			},
			// 分页
			pno:1,
			pageCount:0,
			pageSize:7,
			// 评论列表
			commentList:[],
			hasMore:true
		}
	},
	computed: {
		btnLeftDisabled(){
			return this.moved==0;
		},
		btnRightDisabled(){
			return this.moved>=this.pics.length-4;
		}
	},
	methods: {
		add(){
			this.n++;
		},
		subtract(){
			if(this.n>1)
			this.n--;
		},
		load(){
			this.axios.get("http://127.0.0.1:3000/details",{
				params:{
					lid:this.lid
				}
			}).then(result=>{
				this.product=result.data.product;
				this.specs=result.data.specs;
				this.pics=result.data.pics;
				this.ulImgsStyle.width=this.pics.length*82+"px";
				// 获得pics第一张图片的md，lg
				this.mImgSrc='http://127.0.0.1:3000/'+this.pics[0].md;
				this.lgDivStyle["background-image"]=`url(http://127.0.0.1:3000/${this.pics[0].lg})`;
			})
		},
		moveLeft(){
			if(this.btnRightDisabled==false){
				this.moved++;
				this.ulImgsStyle["margin-left"]=this.moved*-86+'px';
			}
		},
		moveRight(){
			if(this.btnLeftDisabled==false){
				this.moved--;
				this.ulImgsStyle["margin-left"]=this.moved*-86+'px';
			}
		},
		changeImg(i){
			// 取出pics中i位置的图片
			var pic=this.pics[i];
			this.mImgSrc='http://127.0.0.1:3000/'+pic.md;
			this.lgDivStyle["background-image"]=`url(http://127.0.0.1:3000/${pic.lg})`;
		},
		display(){
			this.show=true;
		},
		hide(){
			this.show=false;
		},
		// 跟随鼠标移动
		move(e){
			// 输出鼠标移动的值
			// console.log(e.offsetX,e.offsetY);
			var left=e.offsetX-88;
			var top=e.offsetY-88;
			if(left<0) left=0;
			else if(left>400) left=400;
			if(top<0) top=0;
			else if(top>250) top=250;
			this.maskStyle.left=left+'px';
			this.maskStyle.top=top+'px';
			this.lgDivStyle["background-position"]=`-${left*5/7}px -${top*5/7}px`
		},
		// 用户评论
		comments(){
			this.axios.get("http://127.0.0.1:3000/comment",{
				params:{
					pno:this.pno,
				}
			}).then(result=>{
				if(result.data.code==1){
					this.pageCount=result.data.pageCount;
					this.commentList=result.data.data;
				}
				if(this.pno>=result.data.pageCount){
					this.hasMore=false;
				}
			})
		},
		down(){
    	if(this.pno>1)
    	this.pno--;
    	this.comments();
		},
		next(){
      if(this.pno<this.pageCount)
      this.pno++;
      this.comments();
		},
    loadPage(i){
      this.pno=i;
      this.comments();
		},
		// 加入购物车
		addcart(){
			var lid=this.lid;
			var price=this.product.price;
			console.log(lid,price);
			this.axios.get("http://127.0.0.1:3000/addcart",{
				params:{
					lid,
					price,
				}
			}).then(res=>{
				if(res.data.code==1){
					if(confirm("已将商品添加到购物车，是否去结算?")){
						location.href="#/shopcart";
					}
				}
			})
		}
	},
	created() {
		this.load();
		this.comments();
	},
	watch: {
		lid(){
      this.load();
		},
		pno(){
  	  console.log(`pno发生变化:pno:${this.pno}`);
  	},
  	pageCount(){
  	  console.log(`pageCount发生变化:pageCount:${this.pageCount}`)
  	}
	},
	components:{  
    myHeader,
    myFooter,
  }
}
</script>
<style scoped>
	.details{
		background-color:#fff;
	}
	#main{
		border-top:2px solid #ddd;
		margin:10px auto;
	}
	.left img{
		widows:450px;
		height:450px;
	}
	.right .alert{
		background-color:#F5F5F5;
	}
	.number{
		display:inline-block;
		width:40px;
		height:35px;
		line-height:35px;
		text-align:center;
	}
	.active{
		background-color:red;
	}
	/*放大镜*/
	.left{
		width:50%;
		position:relative;
	}
	 .left ul>li img{
		width:80px;
		height:80px;
	}
	.left .btn{
		width:45px;
		height:50px;
		margin-top:20px;
	}
	.left .sm_img{
		width:350px;
		overflow:hidden;
	}
	#mask{
		position:absolute;
		top:0;
		width:176px; height:176px;
		background-color:#ffa;
		opacity:.5;
	}
	#super-mask{
		position:absolute;
		top:0;
	  width:570px; 
		height:450px;
	}
	#div-lg{
		position:absolute;
		top:0;
	  width:500px; 
		height:500px;
	  left:570px;
	  z-index:1000;
	  border:1px solid rgba(0, 0, 0, 0.125)
	}
	section h4{
		background-color:#F9F9F9;
		height:50px;
		line-height:50px;
	}
	section .user{
		width:80px;
		height:80px;
	}
	section .username{
		margin:0 50px;
		width:50px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	/* 评分 */
	section .content{
		position: relative;
	}
	section .star{
		font-size:25px;
		position:absolute;
		top:10px;
		left:12px;
	}
	section .star-after{
  	/*底层灰色  */
  	color:#e2e2e2;
	}
	section .star-before{
	  position:absolute;
	  top:0;
	  left:0;
	  overflow:hidden;
	  color:#CA141D;
	}
	section .content p{
		margin-top:40px;
	}
	section .content img{
		width:100px;
	}
</style>