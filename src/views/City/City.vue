<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <router-view/>
    </div>
</template>

<script>
    import CityHeader from './components/Header.vue'
    import CitySearch from './components/Search.vue'
    // import axios from 'axios'
    export default {
        name: "City",
        // data() {
        //     return {
        //         cities: [],
        //         hotCities: []
        //     }
        // },
        // methods: {
        //     getCityInfo() {
        //         axios.get('/mock/city.json')
        //             .then(this.handleGetCityInfoSucc)
        //     },
        //     handleGetCityInfoSucc(res) {
        //         res = res.data
        //         if (res.ret && res.data) {
        //             const data = res.data
        //             this.cities = data.cities
        //             this.hotCities = data.hotCities
        //         }
        //     }
        // },
        // mounted() {
        //     this.getCityInfo()
        // },
        components: {
            CityHeader,
            CitySearch,
        }
    }
</script>

<style scoped lang="scss">

</style>