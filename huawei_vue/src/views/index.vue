<template>
  <main>
    <my-header></my-header>
  </main>
</template>
<script>
  //1. 先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
  import myHeader from "@/components/header.vue";
  import myFooter from "@/components/footer.vue";
  export default {
    data(){
      return {
      
      }
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myFooter,
    }
  }
</script>

<style scoped>

</style>