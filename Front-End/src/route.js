import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeComponent,
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
  console.log(to);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // console.log(record);
    if (true) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router