import { createRouter, createWebHistory } from "vue-router";
import RegisterVue from "../components/RegisterVue.vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import HomeVue from "../components/HomeVue.vue"; // Se till att denna komponent finns

const routes = [
  {
    path: "/",
    redirect: "/register", // Omdirigera rotvägen till /register
  },
  {
    path: "/home",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterVue,
  },
  {
    path: "/registration-form",
    name: "RegistrationForm",
    component: RegistrationForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
