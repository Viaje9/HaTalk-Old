import Vue from 'vue'
import App from './App.vue'
import router from './route'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';
import VueSocketIO from 'vue-socket.io'


// 全域component
import MenuComponent from './components/Menu.vue'
Vue.component('menu-component', MenuComponent)

// 套件
Vue.use(VueAxios, axios)
Vue.use(new VueSocketIO({
    connection:'/'
}))

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

/**
 * route權限設定
 * node JWT
 * 如何紀錄使用者身分
 */