import React from 'react';
import "./Card.scss"

const Card = (props) => {
    return (
        <div className='card_flat'>
            <div className={`card_data ${props.max_width}`}>
                {props.children}
            </div>
            <div className='corner_box'></div>
        </div>
    );
};

export default Card;