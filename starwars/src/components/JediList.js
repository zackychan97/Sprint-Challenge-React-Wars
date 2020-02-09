//start off w imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import JediCard from './JediCard.js'

//function to get my api and catch errors, gonna export default so i dont forget
export default function SwapiFetch() {
    const [swapiData, setSwapiData] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {

                const profiles = response.data.results
                setSwapiData(profiles)
            })
            .catch(error => {
                console.log('There was an error getting the data from the API : ', error)
            }) 
    }, [])

    console.log(swapiData)


//return this data I am mapping over
    
    return ( 
        <div className="jediCase">
            {swapiData
                .map((item, index)=> {
                    return (
                        <JediCard 
                            name={item.name} 
                            gender={item.gender}
                            eye_color={item.eye_color}
                            home_world={item.hair_color}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}