/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    // eslint-disable-next-line react/prop-types
    const {name ,flags , population , area ,cca3} = country;

    const [visited , setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className='country'>
           <h3>Name: {name?.common}</h3> 
           <img src={flags.png} alt="" />
           <p>Population : {population}</p>
           <p>Area : {area}</p>
           <p><small>Code : {cca3}</small></p>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           {visited ? 'I  have viisted this country ' : 'I want to visit '}
        </div>
    );
};

export default Country;