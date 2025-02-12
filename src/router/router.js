import { createRouter, createWebHistory } from "vue-router";

import RegisterVue from "../views/RegisterVue.vue";
import FetchVue from "../views/FetchVue.vue";

const routes = [
  { path: "/register", component: RegisterVue },
  { path: "/fetch", component: FetchVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
