<template>
    <div class="list">
        <ul class="city-ul">
            <li class="city-li" v-for="item of list"
                :key="item.id"
            >{{item.name}}</li>
        </ul>
        <slot name="inner"></slot>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="scss">
    .list {
        .city-ul {
            list-style: none;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 33.33%;
                width: 33.33%;
                height: 100%;
                border-left: .02rem solid #ddd;
                border-right: .02rem solid #ddd;
            }
            .city-li {
                width: 33.33%;
                display: inline-block;
                text-align: center;
                height: .9rem;
                line-height: .9rem;
                border-bottom: .02rem solid #ddd;
                margin-bottom: -1px;
            }
        }
    }

</style>