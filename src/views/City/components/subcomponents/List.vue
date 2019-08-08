<template>
    <div class="area">
        <div class="title border-topbottom">
            <slot></slot>
        </div>
        <div class="list"  v-if="!cityAlone">
            <ul class="city-ul">
                <li class="city-li" v-for="item of list"
                    :key="item.id"
                >{{item.name}}</li>
            </ul>
        </div>
        <div v-else class="cityPos">
            <span class="iconfont iconpos">&#xe672;</span>
            {{list[0].name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            list: Array
        },
        computed: {
            cityAlone() {
                return this.list.length === 1?true:false
            }
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
                }
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 75%;
                    width: 25%;
                    height: 100%;
                    border-left: .02rem solid #ddd;
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