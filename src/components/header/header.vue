<template>
<div id="header">
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="128" height="128" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <ul>
            <li v-for="supports in seller.supports"  v-show="supports.type==0" >
              <span class="icon":class = "classMap[supports.type]"></span>
              <span class="text">{{supports.description}}</span>
            </li>
          </ul>
          <!--<span class="icon" :class = "classMap[seller.supports[0].type]"></span>-->
          <!--<span class="text">{{seller.supports[0].description}}</span>-->
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {

    props:{
      isActive:true,
      // classMap:['decrease','discount','special','invoice','guarantee'],
      seller:{
        type: Object
      },
    },
    created(){
      this.classMap=['decrease','discount','special','invoice','guarantee']
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixin.styl"

  .header
    color: #fff
    background:#000
    font-size : 10px
    .content-wrapper
      padding:4.8rem 2.4rem 3.6rem 4.8rem
      font-size : 0
      .avatar
        display:inline-block
        vertical-align top
        img
          border-radius : .4rem
      .content
        display : inline-block
        margin-left 3.2rem
        font-size : 2.8rem
        .title
          margin : .4rem 0 1.6rem 0
          .brand
            display inline-block
            vertical-align bottom
            width : 6rem
            height: 3.6rem
            bg-image('brand')
            background-size: 6rem 3.6rem
            background-repeat no-repeat
          .name
            margin-left : 1.2rem
            font-size : 3.2rem
            line-height : 3.6rem
            font-weight bold
        .description
          margin-bottom : 2rem
          line-height : 2.4rem
          font-size: 2.4rem
        .support
          .icon
            display inline-block
            width : 2.4rem
            height : 2.4rem
            margin-right: .8rem
            background-size : 2.4rem 2.4rem
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.invoice
              bg-image('discount_1')
            &.special
              bg-image('special_1')
            &.guarantee
              bg-image('guarantee_1')
          /*.text*/
            /*font-size : 1.4rem*/
</style>

