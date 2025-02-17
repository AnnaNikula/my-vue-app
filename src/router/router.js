import { createRouter, createWebHistory } from "vue-router";
import RegisterVue from "../components/RegisterVue.vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import HomeVue from "../components/HomeVue.vue"; // Ensure this component exists

const routes = [
  {
    path: "/",
    redirect: "/register", // Redirect root path to /register
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
