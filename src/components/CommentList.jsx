import React from 'react'
import { Row, Col } from 'react-bootstrap'
import dpImg from '../images/dp.png'

function CommentItem ({ comment }) {
  return (
    <Row className="bg-light shadow-sm m-2  py-3 rounded-3">
      <Col xs={2} className=''>
        <img src={dpImg} className='img-fluid img-thumbnail rounded-circle' alt="dp" />
      </Col>
      <Col xs={10} className=''>
        <p>{comment.body}</p>
      </Col>
    </Row>
  )
}

export function CommentList ({ comments }) {
  return (
    <>
      {comments && comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
    </>
  )
}
