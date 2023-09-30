import { useState } from 'react';
import './Countrys.css'
import Markcountry from '../Markcountry/Markcountry';

const Countrys = ({countryState,markhandel}) => {
    // console.log(countryState);
    const {name,flags,population,region,capital} = countryState;

    const [Visited, setvisited] = useState(false);

    const visit = () => {

        setvisited(!Visited);
    }
    
    return (
        <div className= {`countrys ${Visited ? 'visitede' : 'hello'}`}>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common} </h2>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <p>Capital: {capital}</p>
            <button onClick={visit}>{Visited ? "Visited" : "I want to visit"}</button>
            <button onClick={()=>markhandel(countryState)}>Add Country</button>
            
        </div>
    );
};



export default Countrys;