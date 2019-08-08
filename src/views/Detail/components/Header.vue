<template>
    <div>
        <router-link tag="div" to="/" class="header-abs">
            <div class="iconfont header-abs-back" v-show="showAbs">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "DetailHeader",
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop
                if (top > 60) {
                    let opacity = top / 200
                    opacity = opacity >= 1 ? 1 : opacity
                    this.opacityStyle = {opacity}
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll)
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .header-abs {
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        text-align: center;
        line-height: .8rem;
        background: rgba(0, 0, 0, 0.5);
        .header-abs-back {
            color: #fff;
            font-size: .4rem;
        }
    }

    .header-fixed {
        height: $headerHeight;
        /*overflow: hidden;*/
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background-color: $bgColor;
        font-size: .32rem;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        .back-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            font-size: .4rem;
            text-align: center;
            color: #fff;
        }
    }
</style>