<template>
    <div class="movie">
        <h3>Movie组件</h3>
        
        <router-link to="/movie/雷神?username='zhangsan'&age=23">雷神</router-link>  &nbsp;&nbsp;
        <router-link to="/movie/木乃伊?username='lisi'&age=28"">木乃伊</router-link>  &nbsp;&nbsp;
        <router-link to="/movie/星际穿越?username='wangwu'&age=20"">星际穿越</router-link>  &nbsp;&nbsp;
        <router-link to="/movie/教父?username='zhaoliu'&age=19"">教父</router-link>  &nbsp;&nbsp;
        <router-link to="/movie/异形?username='maosan'&age=24"">异形</router-link>
        <hr/>

        <router-view></router-view>
    </div>
</template>

<script>

export default {

    data() {
        return {

        }
    },

    methods: {
       
    },

    mounted() {

    }

}

</script>

<style lang="less" scoped>
.movie {
    background-color: rgb(165, 239, 126);
    padding: 5px 20px 120px 20px;
    font-weight: bolder;
}
/deep/ h5 {
    color: red;
}
</style>