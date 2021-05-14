import React from 'react';
import './CarouselButton.css'

export default function CarouselButton({ direction, updateDisplayStart}) {
    return (
        <div className="carousel_button">
            {direction === "right" && <button onClick={() => updateDisplayStart(direction)}>➡️</button>}
            {direction === "left" && <button onClick={() => updateDisplayStart(direction)}>⬅️</button>}
        </div>
    )
}