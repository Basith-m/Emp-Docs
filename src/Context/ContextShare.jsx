import React, { createContext, useState } from 'react'

export const addEmployeeResponseContext = createContext()
export const editEmployeeResponseContext = createContext()
export const employeeDetailsContext = createContext()

function ContextShare({ children }) {

  const [employeeDetails, setEmployeeDetails] = useState({})
  const [addEmpolyeeResponse, setAddEmployeeResponse] = useState({})
  const [editEmployeeResponse, setEditEmployeeResponse] = useState({})

  return (
    <>
      <addEmployeeResponseContext.Provider value={{ addEmpolyeeResponse, setAddEmployeeResponse }}>
        <employeeDetailsContext.Provider value={{ employeeDetails, setEmployeeDetails }}>
          <editEmployeeResponseContext.Provider value={{ editEmployeeResponse, setEditEmployeeResponse }}>
            {children}
          </editEmployeeResponseContext.Provider>
        </employeeDetailsContext.Provider>
      </addEmployeeResponseContext.Provider>
    </>
  )
}

export default ContextShare