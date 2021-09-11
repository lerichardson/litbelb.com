import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/medium",
    name: "Medium",
    component: () => import("@/views/medium.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/My-Projects.vue"),
  },
  {
    path: "/Privacy",
    name: "privacy",
    component: () => import("@/views/Privacy.vue"),
  },
  {
    path: "/yt/covid-videoId734198",
    name: "covid-videoId734198",
    component: () => import("@/views/yt/covid-videoId734198.vue"),
  },
  {
    path: "/yt/COVID",
    name: "COVID",
    component: () => import("@/views/yt/COVID.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
