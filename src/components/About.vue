<template>
    <div class="about">
        <h3>About组件</h3>
        <router-link to="/about/left">左侧组件</router-link>  &nbsp;&nbsp;
        <router-link to="/about/right">右侧组件</router-link>
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

    },

}

</script>

<style lang="less" scoped>
.about {
    background-color: rgb(255, 251, 0);
    padding: 5px 20px 120px 20px;
    font-weight: bolder;
}
/deep/ h5 {
    color: red;
}
</style>