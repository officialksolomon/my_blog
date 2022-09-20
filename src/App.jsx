import React from 'react'
import { Button, Row, Container, Col } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom"
import NavBar from './components/NavBar'
import Blog from './pages/Blog'
import Home from './pages/Home'



export default function App () {
  return (
    <Container fluid className="h-100 p-0 m-0">
      <NavBar />
      {/* <Blog /> */}
      <Outlet />
    </Container>
  )
}
