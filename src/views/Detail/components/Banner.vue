<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <div class="banner-img">
                <img :src="bannerImg"
                     alt="">
            </div>
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe62e;</span>{{bannerImgs.length}}
                </div>
                <div class="banner-title">{{sightName}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="bannerImgs" v-if="showGallary"
                            @close="handleGallaryClose"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
    import CommonGallary from '../../../common/gallary/Gallary.vue'
    import FadeAnimation from '../../../common/fadeAnimation/FadeAnimation.vue'

    export default {
        name: "DetailBanner",
        props: {
            sightName: String,
            bannerImg: String,
            bannerImgs: Array
        },
        data() {
            return {
                showGallary: false,
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallary = true
            },
            handleGallaryClose() {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary,
            FadeAnimation
        }
    }
</script>

<style scoped lang="scss">
    .banner {
        position: relative;
        .banner-img {
            height: 0;
            overflow: hidden;
            width: 100%;
            padding-bottom: 55%;
            img {
                width: 100%;
            }
        }
        .banner-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            line-height: .6rem;
            display: flex;
            flex-direction: column;
            color: #fff;
            padding-left: .2rem;
            padding-bottom: .2rem;
            &:after {
                content: '';
                min-height: .6rem;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                background: transparent linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            }
            .banner-title {
                position: relative;
                z-index: 1;
                flex: 1;
                font-size: .35rem;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70)
            }
            .banner-number {
                text-align: center;
                width: 1.2rem;
                border-radius: .2rem;
                font-size: .24rem;
                height: .4rem;
                line-height: .4rem;
                background-color: rgba(0, 0, 0, 0.5);
                .banner-icon {
                    font-size: .24rem;
                    margin-right: .1rem;
                }
            }
        }
    }
</style>