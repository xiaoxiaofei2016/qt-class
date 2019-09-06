import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UserManage from '@/components/content/UserManage'
import table from '@/components/content/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/Main/User-Manage',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: '/Main/table',
          name: 'table',
          component: table
        }
      ]
    }
  ]
})
