<script>
  import CitiesList from "./components/RegisterVue.vue";
  import HelloWorld from "./components/FetchVue.vue";

  export default {
    components: {
      CitiesList,
      HelloWorld
   
<template>
  <header>
    <nav>
      <router-link to="/">Register</router-link>
      <router-link to="/about">Fetch</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
