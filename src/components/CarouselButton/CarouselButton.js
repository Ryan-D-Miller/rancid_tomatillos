import React from 'react';
import './CarouselButton.css';


export default function CarouselButton({ direction, updateDisplayStart, isButtonDisabled }) {
    console.log(isButtonDisabled);
    return (
        <div className='carousel-button-wrapper'>
            <button
                disabled={isButtonDisabled}
                className={
                    `carousel-button 
                    ${direction === 'right' ? 'arrow-right ' : 'arrow-left '}
                    `}
                onClick={() => updateDisplayStart(direction)} >
            </button>
        </div>
    )
}

