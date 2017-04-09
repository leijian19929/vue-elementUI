import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import router1 from '@/components/router1'
import router2 from '@/components/router2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/router1',
      component: router1
    },
    {
      path: '/router2',
      component: router2
    }
  ]
})
