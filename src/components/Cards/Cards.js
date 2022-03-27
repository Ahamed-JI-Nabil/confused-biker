import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Picker from '../Picker/Picker';
import './Cards.css'

const Cards = () => {

    const [bikes, setBikes] = useState([])
    const [addedBikes, setAddedBikes] = useState([])

    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])



    const addToPicker = (bikes) => {
        const newAddedBikes = [...addedBikes, bikes]
        setAddedBikes(newAddedBikes)

    }
    // console.log(bikes);
    const pickRandom = addedBikes => {
        const random = Math.floor(Math.random() * addedBikes.length);
        const selectedRandom = addedBikes[random]
        console.log(selectedRandom);
    }
    // console.log(addedBikes);

    return (
        <div className="cards">
            <div className="cards-container">
                {
                    bikes.map(bike => <Card
                        key={bike.id}
                        bike={bike}
                        addToPicker={addToPicker}
                    ></Card>)

                }
            </div>
            <div className="picker-container">
                <h2>Bike You Have Picked</h2>
                {
                    addedBikes.map(addedBike => <Picker
                        key={addedBike.id}
                        addedBike={addedBike}
                    ></Picker>)
                }
                <button onClick={() =>pickRandom(addedBikes)}>Pick 1 For Me</button>
            </div>
        </div>
    );
};

export default Cards;