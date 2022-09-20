import React from 'react'
import { Container } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { CommentList } from './CommentList'

export function Comments ({ postId }) {
  const [comments, loading, error] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`)
  return (
    <Container>
      <h1 className='text-primary'>Comments</h1>
      <hr className='w-100 text-black-50 mt-3' />
      <CommentList comments={comments && comments} />
    </Container>
  )
}
