import React from 'react';
import './Card.css'

const Card = (props) => {
    const {img, name, price} = props.bike
    const {addToPicker} = props
    // console.log(props)
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-info">
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <button onClick={() =>addToPicker(props.bike)}>Add to Picker</button>
            </div>
        </div>
    );
};

export default Card;