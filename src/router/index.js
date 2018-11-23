import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home    /*** 优化成异步组件的加载方式，提高页面性能： component: () => import('@/pages/home/Home')**/
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      // component: City
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // component: Detail
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 页面路由却换时，页面滚动默认置顶
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
