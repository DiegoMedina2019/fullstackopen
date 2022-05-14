import React from 'react'

export const Person = ({person,deletePerson}) => {

  const deletePer  = () => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      deletePerson(person.id)
    }
  }

  return (
    <>
      <p>{ `${person.name} ${person.number}` }</p>
      <button onClick={ deletePer } >Delete</button>
    </>
  )
}
