import React from 'react'
import './Header.css'
import HeadBanner from '../../IMG/HeadBanner.jpg'

const Header = () => {
    
  return (
    <header className='header' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${HeadBanner})` }}>
      <h1>API Rest Rick & Morty</h1>
      <h2>Entregable</h2>
    </header>
  )
}

export default Header