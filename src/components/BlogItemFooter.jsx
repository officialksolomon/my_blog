import React, { useState } from 'react'
import { useEffect } from "react"
import { Row, Col, Container, Fade } from 'react-bootstrap'
import { FaComments, FaRegThumbsUp, FaShare } from "react-icons/fa"
import { FooterButton } from './FooterButton'

export default function BlogListFooter ({ commentCount }) {

  const commentCountLabel = commentCount ? `${commentCount} ${commentCount > 1 ? " comments" : " comment"}` : ""
  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>

      <div className='w-100'>
        <div className='d-flex justify-content-end'>
          <span className='comment-label text-black-50'><li>{commentCountLabel}</li></span>
        </div>
        <hr className='text-dark w-100 m-2' />
      </div>

      <div className='d-flex justify-content-between align-items-center w-100'>
        <FooterButton name='Like' icon={<FaRegThumbsUp />} />
        <FooterButton name='Comment' icon={<FaComments />} />
        <FooterButton name='Share' icon={<FaShare />} />
      </div>
    </div>

  )
}

