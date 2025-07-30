import React from 'react'
import Mynavbar from '../components/Mynavbar'
import { Link, Outlet } from 'react-router-dom'
import './Article.css'
import Footer from '../components/Footer'

export default function Article() {
  return (
    <div>
      <Mynavbar />
      <div className="link-container">
        <div className="kkk">
          <Link to="js" className="link">java-script</Link>
          <Link to="php" className="link">php</Link>
      
        </div>
        <Outlet />
      </div>
 
    </div>
  )
}