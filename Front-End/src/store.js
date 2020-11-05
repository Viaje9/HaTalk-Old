import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        name: null,
        account: null,
        friends: [],
        state: null
    },
    mutations: {
        setUser(state, data) {
            state.name = data.name
            state.account = data.account
            state.friends = data.friends
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