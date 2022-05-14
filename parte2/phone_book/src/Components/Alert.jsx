import React from 'react'

export const Alert = ({messageSucess,messageError}) => {
    let classAlert = ''
    let mjs = ''
    if (messageSucess !== null) {
        classAlert = 'sucessAlert'
        mjs = messageSucess
    }
    if (messageError !== null) {
        classAlert = 'dangerAlert'
        mjs = messageError
    }
  return (
    <div className={classAlert}>
        {mjs}
    </div>
  )
}
