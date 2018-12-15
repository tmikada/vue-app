import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'
// import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import routes from './routes'
import { authorizeToken } from './guards'

Vue.use(Router)

// export default new Router({ routes })
const router = new Router({ routes })
router.beforeEach(authorizeToken)

export default router

// export default new Router({
//   // mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'KbnLoginView',
//       component: KbnLoginView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: function () { 
//         return import(/* webpackChunkName: "about" */ '@/views/About.vue')
//       }
//     },
//   ]
// })