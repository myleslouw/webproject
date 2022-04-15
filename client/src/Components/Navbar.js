import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import Walter from './walter.png'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftside">
        <img src={Walter} className="photo"></img>
      </div>
      <div className="rightside">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  )
}

export default Navbar