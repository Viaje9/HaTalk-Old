import Vue from 'vue'
import App from './App.vue'
import router from './route'

// 全域component
Vue.component('home-component', require('./components/HomeComponent.vue').default)
Vue.component('header-component', require('./components/HeaderComponent.vue').default)
Vue.component('test-component', require('./components/TestComponent.vue').default)


new Vue({
    render: h => h(App),
    router
}).$mount('#app')

/**
 * route權限設定
 * node JWT
 * 如何紀錄使用者身分
 */