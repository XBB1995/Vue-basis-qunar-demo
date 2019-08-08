<template>
    <div class="region">
        <div class="wrapper">
            <router-link to="/city/in">
                <button class="in" @click="toggleIn"
                        :class="{'btn-active': isIn}"
                >境内
                </button>
            </router-link>
            <router-link to="/city/out">
                <button class="out" @click="toggleOut"
                        :class="{'btn-active': !isIn}"
                >境外·港澳台
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CitySearch",
        data() {
            return {
                isIn: true,
            }
        },
        methods: {
            toggleIn() {
                this.isIn = true
            },
            toggleOut() {
                this.isIn = false
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .region {
        height: .5rem;
        padding-bottom: .1rem;
        background-color: $bgColor;
        .wrapper {
            width: 70%;
            border: 1px solid #fff;
            border-radius: .06rem;
            margin: 0 auto;
            overflow: hidden;
        }
        .in, .out {
            width: 50%;
            height: .4rem;
            line-height: .4rem;
            font-size: .2rem;
            color: #fff;
            display: inline-block;
            background-color: $bgColor;
            /*padding: .05rem 0;*/
        }
        .in {
            float: left;
        }
        .out {
            float: right;
        }
        .btn-active {
            background-color: #fff;
            color: $bgColor;
        }
    }
</style>