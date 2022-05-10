import React from 'react'

export const PersonForm  = (props) => {
  return (
    <form onSubmit={props.handledSubmit}>
        <div>
            name: <input value={props.newName} onChange={props.handledChangeName} />
        </div>
        <div>
            number: <input value={props.newNumber} onChange={props.handledChangeNumber} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
  )
}
