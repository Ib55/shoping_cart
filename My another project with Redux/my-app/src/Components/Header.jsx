import React from 'react'
import { Nav, Navbar, Container, } from 'react-bootstrap'
import Icons from '../Assets'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar className='bg-emerald-60 jus' expand="lg">
                <Container>
                    <Link to='/' className='mt-4'>
                    <Navbar.Brand >
                        <img src={Icons.logo} alt="" className='w-40 h-20' />
                    </Navbar.Brand>
                    </Link>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto font-bold">
                            <Link to='/' className='atag'>
                                <Nav className='mx-2'>Home</Nav>
                            </Link>
                            <Nav className='mx-2'>Link</Nav>

                        </Nav>
                        <Link to='/cart'>
                            <Nav className='mx-2 w-10 h-10'><img src={Icons.ShopCart} /></Nav>
                        </Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header