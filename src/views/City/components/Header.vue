<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';
    .header {
        height: $headerHeight;
        overflow: hidden;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background-color: $bgColor;
        font-size: .32rem;
        position: relative;
        .back-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            font-size: .4rem;
            text-align: center;
            color: #fff;
        }
    }
</style>