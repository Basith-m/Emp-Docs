import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import bannerImg from '../Assets/Images/banner-img.png'
import { useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context/TokenAuth'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
  const handleClick =()=>{
    if(isAuthorized){
      navigate('/employees')
    }else{
      navigate('/login')
    }
  }
  return (
    <div className='body-container d-flex align-items-center justify-content-center'>
      <Row className='w-75'>
        <Col sm={12} md={6} className='text-container d-flex align-items-center'>
          <div style={{ marginBottom: '100px' }} className='p-2'>
            <h1 className='text-black mb-3'>Welcome to EmpDocs</h1>
            <h3 className='text-dark mb-3'>Your Hub for Streamlined Employee Management. Simplify HR tasks, enhance organization, and secure employee details effortlessly.</h3>
            <button style={{ fontSize: '1.2rem', fontWeight: '600', textTransform: 'capitalize', letterSpacing: '1px' }} className='btn btn-outline-primary p-2' onClick={handleClick}>
              Get Started
              <i class="fa-solid fa-arrow-right fa-beat-fade ms-3"></i>
            </button>
          </div>
        </Col>
        <Col sm={12} md={6} className='d-flex align-items-center'>
          <img width={'100%'} src={bannerImg} alt="Banner-img" />
        </Col>
      </Row>
    </div>
  )
}

export default Home