<template>
    <div class="list">
        <div class='item' v-for="(item, index) of list" :key="index">
            <div class="item-title">
                <span class="item-list-icon"></span>
                {{item.title}}
                <div v-if="item.children" class="item-children">
                    <detail-list :list="item.children"></detail-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props: {
            list: Array
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';

    .item-title {
        display: inline-block;
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
        .item-list-icon {
            position: relative;
            top: .1rem;
            left: .05rem;
            display: inline-block;
            width: .36rem;
            height: .36rem;
            background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
        }
        .item-children {
            padding: 0 .2rem;
        }
    }
</style>