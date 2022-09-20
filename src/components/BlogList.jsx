import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './BlogList.css'
import BlogListFooter from './BlogListFooter'

export default function BlogList ({ post, img }) {
  const [comments, loading, error] = useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  const navigate = useNavigate()
  return (
    <Col xs={12} sm={6} md={6} lg={4} className='clickable border-bottom border-right pb-3 animate__animated animate__fadeIn' onClick={() => navigate(`/blog-detail/${post.id}/`)}>
      <div className='bg-light shadow-sm p-3'>
        <img className='w-100 pb-2  rounded-3' height={200} src={`/src/images/${img}`} alt="post image" />
        <h4 className='text-truncate'>{post.title}</h4>
        <hr className='m-0 p-0' />
        <p className='text-black-50 text-justify'>{`${post.body.substring(1, 100)} ...`}</p>
        <BlogListFooter commentCount={comments && comments.length} />
      </div>
    </ Col>
  )
}
