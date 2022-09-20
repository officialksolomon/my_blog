import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export function FooterButton ({ icon, name }) {

  return (

    <div>
      <Button className='p-2 px-4 px-sm-2 d-flex flex-nowrap' size='sm' variant='outline-primary'>
        {icon}  <span className='footer-btn-name d-none d-sm-block' > {"\u00a0\u00a0"}{ name}</span>
      </Button>
    </div >

  )
}
