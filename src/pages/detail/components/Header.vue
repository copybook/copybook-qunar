<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAds">
      <span class="iconfont header-abs-back">&#xe8b5;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAds" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe8b5;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAds: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAds = false
      } else {
        this.showAds = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  // activated () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      font-size .36rem
      padding-left .1rem
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background $baColor
    font-size .32rem
    z-index 99
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      text-align right
      color #fff
</style>
