import React, { useEffect, useState } from "react"
import Countrys from "../Countrys/Countrys";
import './Country.css'

const Country = () => {

    const [country, stateCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => stateCountry(data))
    }, [])
    
    
    return(

        <div>
            <h2>All Countrys : {country.length}</h2>
           <div className="country">
           {
                country.map(countryData => <Countrys countryState={countryData}></Countrys>)
            }
           </div>
        </div>
    )
}

export default Country