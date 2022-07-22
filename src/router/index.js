import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortalView from '../views/PortalView.vue'
import DetailView from '../views/DetailView.vue'
import AboutView from '../views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/:portal/',
    name: 'portal',
    component: PortalView,
    props : true
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path : '/detail/:portal/:category/:id',
    name : 'detail',
    component : DetailView,
    props : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
