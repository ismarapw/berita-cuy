import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AntaraView from '../views/AntaraView.vue'
import SindonewsView from '../views/SindonewsView.vue'
import CnnView from '../views/CnnView.vue'
import OkezoneView from '../views/OkezoneView.vue'
import CnbcView from '../views/CnbcView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/antara',
    name: 'antara',
    component: AntaraView
  },
  {
    path: '/sindonews',
    name: 'sindonews',
    component: SindonewsView
  },
  {
    path: '/cnn',
    name: 'cnn',
    component: CnnView
  },
  {
    path: '/okezone',
    name: 'okezone',
    component: OkezoneView
  },
  {
    path: '/cnbc',
    name: 'cnbc',
    component: CnbcView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
