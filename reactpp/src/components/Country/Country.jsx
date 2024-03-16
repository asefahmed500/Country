/* eslint-disable react/prop-types */
import './Country.css';
const Country = ({country}) => {
    // eslint-disable-next-line react/prop-types
    const {name ,flags , population , area} = country;
    return (
        <div className='country'>
           <h3>Name: {name?.common}</h3> 
           <img src={flags.png} alt="" />
           <p>Population : {population}</p>
           <p>Area : {area}</p>
        </div>
    );
};

export default Country;