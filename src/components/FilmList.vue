<template>
  <div class="container">
    <h2>Kommande Filmer</h2>

    <!-- Knapp för att hämta filmdata -->
    <div class="button-group">
      <button @click="fetchMovieData">Hämta Filmer</button>
      <button @click="showMovieDetails">Visa Filmdetaljer</button>
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
            <td>{{ movie.title }}</td>
            <td>{{ movie.startYear }}</td>
            <td>{{ movie.genre ? movie.genre.join(", ") : "Ingen genre" }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Dropdown för filmer -->
    <div class="dropdown-container" v-if="movies.length">
      <label for="movie">Välj en film:</label>
      <select id="movie">
        <option v-for="movie in movies" :key="movie.id" :value="movie.title">
          {{ movie.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FilmList",
  setup() {
    const movies = ref([]);
    const movieTitles = ref([]);

    const apiUrl =
      "https://imdb236.p.rapidapi.com/imdb/upcoming-releases?countryCode=US&type=MOVIE";
    const apiOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e41e92eea2msh4760625016ded93p1dacd4jsn335fa0f8f30c",
        "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
    const fetchMovieData = async () => {
      try {
        const response = await fetch(apiUrl, apiOptions);
        const movieData = await response.json();

        const length = 2; //depth of data
        let counter = 0;

        for(var k in movieData){
          //console.log(movieData[k].titles);//this is array
          console.log(counter)
          if(counter>=length)break;

          movieData[k].titles.forEach(element => {
            
            console.log(element);
          });
          counter++;
        }

        //movies.value = movieData.titles || [];
        //movieTitles.value = movies.value.map((movie) => movie.title);//FIX THIS
        //console.log(movieData);
      } catch (error) {
        console.error("Fel vid hämtning av filmer:", error);
      }
     
    };

    const showMovieDetails = () => {
      console.log("Filmuppgifter visas:", movies.value);
    };

    return {
      movies,
      fetchMovieData,
      showMovieDetails,
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
</style>
