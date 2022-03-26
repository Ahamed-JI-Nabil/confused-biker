import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {

    const [bikes, setBikes] = useState([])

    useEffect(() => {
        fetch('bikes.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])

    return (
        <div className="cards">
            {
                bikes.map(bike => <Card key={bike.id} bike={bike}></Card>)
            }
        </div>
    );
};

export default Cards;