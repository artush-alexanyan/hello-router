import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/secret',
    name: 'secret',
    component: () => import(/* webpackChunkName: "secret" */'@/views/Secret.vue')
  },
  {
    path: '/test-redirect',
    redirect: '/all-flowers',
  },
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/all-flowers',
    component: () => import(/* webpackChunkName: "all-flowers" */'@/views/AllFlowers.vue'),
    children: [
      {
        path: '',
        name: 'flowers',
        component: () => import(/* webpackChunkName: "flowers" */'@/views/Flowers.vue')
      },
      {
        path: ':id',
        props: true,
        name: 'Details',
        beforeEnter: (to, from, next) => { 
            console.log('BeforeEnter in details') 
            next() 
          },
        component: () => import(/* webpackChunkName: "details" */'@/views/FlowerDetails.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach( (to, from, next) => {
    console.log('Global route before each')
    next()
})

export default router
