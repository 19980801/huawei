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
				<div class="left col">
					<img src="http://127.0.0.1:3000/imgs/f3.2.png">
				</div>
				<div class="right col">
					<h4>{{title}}}</h4>
					<h6><a href="javascript:;" class="small text-dark">三面金属，微边框护眼全高清IPS屏，半小时40%快充，高效降温，锐龙处理器，高性能火力全</a></h6>
					<div class="alert small" role="alert">
            <div>
              <span>学员售价：</span>
              <h2 class="d-inline text-danger font-weight-bold">￥3999</h2>
            </div>
            <div>
              <span>服务承诺:</span>
              <span>*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</span>
            </div>
          </div>
					<div>
            <h5 class="text-dark font-weight-bold">规格:</h5>
            <div>
              <a class="btn btn-sm btn-outline-secondary mr-2 mb-2">双核i5/8GB内存/128GB闪存</a>
              <a class="btn btn-sm btn-outline-secondary mr-2 mb-2">双核i5/8GB内存/128GB闪存</a>
              <a class="btn btn-sm btn-outline-secondary mr-2 mb-2">双核i5/8GB内存/128GB闪存</a>
              <a class="btn btn-sm btn-outline-secondary mr-2 mb-2">双核i5/8GB内存/128GB闪存</a>
            </div>
          </div>
					<div class="mt-2">
						<h5 class="font-weight-bold text-dark">数量:</h5>
						<div>
							<button class="btn btn-light" @click="subtract">-</button>
							<span class="number">{{n}}</span>
							<button class="btn btn-light" @click="add">+</button>
						</div>
					</div>
					<div class="mt-3">
						<a class="btn btn-danger mr-4" href="javascript:;">立即购买</a>
            <a class="btn btn-primary" href="javascript:;">加入购物车</a>
					</div>
				</div>
			</div>
		</main>
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
			title:"",
			subtitle:"",
			promise:"",
      spec:[],
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
				console.log(result.data);
				this.title=result.data.title;
				this.subtitle=result.data.title;
				this.promise=result.data.promise;
				this.spec=result.data.spec;
			})
		}
	},
	created() {
		this.load();
	},
	watch: {
		lid(){
      this.load();
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
</style>