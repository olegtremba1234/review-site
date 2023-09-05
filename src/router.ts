import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  {
    path: "/login",
    component: LoginPage,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/register",
    component: SignUpPage,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
    meta: { hideHeader: true, hideFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
