import './Countrys.css'

const Countrys = ({countryState}) => {
    console.log(countryState);
    const {name,flags,population,region,capital} = countryState;



    return (
        <div className='countrys'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common} </h2>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default Countrys;