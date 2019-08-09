<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list"
                :key="item.id">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .weekend {
        .title {
            /*background-color: #fff;*/
            line-height: .8rem;
            text-indent: .2rem;
            border-radius: .1rem;
        }
        .item {
            background-color: #fff;
            margin-bottom: .1rem;
            .item-img-wrapper {
                width: 100%;
                height: 0;
                overflow: hidden;
                padding-bottom: 37.09%;
                .item-img {
                    width: 100%;
                }
            }
            .item-info {
                padding: .1rem;
                flex: 1;
                min-width: 0;
                .item-title {
                    line-height: .54rem;
                    font-size: .3rem;
                    @include text-ellipsis;
                    margin-bottom: .1rem;
                }
                .item-desc {
                    line-height: .24rem;
                    color: #666;
                    @include text-ellipsis;
                    font-size: .24rem;
                    padding-bottom: 0.2rem;
                }
            }
        }

    }

</style>