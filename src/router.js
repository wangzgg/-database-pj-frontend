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
      path: '/ca',
      name: 'ba',

      component: () => import( './views/classAdmin.vue'),
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
        },{
          path: '/leaving_root',
          name: 'leaving_root',

          component: () => import( './views/sys/leaving_root.vue')
        },{
          path: '/enter_most_root',
          name: 'enter_most_root',

          component: () => import( './views/sys/enter_most_root.vue'),
          children:[
            {
              path:'/enter_most_school',
              name:'enter_most_school',
              component: () => import( './views/sys/classify/enter_most_school.vue')
            },{
              path:'/enter_most_department',
              name:'enter_most_department',
              component: () => import( './views/sys/classify/enter_most_department.vue')
            },{
              path:'/enter_most_class',
              name:'enter_most_class',
              component: () => import( './views/sys/classify/enter_most_class.vue')
            }
          ]
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
      path: '/da',
      name: 'collegeAdmin',

      component: () => import( './views/departmentAdmin.vue'),
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
