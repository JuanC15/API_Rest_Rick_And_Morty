import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <Link to='/'><li>INICIO</li></Link>
            <Link to='/characters'><li>TODOS LOS PERSONAJES</li></Link>
            <Link to='/filtrado'><li>FILTRAR POR ESPECIE</li></Link>
        </ul>
    </nav>
  )
}

export default Nav