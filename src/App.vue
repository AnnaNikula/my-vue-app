<template>
  <header>
    <nav>
      <router-link to="/register">Register</router-link>
      <router-link to="/fetch">Fetch Data</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script>
import RegisterVue from "./views/RegisterVue.vue";
import FetchVue from "./views/FetchVue.vue";

export default {
  name: "App",
  components: {
    RegisterVue,
    FetchVue,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
