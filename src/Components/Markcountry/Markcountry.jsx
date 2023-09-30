import { useState } from "react";


const Markcountry = ({markhandel,countryState}) => {
    
    console.log(countryState);

    return (
        <div>
            <button className='mark'  onClick={markhandel} >Mark</button>
        </div>
    );
};

export default Markcountry;