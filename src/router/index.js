import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// import bak from './bak.js'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']   
    
    
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index/index'),
        name: 'index',
        meta: { title: '首页', icon: 'documentation', affix: true }
      }
    ]
  },
  // {
  //   path: '/gameinfo',
  //   component: Layout,
  //   redirect: '/gameinfo',
  //   children: [
  //     {
  //       path: 'gameinfo',
  //       component: () => import('@/views/gameinfo/index'),
  //       name: 'gameinfo',
  //       meta: { title: '比赛信息', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/resultcheck',
    component: Layout,
    redirect: '/resultcheck',
    children: [
      {
        path: 'resultcheck',
        component: () => import('@/views/resultcheck/index'),
        name: 'resultcheck',
        meta: { title: '成绩查询', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/userinfo',
    component: Layout,
    redirect: '/userinfo',
    children: [
      {
        path: 'userinfo',
        component: () => import('@/views/userinfo/index'),
        name: 'userinfo',
        meta: { title: '用户个人信息编辑', icon: 'documentation', affix: true }
      }
    ]
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
  
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   // path: '/userinfo',
  //   // component: Layout,
  //   // redirect: '/userinfo/index',
  //   // alwaysShow: true,
  //   // name: 'userinfo',
  //   // meta: {
  //   //     title: '用户个人信息编辑',
  //   //     icon: 'lock',
  //   //     roles: ['admin', 'editor','leader','player'] // you can set roles in root nav
  //   //   },
  //   // path: '/userinfo',
  //   // component: Layout,
  //   // redirect: '/userinfo/index',
  //   // alwaysShow: true, // will always show the root menu
  //   // name: 'userinfo',
  //   // meta: {
  //   //   title: '用户个人信息编辑',
  //   //   icon: 'lock',
  //   //   roles: ['admin', 'editor','leader','player'] // you can set roles in root nav
  //   // },
  //   // children: [
  //   //   {
  //   //     path: 'index',
  //   //     component: () => import('@/views/userinfo/index'),
  //   //     name: 'userinfo',
  //   //     meta: {
  //   //       title: '用户个人信息编辑',
  //   //       roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
  //   //     }
  //   //   },
  //   //   // {
  //   //   //   path: 'upload',
  //   //   //   component: () => import('@/views/userinfo/upload'),
  //   //   //   name: 'upload',
  //   //   //   meta: {
  //   //   //     title: '一寸照上传',
  //   //   //     roles: ['admin', 'editor','leader','player']
  //   //   //     // if do not set roles, means: this page does not require permission
  //   //   //   }
  //   //   // }
  //   // ]
  // },
  {
    path: '/team',
    component: Layout,
    redirect: '/team/index',
    alwaysShow: true, // will always show the root menu
    name: 'team',
    meta: {
      title: '我的队伍',
      icon: 'lock',
      roles: ['admin', 'editor','leader','player'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/team/index'),
        name: 'team',
        meta: {
          title: '我的队伍',
          roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'create',
        component: () => import('@/views/team/create'),
        name: 'team',
        meta: {
          title: '创建队伍',
          roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'info',
        component: () => import('@/views/team/info'),
        name: 'team',
        hidden:true,
        props: true,
        meta: {
          title: '队伍详情',
          roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'entourage',
        component: () => import('@/views/team/entourage'),
        name: 'team',
        hidden:true,
        props: true,
        meta: {
          title: '随行人员',
          roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/competition',
    component: Layout,
    redirect: '/competition/index',
    alwaysShow: true, // will always show the root menu
    name: 'competition',
    meta: {
      title: '比赛信息',
      icon: 'lock',
      roles: ['admin', 'editor','leader','player'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/competition/index'),
        name: 'team',
        meta: {
          title: '所有比赛',
          roles: ['admin', 'editor','leader','player'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'create',
        component: () => import('@/views/competition/create'),
        name: 'team',
        meta: {
          title: '创建比赛',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  
  // ...bak,
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
