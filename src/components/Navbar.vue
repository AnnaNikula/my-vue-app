<template>
  <nav>
    <ul>
      <li><router-link to="/">Hem</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/film">Film</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

li {
  display: inline;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

a:hover {
  background-color: #555;
}
</style>
