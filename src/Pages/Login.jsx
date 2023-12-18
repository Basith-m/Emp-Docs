import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../Assets/Images/login-img3.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../Services/allAPI';
import { tokenAuthorisationContext } from '../Context/TokenAuth';

function Login() {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    email:"", password:""
  })
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)

  const handleLogin = async (e)=>{
    e.preventDefault()
    const {email, password} = user
    if(!email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      // api call
      const result = await loginAPI(user)
      if(result.status===200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setUser({
          email:"",
          password:""
        })
        setIsAuthorized(true)
        navigate('/employees')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }
  return (
    <div style={{ height: '89vh', backgroundColor: 'lavender' }} className='d-flex flex-column align-items-center justify-content-center'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'blue'}} className='fs-5 mb-3'><i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i>Back to home</Link>
      <div className='w-75 container'> 
        <div className='card shadow p-5' style={{backgroundColor:'lavender'}}>
          <div className='row align-items-center'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img width={'400px'} src={loginImg} className='img-fluid' alt='' />
            </div>
            <div className='col-lg-6'>
              <div className="d-flex align-items-center flex-column">
                <h5 className='fw-bolder mt-2 mb-4 text-center'>
                  Sign In to your Account
                </h5>
                <Form className='text-light w-75'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email ID" onChange={e=>setUser({...user,email:e.target.value})} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Enter Password" onChange={e=>setUser({...user,password:e.target.value})} />
                  </Form.Group>
                  <div>
                    <button style={{textTransform:'capitalize',fontSize:'1rem'}} className='btn btn-primary mb-2 w-100' onClick={handleLogin}>Login</button>
                    <p className='text-secondary'>New User? Click here to <Link className='text-primary' to={'/register'}>Register</Link></p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="dark"
      ></ToastContainer>
    </div>
  )
}

export default Login