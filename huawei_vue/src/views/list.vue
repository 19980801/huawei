<template>
<li>
    <li><a href="javascript:void(0)" v-anchor="1">1</a></li>
    <li><a href="javascript:void(0)" v-anchor="2">菜单2</a></li>
    <li><a href="javascript:void(0)" v-anchor="3">菜单3</a></li>
    <li><a href="javascript:void(0)" v-anchor="4">菜单4</a></li>
    <li><a href="javascript:void(0)" v-anchor="5">菜单5</a></li>
    <li><a href="javascript:void(0)" v-anchor="6">菜单6</a></li>
    <li><a href="javascript:void(0)" v-anchor="7">菜单7</a></li>
    <div :id="'anchor-'+index" class="item" v-for="index in 7">{{index}}</div>
</div>
</template>
<script>
export default{
data(){
return {


}
}
}
</script>
<style>
.item{
width: 100%;
height: 200px;
line-height: 200px;
text-align: center;
}

</style>