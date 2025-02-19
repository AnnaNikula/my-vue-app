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

export const fetchMovieData = async () => {
  try {
    const response = await fetch(apiUrl, apiOptions);
    const movieData = await response.json();

    // Flatten the movie data to an array of movies
    const movies = [];
    for (const key in movieData) {
      if (movieData[key].titles) {
        movies.push(...movieData[key].titles);
      }
    }

    return movies;
  } catch (error) {
    console.error("Fel vid hämtning av filmer:", error);
    throw error;
  }
};
