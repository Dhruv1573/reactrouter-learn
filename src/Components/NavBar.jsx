// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div>
    <ul className='navbar'>
        <li><NavLink className="nav-bar-link" to="/about">About</NavLink> </li>
        <li><NavLink className="nav-bar-link"  to="/">Home</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/user/Dhruv">Dhruv</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/user/Pramod">Pramod</NavLink></li>
    </ul>
    </div>
  )
}

export default NavBar

//with Link we cant use className, so for that we are using NavLink