import React, { useEffect, useState } from "react"
import Countrys from "../Countrys/Countrys";
import './Country.css'
import Listcountry from "../Listcontry/Listcountry";

const Country = () => {


    const [country, stateCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => stateCountry(data))
    }, [])
    
    const [visited, setvisited] = useState([]);

    const markhandel = (countryState) =>{

        const newcountry = [...visited, countryState];
        setvisited(newcountry);
        
    }
    
    return(

        <div className="country_container">
            <h2>All Countrys : {country.length}</h2>
            <div>
                <h2>Total Addd Country: {visited.length} </h2>
                <h2>List OF Countreys : </h2>
                <u>
                    {
                        visited.map(addvisit => <Listcountry addvisit={addvisit}></Listcountry>)
                    }
                </u>
            </div>
           <div className="country">
           {
                country.map(countryData => <Countrys countryState={countryData} markhandel={markhandel}></Countrys>)
            }

           </div>
        
        </div>
    )
}

export default Country