import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/views/admin/AdminLayout.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminLayout,
      children: [
        {
          path: 'productos',
          name: 'products',
          component: () => import('../views/admin/ProductsView.vue')
        },
        {
          path: 'productos/nuevo',
          name: 'new-product',
          component: () => import('../views/admin/NewProductView.vue')
        },
        {
          path: 'productos/editar/:id',
          name: 'edit-product',
          component: () => import('../views/admin/EditProductView.vue')
        },
        {
          path: 'productos/seeder',
          name: 'seed-products',
          component: () => import('../views/admin/SeederView.vue')
        },
        {
          path: 'ventas',
          name: 'sales',
          component: () => import('../views/admin/SalesView.vue')
        },
      ]
    }
  ]
})

export default router
