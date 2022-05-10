import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import { Filter } from './Components/Filter';
import { PersonForm  } from './Components/PersonForm ';
import { Persons } from './Components/Persons';
import './index.css';


export const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handledChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handledChangeName = (event) => {
    setNewName(event.target.value)
  }
  const handledChangeNumber = (event) => {
    setNumber(event.target.value)
  }
  const handledSubmit = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook!`)
    } else {
      const person = {
        name:newName,
        number:newNumber
      }
      setPersons(persons.concat( person ))
      setNewName('')
      setNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter}
        handledChangeFilter={handledChangeFilter}
      />
      <h3>Add a new</h3>
      <PersonForm  
        handledSubmit={handledSubmit}
        newName={newName}
        handledChangeName={handledChangeName}
        newNumber={newNumber}
        handledChangeNumber={handledChangeNumber}
      />

      <Persons 
        persons={persons}
        filter={filter}
      />
    </div>
  )
}


/* 
 VOY EN LA PARTE 2 DEBO REALIZAR EL EJERCICIO 2.10
*/

document.addEventListener("DOMContentLoaded", (event) =>{
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

