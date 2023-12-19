import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddEmp from '../Components/AddEmp'
import { Col, Row } from 'react-bootstrap'
import { allEmployeeAPI } from '../Services/allAPI'
import { addEmployeeResponseContext } from '../Context/ContextShare'

function Employees() {
  const navigate = useNavigate()
  const [existingUser, setExistingUser] = useState({})
  const [allEmployee, setAllEmployee] = useState([])
  // state for storing search key
  const [searchKey, setSearchKey] = useState("")

  const { addEmpolyeeResponse, setAddEmployeeResponse } = useContext(addEmployeeResponseContext)

  const getAllEmployee = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      // api call
      const result = await allEmployeeAPI(searchKey, reqHeader)
      if (result.status === 200) {
        setAllEmployee(result.data)
      } else {
        console.log(result);
      }
    }
  }

  const viewEmployeeDetails = (id) => {
    // Navigate to the ViewEmployee with employeeID as url parameter
    navigate(`/viewEmployee/${id}`)
  }

  // export
  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "Employee ID,Employee Name,Department/Position\n"
      + allEmployee.map(employee =>
          `${employee.employeeID},${employee.name},${employee.position}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employee_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setExistingUser(JSON.parse(sessionStorage.getItem("existingUser")));
      // console.log(existingUser);
    }
    getAllEmployee()
  }, [addEmpolyeeResponse,searchKey])

  return (
    <div style={{ marginTop: '30px' }} className='container w-100'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} className='fs-5'><i className="fa-solid fa-arrow-left fa-beat-fade me-3"></i>Back to home</Link>
      <div style={{ height: "140px", background: "url('https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='rounded mt-3 shadow d-flex flex-column justify-content-center px-5'>
        <span className='text-light mb-3'>Firm Name :</span>
        <h1 className='text-white'>{existingUser.firm}</h1>
      </div>
      <Row className='py-3 my-3 align-items-center justify-content-between'>
        <Col md={12} lg={3}>
          <h2>Employees List</h2>
        </Col>
        <Col md={12} lg={5}>
          <div className='d-flex align-items-center justify-content-center p-3'>
            <input
              value={searchKey}
              onChange={e => setSearchKey(e.target.value)}
              className='form-control'
              type="text"
              placeholder="Search Employee"
            />
            <i style={{ marginLeft: '-30px' }} className="fa-solid fa-magnifying-glass"></i>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className='d-flex justify-content-evenly'>
            <AddEmp />
            <button className='btn btn-outline-primary text-capitalize fs-5 p-2 ms-2' onClick={exportToCSV}>
              <i className="fa-solid fa-file-export me-3"></i>
              Export
            </button>
          </div>
        </Col>
      </Row>
      {
        allEmployee?.length > 0 ?
          <table className='table table-hover table-responsive mt-4 shadow border' style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Department/Position</th>
                <th>All Details</th>
              </tr>
            </thead>
            <tbody>
              {
                allEmployee.map((employee, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{employee.employeeID}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>
                      <button style={{ fontSize: '1rem' }} className='btn btn-outline-info text-capitalize' onClick={() => viewEmployeeDetails(employee.employeeID)}>View Details</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <h3 className='text-center fw-bold text-danger'>No Employees</h3>
      }
    </div>
  )
}

export default Employees