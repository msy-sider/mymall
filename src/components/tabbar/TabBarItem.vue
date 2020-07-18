<template>
  <div class="tab-bar-item" @click="itemclick">
    <!--<img src="../../assets/img/tabbar/首页(1).png" alt="">
    <div>首页</div>-->
    <!--因为要动态的修改item，所以要用插槽-->
    <div v-if="!isActive">
        <slot name='item-icon'></slot>
    </div>
    <!--因为插槽最后会被替换，所以不能在插槽上设置属性，应该在插槽外面包一个div,在div中设置属性-->
    <div v-else>
        <slot  name='item-icon-active'></slot>
    </div>
    
    <div :style='activeStyle'>
        <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'dodgerblue'
            }
        },
        data() {
            return {
                //isActive: true
            };
        },

        components: {},

        computed: {
            isActive() {
                //return this.$route.path.indexOf(this.path) !== -1
                /*this.$route表示当前活跃路由，this.$route.path表示拿到当前
                活跃路由，如果当前活跃路由和原本路由匹配，则返回true*/
                return this.$route.path == this.path
            },
            activeStyle() {
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },

        beforeMount() {},

        mounted() {},

        methods: {
            itemclick() {
                this.$router.replace(this.path)
            }
        },

        watch: {}

    }
</script>
<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>