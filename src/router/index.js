import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/pages/demo1'
import demo2 from '@/pages/demo2'
import homework1 from '@/pages/homework1'
import demo3 from '@/pages/demo3'
import demo4 from '@/pages/demo4'
import demo5 from '@/pages/demo5'
import demo6 from '@/pages/demo6'
import demo7 from '@/pages/demo7'
import demo8 from '@/pages/demo8'
import demo9 from '@/pages/demo9'
import demo10 from '@/pages/demo10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/homework1',
      name: 'homework1',
      component: homework1
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: demo9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: demo10
    }
  ]
})
