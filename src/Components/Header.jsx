import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context/TokenAuth'

function Header() {
    const navigate = useNavigate()
    
    const { isAuthorized, setIsAuthorized } = useContext(tokenAuthorisationContext)

    const handleLogout = () => {
        // remove all existing user details
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuthorized(false)
        // navigate to landing page
        navigate('/')
    }
    return (
        <Navbar style={{ backgroundColor: 'lavender' }} data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontSize: '2rem', fontWeight: '600' }} >
                        <i class="fa-solid fa-user-tie me-3"></i>EmpDocs
                    </Link>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    {
                        isAuthorized ?
                            <button className='btn'>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontSize: '1.4rem', fontWeight: '600' }} onClick={handleLogout}>Logout</Link>
                            </button>
                            :
                            <button className='btn'>
                                <Link style={{ textDecoration: 'none', color: 'blue', fontSize: '1.4rem', fontWeight: '600' }} to={'/login'}>Login</Link>
                            </button>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header