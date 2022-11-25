import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import MovieDesc from '@/components/movie/MovieDesc.vue'
import About from '@/components/About.vue'
import Left from '@/components/about/Left.vue'
import Right from '@/components/about/Right.vue'

import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    // 配置 hashURL 和 组件之间的对应关系, a href="#/" 这里配置不用加 #, 否则报错! 这块也叫 路由表!
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        {
            path: '/movie', component: Movie, redirect: '/movie/雷神',
            children: [
                { path: ':name', component: MovieDesc, props: true },
            ]
        },
        {
            path: '/about', component: About, redirect: '/about/left',
            children: [
                { path: 'left', component: Left },
                { path: 'right', component: Right },
            ]
        },
        { path: '/main', component: Main },
        { path: '/login', component: Login }

    ]
});

// 设置前置 全局导航守卫, 只要发生了 路由跳转, 就会触发 导航卫士!
router.beforeEach(function (to, from, next) {
    /**
     * 每个参数的含义:
     * to       将要到达的路由信息
     * from     将要离开的路由信息
     * next     表示放行, 允许这次路由导航
     */
    // 首先调用 一次 next() 进行放行!
    next()
    // console.log('from is    :', from);
    // console.log('to is      :', to);
    // console.log('next is    :', next);


    // 1、如果 hashURL 等于 /main 
    // 1.1、如果登录成功, 放行
    // 1.2、如果登录不成功, 去登录页
    // 2、如果 hashURL 不等于 /main, 放行
    if(to.path === '/main') {
        const token = localStorage.getItem('token');
        if(token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }

});
export default router