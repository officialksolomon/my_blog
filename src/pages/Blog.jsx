import { Button, Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react"
import React from 'react'
import BlogList from '../components/BlogItem'
import useFetch from '../hooks/useFetch'
import { FaSadTear, FaSmile } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import images from '../images/images'



export default function Blog () {
  const [posts, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  let blogList
  if (posts) {
    blogList = posts.map((post, index) => {
      return <BlogList img ={images[index]} post={post} key={post.id} />
    })

  }
  return (
    <Container className='py-4 h-75 d-flex justify-content-center align-items-center animate__animated animate__fadeInRightBig'>
      <Row className='g-3 gx-5 h-100'>
        {loading &&
          <Col xs={12} className="d-flex flex-column justify-content-center align-items-center h-100">
            <IconContext.Provider value={{ className: "text-primary" }}>
              <div>
                <FaSmile size={70} />
              </div>
            </IconContext.Provider>
            <h4 className="mt-4 text-primary">"A moment please...."</h4>
          </Col>
        }
        {error &&
          <Col xs={12} className="d-flex flex-column justify-content-center align-items-center h-100">
            <IconContext.Provider value={{ className: "text-danger" }}>
              <div>
                <FaSadTear size={70} />
              </div>
            </IconContext.Provider>
            <h4 className='mt-3 text-danger'>{error}</h4>
          </Col>
        }
        {blogList}
      </Row>
    </Container>
  )
}
