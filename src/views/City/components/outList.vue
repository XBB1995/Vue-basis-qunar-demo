<template>
    <div class="outlist" ref="wrapper">
        <div class="list-wrapper">
            <list :list="CurrentPos">当前城市</list>
            <div class="area">
                <div class="title border-topbottom">
                    字母排序
                </div>
                <ul class="a-ul">
                    <li class="a-li">A</li>
                    <li class="a-li">B</li>
                    <li class="a-li">C</li>
                    <li class="a-li">D</li>
                    <li class="a-li">E</li>
                    <li class="a-li">F</li>
                    <li class="a-li">G</li>
                </ul>
            </div>
            <list :list="cityList">A</list>
            <list :list="cityList">B</list>
            <list :list="cityList">C</list>
            <list :list="cityList">D</list>
            <list :list="cityList">E</list>
            <list :list="cityList">F</list>
        </div>
    </div>
</template>

<script>
    import List from '../components/subcomponents/List.vue'
    import BScroll from 'better-scroll'
    export default {
        name: "CityOutList",
        data() {
            return {
                cityList: [
                    {
                        id: '0001',
                        name: '北京'
                    },
                    {
                        id: '0002',
                        name: '上海'
                    },
                    {
                        id: '0003',
                        name: '天津'
                    },
                    {
                        id: '0004',
                        name: '杭州'
                    },
                    {
                        id: '0005',
                        name: '广州'
                    },
                ],
                CurrentPos: [
                    {
                        id: '0001',
                        name: '新加坡'
                    }
                ]
            }
        },
        components: {
            List
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';
    .outlist {
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