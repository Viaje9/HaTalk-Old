import Vue from 'vue'
import App from './App.vue'
import router from './route'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

// 全域component
import MenuComponent from './components/Menu.vue'
Vue.component('menu-component', MenuComponent)

const instance = axios.create({
    headers: { 'Token': window.localStorage.getItem("haTalkToken") || null }
});
// 套件
Vue.use(VueAxios, instance, VueCookies, Vuex)


new Vue({
    render: h => h(App),
    router
}).$mount('#app')

/**
 * route權限設定
 * node JWT
 * 如何紀錄使用者身分
 */