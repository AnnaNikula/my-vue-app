<template>
  <div class="container">
    <h1>Logga in</h1>
    <div class="login-container">
      <div class="form-section">
        <label for="username">Användarnamn:</label>
        <input v-model="username" id="username" required />
        <label for="password">Lösenord:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div class="button-container">
        <button @click="loginUser" class="login-button">Logga in</button>
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    loginUser() {
      const user = this.$root.$users.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );
      if (user) {
        this.$router.push("/film");
      } else {
        this.errorMessage = "Fel användarnamn eller lösenord";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
}

.form-section {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}

.login-button {
  background: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
