import React, { createContext, useState } from 'react'

export const addEmployeeResponseContext = createContext()

function ContextShare({ children }) {
    const [addEmpolyeeResponse,setAddEmployeeResponse] = useState({})
  return (
    <>
        <addEmployeeResponseContext.Provider value={{addEmpolyeeResponse,setAddEmployeeResponse}}>
            {children}
        </addEmployeeResponseContext.Provider>
    </>
  )
}

export default ContextShare