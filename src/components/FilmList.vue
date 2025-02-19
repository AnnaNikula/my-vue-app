<template>
  <div class="container">
    <h2>Kommande Filmer</h2>

    <!-- Knapp för att hämta filmdata -->
    <div class="button-group">
      <button @click="fetchMovies">Hämta Film Lista</button>
    </div>

    <!-- Dropdown för filmer -->
    <div class="dropdown-container" v-if="movies.length">
      <label for="movie">Välj en film:</label>
      <select id="movie" v-model="selectedMovie">
        <option v-for="movie in movies" :key="movie.id" :value="movie">
          {{ movie.primaryTitle }}
        </option>
      </select>
    </div>

    <!-- Detaljer för vald film -->
    <div v-if="selectedMovie" class="movie-details">
      <div>
        <h3>{{ selectedMovie.primaryTitle }}</h3>
        <p><strong>År:</strong> {{ selectedMovie.startYear }}</p>
        <p>
          <strong>Kategori:</strong>
          {{
            selectedMovie.genres
              ? selectedMovie.genres.join(", ")
              : "Ingen genre"
          }}
        </p>
        <p>
          <strong>Skådespelare:</strong>
          {{
            selectedMovie.principalCredits
              ? selectedMovie.principalCredits.join(", ")
              : "Ingen information"
          }}
        </p>
      </div>

      <img :src="selectedMovie.primaryImage" alt="Finns ingen Movie Image" />
    </div>

    <!-- Filmlista i tabell -->
    <div v-if="movies.length" class="table-container">
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>År</th>
            <th>Kategori</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>{{ movie.primaryTitle }}</td>
            <td>{{ movie.startYear }}</td>
            <td>
              {{ movie.genres ? movie.genres.join(", ") : "Ingen genre" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { fetchMovieData } from "../fetchData";

export default {
  name: "FilmList",
  setup() {
    const movies = ref([]);
    const selectedMovie = ref(null);

    const fetchMovies = async () => {
      try {
        const movieData = await fetchMovieData();
        movies.value = movieData || [];
      } catch (error) {
        console.error("Fel vid hämtning av filmer:", error);
      }
    };

    return {
      movies,
      selectedMovie,
      fetchMovies,
    };
  },
};
</script>

<style scoped>
/* Allmän stil för container */
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Stil för knappar */
.button-group {
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

/* Stil för tabellen */
.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #f9f9f9;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #007bff;
  color: white;
}

/* Stil för dropdown */
.dropdown-container {
  margin-top: 20px;
}

label {
  font-size: 16px;
  margin-right: 10px;
}

select {
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Stil för filmuppgifter */
.movie-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  text-align: left;
  img {
    width: 300px;
    height: auto;
  }
}
</style>
