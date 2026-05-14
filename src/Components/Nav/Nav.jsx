import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/characters'><li>CHARACTERS</li></Link>
            <Link to='/about'><li>ABOUT</li></Link>
        </ul>
    </nav>
  )
}

export default Nav