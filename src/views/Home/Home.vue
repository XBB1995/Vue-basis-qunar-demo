<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <div class="tools-box">
            <div class="left">
                <span class="iconfont">&#xe672;</span>
                <span>定位失败</span>
            </div>
            <div class="right">
                <span class="iconfont">&#xe62e;</span>
                <span>必游榜单</span>
            </div>
        </div>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'
    import HomeFooter from './components/Footer.vue'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "Home",
        data() {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: [],
                lastCity: ''
            }
        },
        components: {
            // 异步加载 仅当app.js较大时才有性能提升
            // HomeHeader: () => import('./components/Header.vue'),
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
            HomeFooter
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            getHomeInfo() {
                this.lastCity = this.city
                axios
                    .get('/mock/index.json?city=' + this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            },
        },
        mounted() {
            this.getHomeInfo()
        },
        activated() {
            if (this.lastCity !== this.city) {
                this.getHomeInfo()
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
        background-color: #eee;
        .tools-box {
            background-color: #fff;
            display: flex;
            height: 1rem;
            justify-content: space-around;
            width: 100%;
            border-bottom-left-radius: .1rem;
            border-bottom-right-radius: .1rem;
            .left, .right {
                height: 100%;
                line-height: 1rem;
                border: 1px solid #eee;
                flex: 1;
                text-align: center;
            }
        }
    }

</style>