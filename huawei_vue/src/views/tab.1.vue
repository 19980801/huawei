<template>
  <div id="tab">
    <div class="tab-bar clearfix">
      <ul>
        <li v-for="(item,i) in items" :key="item.i" @click="tab(i)" :class="{active : i===curId}">
          <div >
            <h5>{{item.item}}</h5>
            <span>{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="tab-con">
      <ul>
        <li v-show="i===curId" v-for="(content,i) in contents" :key="content.i">
          <p>{{content.content}}</p>
          <img :src="content.img_url" alt="">
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        curId: 0,
        items: [
          {item: 'HTML',title:"华为"},
          {item: 'CSS',title:"华为1"},
          {item: 'JavaScript',title:"华为2"},
          {item: 'Vue',title:"华为3"},
        ],
        contents: [
          {content: 'HTML',img_url:"http://127.0.0.1:3000/imgs/3.png" },
          {content: 'CSS',img_url:"http://127.0.0.1:3000/imgs/8c.png"},
          {content: 'JavaScript'},
          {content: 'Vue'},
        ]
      }
    },

    methods: {
      tab (i) {
        this.curId = i;
      }
    }
  }
</script>

<style scoped>
  #tab {
    /* width: 400px; */
    border: 1px solid #ccc;
    margin: 60px auto 0;
    display: flex;
  }
  .tab-bar {
    width: 400px;
    background-color: #ccc;
  }
  /* .tab-bar a{
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #000;
  } */
  .tab-bar .active {
    background-color: #0099ff;
  }
  .tab-con div {
    text-align: left;
    height: 100px;
  }

</style>
