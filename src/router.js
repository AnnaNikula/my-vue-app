import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import AboutUs from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";

const routes = [
  { path: "/", component: Home, name: "Hem" },
  { path: "/register", component: RegistrationForm, name: "Register" },
  {
    path: "/register-student",
    component: RegistrationForm,
    name: "Registrera elev",
  },
  { path: "/about", component: AboutUs, name: "Om Oss" },
  { path: "/contact", component: Contact, name: "Kontakt" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
