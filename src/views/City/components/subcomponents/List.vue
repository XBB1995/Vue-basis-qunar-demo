<template>
    <div class="area">
        <div class="title border-topbottom">
            <slot></slot>
        </div>
        <div class="list" v-if="!cityNoData">
            <ul class="city-ul">
                <li class="city-li" v-for="item of list"
                    :key="item.id" @click="handleClick(item.name)"
                >{{item.name}}
                </li>
            </ul>
        </div>
        <div v-else class="cityPos">
            <span class="iconfont iconpos">&#xe672;</span>
            {{currentCity}}
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "List",
        props: {
            list: Array
        },
        methods: {
            handleClick(city) {
                // this.$store.commit('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
            // ...mapActions(['changeCity'])
        },
        computed: {
            cityNoData() {
                return this.list ? false : true
            },
            // ...mapState(['city']),
            // 可传递对象
            ...mapState({
                currentCity: 'city'
            })
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../assets/styles/vars';

    .area {
        .title {
            height: .44rem;
            line-height: .44rem;
            background-color: #eee;
            padding-left: .2rem;
            color: #666;
            font-size: .26rem;
        }
        .cityPos {
            width: 25%;
            height: .9rem;
            line-height: .9rem;
            text-align: center;
            .iconpos {
                color: $bgColor;
            }
        }
        .list {
            .city-ul {
                list-style: none;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    left: 25%;
                    width: 25%;
                    height: 100%;
                    border-left: .02rem solid #ddd;
                    border-right: .02rem solid #ddd;
                    z-index: -1;
                }
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 75%;
                    width: 25%;
                    height: 100%;
                    border-left: .02rem solid #ddd;
                    z-index: -1;
                }
                .city-li {
                    width: 25%;
                    display: inline-block;
                    text-align: center;
                    height: .9rem;
                    line-height: .9rem;
                    border-bottom: .02rem solid #ddd;
                    margin-bottom: -1px;
                }
            }
        }
    }
</style>