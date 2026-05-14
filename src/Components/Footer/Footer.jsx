import React from 'react'
import './Footer.css'
import FootBanner from '../../IMG/FootBanner.jpg'

const Footer = () => {
    
  return (
    <footer className='footer' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${FootBanner})` }}>
      <p>Ingenieria de Sistemas</p>
      <p>Juan Carlos Aroca Valenzuela</p>
      <p>2026</p>
    </footer>
  )
}

export default Footer