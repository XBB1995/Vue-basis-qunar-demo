<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination repos" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    autoplay: false
                },
            }
        },
        computed: {
            pages() {
                const pages = []
                this.list.forEach((item, index) =>{
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';
    .icons /deep/ .swiper-pagination-bullet {
        background-color: #666;
    }
    .icons /deep/ .swiper-pagination-bullet-active {
        background-color: $bgColor;
    }
    .icons /deep/ .swiper-container {
        height: 0;
        padding-bottom: 50%;
    }
    .icons {
        overflow: hidden;
        height: 0;
        padding-bottom: 45%;
        /*background-color: #bfa;*/
        background-color: #fff;
        .icon {
            position: relative;
            width: 25%;
            float: left;
            height: 0;
            padding-bottom: 22.5%;
            /*background-color: #ccc;*/
            overflow: hidden;
            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .22rem;
                /*background-color: green;*/
                box-sizing: border-box;
                padding: .15rem;
                .icon-img-content {
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: .44rem;
                line-height: .44rem;
                color: $dartTextColor;
                text-align: center;
                @include text-ellipsis;
            }
        }
        .repos {
            position: absolute;
            bottom: 0.6rem;
        }
    }
</style>