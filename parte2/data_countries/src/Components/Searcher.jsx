import React from 'react'

export const Searcher = ({filter,handledChangeFilter}) => {
  return (
    <div>
        Find countries: <input value={filter} onChange={handledChangeFilter} />
    </div>
  )
}
