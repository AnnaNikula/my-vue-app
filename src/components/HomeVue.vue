<template>
  <div class="container">
    <h1>Welcome to the Home Page</h1>
    <h2>Registrera användare</h2>
    <div class="form-container">
      <!-- Elev uppgifter -->
      <div class="form-section student">
        <h3>Elevuppgifter</h3>
        <label for="namn">Namn:</label>
        <input v-model="user.Namn" id="namn" required />
        <label for="efternamn">Efternamn:</label>
        <input v-model="user.Efternamn" id="efternamn" required />
        <label for="classNumber">Klassnummer:</label>
        <input v-model="user.classNumber" id="classNumber" required />
        <label for="email">E-post:</label>
        <input v-model="user.email" id="email" required />
        <label for="phoneNumber">Telefonnummer:</label>
        <input v-model="user.phoneNumber" id="phoneNumber" required />
        <label for="username">Användarnamn:</label>
        <input v-model="user.username" id="username" required />
        <label for="password">Skapa Lösenord:</label>
        <input type="password" v-model="user.password" id="password" required />
      </div>
      <!-- Föräldrar uppgifter -->
      <div class="form-section parent">
        <h3>Förälders Kontaktuppgifter</h3>
        <label for="parentNamn">Namn:</label>
        <input v-model="parent.Namn" id="parentNamn" required />
        <label for="parentEfternamn">Efternamn:</label>
        <input v-model="parent.Efternamn" id="parentEfternamn" required />
        <label for="parentPhoneNumber">Telefonnummer:</label>
        <input v-model="parent.phoneNumber" id="parentPhoneNumber" required />
        <label for="parentEmail">E-post:</label>
        <input v-model="parent.email" id="parentEmail" required />
        <div class="checkbox-container">
          <label>
            <input type="checkbox" v-model="parent.receiveSms" />
            Vill ha information via SMS
          </label>
          <label>
            <input type="checkbox" v-model="parent.receiveEmail" />
            Vill ha information via E-post
          </label>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button @click="registerUser" class="register-button">Registrera</button>
    </div>
    <h3>Registrerade användare</h3>
    <h4>Kontrollera gärna alla uppgifter</h4>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>Elev:</strong> {{ user.Namn }} {{ user.Efternamn }} - Klass
        {{ user.classNumber }}<br />
        <strong>E-post:</strong> {{ user.email }}<br />
        <strong>Telefonnummer:</strong> {{ user.phoneNumber }}<br />
        <strong>Förälder:</strong> {{ user.parent.Namn }}
        {{ user.parent.Efternamn }}<br />
        <strong>Förälders Telefonnummer:</strong> {{ user.parent.phoneNumber
        }}<br />
        <strong>Förälders E-post:</strong> {{ user.parent.email }}<br />
        <strong>Vill ha information via SMS:</strong>
        {{ user.parent.receiveSms ? "Ja" : "Nej" }}<br />
        <strong>Vill ha information via E-post:</strong>
        {{ user.parent.receiveEmail ? "Ja" : "Nej" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  data() {
    return {
      user: {
        Namn: "",
        Efternamn: "",
        email: "",
        classNumber: "",
        phoneNumber: "",
        username: "",
        password: "",
      },
      parent: {
        Namn: "",
        Efternamn: "",
        phoneNumber: "",
        email: "",
        receiveSms: false,
        receiveEmail: false,
      },
      users: [],
    };
  },
  methods: {
    registerUser() {
      if (
        this.user.Namn &&
        this.user.Efternamn &&
        this.user.email &&
        this.user.classNumber &&
        this.user.phoneNumber &&
        this.user.username &&
        this.user.password &&
        this.parent.Namn &&
        this.parent.Efternamn &&
        this.parent.phoneNumber &&
        this.parent.email
      ) {
        const newUser = {
          ...this.user,
          parent: this.parent,
          id: this.users.length + 1,
        };
        this.users.push(newUser);
        this.user = {
          Namn: "",
          Efternamn: "",
          email: "",
          classNumber: "",
          phoneNumber: "",
          username: "",
          password: "",
        };
        this.parent = {
          Namn: "",
          Efternamn: "",
          phoneNumber: "",
          email: "",
          receiveSms: false,
          receiveEmail: false,
        };
      }
    },
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
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f8f8f8;
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 48%;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.student {
  border-left: 5px solid #4caf50;
}

.parent {
  border-left: 5px solid #2196f3;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox-container {
  margin-top: 10px;
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
</style>