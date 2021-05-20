import './MovieCarousel.css'
import CarouselButton from '../CarouselButton/CarouselButton';

export default function MovieCarousel({displayMovies, updateDisplayStart, displaySearchError}) {
    
    return (
      <section className="carousel">
        <CarouselButton direction={"left"} updateDisplayStart={updateDisplayStart}/>
        {displayMovies()}
        {displaySearchError()}
        <CarouselButton direction={"right"} updateDisplayStart={updateDisplayStart}/>
      </section>
    )
}