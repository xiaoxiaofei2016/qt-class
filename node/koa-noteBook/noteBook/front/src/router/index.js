import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/starNotes'
import StarBanner from '@/components/StarBanner/starBanner'
import StarLogin from '@/components/login/starLogin'
import StarRegister from '@/components/register/starRegister'
import NoteClass from '@/components/noteClass/noteClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/NoteClass',
      name: 'NoteClass',
      component: NoteClass,
      meta: {
        title: '笔记分类'
      }
    }
  ]
})
