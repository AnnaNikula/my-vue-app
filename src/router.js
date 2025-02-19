import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import AboutUs from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";
import Login from "./components/Login.vue";
import Film from "./components/Film.vue"; // Import the Film component

const routes = [
  { path: "/", component: Home, name: "Hem" },
  { path: "/register", component: RegistrationForm, name: "Register" },
  { path: "/about", component: AboutUs, name: "Om Oss" },
  { path: "/contact", component: Contact, name: "Kontakt" },
  { path: "/login", component: Login, name: "Logga in" },
  { path: "/film", component: Film, name: "Film" }, // Add the Film route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
