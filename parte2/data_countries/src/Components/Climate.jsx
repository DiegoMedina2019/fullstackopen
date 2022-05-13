import React from 'react'

export const Climate = ({data}) => {
  return (
    <div>
        <h2>{data.status} in {data.capital}</h2>
        <label><b>Temperature: </b>{data.temp} Celsius</label>
        <br />
        <img src={data.img} alt="logo" width={50} height={50} />
        <br />
        <label><b>wind: </b>{data.wind_speed} kilometers/hour Direction: {data.wind_dir}</label>
    </div>
  )
}
