import React from 'react'
import { useState, useEffect } from "react";


export default function Op () {
  const [first, setFirst] = useState(0)
  useEffect(
    () => {
      
        setFirst((previousValue) => previousValue + 1)
      
    }
  ,[])
  return (
    <div>{first}</div>
  )
}
