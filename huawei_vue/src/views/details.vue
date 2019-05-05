<template>
	<div class="mb-5">
		<div class="mb-4 mt-4" style="height:60px">
			<div class="content">
				<div class="biaoti float-left mt-3">{{detailsinfo[0].title}}</div>
				<ul class="list-unstyled d-flex align-self-end float-right mb-0 mt-2">
					<li><a href="" class="my_text-dark pr-2">概述</a></li>
					<li class="my_text-dark">/</li>
					<li><a href="" class="my_text-dark pr-2 pl-2">变焦双摄</a></li>
					<li class="my_text-dark">/</li>
					<li><a href="" class="my_text-dark pr-2 pl-2">设计</a></li>
					<li class="my_text-dark">/</li>
					<li><a href="" class="my_text-dark pr-2 pl-2">参数</a></li>
					<li class="my_text-dark">/</li>
					<li><a href="" class="my_text-dark pr-2 pl-2">F码通道</a></li>
					<li class="my_text-dark">/</li>
					<li><a href="" class="my_text-dark pr-2 pl-2">用户评价</a></li>
				</ul>
			</div>
		</div>
		<div class="content d-flex justify-content-between">
			<div class="bg_swipe">
				<div class="position-relative">
					<img :src="item.img" class="position-absolute s_img" v-for="item in piclist" :class="[item.p_no_id==simg_id?'opacity':'']">
					<div class="position-absolute" @mouseenter="isIcon(true)" @mouseleave="isIcon(false)" v-show="icons">
						<img src="" class="position-absolute" v-if="icon">
						<img src="" class="position-absolute" v-else @click="icon_click(-1)">
					</div>
					<div class="position-absolute" @mouseenter="isIcon(true)" @mouseleave="isIcon(false)" v-show="icons">
						<img src="" class="position-absolute" v-if="icon">
						<img src="" class="position-absolute" v-else @click="icon_click(1)">
					</div>
				</div>
			</div>
			<div class="good_details">
				<p style="font-size: 25px">{{detailsinfo[0].title}}</p>
				<span class="lightgray smsize"><span class="orange">{{detailsinfo[0].subtitle1}}</span>{{detailsinfo[0].subtitle2}}</span>
				<p class="orange mt-3">小米自营</p>
				<p class="orange">{{detailsinfo[0].price}}</p>
				<div class="w-100 gift">
					<button>赠品</button>
					<span class="smsize ml-3">{{detailsinfo[0].gift}}</span>
				</div>
				<div class="w-100 addr smsize p-4">
					<p class="p-0 ">
						<span>河南省</span>
						<span>郑州市</span>
						<span>金水区</span>
						<span>文化路</span>
						<span class="orange">修改</span>
					</p>
					<p class="p-0 orange">有现货</p>
				</div>
				<p style="font-size: 1.2rem">选择版本</p>
				<div class="w-100 d-flex justify-content-between flex-wrap mb-5">
					<button class="type" v-for="(item,i) in versionlist" :class="[i==versionClickNo?'type_click':'']" @click="versionClick(i)">
						<div class="float-left">{{item.theversion}}</div>
						<div class="lightgray float-right">{{item.price}}</div>
					</button>
				</div>
				<p style="font-size: 1.2rem">选择颜色</p>
				<div class="w-100 d-flex justify-content-between flex-wrap">
					<button class="color"v-for="(item,i) in colorlist" @click="colorClick(i)":class="[i==colorClickNo?'type_click':'']">{{item.color}}</button>
				</div>
				<div class="w-100 sumtotal p-4 mt-5">
					<span class="smsize lightgray">小米8 青春版 {{carts.version}} {{carts.color}}</span><span class="smsize lightgray float-right" style="">{{carts.price}}</span>
					<p class="orange mt-3" style="font-size: 1.5rem">总计 : {{carts.price}}</p>
				</div>
				<div class="position-relative w-100 mt-4" style="height: 60px">
					<button class="addcart">加入购物车</button>
					<button class="my_like">♡喜欢</button>
					<img src="" class="position-absolute redheart">
				</div> 
			</div>
		</div>
	</div>
</template>
<script>
    export default {
      data:function(){
        return {
				simg_id:1,
				icon:true,
				icons:true,
				versionlist:[{}],
				colorlist:[],
				piclist:[],
				detailsinfo:[{}],
				versionNo:[],
				versionClickNo:0,
				colorClickNo:0,
				carts:{}
			}
        },
		porps:["lid"],
		methods:{
            swipe(){
                setInterval(()=>{
                    this.simg_id++
					if(this.simg_id==this.piclist.length+1){
                        this.simg_id=1;
					}
				},4000)
			},
            isIcon(bool){
                this.icon=!bool
			},
			icon_click(i){
                this.simg_id+=i;
                if(this.simg_id==this.piclist.length+1){
                    this.simg_id=1;
                }else if(this.simg_id==0){
                    this.simg_id=this.piclist.length
				}
			},
      versionClick(i){
				this.versionClickNo=i
				this.carts.version=this.versionlist[i].theversion
				this.carts.price=this.versionlist[i].price
				this.axios.get("http://127.0.0.1:3000/details/versionClickList",{params:{fid:this.lid,theversion:this.versionlist[i].theversion}}).then((res)=>{
                    this.colorlist=res.data
					this.colorClick(0)				
                })
			},
			colorClick(i){
                this.colorClickNo=i
                this.carts.color=this.colorlist[i].color
                this.axios.get("http://127.0.0.1:3000/details/imgClickList",{params:{fid:this.lid,color:this.colorlist[i].color}}).then((res)=>{
                    this.piclist=res.data
					if(this.piclist.length>1)
					this.icons=true;
					else
					this.icons=false;
                })
			}
		},
		created(){
            this.swipe()
			this.lid=this.$route.path.split("=")[1];
			this.axios.get("http://127.0.0.1:3000/details/versionlist",{params:{fid:this.lid}}).then((res)=>{			    
				this.versionlist=res.data
				this.carts.version=res.data[0].theversion
				this.carts.price=res.data[0].price
			})
			this.axios.get("http://127.0.0.1:3000/details/colorlist",{params:{fid:this.lid}}).then((res)=>{			    
				this.colorlist=res.data
                this.carts.color=res.data[0].color
			})
			this.axios.get("http://127.0.0.1:3000/details/piclist",{params:{fid:this.lid}}).then((res)=>{			    
				this.piclist=res.data
				if(this.piclist.length>1)
					this.icons=true;							
				else
					this.icons=false;								
			})
			this.axios.get("http://127.0.0.1:3000/details/detailsinfo",{params:{fid:this.lid}}).then((res)=>{			    
				this.detailsinfo=res.data
			})
		}
    }
</script>
<style>
	.redheart{
		width: 35px;
		top:18px;
		left:365px;
	}
	.my_like{
		width: 150px;
		height: 56px;
		border: 0;
		margin-left: 10px;
		cursor: pointer;
		outline: 0 !important;
		transition: background .2s linear;		
	}
	.my_like:hover{
		background: rgb(120,120,120);
	}

	.addcart{
		background: rgb(255,103,0);
		width: 320px;
		height: 56px;
		color: white;
		border:0;
		cursor: pointer;
		outline:0 !important;
	}
	.addcart:hover{
		background-color: rgb(255,80,20);
	}
	.sumtotal{
		background: rgb(249,249,250);
	}
	.color{
		width:49%;
		height:45px;
		border:1px solid lightgray;
		cursor: pointer;
		margin-bottom:20px;
		background-color: white;
		outline: none !important;
	}

	.type{
		width:49%;
		height:45px;
		border:1px solid lightgray;
		padding: 0px 30px 0;
		cursor: pointer;
		margin-bottom:20px;
		background-color: white;
		outline: none !important;
	}
	.type_click{
		border:1px solid rgb(255,103,0);
		color:rgb(255,103,0);
	}
	.gift{
		height: 60px;
		border-top: 1px solid lightgray;
		border-bottom: 1px solid lightgray;
		margin-bottom: 40px;
		padding-top:15px;
	}
	.gift>button{
		border: 0;
		background: rgb(255,103,0);
		color:white;
		padding:3px 25px 3px;
		font-size:0.9rem;
		outline: 0;
	}
	.addr{
		height:110px;
		background: rgb(250,250,250);
		border:1px solid lightgray;
		margin-bottom: 40px;
	}
	.addr>p>span{
		margin-right: 10px;
	}
	.addr>p>span:last-child{
		cursor: pointer;
	}
	.good_details{
		width:606px;
	}
	.bg_swipe{
		width:560px;
		height: 560px;
	}
	.bg_swipe>div>div{
		top:245px;
	}
	.bg_swipe>div>div:last-child{
		right:41px;
	}
	.s_img{
		opacity:0;
	}
	.opacity{
		opacity: 1;
		transition: opacity .8s linear;
	}
	.content{
		width:1250px;
		margin: auto;
	}
	.biaoti{
		color: white;
		font:bold 22px Arial
	}
	.my_text-dark{
		color: whitesmoke;
	}
</style>