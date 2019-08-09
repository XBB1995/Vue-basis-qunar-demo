<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    autoplay: true,
                    speed: 2000,
                    loop: true
                },
            }
        },
        computed: {
            showSwiper() {
                return this.list.length
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper /deep/ .swiper-pagination-bullet {
        opacity: 0.4;
        background-color: #fff;
    }
    .wrapper /deep/ .swiper-pagination-bullet-active {
        opacity: 1;
    }

    .wrapper {
        width: 100%;
        /*height: 26.66vw;*/
        height: 0;
        overflow: hidden;
        padding-bottom: 26.66%;
        .swiper-img {
            width: 100%;
        }
    }

</style>