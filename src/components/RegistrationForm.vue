<template>
  <div class="container">
    <h2>Registrera Användare</h2>
    <div class="form-container">
      <form @submit.prevent="validateForm">
        <!-- Användare uppgifter -->
        <div class="form-section">
          <h3>Fyll i formuläret</h3>
          <label for="namn">Namn:</label>
          <input v-model="user.Namn" id="namn" required />
          <label for="efternamn">Efternamn:</label>
          <input v-model="user.Efternamn" id="efternamn" required />
          <label for="email">E-post:</label>
          <input v-model="user.email" id="email" required />
          <label for="username">Användarnamn:</label>
          <input v-model="user.username" id="username" required />
          <label for="password">Skapa Lösenord:</label>
          <input
            type="password"
            v-model="user.password"
            id="password"
            required
          />
        </div>
      </form>
    </div>
    <div class="button-container">
      <button @click="registerUser" class="register-button">Registrera</button>
    </div>
    <h3>Registrerade användare</h3>
    <h4>Kontrollera gärna alla uppgifter</h4>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>Elev:</strong> {{ user.Namn }} {{ user.Efternamn }}<br />
        <strong>E-post:</strong> {{ user.email }}<br />
        <strong>Användarnamn:</strong> {{ user.username }}<br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      user: {
        Namn: "",
        Efternamn: "",
        email: "",
        username: "",
        password: "",
      },
      users: [],
    };
  },
  methods: {
    async registerUser() {
      if (
        this.user.Namn &&
        this.user.Efternamn &&
        this.user.email &&
        this.user.username &&
        this.user.password
      ) {
        const newUser = {
          ...this.user,
          id: this.users.length + 1,
        };
        this.users.push(newUser);
        this.user = {
          Namn: "",
          Efternamn: "",
          email: "",
          username: "",
          password: "",
        };
      }
    },
    validateForm() {
      if (this.isValid()) {
        this.submitForm();
      } else {
        this.showValidationErrors();
      }
    },
    isValid() {},
    showValidationErrors() {},
    submitForm() {},
  },
  mounted() {
    console.log("RegistrationForm component has been mounted.");
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.form-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f8f8f8;
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.student {
  border-left: 5px solid #4caf50;
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

.register-button {
  background: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #fff;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .form-container {
    flex-direction: column;
  }
  .form-section {
    width: 100%;
  }
}

/* Lägg till dina nya stilar här */
</style>
