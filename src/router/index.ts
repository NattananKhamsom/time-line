import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import { authService } from '../../auth/auth-service';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/era/prehistoric',
    component: () => import('@/views/PrehistoricPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/era/ancient',
    component: () => import('@/views/AncientPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/era/middle-ages',
    component: () => import('@/views/MiddleAgesPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/era/renaissance',
    component: () => import('@/views/RenaissancePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/era/industrial',
    component: () => import('@/views/IndustrialPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/era/information',
    component: () => import('@/views/InformationPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/leaderboard',
    component: () => import('@/views/LeaderboardPage.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const user = await authService.getCurrentUser();
  if (to.path === "/login" && user) {
    return "/tabs/tab1";
  }
  if (to.meta.requiresAuth && !user) {
    return "/login";
  }
  return true;
});

export default router
