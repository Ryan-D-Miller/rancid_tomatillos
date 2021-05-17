import './MovieCarousel.css'
import CarouselButton from '../CarouselButton/CarouselButton';

export default function MovieCarousel({displayMovies, updateDisplayStart, movieSelect}) {
    
    return (
      <section className="carousel">
        <CarouselButton direction={"left"} updateDisplayStart={updateDisplayStart}/>
        {displayMovies()}
        <CarouselButton direction={"right"} updateDisplayStart={updateDisplayStart}/>
      </section>
    )
}