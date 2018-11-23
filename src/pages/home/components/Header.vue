<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe8b5;</div>
    </div>
    <router-link tag="div" class="header-input" to="/city">
      <span class="iconfont">&#xe86e;</span>
      输入城市/景点/游玩主题
    </router-link >
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe8d2;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display flex
    line-height .86rem
    background-color $baColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align: right
        font-size: .4rem
    .header-input
      flex 1
      background-color #fff
      border-radius .1rem
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .26rem
</style>
