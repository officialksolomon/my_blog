import React from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import images from '../assets/images/images'

export function OtherPosts ({ currentPostId }) {
  const [otherPosts, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const navigate = useNavigate()
  // 
  const list = []
  if (otherPosts) {
    otherPosts.forEach((post, index) => {
     
      if (index < 6 && post.id !== Number(currentPostId)) {
        list.push(
          <>
            <Col xs={12} className='border-bottom border-right pb-3 clickable'
              onClick={() => navigate(`/blog-detail/${post.id}/`)} key={post.id}>
              <div className='bg-light shadow-sm p-3'>
                <img className='w-100 pb-2  rounded-3' height={200} src={`/src/assets/images/${images[index]}`} alt="post image" />
                <h6 className='text-truncate'>{post.title}</h6>
                <hr className='m-0 p-0' />
              </div>
            </Col>
          </>
        )
      }
    }
    )
  }

  return (
    <div>
      {loading && "A moment please..."}
      {error && error}
      {otherPosts && list}
    </div>
  )
}
