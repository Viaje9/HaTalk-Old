import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import LoginComponent from './components/Login.vue'
import RegisterComponent from './components/Register.vue'
import UserComponent from './components/User.vue'
import SearchComponent from './components/Search.vue'
import ChatListComponent from './components/Chat/ChatList.vue'
import ChatComponent from './components/Chat/Chat.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: ChatListComponent,
      meta: { requiresAuth: true }
    },
    {
      path: "/Login",
      component: LoginComponent,
    },
    {
      path: "/Register",
      component: RegisterComponent,
    },
    {
      path: "/User",
      component: UserComponent,
      meta: { requiresAuth: true }
    },
    {
      path: "/Search",
      component: SearchComponent,
      meta: { requiresAuth: true }
    },
    {
      path: "/Chat",
      component: ChatListComponent,
      meta: { requiresAuth: true }
    },
    {
      path: "/Chat/:id",
      component: ChatComponent,
      meta: { requiresAuth: true }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (from.matched.length === 0 && to.path.substring(0, 6) === "/Chat/") {
      next({
        path: '/Chat',
      })
    } else if (from.matched.length !== 0 && !store.getters.userData) {
      next({
        // path: '/Login',
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router