import React from 'react'
import { Person } from './Person'

export const Persons = ({persons,filter,deletePerson}) => {
  return (
    <div>
        <h3>Numbers</h3>
        {
            persons.map( (person,index) => {
            let name1 = person.name.toLowerCase()
            let name2 = filter.toLowerCase()
        
            if (name1.includes(name2)){
                return <Person 
                            key={person.name} 
                            person={person}
                            deletePerson={deletePerson}
                        /> 
            }
            return <p key={index}></p>
            })
        }
    </div>
  )
}
