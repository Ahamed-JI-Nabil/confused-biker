import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Picker from '../Picker/Picker';
import './Cards.css'

const Cards = () => {

    const [bikes, setBikes] = useState([])
    const [addedBikes, setAddedBikes] = useState([])
    const [randomBike, setRandomBike] = useState([])
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    // console.log(addedBikes)

    const addToPicker = (bikes) => {

        // const reset = bikes.filter(bike => bike.id===bikes.id)
        // setAddedBikes(reset)
        const newAddedBikes = [...addedBikes, bikes]
        setAddedBikes(newAddedBikes)

    }
    // console.log(bikes);
    const pickRandom = addedBikes => {
        const random = Math.floor(Math.random() * addedBikes.length);
        const selectedRandom = addedBikes[random]
        const reset = bikes.filter(bike => bike.id=== selectedRandom.id)
        setAddedBikes(reset)
        // console.log(selectedRandom);
        
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
                <button onClick={() => pickRandom(addedBikes)}>Pick 1 For Me</button>
            </div>

        </div>
    );
};

export default Cards;