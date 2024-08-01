import { createRouter, createWebHistory } from 'vue-router'
import { appRoutes } from "@/shared/lib/helpers/navigation/routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: appRoutes.HOME.path,
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: appRoutes.REGISTRATION.path,
      name: "registration",
      component: () => import("@/views/RegistrationPage.vue")
    }
  ]
})

export default router
