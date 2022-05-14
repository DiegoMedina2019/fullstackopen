import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { Alert } from './Components/Alert';
import { Filter } from './Components/Filter';
import { PersonForm  } from './Components/PersonForm ';
import { Persons } from './Components/Persons';

import './index.css';
import personService from './services/persons'

export const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ messageSucess, setMessageSucess ] = useState(null)
  const [ messageError, setMessageError ] = useState(null)

  /* CRUD */

  const getPersons = () => {
    personService
      .getAll()
      .then(response => {
        console.log(response);
        setPersons(response)
      })
  }

  const createPerson = p => {
    personService
      .create(p)
      .then(response => {
        setPersons(persons.concat( response ))
        setNewName('')
        setNumber('')
        
        setMessageSucess(`Added ${response.name}`)
        setTimeout(() => {
          setMessageSucess(null)
        }, 5000);

      })
      .catch( err => console.log(err))
  }

  const updatePerson = p => {
    const id = p.id
    personService
      .update(id,p)
      .then(response => {
       
        setPersons( persons.map( p => p.id !== id ? p: response) )
        setNewName('')
        setNumber('')
        setMessageSucess(`Edited ${response.name}`)
        setTimeout(() => {
          setMessageSucess(null)
        }, 5000);

      })
      .catch( err => {
        console.log(err)
        setMessageError(`Information of ${p.name} has already been removed from server`)
        setTimeout(() => {
          setMessageError(null)
        }, 5000);
      })
  }

  const deletePerson = id => {
      personService
        .remove(id)
        .then(response => {
          console.log("persopna eliminada",response);
          setPersons( persons.filter(p => p.id !== id) )

          setMessageSucess(`Person deleted`)
          setTimeout(() => {
            setMessageSucess(null)
          }, 5000);

        })
        .catch(err => {
          console.log(err);
          setMessageError(`The information has already been removed from the server before`)
          
          setTimeout(() => {
            setMessageError(null)
            getPersons()
          }, 5000);

        })
  }

  useEffect(getPersons, [])

  /* METHODS */
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

    const validPerson = persons.filter(p => p.name === newName);
    if (validPerson.length > 0) {
      if( window.confirm(`${newName} is already added to phonebook!, replace the old number with a new one?`) ){
        const person = validPerson[0]
        const editPerson = {...person , number: newNumber }
        updatePerson(editPerson)
      }
    } else {
      const person = {
        name:newName,
        number:newNumber
      }
      createPerson(person)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Alert 
            messageSucess={messageSucess}
            messageError={messageError}
      />
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
        deletePerson={deletePerson}
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

