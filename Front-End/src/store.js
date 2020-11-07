import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import route from './route'

Vue.use(Vuex)

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        name: null,
        account: null,
        friends: [],
        state: null
    },
    mutations: {
        setUser(state, from) {
            axios.get("/GetUser").then((res) => {
                const data = res.data
                state.name = data.name
                state.account = data.account
                state.friends = data.friends
                if (!data.success) route.push({ path: "/Login" });
                else if (from) route.push({ path: "/" });
            });
        },
        updateUserName(state, data) {
            state.name = data
        },
        updateUserState(state, data) {
            state.state = data
        }
    },
    getters: {
        getFriend: (state) => (account) => {
            if(state.friends.length !== 0)
            return state.friends.filter(e => e.account === account)[0].name
        }
    }
})

export default store;