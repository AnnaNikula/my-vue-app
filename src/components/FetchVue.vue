<script>
export default {
  created() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((cities) => {
        this.cities = cities;
      });
  },
  data() {
    return {
      cities: null,
    };
  },
};
</script>

<template>
  <ol>
    <li v-for="city in cities">{{ city.name }}</li>
  </ol>
</template>
<template>
  <div>
    <h2>Hämta Data</h2>
    <button @click="fetchData">Hämta Användare</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FetchVue",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = await response.json();
      } catch (error) {
        console.error("Fel vid hämtning:", error);
      }
    },
  },
};
</script>

<style scoped>
button {
  background: green;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
