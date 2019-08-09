<template>
    <div class="recommend">
        <div class="title">
            <span class="iconfont icon-heart">&#xe757;</span>猜你喜欢
        </div>
        <ul>
            <router-link tag="li" class="border-bottom"
                         v-for="item of list" :key="item.id"
                         :to="/detail/ + item.id">
                <div class="item">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-comment">17071条评论</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </div>
                <div class="item-desc">{{item.desc}}</div>
            </router-link>
        </ul>
        <div class="footer">
            <a href="">查看所有产品</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .recommend {
        background-color: #fff;
        .title {
            margin-top: .2rem;
            line-height: .8rem;
            text-indent: .2rem;
            border-radius: .2rem;
            .icon-heart {
                color: #f55;
                margin-right: .1rem;
            }
        }
        .item {
            margin-top: .1rem;
            display: flex;
            height: 2rem;
            overflow: hidden;
            .item-img {
                width: 1.8rem;
                padding: .1rem;
            }
            .item-info {
                padding: .1rem;
                flex: 1;
                min-width: 0;
                .item-title {
                    line-height: .54rem;
                    font-size: .32rem;
                    @include text-ellipsis;
                    margin-bottom: .2rem;
                }
                .item-comment {
                    height: .4rem;
                    line-height: .4rem;
                    font-size: .2rem;
                }
                .item-button {
                    line-height: .35rem;
                    margin-top: .12rem;
                    background-color: #ff9300;
                    padding: 0 .1rem;
                    border-radius: .06rem;
                    color: #fff;
                    font-size: .1rem;
                }
            }
        }
        .item-desc {
            line-height: .34rem;
            color: #999;
            @include text-ellipsis;
            font-size: .24rem;
            color: #f55;
            /*text-align: center;*/
            text-indent: 2rem;
            padding: .2rem;
            text-shadow: 0 0 0.2rem rgba(255, 0, 0, 0.2)
        }
        .footer {
            text-align: center;
            color: $bgColor;
            height: 0.8rem;
            line-height: .8rem;
        }
    }

</style>