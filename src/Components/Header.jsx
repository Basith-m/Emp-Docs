import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar style={{backgroundColor:'lavender'}} data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontSize:'2rem', fontWeight:'600' }} >
                        <i class="fa-solid fa-user-tie me-3"></i>EmpDocs
                    </Link>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <button className='btn'>
                        <Link style={{ textDecoration: 'none',color:'blue',fontSize:'1.4rem', fontWeight:'600' }} to={'/login'}>Login</Link>
                    </button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header