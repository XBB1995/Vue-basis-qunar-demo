<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">
                        北京
                    </div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <list :list="cityList"></list>
        </div>
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
        <div class="area">
            <div class="title border-topbottom">
                A
            </div>
            <list :list="cityList"></list>
        </div>
        <div class="area">
            <div class="title border-topbottom">
                B
            </div>
            <list :list="cityList"></list>
        </div>
    </div>
</template>

<script>
    import List from '../components/subcomponents/List.vue'
    export default {
        name: "CityList",
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
                ]
            }
        },
        components: {
            List
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

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

    .button-list {
        padding: .1rem;
        overflow: hidden;
        .button-wrapper {
            float: left;
            width: 33.33%;
            .button {
                padding: .1rem 0;
                text-align: center;
                margin: .1rem;
                border: .02rem solid #ccc;
            }
        }
    }


</style>