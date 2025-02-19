<template>
  <header class="header">
    <div class="logo">
      <h1>FilmWebb</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/film">Film</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

.logo h1 {
  margin: 0;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
