import { createRouter, createWebHistory } from "vue-router";
import RegisterVue from "./src/components/RegisterVue.vue";
import FetchVue from "./src/components/FetchVue.vue";

const routes = [
  { path: "/register", component: RegisterVue },
  { path: "/fetch", component: FetchVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
