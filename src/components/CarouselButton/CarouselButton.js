import React from 'react';
import './CarouselButton.css'

export default function CarouselButton({ direction, updateDisplayStart }) {
    return (
        <div className='carousel-button-wrapper'>
            <button
                className={
                    `carousel-button 
                    ${direction === 'right' ? 'arrow-right ' : 'arrow-left '}
                    `}
                onClick={() => updateDisplayStart(direction)}>
            </button>
        </div>
    )
}