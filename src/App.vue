<template>
  <div id="app">
    <!-- keep-alive 路由的内容被加载过一次后，缓存内容到内存中，下一次进入路由时不需要重新渲染组件 -->
    <!-- 使用keep-alive时， 在组件中会多出一个生命周期函数，activated(){} 便于特殊情况更改内存 -->
    <!-- 使用keep-alive时， 或者加属性exclude 指定 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
