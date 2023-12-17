import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defaultProfile from '../Assets/Images/default-profile.png'
import { Link } from 'react-router-dom'

function ViewEmployee() {
  return (
    <div style={{ height: '89vh' }} className='d-flex flex-column align-items-center justify-content-center'>
      <Link to={'/employees'} style={{ textDecoration: 'none', color: 'blue' }} className='fs-5 mb-3'><i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i>All Employees</Link>
      <Row className='w-75 shadow p-4 rounded'>
        <Col sm={12} md={4} className='d-flex align-items-center p-3'>
          <img className='rounded-3' width={'300px'} src={defaultProfile} alt="Employee Profile" />
        </Col>
        <Col sm={12} md={8} className='d-flex flex-column justify-content-center p-3'>
          <h4>Name : <span className='text-warning'>Abdul Basith M</span></h4>
          <h4>Employee ID : <span className='text-warning'>A101</span></h4>
          <h4>Department/Position  : <span className='text-warning'>Superviser</span></h4>
          <h4>Date of Birth : <span className='text-warning'>08-09-2001</span></h4>
          <h4>Gender : <span className='text-warning'>Male</span></h4>
          <h4>Address : <span className='text-warning'>Mulayath House , Edarikkode P.O , Malappuram Kerala 676501</span></h4>
          <h4>Joined Date : <span className='text-warning'>06-07-2023</span></h4>
          <h4>Salary : <span className='text-warning'>12000</span></h4>
        </Col>
      </Row>
      <div className='mt-4'>
        <button style={{ fontSize: '1.2rem', width: '120px' }} className='btn btn-outline-success text-capitalize mx-2 py-2'>
          <i class="fa-solid fa-pen me-3"></i>
          Edit
        </button>
        <button style={{ fontSize: '1.2rem', width: '120px' }} className='btn btn-outline-danger text-capitalize mx-2 py-2'>
          <i class="fa-solid fa-trash me-3"></i>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ViewEmployee