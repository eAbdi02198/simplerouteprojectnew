import React from 'react'
import shart from './SHart'
import { Navigate } from 'react-router-dom'
export default function Privet({children}) {
  return (
    <div>
      {shart()?children:<Navigate to="/"></Navigate>}
    </div>
  )
}
