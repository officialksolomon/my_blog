import React from 'react'
import { Nav, Navbar, NavDropdown, NavLink, Form, FormControl, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function NavBar () {
  return (
    <Navbar bg="ligth" expand="lg" className="container border-bottom px-4" >
      <Navbar.Brand href="#home"><Link to='/' className='nav-link'><h1 className='fw-bolder text-primary'>infoR</h1></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-end">
          <div className=''><Link to='/' className='nav-link'>Home</Link></div>
          <div className=''><Link to='/blog' className='nav-link'>Blog</Link></div>
          {/* <div className=''><Link to='/blog' className='nav-link'>About us</Link></div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
