<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
