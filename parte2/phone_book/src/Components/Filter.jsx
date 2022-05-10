import React from 'react'

export const Filter = ({filter,handledChangeFilter}) => {
  return (
    <div>
        Filter shown with: <input value={filter} onChange={handledChangeFilter} />
    </div>
  )
}
