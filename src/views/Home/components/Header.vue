<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}<span class="iconfont arrow-icon">&#xe600;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: "HomeHeader",
        computed: {
            ...mapState(['city']),
            // ...mapGetters(['doubleCity'])
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';
    .header {
        display: flex;
        background-color: $bgColor;
        line-height: $headerHeight;
        color: #fff;
        .header-left {
            width: .64rem;
            float: left;
            .back-icon {
                text-align: center;
                font-size: .4rem;
            }
        }
        .header-input {
            flex: 1;
            line-height: .64rem;
            height: .64rem;
            margin-top: .12rem;
            margin-left: .2rem;
            background-color: #fff;
            border-radius: .1rem;
            color: #ccc;
            padding-left: .2rem;
            .search-icon {
                margin-right: .05rem;
            }
        }
        .header-right {
            color: #fff;
            min-width: 1.04rem;
            padding: 0 .1rem;
            float: right;
            text-align: center;
            /*padding-right: .2rem;*/
            .arrow-icon {
                margin-right: .05rem;
                font-size: .2rem;
            }
        }
    }
</style>