import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import City from './views/City/City.vue'
import List from './views/City/components/inList.vue'
import CityOutList from './views/City/components/outList.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/city',
            component: City,
            children: [
                {
                    path: 'in',
                    component: List
                },
                {
                    path: 'out',
                    component: CityOutList
                },
            ]
        }
    ]
})
