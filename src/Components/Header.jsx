import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <Navbar className="bg-success  ">
        <Container>
          <Navbar.Brand  className='text-light '>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/232/232413.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Spotify
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header