import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/TasksView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
