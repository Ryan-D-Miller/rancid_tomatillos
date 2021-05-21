import './MovieCarousel.css';
import CarouselButton from '../CarouselButton/CarouselButton';

export default function MovieCarousel({ displayMovies, updateDisplayStart }) {
  const movies = displayMovies();
  const searchError = (
    <p className='search-error'>
      Sorry, we couldn't find any movies matching that title.
    </p>
  );
  if (movies) {
    return (
      <section className='carousel'>
        <CarouselButton
          direction={'left'}
          updateDisplayStart={updateDisplayStart}
        />
        {movies}
        <CarouselButton
          direction={'right'}
          updateDisplayStart={updateDisplayStart}
        />
      </section>
    );
  } else {
    return searchError;
  }
}
