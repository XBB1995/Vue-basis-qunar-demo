<template>
    <div class="detail">
        <d-banner :sightName="sightName" :bannerImg="bannerImg"
                  :bannerImgs="gallaryImgs"></d-banner>
        <d-header>{{sightName}}</d-header>
        <detail-list :list="detailList"></detail-list>
    </div>
</template>

<script>
    import DBanner from './components/Banner.vue'
    import DHeader from './components/Header.vue'
    import DetailList from './components/List.vue'
    import axios from 'axios'

    export default {
        name: "Detail",
        data() {
            return {
                sightName: '',
                detailList: [],
                bannerImg: '',
                gallaryImgs: []

            }
        },
        components: {
            DBanner,
            DHeader,
            DetailList
        },
        methods: {
            getDetailInfo() {
                axios.get('/mock/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.detailList = data.categoryList
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                }
            }
        },
        mounted() {
            this.getDetailInfo()
        }
    }
</script>

<style scoped lang="scss">
    .detail {
        height: 100rem;
    }
</style>