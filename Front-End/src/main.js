import Vue from 'vue'
import App from './App.vue'
import router from './route'

import MenuComponent from './components/MenuComponent.vue'


// 全域component
Vue.component('menu-component', MenuComponent)



new Vue({
    render: h => h(App),
    router
}).$mount('#app')

/**
 * route權限設定
 * node JWT
 * 如何紀錄使用者身分
 */