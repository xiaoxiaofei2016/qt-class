import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const __import__ = file => () => import(`@/pages/${file}.vue`)
const __import2__ = file => () => import(`@/components/personCenter/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('Home')
    },
    {
      path: '/Cart',
      component: __import__('Cart')
    },
    {
      path: '/Buy',
      component: __import__('Buy')
    },
    {
      path: '/Register',
      component: __import__('Register')
    },
    {
      path: '/Login',
      component: __import__('Login')
    },
    {
      path: '/Products',
      component: __import__('Products')
    },
    {
      path: '/User',
      name: 'User',
      component: __import__('User'),
      meta: {
        isLogin: true
      },
      children: [
        {
          path: '/User/detail1',
          name: 'usercenter1',
          component: __import2__('usercenter1'),
          meta: {
            isLogin: true
          },
        },
        {
          path: '/User/detail2',
          name: 'usercenter2',
          component: __import2__('usercenter2'),
          meta: {
            isLogin: true
          },
        },
        {
          path: '/User/detail3',
          name: 'usercenter3',
          component: __import2__('usercenter3'),
          meta: {
            isLogin: true
          },
        },
        {
          path: '/User/detail6',
          name: 'usercenter6',
          component: __import2__('usercenter6'),
          meta: {
            isLogin: true
          }
        },
        {
          path: '/User/detail12',
          name: 'usercenter12',
          component: __import2__('usercenter12'),
          meta: {
            isLogin: true
          }
        },
        {
          path: '/User/detail17',
          name: 'usercenter17',
          component: __import2__('usercenter17'),
          meta: {
            isLogin: true
          }
        }
      ]
    }
  ]
})
