import { createRouter, createWebHistory } from 'vue-router'
import { appRoutes } from "@/shared/lib/helpers/navigation/routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: appRoutes.HOME.path,
      name: appRoutes.HOME.name,
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: appRoutes.REGISTRATION.path,
      name: appRoutes.REGISTRATION.name,
      component: () => import("@/views/RegistrationPage.vue")
    },
    {
      path: appRoutes.MAIN_LAYOUT.path,
      name: appRoutes.MAIN_LAYOUT.name,
      component: () => import("@/views/MainLayout.vue"),
      children: [
        {
          path: appRoutes.COURSES.path,
          name: appRoutes.COURSES.name,
          component: () => import("@/views/CoursesPage.vue")
        },
        {
          path: appRoutes.STATISTICS.path,
          name: appRoutes.STATISTICS.name,
          component: () => import("@/views/StatisticsPage.vue")
        },
        {
          path: appRoutes.CALENDAR.path,
          name: appRoutes.CALENDAR.name,
          component: () => import("@/views/CalendarPage.vue"),
        },
      ],
    },
  ]
})

export default router
