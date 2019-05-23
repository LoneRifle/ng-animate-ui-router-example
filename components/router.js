import VueRouter from 'vue-router'
import Overview from './Overview.vue'
import Products from './Products.vue'
import AddEdit from './AddEdit.vue'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    children: [
      {
        path: 'add',
        name: 'products.add',
        component: AddEdit,
      },
      {
        path: 'edit/:id',
        name: 'products.edit',
        component: AddEdit,
      }
    ],
  }
]

const router = new VueRouter({ routes })

export default router