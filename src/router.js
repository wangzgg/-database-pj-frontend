import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/stu',
      name: 'stu',

      component: () => import( './views/stu.vue'),
      children:[

        {
          path: '/userManage1',
          name: 'userManage',

          component: () => import( './views/sys/userManage.vue')
        },
        {
          path: '/orderManage1',
          name: 'orderManage',

          component: () => import( './views/sys/orderManage.vue')
        }, {
          path: '/goodsManage1',
          name: 'goodsManage',

          component: () => import( './views/sys/goodsManage.vue')
        }
      ]
    },
    {
      path: '/ba',
      name: 'ba',

      component: () => import( './views/banjiAdmin.vue'),
      children:[

        {
          path: '/userManage2',
          name: 'userManage',

          component: () => import( './views/sys/userManage.vue')
        },
        {
          path: '/orderManage2',
          name: 'orderManage',

          component: () => import( './views/sys/orderManage.vue')
        }, {
          path: '/goodsManage2',
          name: 'goodsManage',

          component: () => import( './views/sys/goodsManage.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'admin',

      component: () => import( './views/admin.vue'),
      children:[

        {
          path: '/userManage',
          name: 'userManage',

          component: () => import( './views/sys/userManage.vue')
        },
        {
          path: '/orderManage',
          name: 'orderManage',

          component: () => import( './views/sys/orderManage.vue')
        }, {
          path: '/goodsManage',
          name: 'goodsManage',

          component: () => import( './views/sys/goodsManage.vue')
        }
      ]
    },
    {
      path: '/ca',
      name: 'collegeAdmin',

      component: () => import( './views/collegeAdmin.vue'),
      children:[

        {
          path: '/userManage3',
          name: 'userManage',

          component: () => import( './views/sys/userManage.vue')
        },
        {
          path: '/orderManage3',
          name: 'orderManage',

          component: () => import( './views/sys/orderManage.vue')
        }, {
          path: '/goodsManage3',
          name: 'goodsManage',

          component: () => import( './views/sys/goodsManage.vue')
        }
      ]
    },
  ]
})
