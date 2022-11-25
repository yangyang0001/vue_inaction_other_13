<template>
    <div class="root">
        <h1>App2根组件</h1>
        <!-- 
            <a href="#/home">首页</a>   &nbsp;&nbsp;
            <a href="#/movie">电影</a>  &nbsp;&nbsp;
            <a href="#/about">关于</a>
        -->
        
        <!-- 路由一般使用 router-link 标签, 其实使用 <a href> 也可以 -->
        <router-link to="/home">首页</router-link>  &nbsp;&nbsp;
        <router-link to="/movie">电影</router-link> &nbsp;&nbsp;
        <router-link to="/about">关于</router-link>

        <hr/>

        <!-- 只要 vue 项目中使用了 vue-router 就可以使用如下的 router-view 标签 -->
        <router-view> 
        </router-view>

    </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'


export default {

    components: {
        Home,
        Movie,
        About
    },

    data: function () {
        return {
            component_id: ''
        }
    },

    created() {
        // 监听 window 对象的 onhashchange 事件
        window.onhashchange = () => {
            console.log('监听到hash地址变化为', location.hash);
            if(location.hash === '#/home') {
                this.component_id = 'Home';
            } else if(location.hash === '#/movie') {
                this.component_id = 'Movie';
            } else if (location.hash === '#/about') {
                this.component_id = 'About';
            } else {
                this.component_id = '';
            }
        }
    },

    methods: {

    },

}
</script>

<style lang="less" scoped>
.root {
    padding: 5px 20px 260px 20px;
    background-color: #b9bdb0;
}
</style>