//start off w imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';

//function to get my api and catch errors, gonna export default so i dont forget

export default function starWarsAPIGet(){
    const [dataAPI, setDataAPI] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.com/api/people/')
            .then((response) => {
                const characterAbout = response.data.results
                setDataAPI(profiles)
            })
            .catch(error => {
                console.log('There was a problem gettin the data, yo : ', error)
            })
    },[])

    console.log(dataAPI);

    return (
        <div className = 'characterAboutDiv'>
                {dataAPI.map((item, index) => {
                    return(
                        <JediCard
                            name={item.name}
                            eye_color={item.eye_color}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

