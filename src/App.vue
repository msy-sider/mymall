<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="dodgerblue">
        <img slot='item-icon' src="./assets/img/tabbar/首页(1).png" alt="">
        <img slot='item-icon-active' src="./assets/img/tabbar/首页(2).png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
  
      <tab-bar-item path="/category" activeColor="dodgerblue">
       <img slot='item-icon' src="./assets/img/tabbar/分类.png" alt="">
       <img slot='item-icon-active' src="./assets/img/tabbar/分类(1).png" alt="">
       <div slot="item-text">分类</div>
      </tab-bar-item>
  
      <tab-bar-item path="/cart" activeColor="dodgerblue">
       <img slot='item-icon' src="./assets/img/tabbar/购物车.png" alt="">
       <img slot='item-icon-active' src="./assets/img/tabbar/购物车(1).png" alt="">
       <div slot="item-text">购物车</div>
      </tab-bar-item>
  
      <tab-bar-item path="/profile" >
       <img slot='item-icon' src="./assets/img/tabbar/我的.png" alt="">
       <img slot='item-icon-active' src="./assets/img/tabbar/我的(1).png" alt="">
       <div slot="item-text">我的</div>
      </tab-bar-item>
     </tab-bar>
  </div>
</template>

<script>
    import TabBar from './components/tabbar/TabBar.vue'
    import TabBarItem from './components/tabbar/TabBarItem.vue'

    export default {
        name: 'App',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>
    @import url('./assets/css/base.css');
</style>