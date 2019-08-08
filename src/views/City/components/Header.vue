<template>
    <div class="header">
        <div class="search-wrapper">
            <div class="search">
                <span class="iconfont search-icon">&#xe632;</span>
                <input class="search-input" type="text"
                       placeholder="搜索全球城市" v-model="keyword">
            </div>
            <div class="search-content" v-show="keyword" ref="search">
                <ul>
                    <li v-for="item of list" :key="item.id"
                    class="search-item border-bottom">
                        {{item.name}}--{{item.spell}}
                    </li>
                    <li class="border-bottom search-item" v-if="hasNoData">
                        没有找到匹配城市
                    </li>
                </ul>
            </div>
        </div>
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios'
    import BScroll from 'better-scroll'

    export default {
        name: "CityHeader",
        data() {
            return {
                keyword: '',
                timer: null,
                cities: {},
                list: []
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/mock/city.json')
                    .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.cities = data.cities
                }
            }
        },
        mounted() {
            this.getCityInfo()
            this.scroll = new BScroll(this.$refs.search)
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        computed: {
            hasNoData() {
                return !this.list.length
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .header {
        height: $headerHeight;
        /*overflow: hidden;*/
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background-color: $bgColor;
        font-size: .32rem;
        position: relative;
        .search-wrapper {
            position: relative;
            .search {
                height: .84rem;
                line-height: .84rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                /*width: 80%;*/
                padding-left: .8rem;
                padding-right: .2rem;
                .search-icon {
                    position: relative;
                    left: .4rem;
                    top: .03rem;
                    color: #000;
                    font-size: .2rem;
                    /*height: .44rem;*/
                    /*line-height: .44rem;*/
                }
                .search-input {
                    background-color: #eee;
                    border-radius: .1rem;
                    flex: 1;
                    display: block;
                    font-size: .2rem;
                    text-indent: .5rem;
                    height: .6rem;
                    line-height: .6rem;
                }
            }
            .search-content {
                /*display: block;*/
                position: absolute;
                height: calc( 100vh - .87rem);
                top: $headerHeight;
                left: 0;
                bottom: 0;
                right: 0;
                overflow: hidden;
                z-index: 1;
                background-color: #fff;
                .search-item {
                    line-height: .62rem;
                    color: #666;
                }
            }
        }

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