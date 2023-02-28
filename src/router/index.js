import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import HomeView from '../views/HomeView.vue'
import Methods from '../views/Methods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/methods',
    name: 'methods',
    component: Methods
  },
  {
    path: '/list',
    name: 'lists',
    component: () => import('../views/ListRendering.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/Lifecycle.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../views/SlotExample.vue')
  },
  {
    path: '/students',
    name: 'student',
    component: () => import('../views/StudentsList.vue')
  },
  {
    path: '/students/:id',
    name: 'editStudent',
    component: () => import('../views/EditStudent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach((to, from, next) => {
  console.log("To: "+to.name)
  console.log("From: "+from.fullPath)
  if(to.name=="EditStudent"){
    next("/")
  }else{
    next()
  }
})

export default router