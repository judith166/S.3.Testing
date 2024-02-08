const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  //Filtro para seleccionar los directores
  let result =  movies.map(movie => {
    return movie.director;
  });

  //Devuelve el resultado
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  //Filtro de las películas para obtener solo aquellas dirigidas por el director escogido
let result = movies.filter(movie => movie.director === director);

 //Devuelve el resultado
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
   const moviesByDirector = movies.filter(movie => movie.director === director);

   // Verificar si hay películas del director
   if (moviesByDirector.length === 0) {
     return 0; // Si no hay películas, retornar un promedio de 0
   }
 
   // Calcular la suma de las puntuaciones de las películas del director
   const sumScores = moviesByDirector.reduce((total, movie) => total + movie.score, 0);
 
   // Calcular el promedio de las puntuaciones
   const averageScore = sumScores / moviesByDirector.length;
 
   return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
 // Utilizar el método sort para ordenar las películas por título
 const sortedMovies = movies.slice().sort((a, b) => {
  // Comparar los títulos de las películas de forma insensible a mayúsculas y minúsculas
  return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });
});

return sortedMovies.slice(0,20).map(movie => movie.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
   // Utilizar el método sort para ordenar las películas por año y título
   const sortedYear = movies.slice().sort((a, b) => {
    // Comparar los años de las películas
    if (a.year !== b.year) {
      return a.year - b.year; // Ordenar por año si son diferentes
    } else {
      // Si los años son iguales, ordenar alfabéticamente por título
      return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });
    }
  });

  return sortedYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  //Para filtrar las películas que pertenecen a la categoría especificada
  const filterMovies = movies.filter(movie => movie.genre.includes(category));

  //Verificar si hay películas en la categoría especificada
  if (filterMovies.length === 0) {
    return 0; //Devolver 0 si no hay películas en la categoría
  }

  //Calcular la suma de las puntuaciones de las películas en la categoría 
  const totalScore = filterMovies.reduce((sum, movie) => sum + movie.score, 0);

  //calcular el promedio dividiendo la suma de las puntuaciones entre el número de películas
  const averageScore = totalScore / filterMovies.length;
  const roundedAverage = Math.round(averageScore * 100)/ 100; //Para redondear a dos decimales

  return roundedAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  //Crear una copia del array de películas para evitar modificar el original
  const updateMovies = movies.map(movie => {
    //Separar la duración en horas y minutos
    const [hours, minutes] = movie.duration.split('h ');

    //Convertir las horas y minutos a minutos y sumarlos
    const totalMinutes = parseInt(hours || 0) * 60 + parseInt(minutes || 0);

    //Crear un nuevo objeto de película con la duración actualizada
    return {...movie, duration: totalMinutes};
  });

  return updateMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year, movies) {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
