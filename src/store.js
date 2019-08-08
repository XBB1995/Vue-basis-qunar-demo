/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 可拆分至 state.js
let defaultCity = '北京'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {
    console.log(e.message);
}

export default new Vuex.Store({
    state: {
        city: localStorage.city || '北京'
    },
    // 可拆分至 mutations.js
    mutations: {
        changeCity(state, city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {
                console.log(e.message);
            }
        }
    },
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    getters: {
        doubleCity(state) {
            return state.city + " " + state.city
        }
    }
})

