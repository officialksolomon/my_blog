import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Blog from './Blog'
import { OtherPosts } from './OtherPosts'
import images from '../assets/images/images'
import { Comments } from '../components/Comments'


export default function BlogDetail () {
  const { postId } = useParams()
  const [post, loading, error] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  return (
    <Container className=''>
      <Row className=''>
        <Col xs={12} lg={8} className=" p-3 animate__animated animate__fadeIn vh-100 overflow-scroll">
          <h1 className=''>{post && post.title}</h1>
          <span className='text-black-50 d-block'>Published at 19 September, 2022.</span>
          <img src={`/public/images/${images[postId - 1]}`} alt="post image" height={400} className="w-100 mt-3" />
          <p className='mt-4'>{post && post.body}</p>
          <hr className='text-black-50 w-100' />
          <Comments postId={postId} />
        </Col>
        <Col xs={12} lg={1} className='p-3'></Col>
        <Col xs={12} lg={3} className=' mh-100 border-left p-3 '>
          <h6 className='text-primary'>Other Posts</h6>
          <hr className='w-100 text-black-50' />
          <Row className="vh-100 overflow-scroll ">
            <OtherPosts currentPostId={postId} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
