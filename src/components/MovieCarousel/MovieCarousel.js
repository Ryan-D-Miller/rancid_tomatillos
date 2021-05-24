import './MovieCarousel.css'
import CarouselButton from '../CarouselButton/CarouselButton';
import { CSSTransitionGroup, CSSTransition } from 'react-transition-group';

export default function MovieCarousel({ displayMovies, updateDisplayStart, moveDirection, isButtonDisabled }) {
  const movies = displayMovies();
  const searchError = <p className='search-error'>Sorry, we couldn't find any movies matching that title.</p>
  if (movies) {
  return (
    <section className="carousel">
      <CarouselButton isButtonDisabled={isButtonDisabled} direction={"left"} updateDisplayStart={updateDisplayStart} />
      <CSSTransitionGroup transitionName={`slideIn-${moveDirection}`}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={1500}
        className='carousel card-carousel'>
          {movies} 
      </CSSTransitionGroup>
      <CarouselButton isButtonDisabled={isButtonDisabled} direction={"right"} updateDisplayStart={updateDisplayStart} />
    </section>
  )} else {
    return ( searchError )
  }
}