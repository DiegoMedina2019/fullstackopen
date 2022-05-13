import React from 'react'

export const Country = ({country,showCountry}) => {
  return (
    <>
        <br/>
        <label>
            {country.name.common}
        </label>

        <button onClick={showCountry} id={country.name.common}>SHOW</button>
    </>
  )
}
