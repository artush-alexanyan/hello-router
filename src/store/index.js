import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flowers: [
        {id: 1, name: 'Flower one', image: require('@/assets/f1.jpg')},
        {id: 2, name: 'Flower two', image: require('@/assets/f2.jpg')},
        {id: 3, name: 'Flower three', image: require('@/assets/f3.jpg')},
        {id: 4, name: 'Flower four', image: require('@/assets/f4.jpg')},
        {id: 5, name: 'Flower five', image: require('@/assets/f5.jpg')},
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
