import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Sas_van_Gulik/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Sas_van_Gulik/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Sas_van_Gulik/reel',
      name: 'reel',
      component: () => import('../views/ReelView.vue')
      
    },
    {
      path: '/Sas_van_Gulik/external',
      name: 'external',
      component: () => import('../views/ExternalView.vue')
      
    },
    {
      path: '/Sas_van_Gulik/skills',
      name: 'skills',
      component: SkillsView
      
    },
    {
      //empty router.
      path: '/',
      name: 'None',
      redirect: '/Sas_van_Gulik/home'
    },
  ]
})

export default router
