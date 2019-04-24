<template>
    <div>
        <div class="float-list">
           <li @click="showDetails(1)"><a href="javascript:;">1</a></li>
           <li @click="showDetails(2)"><a href="javascript:;">2</a></li>
           <li @click="showDetails(3)"><a href="javascript:;">3</a></li>
           <li @click="showDetails(4)"><a href="javascript:;">4</a></li>
           <li @click="showDetails(5)"><a href="javascript:;">5</a></li>
           <li @click="showDetails(6)"><a href="javascript:;">6</a></li>
           <li @click="showDetails(7)"><a href="javascript:;">7</a></li>
        </div>
            <!-- <button @click="showDetails(1)">NO1</button>
            <button @click="showDetails(2)">NO2</button>
            <button @click="showDetails(3)">NO3</button>
            <button @click="showDetails(4)">NO4</button>
            <button @click="showDetails(5)">NO5</button>
            <button @click="showDetails(6)">NO6</button>
            <button @click="showDetails(7)">NO7</button> -->
        <div style="background:#3FB883" class="listshow1">1111111</div>
        <div style="background:#B26031" class="listshow2">2222222</div>
        <div style="background:#F0686E" class="listshow3">3333333</div>
        <div style="background:#369BEE" class="listshow4">4444444</div>
        <div style="background:#FFE793" class="listshow5">5555555</div>
        <div style="background:#AC885B" class="listshow6">6666666</div>
        <div style="background:#B4177B" class="listshow7">7777777</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showIndex:null
        }
    },
    methods: {
        showDetails(num){
            var el=document.getElementsByClassName(`listshow${num}`)[0];
            console.log(el.offsetTop);
            if(this.showIndex==num){
                this.showIndex=null;
            }else{
                this.showIndex=num;
            }
            this.$nextTick(function () {
                window.scrollTo({"behavior":"smooth","top":el.offsetTop});
            })
        }
    }
}
</script>

<style scoped>
div{
    width:100%;
    height:800px;
}

.float-list{
    position:ab;
}
</style>