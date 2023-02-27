import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/students',
    name: 'student'
    component: () => import('../views/StudentsList.vue')
  },
  {
    path: '/students/:id',
    name: 'editStudent'
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