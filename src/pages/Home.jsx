import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md"
import './Home.css'
import bookImg from '../images/book.jpg'



export default function Home () {
  const navigate = useNavigate()
  return (
    <Container fluid className="home-container px-5 h-75 m-0  animate__animated animate__fadeInLeftBig">
      <Container>
        <Row className="h-100 py-5 p-lg-5">
          <Col xs={12} md={8} className="p-lg-5">
            <h1 className='text-primary mb-1 p-0 fs-3'>Satisfy your</h1>
            <h1 className='h1-curiosity text-white m-0 p-0 d-inline-block fw-bolder bg-primary  p-2 px-3' >
              CURIOSITY...
              {/* <span className='curiosity fw-bolder bg-primary  p-2 px-3 border border-danger'>CURIOSITY...</span> */}
            </h1>
            <p className="mt-2">Read high quality news and articles for your satisfaction...</p>
            <Button onClick={() => navigate('blog')}>
              Get Started <MdNavigateNext />
            </Button>
          </Col>
          <Col xs={12} md={4} className="h-100">
            {/* <img className='img-fluid' src="/src/assets/images/br.png" alt="image" /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
