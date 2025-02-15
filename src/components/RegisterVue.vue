<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>

<style>
p {
  font-weight: bold;
}
</style>
<template>
  <div>
    <h2>Registrera användare</h2>
    <form @submit.prevent="registerUser">
      <label for="name">Namn:</label>
      <input v-model="user.name" id="name" required />

      <label for="email">E-post:</label>
      <input v-model="user.email" id="email" required />

      <button type="submit">Registrera</button>
    </form>

    <h3>Registrerade användare</h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RegisterVue",
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      users: [],
    };
  },
  methods: {
    async registerUser() {
      if (this.user.name && this.user.email) {
        const newUser = { ...this.user, id: this.users.length + 1 };
        this.users.push(newUser);
        this.user.name = "";
        this.user.email = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
input {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  background: blue;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
}
</style>
