import React from 'react'
import { Link } from 'react-router-dom'

function Employees() {
  return (
    <div style={{ minHeight: '87vh' }} className='container w-100 pt-3'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'blue'}} className='fs-5'><i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i>Back to home</Link>
      <div style={{ height: "140px", background: "url('https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='rounded mt-3 shadow d-flex flex-column justify-content-center px-5'>
        <span className='text-light mb-3'>Firm Name :</span>
        <h1 className='text-white'>Firm Name</h1>
      </div>
      <div className='d-flex flex-wrap align-items-center justify-content-evenly mt-5'>
        <div className='d-flex flex-wrap align-items-center justify-content-between'>
          <h2>Employees List</h2>
          <div style={{width:'600px'}} className='d-flex align-items-center justify-content-center'>
            <input
              className='form-control'
              type="text"
              class="form-control w-50 ms-2"
              placeholder="Search Employee"
            />
            <i style={{ marginLeft: '-30px' }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className='d-flex'>
          <button className='btn btn-outline-danger text-capitalize fs-5 mx-2'>
            <i class="fa-solid fa-user-plus me-3"></i>
            Add Employee
          </button>
          <button className='btn btn-outline-primary text-capitalize fs-5 ms-2'>
            <i class="fa-solid fa-file-export me-3"></i>
            Export
          </button>
        </div>
      </div>
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
          <tr>
            <td>1</td>
            <td>A101</td>
            <td>Abdul Basith</td>
            <td>Superviser</td>
            <td>
              <button style={{ fontSize: '1rem' }} className='btn btn-outline-info text-capitalize'>View Details</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>A102</td>
            <td>Akhil</td>
            <td>Manager</td>
            <td>
              <button style={{ fontSize: '1rem' }} className='btn btn-outline-info text-capitalize'>View Details</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>A103</td>
            <td>Rishal</td>
            <td>Floor Manger</td>
            <td>
              <button style={{ fontSize: '1rem' }} className='btn btn-outline-info text-capitalize'>View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Employees