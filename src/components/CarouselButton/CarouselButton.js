import React from 'react';
import './CarouselButton.css'

export default function CarouselButton({ direction, updateDisplayStart }) {
    return (
        <button
            className={
                `carousel_button 
                ${direction === 'right' ? 'arrow-right ' : 'arrow-left '}
                `}
            onClick={() => updateDisplayStart(direction)}>
        </button>
    )
}