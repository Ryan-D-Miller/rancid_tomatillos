const moviesUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

const getMovies = () => {
  return fetch(moviesUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res);
  });
};

const getSingleMovie = (id) => {
  return fetch(`${moviesUrl}/${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res);
  });
};

export { getMovies, getSingleMovie };
