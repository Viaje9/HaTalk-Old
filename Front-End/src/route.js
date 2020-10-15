import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import UserComponent from './components/UserComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import ChatListComponent from './components/Chat/ChatListComponent.vue'
import ChatComponent from './components/Chat/ChatComponent.vue'

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
    if ($cookies.get("haTalkToken")) {
      /**
       * 在login的時候會取得token存在cookie
       * 如果沒有過期則導向畫面
       * 如果過期則返回登入畫面
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