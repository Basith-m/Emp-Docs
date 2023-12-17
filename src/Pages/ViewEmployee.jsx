import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defaultProfile from '../Assets/Images/default-profile.png'
import { Link } from 'react-router-dom'

function ViewEmployee() {
  const cellStyle = {
    border: 'none',
    padding: '10px',
  };
  return (
    <div style={{marginTop:'50px'}} className='d-flex flex-column align-items-center justify-content-center'>
      <Link to={'/employees'} style={{ textDecoration: 'none', color: 'blue' }} className='fs-5 mb-3'><i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i>All Employees</Link>
      <Row className='w-75 shadow p-4 rounded'>
        <Col sm={12} md={4} className='d-flex align-items-center p-3'>
          <img className='rounded-3' width={'300px'} src={defaultProfile} alt="Employee Profile" />
        </Col>
        <Col sm={12} md={8} className='d-flex flex-column justify-content-center p-3'>
          <table className='table'>
            <tbody>
              <tr>
                <th className='text-muted' style={cellStyle}>Name:</th>
                <td className='text-warning' style={cellStyle}>Abdul Basith M</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Employee ID:</th>
                <td className='text-warning' style={cellStyle}>A101</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Department/Position:</th>
                <td className='text-warning' style={cellStyle}>Supervisor</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Date of Birth:</th>
                <td className='text-warning' style={cellStyle}>08-09-2001</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Gender:</th>
                <td className='text-warning' style={cellStyle}>Male</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Address:</th>
                <td className='text-warning' style={cellStyle}>Mulayath House, Edarikkode P.O, Malappuram Kerala 676501</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Joined Date:</th>
                <td className='text-warning' style={cellStyle}>06-07-2023</td>
              </tr>
              <tr>
                <th className='text-muted' style={cellStyle}>Salary:</th>
                <td className='text-warning' style={cellStyle}>$12,000</td>
              </tr>
            </tbody>
          </table>
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