<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">
                        新加坡
                    </div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">
                热门城市
            </div>
            <list #inner="slotProps" :list="cityList">
                message from Ayou
            </list>
        </div>
        <div class="area">
            <div class="title border-topbottom">
                A
            </div>
            <list></list>
        </div>
    </div>
</template>

<script>
    import List from '../components/subcomponents/List.vue'
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