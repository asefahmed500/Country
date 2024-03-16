import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCOuntries] = useState([])
    const [visitedFlag , setVisitedFlag] = useState([])


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCOuntry = country => {
        console.log('add this to ypur visited country ')
        // console.log(country)
        // visitedCountries.push(country)
        const newVisitedCountries = [... visitedCountries , country ]
        setVisitedCOuntries(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
        // console.log('flag adding ')
        const newVsitedFlag = [... visitedFlag , flag]
        setVisitedFlag(newVsitedFlag)
    }



    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>VISITED COUNTRIES : {visitedCountries.length}</h5>
                <ul>
                     {
                        visitedCountries.map(country =><li key={country.cca3} >{country.name.common}</li> )
                     }
                </ul>
            </div>


            <div className="flag-container ">
                {
                    visitedFlag.map((flag , idx) =>  <img key={idx} src = {flag}></img> )
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            handleVisitedCOuntry = {handleVisitedCOuntry}
                            handleVisitedFlags = {handleVisitedFlags}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;