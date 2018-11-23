import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
// 解决浏览器端不支持promise，es6, 部分手机白屏
import 'babel-polyfill'
// 解决-移动端300毫秒click事件延迟
import fastclick from 'fastclick'
// 统一样式
import 'styles/reset.css'
// 解决-移动端1px边框问题
import 'styles/border.css'
// iconfont
import 'styles/iconfont.css'
// swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
