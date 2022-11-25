<template>
    <div class="movie_desc">
        <!-- 第1种 获取动态路由参数 -->
        <h5>{{ this.$route.params.name }} 播放区</h5>
        <!-- 第2种 获取动态路由参数, 开启方式 index.js routes 中配置 props: true -->
        <h5>{{ name }} 播放区</h5>
        <button @click="show_this">打印this</button>
    </div>
</template>

<script>

export default {

    props: ['name'],

    data() {
        return {

        }
    },

    methods: {
        show_this() {
            console.log('this is :', this);
        }
    },

    mounted() {

    }

}

</script>

<style lang="less" scoped>
.movie_desc {
    background-color: rgba(125, 116, 126, 0.398);
    padding: 5px 20px 150px 20px;
    font-weight: bolder;
}

/deep/ h5 {
    color: red;
}
</style>