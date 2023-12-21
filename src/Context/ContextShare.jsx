import React, { createContext, useState } from 'react'

export const addEmployeeResponseContext = createContext()
export const editEmployeeResponseContext = createContext()

function ContextShare({ children }) {
  const [addEmpolyeeResponse, setAddEmployeeResponse] = useState({})
  const [editEmployeeResponse, setEditEmployeeResponse] = useState({})
  return (
    <>
      <addEmployeeResponseContext.Provider value={{ addEmpolyeeResponse, setAddEmployeeResponse }}>
        <editEmployeeResponseContext.Provider value={{ editEmployeeResponse, setEditEmployeeResponse }}>
          {children}
        </editEmployeeResponseContext.Provider>
      </addEmployeeResponseContext.Provider>
    </>
  )
}

export default ContextShare