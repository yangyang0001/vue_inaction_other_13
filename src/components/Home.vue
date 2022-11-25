<template>
    <div class="home">
        <h3>Home组件</h3>
        <hr />

        <button @click="push_hash">通过 push 跳转到Movie.vue中的 星际穿越 电影</button>       &nbsp;&nbsp;
        <button @click="replace_hash">通过 replace 跳转到Movie.vue中的 星际穿越 电影</button> &nbsp;&nbsp;
        <button @click="go_back">通过 go 方法 在浏览历史中&nbsp;后退</button>  &nbsp;&nbsp;
        <button @click="go_forw">通过 go 方法 在浏览历史中&nbsp;前进</button>  &nbsp;&nbsp;
        <p>上面在历史中前进或者后退可以使用以下简写方式:</p>
        <button @click="$router.back()">在浏览历史中后退一步的简写形式</button>  &nbsp;&nbsp;
        <button @click="$router.forward()">在浏览历史中前进一步的简写形式</button>
        <hr />

        <router-link to="/main">访问 Main.vue 后台主页</router-link> &nbsp;&nbsp;
        <router-link to="/login">访问 Login.vue 登录页</router-link>


    </div>
</template>

<script>

export default {

    data() {
        return {

        }
    },

    methods: {
        push_hash() {
            // 编程式导航 push 方法
            this.$router.push("/movie/星际穿越?username='gousi'&age=10");
        },
        replace_hash() {
            // 编程式导航 replace 方法
            this.$router.replace("/movie/星际穿越?username='gousi'&age=10");
        },
        go_back() {
            // 编程式导航 go(-1), 在访问历史中后退 一步
            this.$router.go(-1);
        },
        
        go_forw() {
            // 编程式导航 go(1), 在访问历史中前进 一步! 测试过程 使用浏览器的后退, 加上前进 就可以测试了!
            this.$router.go(1);
        }

    },

    mounted() {

    }

}

</script>

<style lang="less" scoped>
.home {
    background-color: rgb(255, 136, 0);
    padding: 5px 20px 120px 20px;
    font-weight: bolder;
}

/deep/ h5 {
    color: red;
}
</style>