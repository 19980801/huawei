<template>
<div>
  <button @click="loginShow">显示</button>
        <div class="modal-bg" v-show="showModal">
            <div class="modal-wrapper" >
                <div class="modal-container">
                    <div class="modal-header">
                      <span class="iconfont icon-guanbi2 mb-2" @click="close"></span>
                    </div>
                    <form action="#">
                      <div class="modal-body">
                        用户名<input type="text">
                        用户名<input type="text">
                    </div>
                    </form>
                    <div class="modal-footer">
                      <button class="modal-default-button btn-primary">确定</button>
                    </div>
                </div>
            </div>
        </div>
        
</div>
    <!-- <transition name="modal"> -->

        
    <!-- </transition> -->

</template>
<script>
    export default {
      data(){
        return {
          showModal:false
        }
      },
      methods: {
        close(){
          this.showModal=!this.showModal
        },
        loginShow(){
          this.showModal=!this.showModal
        }  
      },

    }
</script>

<style scoped>
    .modal-bg{
        position: fixed;
        z-index:100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display:table;
        /* transition: opacity .3s ease; */
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width:500px;
        height:635px;
        margin: 0px auto;
        /* padding: 20px 30px; */
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        /* transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif; */
        position:relative;
    }

    .modal-header {
      background-color:#a51b1b;
      height:30px;
    }
    .modal-header span{
      position:absolute;
      top:3px;
      right:10px;
    }
    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }


</style>