import React from 'react'
import './navbar.css'
import logo_light from '../../assets/brightness.png'
import logo_dark from '../../assets/moon.png'
import animelogo from '../../assets/windbreaker1.png'

const navbar = ({theme, setTheme}) => {
    
  return (
    <div className='Navbar'>
      <img src={animelogo} alt="" className='logo'/>
      
    </div>
  )
}

export default navbar