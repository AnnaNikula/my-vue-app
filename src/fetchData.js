export function fetchMovieData = async () => {
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
