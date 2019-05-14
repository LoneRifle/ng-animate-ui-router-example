import { UIRouterReact, servicesPlugin, hashLocationPlugin } from '@uirouter/react'

import Overview from './main/Overview.jsx'
import Products from './main/Products.jsx'
import AddEdit from './main/AddEdit.jsx'


const router = new UIRouterReact()
router.plugin(servicesPlugin)
router.plugin(hashLocationPlugin)

const states = [
  {
    name: 'overview',
    url: '/',
    component: Overview,
  },
  {
    name: 'products',
    url: '/products',
    component: Products,
  },
  {
    name: 'products.add',
    url: '/add',
    component: AddEdit,
  },
  {
    name: 'products.edit',
    url: '/edit/:id',
    component: AddEdit,
  },
]

states.forEach(state => router.stateRegistry.register(state))

export default router
