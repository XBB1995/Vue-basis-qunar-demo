<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallary",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                }
            }
        },
        methods: {
            handleGallaryClick() {
                this.$emit("close")
            }
        },
        props: {
            imgs: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .container /deep/ .swiper-container {
        overflow: inherit;
    }

    .container {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        background-color: #000;
        flex-direction: column;
        justify-content: center;
        .wrapper {
            width: 100%;
            height: 0;
            /*overflow: hidden;*/
            padding-bottom: 66.66%;
            .gallary-img {
                width: 100%;
            }
            .swiper-pagination {
                color: #fff;
                bottom: -1rem;
            }
        }
    }
</style>