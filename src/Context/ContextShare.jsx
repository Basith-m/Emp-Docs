import React, { createContext, useState } from 'react'

export const addEmployeeResponseContext = createContext()
export const editEmployeeResponseContext = createContext()
export const employeeDetailsContext = createContext()
export const paymentRespopnseContext = createContext()

function ContextShare({ children }) {

  const [employeeDetails, setEmployeeDetails] = useState({})
  const [addEmpolyeeResponse, setAddEmployeeResponse] = useState({})
  const [editEmployeeResponse, setEditEmployeeResponse] = useState({})
  const [isPyamentSuccess, setIsPayamentSuccess] = useState(false)

  return (
    <>
      <paymentRespopnseContext.Provider value={{ isPyamentSuccess, setIsPayamentSuccess }}>
        <addEmployeeResponseContext.Provider value={{ addEmpolyeeResponse, setAddEmployeeResponse }}>
          <employeeDetailsContext.Provider value={{ employeeDetails, setEmployeeDetails }}>
            <editEmployeeResponseContext.Provider value={{ editEmployeeResponse, setEditEmployeeResponse }}>
              {children}
            </editEmployeeResponseContext.Provider>
          </employeeDetailsContext.Provider>
        </addEmployeeResponseContext.Provider>
      </paymentRespopnseContext.Provider>
    </>
  )
}

export default ContextShare