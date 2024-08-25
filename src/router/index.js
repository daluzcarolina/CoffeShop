import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue' 
import About from '../components/AboutPage.vue'
import Cardapio from '../components/CardapioPage.vue' 
import LocalPage from '@/components/LocalPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About
  },
{
    path: '/cardapio',
    name: 'CardapioPage',
    component: Cardapio
},
 {
  path: '/localizacao',
  name: 'LocalPage',
  component: LocalPage
 }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
