import { createRouter, createWebHistory } from "vue-router";
import RegistrationForm from "../components/RegistrationForm.vue";
import HomeVue from "../components/HomeVue.vue"; // Se till att denna komponent finns

const routes = [
  {
    path: "/",
    redirect: "/home", // Omdirigera rotvägen till /register
  },
  {
    path: "/home",
    name: "Home",
    component: HomeVue,
  },

  {
    path: "/register",
    name: "RegistrationForm",
    component: RegistrationForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
