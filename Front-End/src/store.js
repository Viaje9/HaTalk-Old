import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        name: null,
        account: null,
        friend: [],
        state: null
    },
    mutations: {
        setUser(state, data) {
            state.name = data.name
            state.account = data.account
            state.friend = data.friend
        },
        updateUserName(state, data) {
            state.name = data
        },
        updateUserState(state, data) {
            state.state = data
        }
    }
})

export default store;