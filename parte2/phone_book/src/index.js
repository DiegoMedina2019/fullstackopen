import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { Filter } from './Components/Filter';
import { PersonForm  } from './Components/PersonForm ';
import { Persons } from './Components/Persons';
import  axios  from "axios";
import './index.css';


export const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const getPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log(response);
        setPersons(response.data)
      })
  }

  useEffect(getPersons, [])
  

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


document.addEventListener("DOMContentLoaded", (event) =>{
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

