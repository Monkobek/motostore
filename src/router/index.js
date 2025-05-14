import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Cart from '../pages/Cart.vue'
import Orders from '../pages/Orders.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/cart', component: Cart } ,
  { path: '/orders', component: Orders }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router