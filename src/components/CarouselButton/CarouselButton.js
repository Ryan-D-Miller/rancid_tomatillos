import React from 'react';
import './CarouselButton.css'

export default function CarouselButton({ direction, updateDisplayStart}) {
    return (
        <div className="carousel_button">
            {direction === "right" && <a className="arrow right" onClick={() => updateDisplayStart(direction)}></a>}
            {direction === "left" && <a className="arrow left" onClick={() => updateDisplayStart(direction)}></a>}
        </div>
    )
}