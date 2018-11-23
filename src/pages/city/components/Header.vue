<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe8b5;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    height .86rem
    line-height .86rem
    overflow hidden
    text-align center
    color #ffffff
    background $baColor
    font-size .32rem
    position relative
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      text-align right
      color #fff
</style>
