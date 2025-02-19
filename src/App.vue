<template>
  <div id="app">
    <Navbar />
    <h1>Film Bibliotek</h1>

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import HomeVue from "./components/HomeVue.vue";
import FilmList from "./components/FilmList.vue";
import RegistrationForm from "./components/RegistrationForm.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    HomeVue,
    FilmList,
    RegistrationForm,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
