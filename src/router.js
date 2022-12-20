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
          path: '/healthtable_ca',
          name: 'healthtable_ca',

          component: () => import( './views/sys/healthtable_ca.vue')
        }, {
          path: '/access_ca',
          name: 'access_ca',

          component: () => import( './views/sys/access_ca.vue')
        },{
          path: '/leaveApply_ca',
          name: 'leaveApply_ca',

          component: () => import( './views/sys/leaveApply_ca.vue')
        },{
          path: '/enterApply_ca',
          name: 'enterApply_ca',

          component: () => import( './views/sys/enterApply_ca.vue')
        },{
          path: '/leaveTime_ca',
          name: 'leaveTime_ca',

          component: () => import( './views/sys/leaveTime_ca.vue')
        },{
          path: '/enter_most_ca',
          name: 'enter_most_ca',

          component: () => import( './views/sys/enter_most_ca.vue')
        },{
          path: '/average_leave_time_most_ca',
          name: 'average_leave_time_most_ca',

          component: () => import( './views/sys/average_leave_time_most_ca.vue')
        },{
          path: '/leaving_ca',
          name: 'leaving_ca',

          component: () => import( './views/sys/leaving_ca.vue')
        },{
          path: '/leave_no_apply_ca',
          name: 'leave_no_apply_ca',

          component: () => import( './views/sys/leave_no_apply_ca.vue')
        },{
          path: '/apply_no_leave_ca',
          name: 'apply_no_leave_ca',

          component: () => import( './views/sys/apply_no_leave_ca.vue')
        },{
          path: '/stay_ca',
          name: 'stay_ca',

          component: () => import( './views/sys/stay_ca.vue')
        },{
          path: '/same_ca',
          name: 'same_ca',

          component: () => import( './views/sys/same_ca.vue')
        },{
          path: '/other_ca',
          name: 'other_ca',

          component: () => import( './views/sys/other_ca.vue')
        },

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
        }, {
          path: '/record_most_root',
          name: 'record_most_root',

          component: () => import( './views/sys/record_most_root.vue')
        }, {
          path: '/same_root',
          name: 'same_root',

          component: () => import( './views/sys/same_root.vue')
        },  {
          path: '/stay_root',
          name: 'stay_root',

          component: () => import( './views/sys/stay_root.vue'),
          children:[
            {
              path:'/stay_school',
              name:'stay_school',
              component: () => import( './views/sys/classify/stay_school.vue')
            },{
              path:'/stay_department',
              name:'stay_department',
              component: () => import( './views/sys/classify/stay_department.vue')
            },{
              path:'/stay_class',
              name:'stay_class',
              component: () => import( './views/sys/classify/stay_class.vue')
            }
          ]
        }, {
          path: '/apply_no_leave_root',
          name: 'apply_no_leave_root',

          component: () => import( './views/sys/apply_no_leave_root.vue')
        },{
          path: '/leave_no_apply_root',
          name: 'leave_no_apply_root',

          component: () => import( './views/sys/leave_no_apply_root.vue')
        },{
          path: '/average_leave_time_most_root',
          name: 'average_leave_time_most_root',

          component: () => import( './views/sys/average_leave_time_most_root.vue'),
          children:[
            {
              path:'/average_leave_time_most_school',
              name:'average_leave_time_most_school',
              component: () => import( './views/sys/classify/average_leave_time_most_school.vue')
            },{
              path:'/average_leave_time_most_department',
              name:'average_leave_time_most_department',
              component: () => import( './views/sys/classify/average_leave_time_most_department.vue')
            },{
              path:'/average_leave_time_most_class',
              name:'average_leave_time_most_class',
              component: () => import( './views/sys/classify/average_leave_time_most_class.vue')
            }
          ]
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
          path: '/leaveTime_root',
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
          path: '/healthtable_da',
          name: 'healthtable_da',

          component: () => import( './views/sys/healthtable_da.vue')
        },{
          path: '/record_most_da',
          name: 'record_most_da',

          component: () => import( './views/sys/record_most_da.vue')
        },{
          path: '/same_da',
          name: 'same_da',

          component: () => import( './views/sys/same_da.vue')
        },{
          path: '/stay_da',
          name: 'stay_da',

          component: () => import( './views/sys/stay_da.vue'),
          children: [
            {
              path: '/stay_department_da',
              name: 'stay_department_da',

              component: () => import( './views/sys/classify/stay_department_da.vue')
            },{
              path: '/stay_class_da',
              name: 'stay_class_da',

              component: () => import( './views/sys/classify/stay_class_da.vue')
            },
          ]
        },{
          path: '/apply_no_leave_da',
          name: 'apply_no_leave_da',

          component: () => import( './views/sys/apply_no_leave_da.vue')
        },{
          path: '/leaving_da',
          name: 'leaving_da',

          component: () => import( './views/sys/leaving_da.vue')
        },{
          path: '/leave_no_apply_da',
          name: 'leave_no_apply_da',

          component: () => import( './views/sys/leave_no_apply_da.vue')
        },{
          path: '/access_da',
          name: 'access_da',

          component: () => import( './views/sys/access_da.vue')
        },{
          path: '/leaveApply_da',
          name: 'leaveApply_da',

          component: () => import( './views/sys/leaveApply_da.vue')
        },{
          path: '/enterApply_da',
          name: 'enterApply_da',

          component: () => import( './views/sys/enterApply_da.vue')
        },{
          path: '/leaveTime_da',
          name: 'leaveTime_da',

          component: () => import( './views/sys/leaveTime_da.vue')
        },{
          path: '/enter_most_da',
          name: 'enter_most_da',

          component: () => import( './views/sys/enter_most_da.vue'),
          children: [
            {
              path: '/enter_most_department_da',
              name: 'enter_most_department_da',

              component: () => import( './views/sys/classify/enter_most_department_da.vue')
            },{
              path: '/enter_most_class_da',
              name: 'enter_most_class_da',

              component: () => import( './views/sys/classify/enter_most_class_da.vue')
            },
          ]
        },
        {
          path: '/average_leave_time_most_da',
          name: 'average_leave_time_most_da',

          component: () => import( './views/sys/average_leave_time_most_da.vue'),
          children: [
            {
              path: '/average_leave_time_most_department_da',
              name: 'average_leave_time_most_department_da',

              component: () => import( './views/sys/classify/average_leave_time_most_department_da.vue')
            },   {
              path: '/average_leave_time_most_class_da',
              name: 'average_leave_time_most_class_da',

              component: () => import( './views/sys/classify/average_leave_time_most_class_da.vue')
            },
          ]
        },

      ]
    },
  ]
})
