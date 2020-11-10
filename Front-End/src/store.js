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
    },
    mutations: {
        setUser(state, from) {
            axios.get("/GetUser").then((res) => {
                const data = res.data
                state.name = data.name
                state.account = data.account
                state.friends = data.friends
                if (!data.success) route.push({ path: "/Login" }).catch(() => { });
                else if (from === "login" || from === "register") route.push({ path: "/" }).catch(() => { });
            });
        },
        updateUserName(state, data) {
            state.name = data
        }
    },
    getters: {
        getFriend: (state) => (account) => {
            if (state.friends.length !== 0)
                return state.friends.filter(e => e.account === account)[0].name
        },

        userData: (state) => {
            return state.account ? true : false
        }
    }
})

export default store;