import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.bike.img} alt="" />
        </div>
    );
};

export default Card;