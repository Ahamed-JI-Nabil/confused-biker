import React from 'react';
import './Picker.css'

const Picker = (props) => {

    const { img, name } = props.addedBike

    // console.log(props)
    return (
        <div className="picker">

            <div className="picker-cart">
                <img src={img} alt="" />
                <p>Name: {name}</p>
            </div>
        </div>
    );
};

export default Picker;