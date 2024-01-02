import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteEmployeeAPI, getAEmployeeAPI } from '../Services/allAPI';
import { SERVER_URL } from '../Services/serverUrl';
import EditEmp from '../Components/EditEmp';
import { editEmployeeResponseContext, employeeDetailsContext } from '../Context/ContextShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewEmployee() {

  const navigate = useNavigate()
  const { editEmployeeResponse, setEditEmployeeResponse } = useContext(editEmployeeResponseContext)
  const { employeeDetails, setEmployeeDetails } = useContext(employeeDetailsContext)

  const cellStyle = {
    border: 'none',
    padding: '10px',
  };

  // get employeeID from url
  const { id } = useParams()
  // console.log(id);
                                                                                                                                     
  // function for api call to get a employee details
  const getEmployeeDetails = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-type": "application/json", "Authorization": `Bearer ${token}`
      }
      // api call
      const result = await getAEmployeeAPI(id, reqHeader)
      if (result.status === 200) {
        // setEmployeeDetails(result.data)
        setEmployeeDetails(result.data)
      } else {
        console.log(result);
      }
    }
  }
  // console.log(employeeDetails);

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    // api call
    const result = await deleteEmployeeAPI(id,reqHeader)
    if(result.status===200){
      navigate('/employees')
    }else{
      toast.error(result.response.data)
    }
  }

  useEffect(() => {
    getEmployeeDetails()
  }, [editEmployeeResponse])

  return (
    <div style={{ marginTop: '50px' }} className='d-flex flex-column align-items-center justify-content-center'>
      <Link to={'/employees'} style={{ textDecoration: 'none', color: 'blue' }} className='fs-5 mb-3'><i className="fa-solid fa-arrow-left fa-beat-fade me-3"></i>All Employees</Link>
      <Row className='w-75 shadow p-4 rounded'>
        <Col sm={12} md={4} className='d-flex align-items-center p-3'>
          <img className='rounded-3' width={'300px'} src={`${SERVER_URL}/uploads/${employeeDetails.empImage}`} alt="Employee Profile" />
        </Col>
        <Col sm={12} md={8} className='d-flex flex-column justify-content-center p-3'>
          <table className='table'>
            <tbody>
              <tr>
                <th className='text-muted' style={cellStyle}>Name :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.name}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Employee ID :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.employeeID}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Department/Position :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.position}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Date of Birth :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.DOB}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Gender :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.gender}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Address :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.address}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Joined Date :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.joinDate}</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Salary :</th>
                <td className='text-warning' style={cellStyle}>{employeeDetails.salary}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <div className='mt-4 d-flex'>
        <EditEmp />
        <button style={{ fontSize: '1.2rem', width: '120px' }} className='btn btn-outline-danger text-capitalize mx-2 py-2' onClick={() => handleDelete(employeeDetails._id)}>
          <i className="fa-solid fa-trash me-3"></i>
          Delete
        </button>
      </div>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="dark"
      ></ToastContainer>
    </div>
  )
}

export default ViewEmployee