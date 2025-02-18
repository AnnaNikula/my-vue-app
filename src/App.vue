<template>
  <div id="app">
    <Navbar />
    <h1>Register</h1>
    <router-link to="/register">registrera användare</router-link>
    <router-view></router-view>
    <RegistrationForm />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import RegistrationForm from "./components/RegistrationForm.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Footer,
    RegistrationForm,
  },
  mounted() {
    console.log("App component has been mounted.");
  },
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
