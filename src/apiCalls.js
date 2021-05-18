const moviesUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

const getMovies = () => {
  return fetch(moviesUrl)
    .then(response => response.json())
}

const getSingleMovie = async (id) => {
  return await fetch(`${moviesUrl}/${id}`)
    .then(response => response.json())
}

export {
  getMovies,
  getSingleMovie
}