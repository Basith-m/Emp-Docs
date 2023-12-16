import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import registerImg from '../Assets/Images/login-img2.png'

function Register() {
  return (
    <div style={{ height: '89vh', backgroundColor: 'lavender' }} className='d-flex flex-column align-items-center justify-content-center'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} className='fs-5 mb-3'><i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i>Back to home</Link>
      <div className='w-75 container'>
        <div className='card shadow p-5' style={{ backgroundColor: 'lavender' }}>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className="d-flex align-items-center flex-column">
                <h5 className='fw-bolder mt-2 mb-4 text-center'>
                  Sign Up to your Account
                </h5>
                <Form className='text-light w-75'>
                  <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Control type="text" placeholder="Enter Firm Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email ID" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Enter Password" />
                  </Form.Group>
                  <div>
                    <button style={{ textTransform: 'capitalize', fontSize: '1rem' }} className='btn btn-primary mb-2 w-100'>Register</button>
                    <p className='text-secondary'>Already have Account? Click here to <Link className='text-primary' to={'/login'}>Login</Link></p>
                  </div>
                </Form>
              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img style={{ width: '400px' }} src={registerImg} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register