import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/Home.vue'
import LoginComponent from './components/Login.vue'
import RegisterComponent from './components/Register.vue'
import UserComponent from './components/User.vue'
import SearchComponent from './components/Search.vue'
import ChatListComponent from './components/Chat/ChatList.vue'
import ChatComponent from './components/Chat/Chat.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeComponent,
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
    if (from.matched.length === 0 || router.app.$store.state.account) {
      /**
       * 如果是剛開啟網頁
       * 或是找到account
       */
      next()
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router