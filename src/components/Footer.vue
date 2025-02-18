<template>
  <footer class="footer">
    <div class="contact-info">
      <p>&copy; 2023 FilmWebb. Alla rättigheter förbehållna.</p>
      <p>Email: info@filmwebb.com</p>
      <p>Telefon: 012-345 6789</p>
    </div>
    <div class="social-media">
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    console.log("Footer-komponenten har monterats.");
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

.contact-info p {
  margin: 5px 0;
}

.social-media a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

.social-media a:hover {
  text-decoration: underline;
}
</style>
