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

          component: () => import( './views/sys/healthtable_root.vue')
        },
        {
          path: '/orderManage1',
          name: 'orderManage',

          component: () => import( './views/sys/leaveApply_root.vue')
        }, {
          path: '/goodsManage1',
          name: 'goodsManage',

          component: () => import( './views/sys/access_root.vue')
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

          component: () => import( './views/sys/healthtable_root.vue')
        },
        {
          path: '/orderManage2',
          name: 'orderManage',

          component: () => import( './views/sys/leaveApply_root.vue')
        }, {
          path: '/goodsManage2',
          name: 'goodsManage',

          component: () => import( './views/sys/access_root.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'admin',

      component: () => import( './views/root.vue'),
      children:[

        {
          path: '/healthtable_root',
          name: 'userManage',

          component: () => import( './views/sys/healthtable_root.vue')
        },
        {
          path: '/leaveApply_root',
          name: 'orderManage',

          component: () => import( './views/sys/leaveApply_root.vue')
        },{
          path: '/enterApply_root',
          name: 'enterApply_root',

          component: () => import( './views/sys/enterApply_root.vue')
        }, {
          path: '/access_root',
          name: 'goodsManage',

          component: () => import( './views/sys/access_root.vue')
        }, {
          path: '/leaveTime',
          name: 'leaveTime',

          component: () => import( './views/sys/leaveTime_root.vue')
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

          component: () => import( './views/sys/healthtable_root.vue')
        },
        {
          path: '/orderManage3',
          name: 'orderManage',

          component: () => import( './views/sys/leaveApply_root.vue')
        }, {
          path: '/goodsManage3',
          name: 'goodsManage',

          component: () => import( './views/sys/access_root.vue')
        }
      ]
    },
  ]
})
