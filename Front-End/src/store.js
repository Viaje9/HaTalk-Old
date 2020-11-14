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
                this._vm.$socket.close()
                this._vm.$socket.open()
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
            const friend = state.friends.filter(e => e.account === account)
            if (state.friends.length !== 0)
                return friend[0].name
            if (friend.length === 0) 
                route.push({ path: "/Chat" }).catch(() => { });
        },

        userData: (state) => {
            return state.account ? true : false
        }
    }
})

export default store;