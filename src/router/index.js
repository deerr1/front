import Vue from 'vue'
import VueRouter from 'vue-router'
import Information from '../components/HeaderFoter/Information.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Information',
    component: Information,
    children:[
      {
        path: '/main',
        name: 'Main',
        component: () => import('../components/MainPage/Main.vue')
      },
      {
        // Страница информации о направлении
        path: '/about_direction/:id',
        name: 'AboutDirection',
        component: () => import( '../components/DirectionPage/AboutDirection.vue'),
        props: true
      }
    ]
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
