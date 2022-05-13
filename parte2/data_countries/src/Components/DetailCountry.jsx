import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Climate } from './Climate';

export const DetailCountry = ({data}) => {
  const api_key = process.env.REACT_APP_API_KEY
  const name = data.capital[0]

  const [climate, setClimate] = useState({})

  const getClimate = () =>{
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`
    axios
      .get(url)
      .then( response => {
        const clim = {
          temp:response.data.current.temperature,
          capital:response.data.location.name,
          status:response.data.current.weather_descriptions[0],
          img:response.data.current.weather_icons[0],
          wind_speed:response.data.current.wind_speed,
          wind_dir:response.data.current.wind_dir,
        }
        console.log( response.data);
        setClimate(clim)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect( getClimate, climate)
  

  return (
    <div>
        <h1>{data.name.common}</h1>
        <p>{data.name.official}</p>
        <p>population: {data.population}</p>

        <h4>Languages</h4>
        <ul>
          {
            Object.values( data.languages ).map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <div>
          <img src={data.flags.svg} alt="bandera" width={500} heigh={500}/>
        </div>

        {
          (Object.keys(climate).length === 0 )?"":<Climate data={climate}/>
        }
    </div>
  )
}
