import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexPersistence = new VuexPersistence({
  storage: window.localStorage,
  key: 'react-mounting-angularjs-router-animate',
})

const products = {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    save (state, product) {
      const i = state.products.findIndex(p => p.id === product.id)
      if (i !== -1) {
        state.products[i] = product
      } else {
        // Find the latest product to obtain latest id
        const latestProduct = state.products[state.products.length - 1]
        product.id = (latestProduct ? latestProduct.id : 0) + 1
        state.products.push(product)
      }
    },
    delete (state, id) {
      const i = state.products.findIndex(p => p.id === id)
      if (i !== -1) {
        state.products.splice(i, 1)
      }
    },
  },
  getters: {
    byId (state, id) {
      return state.products.find(v => v.id === id)
    },
  },
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { products },
  plugins: [ vuexPersistence.plugin ]
})

console.log(store)

export default store