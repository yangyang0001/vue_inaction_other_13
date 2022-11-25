<template>
    <div class="left">
        <h3>Left组件</h3>
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
.left {
    float: left;
    background-color: aqua;
    padding: 5px 0px 20px 20px;
    font-weight: bolder;
    width: 48%;
}
/deep/ h5 {
    color: red;
}
</style>