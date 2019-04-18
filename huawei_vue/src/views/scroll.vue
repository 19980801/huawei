<template>
  <div>
   <div class="summary">
	<div class="gallery">
		<div class="product-img">
			<div @click="prevImg" class="prev-arrow" :class="{'prev-active': galleryList.length - 3 <= 0 || this.offsetCount < 1}">left
				<img src="" alt="左箭头">
			</div>
			<ul>
				<li class="list-img">
					<div class="list-img-wrap" ref="carouser">
						<div @click="getCurImg(item.ImageCode, index)" v-for="(item,index) in galleryList" :key="index" class="single-img" :class="{'img-activce': item.img_url == imgActive}">
							<img :src="item.img_url" alt="缩略图">
						</div>
					</div>
				</li>
			</ul>
	            <div @click="nextImg" class="next-arrow" :class="{'next-active': galleryList.length - 3 <= 0 || offsetCount >= galleryList.length - 3 }">
			        right<img src="" alt="右箭头">
		       </div>
		</div>
	</div>
</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      offsetCount: 0,
      galleryList:[
        {a_href:"javascript:;",title:"荣耀8X",content:"64GB降100 老用户再送数据线",price:"1299",img_url:"http://127.0.0.1:3000/imgs/f1.png"},
          {a_href:"javascript:;",title:"华为MATE 20 Pro",content:"赠送好礼享6期免息",price:"5499",img_url:"http://127.0.0.1:3000/imgs/f2.png"},
          {a_href:"javascript:;",title:"荣耀10青春版",content:"4+64GB减100 老用户再送数据线",price:"1299",img_url:"http://127.0.0.1:3000/imgs/f3.png"},
          {a_href:"javascript:;",title:"HUAWEI nova 4e",content:"晒单限量赠礼包",price:"1999",img_url:"http://127.0.0.1:3000/imgs/f4.png"},
          {a_href:"javascript:;",title:"荣耀10",content:"最高优惠250元",price:"2199",img_url:"http://127.0.0.1:3000/imgs/f5.png"},
          {a_href:"javascript:;",title:"华为畅享9S",content:"2400万超广角AI三摄",price:"1499",img_url:"http://127.0.0.1:3000/imgs/f6.png"},
          {a_href:"javascript:;",title:"荣耀畅玩8C",content:"4GB+32GB到手价899",price:"899",img_url:"http://127.0.0.1:3000/imgs/f7.png"},
          {a_href:"javascript:;",title:"HUAWEI P20 Pro",content:"下单减400",price:"4899",img_url:"http://127.0.0.1:3000/imgs/f8.png"},
      ]
    }
  },
  methods: {
    
prevImg () {
	if (this.galleryList.length - 3 > 0) {
		if (this.offsetCount > 0) {
			this.offsetCount --;					
			this.$refs.carouser.style.left = '-' + (8.37 * this.offsetCount) + 'rem';					
		} else {
			return false
		}			
	} else {
		return false				
	}
},
nextImg () {
	if (this.galleryList.length - 3 > 0) {
		if (this.offsetCount < this.galleryList.length - 3) {
			this.offsetCount ++;					
			this.$refs.carouser.style.left = '-' + (8.37 * this.offsetCount) + 'rem';					
		} else {
			return false
		}			
	} else {
		return false				
	}
},
  },
}
</script>
<style scoped>
  .product-img {
	display: flex;
	justify-content: flex-start;		
  }
  .product-img .prev-arrow,.next-arrow{
		cursor: pointer;		
	}
	.prev-active,
	.next-active{
		cursor: not-allowed;
	}
ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
    justify-content: flex-start;
  }
  ul .list-img {
			width: 25.11rem;
			height: 5.71rem;
			position: relative;  
      overflow: hidden;
      }
.list-img  .list-img-wrap {
				position: absolute; 
				left: 0;
        top: 0;
        } 
  .single-img {
				    cursor: pointer;
					float: left;								
					width: 5.71rem;
					height: 5.71rem;
					margin: 0 1.33rem;							
					border: 1px solid #E5E5E5;	
				}
.img-activce{
					border: 1px solid #C12022;
				}
</style>