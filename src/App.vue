<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import header from './components/header/header.vue'

  const ERR_OK = 0;

  export default {
    data(){
      return {
        seller:{}
      }
    },
    created(){
      this.$http.get('/api/seller').then((response) =>{
        response = response.body;
        if(response.errno === ERR_OK){
          this.seller = response.data;
          console.log(this.seller)
        }
      });
    },
    components:{
      'v-header':header
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
 .tab
    font-size : 10px;
    display:flex;
    width:100%;
    height:8rem;
    line-height:8rem;
    border-bottom:1px solid rgba(7,17,27,0.1)
    .tab-item
      flex:1
      text-align:center
      >a
        display:block;
        font-size:2.8rem;
        color:rgb(77,85,93);
      >.active
        color:rgb(240,20,20)
</style>
