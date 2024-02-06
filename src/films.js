const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => {
    return movie.director;
  });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
let result = movies.filter(movie => movie.director === director);
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   const moviesByDirector = array.filter(movie => movie.director === director);

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
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
