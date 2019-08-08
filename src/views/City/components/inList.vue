<template>
    <div class="inlist" ref="wrapper">
        <div class="list-wrapper">
            <list :list="CurrentPos">当前城市</list>
            <list :list="hotCities">热门城市</list>
            <div class="area">
                <div class="title border-topbottom">
                    字母排序
                </div>
                <ul class="a-ul">
                    <li class="a-li" v-for="(item, key) of cities"
                        :key="key" @click="handleLetterClick">{{key}}
                    </li>
                </ul>
            </div>
            <list :list="cities[key]" v-for="(item, key) of cities"
                  :key="key" :ref="key">
                {{key}}
            </list>
        </div>
    </div>
</template>

<script>
    import List from '../components/subcomponents/List.vue'
    import BScroll from 'better-scroll'
    import axios from 'axios'

    export default {
        name: "CityList",
        data() {
            return {
                CurrentPos: [
                    {
                        id: 1,
                        name: '北京'
                    }
                ],
                cities: {},
                hotCities: [],
                letter: ''
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
                    this.hotCities = data.hotCities
                }
            },
            handleLetterClick(e) {
                this.letter = e.target.innerText
                if (this.letter) {
                    const element = this.$refs[this.letter][0].$el
                    this.scroll.scrollToElement(element)
                }
            }
        },
        mounted() {
            this.getCityInfo()
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        components: {
            List
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .inlist {
        position: absolute;
        top: 1.45rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        .list-wrapper {
            .border-topbottom {
                &:before {
                    border-color: #ccc;
                }
                &:after {
                    border-color: #ccc;
                }
            }

            .title {
                height: .44rem;
                line-height: .44rem;
                background-color: #eee;
                padding-left: .2rem;
                color: #666;
                font-size: .26rem;
            }

            .a-ul {
                list-style: none;
                padding: .3rem 0;
                .a-li {
                    width: 16.66%;
                    display: inline-block;
                    text-align: center;
                    height: .9rem;
                    line-height: .9rem;
                }
            }
        }
    }
</style>