import Vue from 'vue'
import App from './App.vue'
import router from './route'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';

// 全域component
import MenuComponent from './components/Menu.vue'
Vue.component('menu-component', MenuComponent)

// 套件
Vue.use(VueAxios, axios)


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

/**
 * route權限設定
 * node JWT
 * 如何紀錄使用者身分
 */