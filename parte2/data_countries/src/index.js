import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { Searcher } from './Components/Searcher';
import axios from "axios";
import './index.css';
import { DetailCountry } from './Components/DetailCountry';
import { Country } from './Components/Country';




export const App = (props) => {

  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState([])


  const handledChangeFilter = (event) => {
    setFilter(event.target.value)
  }
  const showCountry = (event) => {
    //event.preventDefault()
    setFilter(event.target.id)
  }


  const getCountries = () => {
    const url = filter === '' ?
                `https://restcountries.com/v3.1/all`
                : `https://restcountries.com/v3.1/name/${filter}`

    axios
      .get(url)
      .then( response => {
        console.log(response);
          setCountries(response.data)
          
      })
      .catch( err => {
        console.log(err);
        setCountries([])
      })
  }

  useEffect(getCountries, [filter])
  return (
    <div>
      <Searcher 
        filter={filter}
        handledChangeFilter={handledChangeFilter}
      />


      {
      
        (countries.length > 10) ?

        <p>Too many matches, specify another filter</p>

        : (countries.length === 1) ?
        <DetailCountry data={countries[0]} /> 
        :

          countries.map(country => {
            return <Country key={country.name.common} 
                            country={country} 
                            showCountry={showCountry}
                    />
          })

      }



    </div>
  )
}


document.addEventListener('DOMContentLoaded', (event) => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})


